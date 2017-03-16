import React from 'react';
import UserProfileForm from './UserProfileForm'; 

class UserPage extends React.Component{
    render() {

        return(
            <div className="container">
                <h3>My Profile</h3>
                <div className="row">
                    <div className="col s6 l12">
                        <h3>My Profile</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 l12">
                        <UserProfileForm/>   
                    </div>
                </div>
            </div>
        )
    }

}

export default UserPage;
