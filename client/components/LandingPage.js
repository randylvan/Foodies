import React from 'react';
import { Link } from 'react-router';


class LandingPage extends React.Component { 
   
    render() {    
        return (
    <div>
        
        <div className="site-wrapper">
      {/*<div className="img"></div>*/}
      <div className="site-wrapper-inner">

        <div className="cover-container">

          <div className="inner cover center container">
            <h1 className="cover-heading center white-text">Foodie<span className="red-text">Tinder</span></h1>
            <p className="lead center white-text">The only application you'll need to find your lucky food <em className="green-text"><b>TODAY</b></em></p>
            <p className="lead">
              <Link to={'/signUp'} className="btn btn-lg btn-default red">Sign up</Link>
            </p>
          </div>

          <div className="mastfoot center">
            <div className="inner">
              <p className="white-text">&copy; Foodie<span className="red-text">Tinder</span></p>
            </div>
          </div>

        </div>

      </div>

    </div>

    </div>
)
}
};

export default LandingPage;