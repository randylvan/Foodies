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

// // Rick: do I need a seperate function here?
// export const setUserCategory = (title) => {
//   return (dispatch) => {
//     dispatch({type: 'ADD_CAT_TO_USER', title})
//   }
// }

export const setUserCategory = (id, title) => {
  return (dispatch) => {
    $.ajax({
      url:'/api/auth/addUserCat',
      type: 'PUT',
      data: { id, title }
    }).done( title => {
    dispatch({type: 'ADD_CAT_TO_USER', title})
    });
  }
}

export const getCurUserCats = (id, title) => {
  return (dispatch) => {
    $.ajax({
      url:'/api/auth/getCurrUserCats',
      type: 'GET'
    }).done( cats => {
    dispatch({type: 'GET_CATS_FOR_USER', cats})
    });
  }
}
