import React from 'react';
import UserPage from './UserPage';
import LandingPage from './LandingPage';
import { Link } from 'react-router';

class MainPage extends React.Component{
    
    state = {toggle: false, restaurants:[]}

    componentDidMount() {
        
        $.ajax({
            url: '/yelp/api',
            type: 'GET'
        }).done( restaurants => {
            // console.log(restaurants)
            this.setState({ restaurants });
        }).fail( err => {
            alert(JSON.stringify(err));
        });

    }

    rand = () => {
        let number = Math.floor(Math.random()* this.state.restaurants.length);
        return number;
    }

    callToApi = () => {
        $.ajax({
            url: '/yelp/api',
            type: 'GET'
        }).done( restaurants => {
            // console.log(restaurants)
            this.setState({ restaurants });
        }).fail( err => {
            alert(JSON.stringify(err));
        });
    }

    render(){
        let restaurants = this.state.restaurants.map( restaurant => {
            return( <div key={restaurant.id} className="card large grey lighten-4">
                        
                            <div className="card-image">
                                <img src={restaurant.image_url} width="auto" height="40%"/>
                                
                            </div>

                            <div className="card-content">
                                <span className="card-title">
                                    {restaurant.name}
                                </span>
                                <p className="red-text">
                                    Rating: {restaurant.rating} <br/>
                                    Category: { `${restaurant.categories[0].title}, 
                                                ${restaurant.categories[0].alias == restaurant.categories[0].title ? { } : restaurant.categories[0].alias}`}
                                </p>
                            </div>
    
                            <div className="card-action">
                                Check the site out
                                <a href={restaurant.url} target="_blank">
                                    <i className="small material-icons black-text">visibility</i>
                                </a>

                                <span onClick={this.callToApi}>
                                    <i className="small material-icons black-text">thumb_down</i>
                                </span>
                            </div>
                    </div>)
        })
        // console.log(restaurants)
        console.log(this.rand())
        return(
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    {restaurants[this.rand()]}
                </div>
            </div>
        )
    }
}

export default MainPage;
