import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
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
            let myColorHue = this.state.enableCard ? 'blue darken-4 ' : 'red darken-4 ';
            return (
                <div>
                    <li key={_id} className="collection-item">
                        <div className={'card ' + myColorHue }>
                            <div className="card-content white-text">
                                {description}
                            </div>
                            <div className="card-action white-text">
                                <a onClick={this.toggleEnable}>
                                    { this.state.enableCard ? 'Unselect' : 'Select' }
                                </a>
                            </div>
                        </div>
                    </li>
                </div>
            )
        }
/*
    render () {
        let {description, title, enabled, _id} = this.props;
        console.log(this.props.description);
        return (
            <div>
                <li key={_id} className="collection-item">
                    <div className="card blue {category.enabled ? darken-4 : darken-2}">
                        <div className="card-content white-text">
                            {description} - {this.state.enableCard.toString()}
                        </div>
                        <div className="card-action white-text">
                            <a onClick={this.toggleEnable}>
                                { this.state.enableCards ? 'Select' : 'Unselect' }
                            </a>
                        </div>
                    </div>
                </li>
            </div>
        )
    } */

}

export default Category;

// const mapStateToProps = (state) => {
//  return { category: state.category }
// }

// export default connect(mapStateToProps)(Category);