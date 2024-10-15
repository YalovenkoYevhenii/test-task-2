import { useState, useEffect } from 'react';
import { BASE_API_URL } from '../constants/pathConstants'
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: BASE_API_URL,
});

const useRequest = () => {
  const [requestData, setRequestData] = useState(null);
  const [requestError, setRequestError] = useState(null);
  const [options, setOptions] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setRequestError(null);
        setRequestData(null);
        const { data } = await axiosAPI({ ...options, signal: abortController.signal});
        setRequestData(data)
      } catch (err) {
        setRequestError(err.message)
      } finally {
        setLoading(false);
      }
    };

    if (options) fetchData();

    return () => {
      abortController.abort();
    };
  }, [options]);

  return {
    requestData, requestError, setOptions, loading
  };
};

export default useRequest;