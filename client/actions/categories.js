import { setFlash } from './flash';

// get all categories
export const getCategories = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/categories',
      type: 'GET'
    }).done( categories => {
      console.log(categories);
        dispatch({ type: 'CATEGORIES', categories})
    });
  }
}

export const toggleEnableCat = (id) => {
  // use category title to update enabled state and add to userCat data collection
  console.log("Action ID: " + id)
  return (dispatch) => {
    dispatch({type: 'TOGGLE_ENABLE_CAT', id})
  }
}



// get enabled categories
// enable category
// disable category