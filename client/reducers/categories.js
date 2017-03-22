const categories = ( state = [], action ) => {
  switch (action.type) {
    case 'CATEGORIES':
      return action.categories;
    // case 'ENABLE_CATEGORIES':
    //   return state.filter( cat => )

    default:
      return state;
  }
}

export default categories;