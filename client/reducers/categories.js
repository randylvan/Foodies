const categories = ( state = [], action ) => {
  switch (action.type) {
    case 'CATEGORIES':
      return action.categories;
    default:
      return state;
  }
}

export default categories;