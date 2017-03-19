import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories }  from '../actions/categories'
import Category from './Category';

class Categories extends React.Component {
    state = { enableCards: false }

    componentDidMount() {
        this.props.dispatch(getCategories()); //Call  ./action/categories.js
    }

    toggleEnable = () => {
        console.log("toggle this");
        this.setState({ enableCards: !this.state.enableCards });
    }

    updateCategory = (category) => {
        console.log("update category here")
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

// export default Categories;
// <li><h5>Chinese</h5></li>
// <li><h5>American</h5></li>
// <li><h5>Italian</h5></li>
// <li><h5>French</h5></li>
// <li><h5>Korean</h5></li>
// <li><h5>BBQ</h5></li>