import React from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { enableCat, disableCat } from '../actions/categories';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { enableCard: false }

    }

    toggleEnable = () => {
        console.log("toggle this");
        this.setState({ enableCard: !this.state.enableCard });
    }

    render () {
            let {description, title, enabled, _id} = this.props;
            console.log(this.props.description);
            let myColorHue = this.state.enableCard ? 'green darken-4 ' : 'blue darken-3 ';
            return (
                <div className="row">
                    <li key={_id} className="collection-item">
                        <div className={'card ' + myColorHue }>
                            <div className="card-content white-text ">
                                <span className="card-title">{description}</span>
                                <p>Maybe add an extended description in the database that will be displayed here for type {description}</p>
                            </div>
                            <div className="card-action white-text">
                                <a onClick={this.toggleEnable} style={{color: '#ffff80'}}>
                                    { this.state.enableCard ? 'Unselect' : 'Select' }
                                </a>
                            </div>
                        </div>
                    </li>
                </div>
            )
        }
}

export default Category;