import React from 'react';

class UserPage extends React.Component{
    render() {

        return(
            <div className="container">
                <div className="row">
                    <div className="col s6 l6">
                        <h3>My Profile</h3>
                        <hr />
                    </div>
                    <div className="col s12 l6">
                        <h3>Favorites</h3>
                        <hr />
                    </div>
                </div>

            </div>
        )
    }

}

export default UserPage;
