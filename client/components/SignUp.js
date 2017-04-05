import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';

class SignUp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, firstName, lastName, zipCode, props: { location, dispatch, router }} = this;

    $.ajax({
      url: `/api/auth/signup`,
      type: 'POST',
      data: { 
              email: email.value, 
              password: password.value, 
              firstName: firstName.value,
              lastName: lastName.value,
              zipCode: zipCode.value,
            }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/home")
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row center-align">
            <div className="col s12 m10 l10 offset-l1">
              <h2 className="center deep-orange-text darken-4">{this.props.route.title}</h2>
                <form onSubmit={this.handleSubmit} className="form-color">
                  <input autoFocus={focus} type="email" required={true} ref={ n => this.email = n } placeholder="Email" />
                  <input type="password" required={true} ref={n => this.password = n } placeholder="Password" />
                  <input type="text" ref={n => this.firstName = n}  placeholder="First Name"/>
                  <input type="text" ref={n => this.lastName = n} placeholder="Last Name"/>
                  <input type="text" ref={n => this.zipCode = n} pattern="[0-9]{5}" placeholder="Zip Code"/>
                <button className="btn blue darken-3">Sign Up</button>
              </form>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(SignUp);
