import React from 'react';
import { connect } from 'react-redux';
import {editUser, setUser} from '../actions/auth';

class Profile extends React.Component{

    state = {username: "", firstName: "", lastName: "", zipCode: "", edit: false, user: this.props.user };   


    toggleEdit = () => {
        this.setState({edit: !this.state.edit});
        // if(this.state.edit === false){
        //     $.ajax({
        //         url: 'api/auth/update',
        //         type: 'POST',
        //         data: {
        //                 firstName: firstName.value,
        //                 lastName: lastName.value,
        //                 zipCode: zipCode.value,
        //               }
        //     }).done( user => {
        //         this.props.dispatch(setUser(user))
        //     })
        // }
    }
    handleFormChange = (e) =>{
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value })
    }

    updateInfo = (e) => {
        e.preventDefault();
        let {firstName, lastName, zipCode, username} = this.refs;
        $.ajax({
            url: `/api/auth/update/${this.props.user._id}`,
            type: 'PUT',
            data: { 
                    email: username.value,
                    firstName: firstName.value,
                    lastName: lastName.value,
                    zipCode: zipCode.value
                  }
        }).done( user => {
            this.setState({ user });
            console.log(user)
            this.toggleEdit();
        }).fail( err => {
            console.log(err);
        })
    }
    



    render(){
        let {firstName, lastName, zipCode, username} = this.state.user;
        if(this.state.edit){
            return(
                <div>
                    <form>
                        <h5>Email</h5>
                        <input defaultValue={username} ref="username" onChange={this.handleFormChange} />
                        <h5>First Name</h5>
                        <input defaultValue={firstName} ref="firstName" onChange={this.handleFormChange} />
                        <h5>last Name</h5>
                        <input defaultValue={lastName} ref="lastName"onChange={this.handleFormChange} />
                        <h5>Zip Code</h5>
                        <input defaultValue={zipCode} ref="zipCode" onChange={this.handleFormChange} />
                        <button className="btn orange">Cancel</button>
                        <button className="btn" onClick={this.updateInfo}>Submit</button>
                    </form>
                </div>

            )
        }else{
            return(
                <div>
                    <div className="row">
                        <h5>Email</h5>
                        <span>{username}</span>
                        <h5>First Name</h5>
                        <span>{firstName}</span>
                        <h5>Last Name</h5>
                        <span>{lastName}</span>
                        <h5>Zip Code</h5>
                        <span>{zipCode}</span>
                    </div>
                    <button className="btn" onClick={this.toggleEdit}>Edit</button>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return { user: state.user}
    
}

export default connect(mapStateToProps)(Profile);
