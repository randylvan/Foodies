import React from 'react';
//import { connect } from 'react-redux';
import Favorite from './Favorite';

class Favorites extends React.Component {
    state = {favorites: [], testFavorites: ["jango","ramen","butter"] };

    componentDidMount() {
        console.log(this.props.favorites)
    }

    render() {
        //this.setState({favorites: this.props.favorites})
        let favoriteList = this.state.testFavorites.map( favorite => {
            return(
                <div key={i}>
                <div className="col s12 m4 l4">
                    <div className="card">
                        <div className="card-image">
                        <span className="card-title">{favorite}</span>
                        </div>
                        <div className="card-content">
                            <p>Hello there</p>
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
    return  {favorites: favoritesSaved}
}

//export default connect(mapStateToProps)(Favorite);
export default Favorite;