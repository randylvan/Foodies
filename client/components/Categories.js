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
        // let { _id, name } = board;
        // $.ajax({
        // url: `/boards/${_id}`,
        // type: 'PUT',
        // data: { name }
        // }).done( board => {
        // let boards = this.state.boards.map( b => {
        //     if (b._id === _id)
        //     return board
        //     return b
        // });

        // this.setState({ boards });
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