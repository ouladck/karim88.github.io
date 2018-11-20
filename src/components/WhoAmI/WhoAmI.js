import React, { Component } from 'react';
import './WhoAmI.css';

class WhoAmI extends Component {
    render() {
        return (
            <div className="who">
                <div className="row">
                    <div className="col-md-4 who-img">

                    </div>
                    <div className="col-md who-text">
                        <p>
                            <span className="text-primary">Name: </span>
                            {this.props.name}
                        </p>
                        <p>
                            <span className="text-primary">Email: </span>
                            <a href="mailto://karim@karimoc.me">{this.props.email}</a>
                        </p>
                        <p>
                            <span className="text-primary">Mobile: </span>
                            {this.props.tel}
                        </p>
                        <p>
                            <span className="text-primary">Address: </span>
                            {this.props.address}
                        </p>
                        <hr />
                        <p className="text-muted">
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhoAmI;
