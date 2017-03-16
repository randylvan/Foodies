import { setFlash } from './flash';

// get all categories
export const getCategories = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/categories',
      type: 'GET'
    }).done( categories => {
      dispatch({ type: 'CATEGORIES', categories })
    });
  }
}

// get enabled categories
// enable category
// disable category