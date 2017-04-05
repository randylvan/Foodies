import React from 'react';
import { connect } from 'react-redux';
import { setFavorites } from '../actions/auth';
import {goToFavorites} from '../actions/auth';


class Favorites extends React.Component {
    state = {favorites: []};

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
        let favoriteList = this.props.favorites.map( (favorite, i) => {
            return(
                <div key={i}>
                    <div className="col s12 m6 l6 ">
                        <div className="card hoverable card-small blue darken-3">
                            <div className="card-content">
                            <span className="white-text card-title center card-font">{favorite.title}</span>
                            </div>
                            <div className="card-action center-align white-text" style={{backgroundColor: '#b3b3b3'}}>
                                <span className="left"><a className="btn-floating white"><i className="material-icons black-text" onClick={() => this.goToFavorite(favorite.url)}>visibility</i></a></span>
                                <span className="right"><a className="btn-floating deep-orange darken-3"><i className="material-icons" onClick={() => this.deleteFavorite(favorite.title)}>delete</i></a></span>
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
