import React from 'react';
import { connect } from 'react-redux';
import { setFavorites } from '../actions/auth';
import {goToFavorites} from '../actions/auth';


class Favorites extends React.Component {
    state = {favorites: [], testFavorites: ["jango","ramen","butter"] };

    componentDidMount() {
        console.log(this.props.favorites)
    }

    goToFavorite = (link) => {
     window.open(link)
        
    }
    deleteFavorite = (favorite) => {

        this.props.dispatch(setFavorites(this.props.id, favorite))
    }

    render() {
        //this.setState({favorites: this.props.favorites})
        let favoriteList = this.props.favorites.map( (favorite, i) => {
            return(
                <div key={i}>
                    <div className="col s12 m4 l4">
                        <div className="card blue">
                            <div className="card-content">
                            <span className="card-title center">{favorite.title}</span>
                            </div>
                            <div className="card-action">
                                <button className="btn" onClick={() => this.goToFavorite(favorite.url)}>Look</button>
                                <button className="btn orange" onClick={() => this.deleteFavorite(favorite.title)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                {favoriteList}
            </div>
        )
    }
}

const mapStateToProps= (state) => {
    let favoritesSaved = state.user.favorites.map(fav => fav)
    return  {favorites: favoritesSaved, id: state.user._id,  zipCode: state.user.zipCode}
}

export default connect(mapStateToProps)(Favorites);
