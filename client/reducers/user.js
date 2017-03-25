const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER':
      return action.user
    case 'ADD_CAT_TO_USER':
      state.enabledCategories = [...state.enabledCategories, action.title];
      return state;
    case 'GET_CATS_FOR_USER':
      state.enabledCategories = [...state.enabledCategories, action.title];
      return state;
    default:
      return state;
  }
}

export default user;
