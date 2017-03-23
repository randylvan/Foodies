import React from 'react';
import UserPage from './UserPage';
import LandingPage from './LandingPage';

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
            alert(err);
        });

    }

    rand = () => {
        let number = Math.floor(Math.random()* this.state.restaurants.length);
        return number;
    }

    render(){
        let restaurants = this.state.restaurants.map( restaurant => {
            return( <div key={restaurant.id}>{restaurant.name}</div>)
        })
        // console.log(restaurants)
        console.log(this.rand())
        return(
            <div>
                {restaurants[this.rand()]}
            </div>
        )
    }
}

export default MainPage;
