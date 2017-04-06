import React from 'react';
import {connect} from 'react-redux';
const Loader = require('react-loader');
import {setFavorites} from '../actions/auth';
import Modal from './Modal';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaStar from 'react-icons/lib/fa/star';
import { Link } from 'react-router';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {restaurants:[], toggle: false, position:[], number: [], loaded: false}
    }

    componentDidMount() {
        $('.tooltipped').tooltip();
        $('#modal1').modal();
        let {categories, zipCode} = this.props;
        let category = this.randomCategory(categories);
        $.ajax({
            url: `/yelp/api`,
            type: 'GET',
            data:{
                category: category,
                zipCode: zipCode,
            }
        }).done( restaurants => {
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
        let {categories, zipCode} = this.props;
        let category = this.randomCategory(categories)
 
        $.ajax({
            url: '/yelp/api',
            type: 'GET',
            data:{
                category: category,
                zipCode: zipCode
            }
        }).done( restaurants => {
            this.setState({ restaurants });
            let number = Math.floor(Math.random()* this.state.restaurants.length);
            this.setState({ number: number});
            if(this.state.toggle)
            this.setState({toggle: !this.state.toggle})
        }).fail( err => {
            alert(JSON.stringify(err));
        });
    }

    addFavorite = (favorite, link) => {
        let{ id } = this.props;
        this.props.dispatch(setFavorites( id , favorite, link))
        
    }

    toast = (title, link) => {
        this.setState({toggle: !this.state.toggle});
        this.addFavorite(title, link);
        if (this.state.toggle == true) {
            return Materialize.toast('You have unfavorited', 4000);
        }
        return Materialize.toast('You have favorited', 4000);
    }

    modal = () => {
       
         $('#modal1').modal('open');
    }

  
  render() {
        if (typeof this.props.categories[0] !== "undefined") 
        {
            let modals = this.state.restaurants.map( restaurant => {
                return( 
                    <div key={restaurant.id} className="container-fluid">
                        <div className="row">
                            <h4 className="center-align blue-text darken-3">{restaurant.name}</h4>
                            <h6 className="center-align"><b>{restaurant.location.address1 == null ? '' : restaurant.location.address1}, {restaurant.location.city} {restaurant.location.zipCode}</b></h6>
                            <div className="modal-actions center-align">
                                <a href={`https://www.google.com/maps/dir/Current+Location/${restaurant.location.address1}+${restaurant.location.city}+${restaurant.location.zip_code}`} target="_blank"><i className="medium material-icons black-text">location_on</i></a>
                                <a href={`tel:${restaurant.display_phone}`}><i className="medium material-icons black-text tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am tooltip">call</i></a>
                                <a href={restaurant.url} target="_blank"><i className="medium material-icons black-text">info</i></a>
                            </div>
                            
                        </div>
                    </div>
                    )});
                    
            let restaurants = this.state.restaurants.map( restaurant => {
                return( 
                    <div key={restaurant.id} className="card large hoverable">
                        <div className="card-image">
                            <img src={restaurant.image_url ? restaurant.image_url : "http://i.imgur.com/X7ndLwL.png"}/>       
                        </div>
                        <div className="card-content">
                            <span className="card-title center-align">
                                <b>{restaurant.name}</b>
                            </span>
                            <div className="center-align">
                                {restaurant.rating < 1.9 ? <i className="small orange-text accent-3 material-icons">star</i> : restaurant.rating <= 2.9 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span>: restaurant.rating <= 3.9 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span>: restaurant.rating >= 4 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span> : null}
                                <br/><b>{ `${restaurant.categories[0].title}`}</b><br/>
                                {`${restaurant.location.address1 ? restaurant.location.address1 : null}, ${restaurant.location.city}` }
                             
                            </div>
                        </div>
                        <div className="card-action center-align" style={styles}>          
                            <a className="btn-floating blue" ref="modal" onClick={this.modal}><i className="material-icons">thumb_up</i></a>
                            <a className="btn-floating black" onClick={this.callToApi}><i className="material-icons">thumb_down</i></a>
                            {this.state.toggle ?
                                    <span>
                                    <a className="btn-floating red">
                                    <i className="material-icons" onClick={() => this.toast(restaurant.name, restaurant.url) }>not_interested</i></a>
                                    </span> : <span><a className="btn-floating red"><i className="material-icons" onClick={() => this.toast(restaurant.name, restaurant.url)}>star</i></a></span>    
                            }     
                        </div>
                    </div>
                    )});

            let categoryList = this.props.categories.map( (category, i ) => {
                let displayedCategory = category.toUpperCase();
                return( 
                        <Link to="/Categories" key ={i} className="black-text">
                            <FaCutlery className="blue-grey-text lighten-4"/> {'  '}
                            {displayedCategory} <br />
                        </Link>
                    )})
            let favoriteList = this.props.favorites.map( (favorite, i )=> {
                return( 
                        <a key={i} className="black-text" href={favorite.url} target="_blank">
                            <FaStar className="deep-orange-text darken-3" /> {' '}
                              {favorite.title}<br/>
                        </a>
                    )})

            return(
                <div className="container-fluid">
                    <div className="row">
                        <Loader loaded={this.state.loaded} color="red">
                            <div className="col s12 m3">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-title blue-text darken-3">
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
                                        <div className="card-title blue-text darken-3">
                                            Favorites:
                                        </div>
                                        <form action="#">
                                            {favoriteList}
                                        </form>
                                    </div>
                                </div> 
                            </div>
                    </Loader>
                        <div id="modal1" className="modal">
                            {modals[this.state.number]}
                        </div>
                    </div>
                </div>
            )
         } else {
            return(
                <div className="center-align">
                    <h4 className=" center-align deep-orange-text text-darken-3 ">Please Select Categories!</h4>
                </div>
            )
         } // end if
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
