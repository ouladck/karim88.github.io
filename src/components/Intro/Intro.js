import React, { Component } from 'react';
import './Intro.css'
import introLayer from '../../images/intro-layer.svg';
import logo from '../../images/logo-128.png';


class Intro extends Component {

    render() {
        return (<div className="intro">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="overlayer">
                <div className="k-intro">
                    <h1 className="wow flipInX">{this.props.name}</h1>
                    <p className="text-muted wow flash">{this.props.position}</p>
                </div>
                <img src={introLayer} className="svg8" alt="logo" />
                <div className="row k-social">
                    <div className="col-xs">
                        <a href="https://github.com/karim88" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github text-github fa-3x wow jello"></i>
                        </a>
                    </div>
                    <div className="col-xs">
                        <a href="https://linkedin.com/in/karim88" aria-label="" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin text-linkedin fa-3x wow jello"></i>
                        </a>
                    </div>
                    <div className="col-xs">
                        <a href="https://fb.com/herr.linux88" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-facebook text-facebook fa-3x wow jello"></i>
                        </a>
                    </div>
                    <div className="col-xs">
                        <a href="https://cv.karimslab.com/pdf/karim_oulad_chalha_en_6.pdf" rel="noopener noreferrer" target="_blank">
                            <i className="fas fa-file-pdf text-danger fa-3x wow jello"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>);
    }
}

export default Intro