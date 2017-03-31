import React from 'react';
import {connect} from 'react-redux';
const Loader = require('react-loader');
import {setFavorites} from '../actions/auth';




class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {restaurants:[], toggle: false, position:[], number: [], loaded: false}
    }

    componentDidMount() {
        let {categories, zipCode} = this.props;
        let category = this.randomCategory(categories);
        console.log(category)
        console.log(zipCode)
        $.ajax({
            url: `/yelp/api`,
            type: 'GET',
            data:{
                category: category,
                zipCode: zipCode,
            }
        }).done( restaurants => {
            // console.log(restaurants)
            this.setState({ restaurants });
            this.setState({ loaded: !this.state.loaded});   
            let number = Math.floor(Math.random()* this.state.restaurants.length);
            this.setState({ number: number});

        }).fail( err => {
            alert(JSON.stringify(err));
        });

    }

    rand = () => {
        let number = Math.floor(Math.random()* this.state.restaurants.length);
        this.setState({number: number});
    }


    randomCategory = (category) => {
    let random = (Math.floor(Math.random() * category.length));
    return(category[random]);
    }


    callToApi = () => {
        if(this.state.toggle)
            this.setState({toggle: !this.state.toggle})
        let {categories, zipCode} = this.props;
        //let {longitude, latitude} = this.props;
        let category = this.randomCategory(categories)
 
        $.ajax({
            url: '/yelp/api',
            type: 'GET',
            data:{
                category: category,
                zipCode: zipCode
            }
        }).done( restaurants => {
            // console.log(restaurants)
            this.setState({ restaurants });
            let number = Math.floor(Math.random()* this.state.restaurants.length);
            this.setState({ number: number});
        }).fail( err => {
            alert(JSON.stringify(err));
        });
    }

    addFavorite = (favorite, link) => {
        let{ id } = this.props;
        this.props.dispatch(setFavorites( id , favorite, link))
        console.log(favorite);

    }
    toast = (title, link) => {
        this.setState({toggle: !this.state.toggle});
        this.addFavorite(title, link);
        if (this.state.toggle == true) {
            return Materialize.toast('You have unfavorited', 4000);
        }
        return Materialize.toast('You have favorited', 4000);
    }
    

    render() {
        let restaurants = this.state.restaurants.map( restaurant => {
            return( 
                <div key={restaurant.id} className="card large grey lighten-4 hoverable">
                        
                            <div className="card-image">
                                
                                <img className="responsive" src={restaurant.image_url ? restaurant.image_url : "http://hd-wall-papers.com/images/wallpapers/image-not-available/image-not-available-17.jpg"} width="20%" height="20%"/>
                                
                            </div>

                            <div className="card-content">
                                <span className="card-title center-align">
                                    {restaurant.name}
                                </span>

                                <div className="center-align">
                                    {restaurant.rating < 1.9 ? <i className="small orange-text accent-3 material-icons">star</i> : restaurant.rating <= 2.9 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span>: restaurant.rating <= 3.9 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span>: restaurant.rating >= 4 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span> : null}
                                </div>

                                <div className="center-align">
                                    
                                    { `${restaurant.categories[0].title}`}
                                    
                                </div>
                            </div>
                            
                            <div className="card-action center-align" style={styles}>
                                        
                                        <a className="btn-floating blue"><i className="material-icons">thumb_up</i></a>
                                        <a className="btn-floating black" onClick={this.callToApi}><i className="material-icons">thumb_down</i></a>
                                        {this.state.toggle ?
                                             <span><a className="btn-floating red"><i className="material-icons" onClick={() => this.toast(restaurant.name, restaurant.url) }>not_interested</i></a></span> :
                                            <span><a className="btn-floating red"><i className="material-icons" onClick={() => this.toast(restaurant.name, restaurant.url)}>star</i></a></span>    
                                        }

                                
                            </div>
                    </div>
                    )});
      
        let categoryList = this.props.categories.map( (category, i ) => {
            let displayedCategory = category.toUpperCase();
            return( 
                    <p key ={i}>
                        <input type="checkbox"/>
                        <label>{displayedCategory}</label>
                    </p>
                )})
        let favoriteList = this.props.favorites.map( (favorite, i )=> {
            return( 
                    <p key={i}>
                        <input type="checkbox" checked="checked"/>
                        <label>{favorite.title}</label>
                    </p>
                )})

        return(
            <div className="row">
                <Loader loaded={this.state.loaded} color="red">
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title blue-text darken-1">
                                Preferences:
                            </div>
                            <form>
                                {categoryList}
                            </form>
                        </div>
                    </div>
                </div>
                
                    <div className="col s12 m6">
                        {restaurants[this.state.number]}
                    </div>
               
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title orange-text darken-3">
                                Favorites:
                            </div>
                            <form action="#">
                                {favoriteList}
                            </form>
                        </div>
                    </div>
                    
                </div>
                </Loader>
            </div>
        )
    }
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

const mapStateToProps = (state) => {
    let enabledCats = state.user.enabledCategories.map( enabled => enabled);
    let favoriteList = state.user.favorites.map( fav => fav);
    return {categories: enabledCats, zipCode: state.user.zipCode, favorites: favoriteList, id: state.user._id}
}

export default connect(mapStateToProps)(MainPage);
