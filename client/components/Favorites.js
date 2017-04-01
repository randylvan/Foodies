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
                        <div className="card blue darken-3">
                            <div className="card-content">
                            <span className="white-text card-title center">{favorite.title}</span>
                            </div>
                            <div className="card-action white-text" style={{backgroundColor: '#b3b3b3'}}>
                                <button className="btn blue darken-4" onClick={() => this.goToFavorite(favorite.url)}>Look</button>
                                <button className="btn deep-orange darken-3" onClick={() => this.deleteFavorite(favorite.title)}>Delete</button>
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
