import React from 'react';

class Favorite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title} = this.props;

        return(
            <div>
                <div className="col s12 m4 l4">
                    <div className="card">
                        <div className="card-image">
                        <span className="card-title center">{title}</span>
                        </div>
                        <div className="card-content">
                            <p>Hello there</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Favorite;