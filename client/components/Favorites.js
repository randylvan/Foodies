import React from 'react';
import { connect } from 'react-redux';


class Favorites extends React.Component {
    state = {favorites: [], testFavorites: ["jango","ramen","butter"] };

    componentDidMount() {
        console.log(this.props.favorites)
    }

    render() {
        //this.setState({favorites: this.props.favorites})
        let favoriteList = this.props.favorites.map( (favorite, i) => {
            return(
                <div key={i}>
                    <div className="col s12 m4 l4">
                        <div className="card blue">
                            <span className="card-title">{favorite}</span>
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

export default connect(mapStateToProps)(Favorites);
