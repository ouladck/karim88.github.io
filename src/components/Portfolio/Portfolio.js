import React, { Component } from 'react';
import './Portfolio.css';
import MrcMaroc from './images/mrcmaroc.png';
import Falak from './images/falak.png';
import Planksetting from './images/planksetting.gif';
import Game5x5 from './images/demo.gif'
import Zayousa from './images/zayousa.png'

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <h2>PORTFOLIO</h2>
                <div className="row">

                    <div className="col-md-3 col-lg-4">
                        <div className="card-img" style={{
                            backgroundImage: `url(${Zayousa})`,
                            backgroundPosition: 'center'
                        }}>
                            <div className="technologie-shape"></div>
                            <div className="technologie wow zoomIn">WORDPRESS</div>
                            <div className="layer">
                                <a href="https://zayousa.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-link fa-3x link-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div className="card-img" style={{
                            backgroundImage: `url(${Falak})`,
                            backgroundPosition: 'center'
                        }}>
                            <div className="technologie-shape"></div>
                            <div className="technologie wow zoomIn">GHOST</div>

                            <div className="layer">
                                <a href="https://astrologie-khattabi.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-link fa-3x link-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div className="card-img" style={{
                            backgroundImage: `url(${MrcMaroc})`,
                            backgroundPosition: 'center'
                        }}>
                            <div className="technologie-shape"></div>
                            <div className="technologie wow zoomIn">WORDPRESS</div>

                            <div className="layer">
                                <a href="https://mrcmaroc.org" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-link fa-3x link-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div className="card-img" style={{
                            backgroundImage: `url(${Planksetting})`,
                            backgroundPosition: 'center'
                        }}>
                            <div className="technologie-shape"></div>
                            <div className="technologie wow zoomIn">PYGTK</div>

                            <div className="layer">
                                <a href="https://planksetting.github.io/" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-link fa-3x link-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div className="card-img" style={{
                            backgroundImage: `url(${Game5x5})`,
                            backgroundPosition: 'center'
                        }}>
                            <div className="technologie-shape"></div>
                            <div className="technologie wow zoomIn">JQUERY</div>

                            <div className="layer">
                                <a href="https://5x5game.github.io" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-link fa-3x link-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
