import React from 'react';
import Profile from './Profile';

class UserPage extends React.Component{

<<<<<<< HEAD
    state = { user: [], email:"", password: "", phoneNumber: "", firstName: "", lastName:"", zipCode: ""}
=======
    state = { user: "", email:"", password: "", phoneNumber: "", firstName: "", lastName:"", zipCode: ""}
>>>>>>> a11d7a8fab425bcbb022845ab855b30fdf8f3d09

    componentsDidMount(){
        $.ajax({
            url: '/user',
            type: 'GET',
        }).done( user =>{
            this.setState(user)
        }).fail();
    }

    render() {
        let {username, password} = this.state.user;
        return(
            <div className="container">
                <div className="row">
                    <div className="col s6 l6">
                        <h3>My Profile</h3>
                        <li>{this.state.email}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
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
