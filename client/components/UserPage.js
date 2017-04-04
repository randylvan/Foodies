import React from 'react';
import Profile from './Profile';
import Favorites from './Favorites';

class UserPage extends React.Component{
    state = {enableEdit: false}



    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col s6 l6">
                        <h3 className="deep-orange-text darken-3">Profile</h3>
                        <hr />
                        <Profile />    
                    </div>
                </div>
                <div className="section"></div>
                <div className="row">
                    <h3 className="deep-orange-text darken-3">Favorites</h3>
                    <hr />
                </div>
                <div className="row">
                    <Favorites/>
                </div>
                <div className="row">
            
                </div>

            </div>
        )
    }

}

export default UserPage;
