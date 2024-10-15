const addIds = (arrWithData) => {
  let counter = 1;
  return arrWithData.map(dataItem => ({ ...dataItem, id: counter++}));
}

export default addIds;