import React from 'react';
import { connect } from 'react-redux';
import {editUser, setUser} from '../actions/auth';

class Profile extends React.Component{

    state = {username: "", firstName: "", lastName: "", zipCode: "", edit: false, user: this.props.user };   


    toggleEdit = () => {
        this.setState({edit: !this.state.edit});
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

    resetInfo = (e) => {
        e.preventDefault();
        let{ firstName, lastName, username, zipCode } = this.state.user;
        this.setState({firstName, lastName, username, zipCode})
        this.toggleEdit();
    }
    



    render(){
        let {firstName, lastName, zipCode, username} = this.state.user;
        if(this.state.edit){
            return(
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <h5 className="blue-text text-darken-3">Email</h5>
                            <input className="blue-text text-darken-3" defaultValue={username} ref="username" onChange={this.handleFormChange} />
                        </div>
                        <div className="row">
                            <h5 className="blue-text text-darken-3">First Name</h5>
                            <input className="blue-text text-darken-3" defaultValue={firstName} ref="firstName" onChange={this.handleFormChange} />
                        </div>
                        <div className="row">
                            <h5 className="blue-text text-darken-3">last Name</h5>
                            <input className="blue-text text-darken-3" defaultValue={lastName} ref="lastName"onChange={this.handleFormChange} />
                        </div>
                        <div className="row">
                            <h5 className="blue-text text-darken-3">Zip Code</h5>
                            <input className="blue-text text-darken-3" defaultValue={zipCode} ref="zipCode" onChange={this.handleFormChange} />
                            <button className="btn deep-orange darken-3" onClick={this.resetInfo}>Cancel</button>
                            <button className="btn blue darken-4" onClick={this.updateInfo}>Submit</button>
                        </div>
                    </form>
                </div>

            )
        }else{
            return(
                <div>
                    <div className="row">
                        <div className="col s12 m10 l10">
                            <h5 className="blue-text text-darken-3">Email: {username}</h5>
                        </div>
                        <div className="col s12 m10 l10">
                            <h5 className="blue-text text-darken-3">First Name: {firstName}</h5>
                        </div>
                        <div className="col s12 m12 l12">
                            <h5 className="blue-text text-darken-3">Last Name: {lastName}</h5>
                        </div>
                        <div className="col s12 m12 l12">
                            <h5 className="blue-text text-darken-3">Zip Code: {zipCode}</h5>
                        </div>
                    </div>
                    <button className="btn blue darken-3" onClick={this.toggleEdit}>Edit</button>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return { user: state.user}
    
}

export default connect(mapStateToProps)(Profile);
