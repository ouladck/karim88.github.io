import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="overlayer">
                    <div className="row justify-content-end">
                        <div className="col-md-4">
                            <h2 className="">Contacts</h2>
                            <ul>
                                <li className=" wow zoomIn"><i className="fas fa-phone"></i> +2126 416 235 27</li>
                                <li className=" wow zoomIn"><i className="fas fa-at"></i> contact@karimslab.com</li>
                                <li className=" wow zoomIn"><i className="fas fa-at"></i> herr.linux88@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyleft-footer wow slideInUp">
                        <p>Made by <i className="fas fa-heart wow pulse infinite"></i> From <a href="https://en.wikipedia.org/wiki/Morocco">Morocco</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
