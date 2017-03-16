import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Categories extends React.Component{
    state = { selecting: false };

    render () {

        return(
            <div>
                <h3>List of Categories goes here</h3>
            </div>
        )
    }
}

export default Categories;