import { setFlash } from './flash';

// get all categories
export const getCategories = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/categories',
      type: 'GET'
    }).done( categories => {
        dispatch(fetchCategories(categories))
    });
  }
}

const fetchCategories = (categories) =>{
    return { type: 'CATEGORIES', categories}
}

const enableCat = (title) => {
  // use category title to update enabled state and add to userCat data collection
  return {};
}



// get enabled categories
// enable category
// disable category