import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash } from '../actions/flash';

class Auth extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password, props: { location, dispatch, router }} = this;

    $.ajax({
      url: `/api/auth${location.pathname}`,
      type: 'POST',
      data: { email: email.value, password: password.value }
    }).done( user => {
      dispatch(refreshLogin(user));
      router.push("/")
    }).fail( err => {
      dispatch(setFlash(err.responseJSON.message, 'error'))
    });
  }

  render() {
    return (
<<<<<<< HEAD
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
=======
      <div>
        <h2 className="center">{this.props.route.title}</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="email" required={true} ref={ n => this.email = n } placeholder="email" />
            <input type="password" required={true} ref={n => this.password = n } placeholder="password" />
           <button className="btn">{this.props.route.title}</button>
         </form>
>>>>>>> b83148fffbe213fc9fd82d3daee8cf07bef5dc88
      </div>
    )
  }
}

export default connect()(Auth);
