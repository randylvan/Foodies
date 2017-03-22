import React from 'react';
import { connect } from 'react-redux';
import { enableCat } from '../actions/categories';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { enableCard: false }

    }

    toggleEnable = () => {
        // console.log("toggle this");
        this.setState({ enableCard: !this.state.enableCard });
        this.setState
    }

    render () {
            let {description, title, enabled, _id} = this.props;
            let myColorHue = this.state.enableCard ? 'green darken-4 ' : 'blue darken-3 ';
            return (
                <div className="row">
                    <li key={_id} className="collection-item">
                        <div className={'card ' + myColorHue }>
                            <div className="card-content white-text ">
                                <span className="card-title">{description}</span>
                                <p>Maybe add an extended description in the database that will be displayed here for type {description}</p>
                            </div>
                            <div className="card-action white-text" style={{backgroundColor: '#b3b3b3'}}>
                                <a onClick={this.toggleEnable} style={{color: '#0f488a'}}>
                                    { this.state.enableCard ? 'Unselect' : 'Select' }
                                </a>
                            </div>
                        </div>
                    </li>
                </div>
            )
        }
}
const mapStateToProps = (state) => {
 return { category: state.categories }
}

export default connect(mapStateToProps)(Category);
// export default Category;