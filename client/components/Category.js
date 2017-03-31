import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories, toggleEnableCat, setUserCategory }  from '../actions/categories'

class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleEnable = () => {
        this.props.dispatch(setUserCategory(this.props.user._id, this.props.title))
    }

    render () {
            let {description, title, enabled, _id} = this.props;
            // let myColorHue = this.props.enabled ? 'green darken-4 ' : 'blue darken-3 ';
            let myColorHue = this.props.enabled ? 'deep-orange darken-3 ' : 'blue darken-3 ';
            return (
                    <li key={_id} className="collection-item">
                        <div className={'card ' + myColorHue }>
                            <div className="card-content white-text ">
                                <span className="card-title">{description}</span>
                            </div>
                            <div className="card-action white-text" style={{backgroundColor: '#b3b3b3'}}>
                                <a className={"btn-floating halfway-fab waves-effect waves-light " + myColorHue} onClick={this.toggleEnable} style={{color: '#0f488a'}}>
                                    <i className="material-icons">{ this.props.enabled ? '-' : '+' }</i>
                                </a>
                            </div>
                        </div>
                    </li>
            )
        }
}
const mapStateToProps = (state) => {
    return { category: state.category, user: state.user }
}

export default connect(mapStateToProps)(Category);