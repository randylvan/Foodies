const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER':
      return action.user
    case 'ADD_CAT_TO_USER':
      let categories;
      if (state.enabledCategories.includes(action.title)) {
        categories = state.enabledCategories.filter(cat => cat !== action.title)
      } else {
        categories = [...state.enabledCategories, action.title]
      }
      return {...state, enabledCategories: categories};
    case 'GET_CATS_FOR_USER':
      state.enabledCategories = [...state.enabledCategories, action.title];
      return state;
    case 'ADD_FAVORITE':
      return {...state, favorites: action.favorites};
    case 'UPDATE_USER':
      //console.log(action);
      //console.log(state);
      return state = action.user;
    default:
      return state;
  }
}

export default user;
