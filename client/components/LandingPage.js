import React from 'react';
import { Link, browserHistory } from 'react-router';


class LandingPage extends React.Component { 
   
    render() {    
        return (
    <div>
        <div className="buffer">
        </div>
        <div className="row center blue darken-3">
          <div className="col s12 m12 l12">
            <a className="center"><img src="transFoodie.png"/></a>
              <h5 className="header col s12 white-text">For food explorers like us looking for a new eating adventure</h5>
          </div>
          <div className="col s12 m12 l12">
              <button className="btn deep-orange darken-3 center" onClick={()=> browserHistory.push('/signin')}>Get Started</button>
              <p></p>
          </div>
        
        </div>
        <div className="row background-img">
          <div className="col s12 m8 l8">
           <h4 className="white-text light cool-font"><em>-Food is our common ground,<br/> a universal experience</em></h4>
          </div>
        </div>
        <div className="row deep-orange darken-3 white-text">
          <div className="col s12 m4 l4 info-box">
            <div className="icon-block">
              <h2 className="center white-text"><i className="large material-icons">thumb_up</i></h2>
              <h5 className="center">Enjoy Delectable Goodies</h5>
              <p className="light">Have you ever had a moment when you were comtemplating for hours on what to have for dinner? Well with our application, you will never run into that problem again. Our application autoMAGICALLY picks a restaurant for you depending on your preferences. Now you can just focus more satisfying your tastebuds instead of picking between Italian or Chinese.</p>
            </div>
          </div>

          <div className="col s12 m4 l4 info-box">
            <div className="icon-block">
            <h2 className="center white-text"><i className="large material-icons">visibility</i></h2>
            <h5 className="center">Find Hidden Delicacies</h5>

            <p className="light">Our application was made by Food Enthusiasts for Food Enthusiasts. If you're the type of person to eat rice and chicken for breakfast, lunch, and dinner, then this App is not for you. If you're the type who wants to experience mouth-watering cuisine, well unfasten your belt and get ready to explore the world of delightful cuisine.</p>
            </div>
          </div>

          <div className="col s12 m4 l4 info-box">
            <div className="icon-block">
            <h2 className="center white-text"><i className="large material-icons">stars</i></h2>
            <h5 className="center">Like It? Favorite It!</h5>

            <p className="light">Did you enjoy the place we selected for you? Found a diner that you just fell in love with? Well hit the star button to add that exquisite restuarant to your favorites' list. Store all your favorite eateries in a single location for quick access to their information and directions.</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
};

export default LandingPage;