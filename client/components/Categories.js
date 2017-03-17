import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories }  from '../actions/categories'

class Categories extends React.Component {
    componentDidMount() {
        this.props.dispatch(getCategories()); //Call  ./action/categories.js
    }

    render () {
        console.log(this.props.categories);
        return(
            <div>
                <ul>
                    <li><h5>Chinese</h5></li>
                    <li><h5>American</h5></li>
                    <li><h5>Italian</h5></li>
                    <li><h5>French</h5></li>
                    <li><h5>Korean</h5></li>
                    <li><h5>BBQ</h5></li>
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