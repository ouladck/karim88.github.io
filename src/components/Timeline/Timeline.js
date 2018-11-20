import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
    constructor (props) {
        super(props);
        this.experiences = props.experiences.map(experience => {
            return <div className="cd-timeline__block js-cd-block">
                <div className="cd-timeline__img cd-timeline__img--picture js-cd-img">
                    <i className={experience.icon}></i>
                </div>

                <div className="cd-timeline__content js-cd-content">
                    <h3 className="position">
                        {experience.position}
                    </h3>
                    <h4 className="company">
                        {experience.company}
                    </h4>
                    <p>{experience.description}</p>
                    <span className="cd-timeline__date">{experience.time}</span>
                </div>
            </div>;
        });
    }
    render() {
        return (

            <div className="timeline-container">
                <h2 className="text-center">EXPERIENCE & EDUCATION</h2>

                <section className="cd-timeline js-cd-timeline">
                    <div className="cd-timeline__container">
                        {this.experiences}
                    </div>
                </section>
            </div>
        );
    }
}

export default Timeline;
