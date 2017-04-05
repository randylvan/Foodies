import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';

class SignIn extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, props: { location, dispatch, router }} = this;

    $.ajax({
      url: `/api/auth/signin`,
      type: 'POST',
      data: { 
                email: email.value, 
                password: password.value, 
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
      <div className="container">
        <h2 className="center deep-orange-text darken-4">{this.props.route.title}</h2>
          <form onSubmit={this.handleSubmit} className="form-color">
            <input autoFocus={focus} className="blue-text text-darken-3" type="email" required={true} ref={ n => this.email = n } placeholder="Email" />
            <input className="blue-text text-darken-3" type="password" required={true} ref={n => this.password = n } placeholder="Password" />
           <button className="btn blue darken-3">Sign In</button>
         </form>
      </div>
    )
  }
}

export default connect()(SignIn);