import { setFlash } from './flash';

// get all categories
export const getCategories = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/categories',
      type: 'GET'
    }).done( categories => {
      // console.log(categories);
        dispatch({ type: 'CATEGORIES', categories})
    });
  }
}

export const toggleEnableCat = (id) => {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_ENABLE_CAT', id})
  }
}

export const setUserCategory = () => {
  return (dispatch) => {
    $.ajax({
      url:'/api/users',
      type: 'PUT'
    }).done( category => {
    dispatch({type: 'ADD_CAT_TO_USER', category})
    });
  }
}