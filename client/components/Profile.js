import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component{

    //state = {profile: {firstName: "default", lastName: "default", zipCode: "zip Code"}}    

    // componentDidMount(){
    //     $.ajax({
    //         url: '/api/auth/user',
    //         type: 'GET',
    //     }).done( profile =>{
    //         console.log("this works")
    //         console.log(profile)
    //         let { firstName, lastName, zipCode} = this.profile;
    //         this.setState({profile})
    //     }).fail(
    //         console.log("this failed")
    //     );
    // }


    render(){
        let {firstName, lastName, zipCode, username} = this.props.user;
        return(
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{zipCode}</p>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return { user: state.user}
    
}

export default connect(mapStateToProps)(Profile);
