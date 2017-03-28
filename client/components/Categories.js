import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories, getCurUserCats }  from '../actions/categories'
import Category from './Category';

class Categories extends React.Component {

    componentDidMount() {
        this.props.dispatch(getCategories()); //Call  ./action/categories.js
    }

    //Set the category in store to enabled also
    // setStoreCatToEnabled(catId) {
    //     let c;
    //     for (c of this.props.categories) {
    //         if (c._id === catId){
    //             console.log("Cat ID: " + catId);
    //         }
    //     }
    // }

    render () {
        let enabledCategories = this.props.user.enabledCategories || []
        let categoryList = this.props.categories.map( category => {
            if (enabledCategories.includes(category.title)) {
                // this.setStoreCatToEnabled(category._id);
                return (
                    <div key={category._id} className="col s12 m4 l4">
                        <Category
                            description={category.description} 
                            title={category.title} 
                            _id={category._id}
                            enabled={true} 
                        />
                    </div>
                )
            } else {
                return (
                    <div key={category._id} className="col s12 m4 l4">
                        <Category
                            {...category} 
                        />
                    </div>
                )
            }
        });

        return(
            <div className="container center-align">
                <div className="row">
                        <ul>
                            {categoryList}
                        </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let enabledCats = state.categories
        .filter( cat => cat.enabled === true )
        .map( cat => cat.title )
 return { categories: state.categories, enabledCats, user: state.user }
}

export default connect(mapStateToProps)(Categories); //attaches redux store to the component