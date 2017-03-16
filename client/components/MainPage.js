import React from 'react';
import UserPage from './UserPage';
import LandingPage from './LandingPage';

class MainPage extends React.Component{
    
    state = {toggle: true }

    render(){
        return(
            <div>
                {this.state.toggle ? <LandingPage/> : <UserPage/> }
            </div>
        )
    }
}

export default MainPage;
