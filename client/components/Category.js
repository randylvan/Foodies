import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories, toggleEnableCat }  from '../actions/categories'

class Category extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { enableCard: false }

    }

    toggleEnable = () => {
        // console.log("toggle this");
        // this.setState({ enableCard: !this.state.enableCard });
        this.props.dispatch(toggleEnableCat(this.props._id));
    }

    render () {
            let {description, title, enabled, _id} = this.props;
            let myColorHue = this.props.enabled ? 'green darken-4 ' : 'blue darken-3 ';
            // console.log("flux prop: " +  this.props.enabled + " for id: " + this.props._id)
            return (
                    <li key={_id} className="collection-item">
                        <div className={'card ' + myColorHue }>
                            <div className="card-content white-text ">
                                <span className="card-title">{description}</span>
                                <p>Description: {description}</p>
                            </div>
                            <div className="card-action white-text" style={{backgroundColor: '#b3b3b3'}}>
                                <a onClick={this.toggleEnable} style={{color: '#0f488a'}}>
                                    { this.props.enabled ? 'Unselect' : 'Select' }
                                </a>
                            </div>
                        </div>
                    </li>
            )
        }
}
const mapStateToProps = (state) => {
    return { category: state.category }
}

export default connect(mapStateToProps)(Category);
// export default Category;