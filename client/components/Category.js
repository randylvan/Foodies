import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { enableCat, disableCat } from '../actions/categories';

class Category extends React.Component {
    state = { enabled: false }

    render() {

        return (
            <div>
                <h3>A Single Category</h3>
            </div>
        )
    }
}

export default Category;