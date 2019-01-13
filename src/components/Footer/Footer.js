import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    constructor (props) {
        super(props);
        this.email = props.email;
        this.email_alt = props.email_alt;
        this.tel = props.tel;
        this.country = props.country;
        this.country_link = props.country_link;

    }
    render() {
        return (
            <div className="footer">
                <div className="overlayer">
                    <div className="row justify-content-end">
                        <div className="col-md-4">
                            <h2 className="">Contacts</h2>
                            <ul>
                                <li className=" wow zoomIn"><i className="fas fa-phone"></i> {this.tel}</li>
                                <li className=" wow zoomIn"><i className="fas fa-at"></i> {this.email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyleft-footer wow slideInUp">
                        <p>Made by <i className="fas fa-heart wow pulse infinite"></i> From <a href={this.country_link}>{this.country}</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
