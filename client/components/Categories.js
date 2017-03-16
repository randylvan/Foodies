import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Categories extends React.Component{
    state = { selecting: false };

    render () {

        return(
            <div>
                <ul>
                    <li><h5>Chinese</h5></li>
                    <li><h5>American</h5></li>
                    <li><h5>Italian</h5></li>
                    <li><h5>French</h5></li>
                    <li><h5>Korean</h5></li>
                </ul>

            </div>
        )
    }
}

export default Categories;