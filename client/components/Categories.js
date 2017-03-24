import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories }  from '../actions/categories'
import Category from './Category';

class Categories extends React.Component {

    componentDidMount() {
        this.props.dispatch(getCategories()); //Call  ./action/categories.js
    }

    render () {
        let categoryList = this.props.categories.map( category => {
            return (
                <div key={category._id} className="col s12 m4 l4">
                    <Category
                        {...category} 
                    />
                </div>
            )
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
 return { categories: state.categories }
}

export default connect(mapStateToProps)(Categories);