import React from 'react';
import {connect} from 'react-redux';



class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {restaurants:[], toggle: false, position:[]}
    }

    componentDidMount() {
        let {categories, zipCode} = this.props;
        let category = this.randomCategory(categories);
        console.log(category)
        console.log(zipCode)
        $.ajax({
            url: `/yelp/api`,
            type: 'GET',
            data:{
                category: category,
                zipCode: zipCode,
            }
        }).done( restaurants => {
            // console.log(restaurants)
            this.setState({ restaurants });
        }).fail( err => {
            alert(JSON.stringify(err));
        });

    }

    rand = () => {
        let number = Math.floor(Math.random()* this.state.restaurants.length);
        return number;
    }


    randomCategory = (category) => {
    let random = (Math.floor(Math.random() * category.length));
    return(category[random]);
    }


    callToApi = () => {
        let {categories, zipCode} = this.props;
        //let {longitude, latitude} = this.props;
        let category = this.randomCategory(categories)
 
        $.ajax({
            url: '/yelp/api',
            type: 'GET',
            data:{
                category: category,
                zipCode: zipCode
            }
        }).done( restaurants => {
            // console.log(restaurants)
            this.setState({ restaurants });
        }).fail( err => {
            alert(JSON.stringify(err));
        });
    }

    addFavorite = () => {

    }
    toast = () => {
        return Materialize.toast('You have favorited', 4000);
    }
    

    render() {
        let restaurants = this.state.restaurants.map( restaurant => {
            return( 
                <div key={restaurant.id} className="card large grey lighten-4 hoverable">
                        
                            <div className="card-image">
                                <img className="responsive" src={restaurant.image_url ? restaurant.image_url : "http://hd-wall-papers.com/images/wallpapers/image-not-available/image-not-available-17.jpg"} width="20%" height="20%"/>
                                
                            </div>

                            <div className="card-content">
                                <span className="card-title center-align">
                                    {restaurant.name}
                                </span>

                                <div className="center-align">
                                    {restaurant.rating < 1.9 ? <i className="small orange-text accent-3 material-icons">star</i> : restaurant.rating <= 2.9 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span>: restaurant.rating <= 3.9 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span>: restaurant.rating >= 4 ? <span><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i><i className="small orange-text accent-3 material-icons">star</i></span> : null}
                                </div>

                                <div className="center-align">
                                    
                                    { `${restaurant.categories[0].title}`}
                                    
                                </div>
                            </div>
                            
                            <div className="card-action center-align" style={styles}>
                                        
                                        <a className="btn-floating blue"><i className="material-icons">thumb_up</i></a>
                                        <a className="btn-floating black" onClick={this.callToApi}><i className="material-icons">thumb_down</i></a>
                                        <span>
                                        <a className="btn-floating red"><i className="material-icons" onClick={this.toast}>star</i></a></span>
                                
                            </div>
                    </div>
                    )});
      
        let categoryList = this.props.categories.map( (category, i )=> {
            return( 
                    <div className="row" key={i}>
                        <label>{category}</label>
                    </div>
                )})
        return(
            <div className="row">
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title blue-text darken-1">
                                Preferences:
                            </div>
                            <form>
                                {categoryList}
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="col s12 m6">
                    {restaurants[this.rand()]}
                </div>

                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title orange-text darken-3">
                                Favorites:
                            </div>
                            <form action="#">
                                <p><input type="checkbox" id="test5" checked="checked"/>
                                <label htmlFor="test5">Indian</label></p>
                                <p><input type="checkbox" id="test5" checked="checked"/>
                                <label htmlFor="test5">Italian</label></p>
                                <input type="checkbox" id="test5" checked="checked"/>
                                <label htmlFor="test5">Salvadoran</label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

const mapStateToProps = (state) => {
    let enabledCats = state.user.enabledCategories.map( enabled => enabled);
    return {categories: enabledCats, zipCode: state.user.zipCode}
}

export default connect(mapStateToProps)(MainPage);
