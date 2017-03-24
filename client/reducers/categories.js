const categories = ( state = [], action ) => {
  switch (action.type) {
    case 'CATEGORIES':
      return action.categories;
    case 'TOGGLE_ENABLE_CAT':
      return state.map( cat => {
        if (action.id === cat._id) {
          return {...cat, enabled: !cat.enabled}
        } else {
          return cat
        }
      })
    case 'ADD_CAT_TO_USER':
      return state;
    default:
      return state;
  }
}

export default categories;