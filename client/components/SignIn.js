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
      router.push("/")
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  render() {
    return (
      <div>
        <h2 className="center">{this.props.route.title}</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="email" required={true} ref={ n => this.email = n } placeholder="email" />
            <input type="password" required={true} ref={n => this.password = n } placeholder="password" />
           <button className="btn">Sign In</button>
         </form>
      </div>
    )
  }
}

export default connect()(SignIn);