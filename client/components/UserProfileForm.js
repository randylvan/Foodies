import React from 'react';
import { Link } from 'react-router';

class DefaultUserProfileForm extends React.Component {
    state = {
        showPasswordVerification: false;
    };

    onPasswordChanged(e){
        this.setState({
            showPasswordVerification: e.target.value.length > 0
        });
    }
    render(){
        return(
            <UserProfileForm {...this.props}>
                <div className="row">
                    <div className="col s12">
                        <div>
                            <div>
                                <label>First Name</label>
                                <div>
                                    <input type="text" id="givenName" name="givenName" placeholder ="First Name" required />
                                </div>
                            </div>
                            <div>
                                <label>Sur Name</label>
                                <div>
                                    <input type="text" id="surname" name="surname" placeholder="Last Name" required />
                                </div>
                            </div>
                            <div>
                                <label>email</label>
                                <div>
                                    <input type="text" id="email" name="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div>
                                <label>password</label>
                                <div>
                                    <input type="password" id="password" name="password" placeholder="Password" onChange={this.onPasswordChanged.bind(this) } />
                                </div>
                            </div>
                            <div>
                                { this.state.showPasswordVerification ? 
                                    <div>
                                        <label>Existing Password</label>
                                        <div>
                                            <input type="password" id="existingPassword" name="existingPassword" placeholder="Existing password" required />
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            <div key="update-button">
                                <div className="col offset-s1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserProfileForm>
        )
    }
}

