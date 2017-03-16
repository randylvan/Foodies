import React from 'react';  

class UserPage extends React.Component{
    render() {

        return(
            <DocumentTitle title={`My Profile`}>
            <div className="container">
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
            </DocumentTitle>
        )
    }

}

export default UserPage;
