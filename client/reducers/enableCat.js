const enableCat = ( state = [], action ) => {
  switch (action.type) {
    case 'ENABLE-CATEGORY':
      return action.enablecat;
    default:
      return state;
  }
}

export default enableCat;
