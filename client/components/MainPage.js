import React from 'react';
import UserPage from './UserPage';
import TestingPage from './MainPage';

class MainPage extends React.Component{
    
    state = {toggle: false }

    render(){
        return(
            <div>
                {this.state.toggle ? <LoadingPage/> : <UserPage/> }
            </div>
        )
    }
}

export default MainPage;
