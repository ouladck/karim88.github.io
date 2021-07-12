import React, { Component } from 'react';
import './Portfolio.css';
class Portfolio extends Component {
    constructor (props) {
        super(props);
        this.portfolio = props.portfolio.map((project) => {
            return <div key={project.id} className="col-md-3 col-lg-4">
                <div className="card-img" style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundPosition: 'center'
                }}>
                    <div className="technologie-shape"/>
                    <div className="technologie wow zoomIn">{project.technologie}</div>
                    <div className="layer">
                        <a href={project.link} aria-label={`link to ${project.link}`} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-link fa-3x link-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
                    
        });
    }


    render() {
        return (
            <div className="portfolio">
                <h2>PORTFOLIO</h2>
                <div className="row">
                    {this.portfolio}
                </div>
            </div>
        );
    }
}

export default Portfolio;
