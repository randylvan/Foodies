import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getCategories }  from '../actions/categories'

class Categories extends React.Component {
    state = { enableCard: false }

    componentDidMount() {
        this.props.dispatch(getCategories()); //Call  ./action/categories.js
    }

    toggleEnable = () => {
        console.log("toggle this");
        this.setState({ enableCard: !this.state.enableCard });
    }

    render () {
        console.log(this.props.categories);
        let categoryList = this.props.categories.map( category => {
            return (
                <li key={category._id} className="collection-item">
                    <div className="col s12 m8">
                        <div className="card blue {category.enabled ? darken-4 : darken-2}">
                            <div className="card-content white-text">
                                {category.description} - {this.state.enableCard.toString()}
                            </div>
                            <div className="card-action white-text">
                                <a onClick={this.toggleEnable}>
                                    { this.state.enableCard ? 'Select' : 'Unselect' }
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
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