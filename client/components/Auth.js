import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';
import Categories from './Categories';

class Auth extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, firstName, lastName, phoneNumber, zipCode, props: { location, dispatch, router }} = this;

    $.ajax({
      url: `/api/auth/${location.pathname}`,
      type: 'POST',
      data: { 
        email: email.value, 
        password: password.value,
        phoneNumber: phoneNumber.value,
        zipCode: zipCode.value,
      }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/")
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  info = () => {
    return(
      <div>
        <input type="text" ref={n => this.firstName = n} placeholder="First Name"/>
        <input type="text" ref={n => this.firstname = n} placeholder="Last Name"/>
        <input type="tel"  ref={n => this.phoneNumber = n} placeholder="Phone Number"/>
        <input type="text" pattern="[0-9]{5}" ref={n => this.zipCode = n} placeholder="Zip Code" />
      </div>
    )
  }  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
           <h2 className="center">{this.props.route.title}</h2>
            <form onSubmit={this.handleSubmit}>
              <input type="email" required={true} ref={ n => this.email = n } placeholder="email" />
              <input type="password" required={true} ref={n => this.password = n } placeholder="password" />
              {this.props.route.title === "Sign Up" ? this.info() : null }
              <button className="btn">{this.props.route.title}</button>
            </form>
          </div>
          <div className="col s12 l5 center-align">
            <h3>Categories</h3>
            <Categories />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Auth);
