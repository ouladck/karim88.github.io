import React, { Component } from 'react';
import './Skill.css';

class Skill extends Component {
    constructor (props) {
        super(props);

        this.skills = props.skills.map((skill) => {
            const cls = `col-md-${(12 / Number(props.skills.length))} wow slideInRight`;
            return <div key={skill.id} className={cls}>
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
                {skill.skills}
            </div>
        });
    }
    render() {
        return (
            <div className="skills">
                <div className="container">
                    <h2 className="text-center">SKILLS & KNOWLEDGE</h2>
                    <div className="row">
                        {this.skills}
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;
