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
                        <h3>Profile</h3>
                        <hr />
                        <Profile />    
                    </div>
                    <div className="col s12 l6">
                        <h3>Favorites</h3>
                        <hr />
                        <Favorites/>
                    </div>
                </div>

            </div>
        )
    }

}

export default UserPage;
