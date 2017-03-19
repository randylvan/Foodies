import React from 'react';

class UserPage extends React.Component{

    this.state = {email, password, phoneNumber, firstName, lastName, zipCode}

    componentsDidMount(){
        $.ajax({
            url: '/user',
            type: 'GET',
            data:{
                email: email.value,
                name: name.value,
                password: password.value,
                firstName: firstName.value,
                lastName: lastName.value,
                zipCode: zipCode.value
            }

        }).done(
            this.setState(email, password, phoneNumber, firstName, lastName, zipCode)
        );
    }

    render() {

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
