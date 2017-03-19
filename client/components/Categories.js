import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories }  from '../actions/categories'
import Category from './Category';

class Categories extends React.Component {

    componentDidMount() {
        this.props.dispatch(getCategories()); //Call  ./action/categories.js
    }

    toggleEnable = () => {
        console.log("toggle this");
    }

    updateCategory = (category) => {
        console.log("update category here")
        // ** May use this for updating enable state to database **

        // let { _id, name } = category;
        // $.ajax({
        // url: `/category/${_id}`,
        // type: 'PUT',
        // data: { enabled }
        // }).done( category => {
        // let categories = this.state.categories.map( c => {
        //     if (c._id === _id)
        //     return category
        //     return c
        // });

        // this.setState({ categories });
        // });
    }

    render () {
        console.log(this.props.categories);
        let categoryList = this.props.categories.map( category => {
            return (
                <Category
                    key={category._id}
                    updateCategory={this.updateCategory}
                    {...category} 
                />
            )
        });
        return(
            <div>
                <ul>
                    {categoryList}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
 return { categories: state.categories }
}

export default connect(mapStateToProps)(Categories);