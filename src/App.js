import React, { Component } from 'react';
import './App.css';
import Intro from "./components/Intro/Intro";
import WOW from "wow.js";
import WhoAmI from "./components/WhoAmI/WhoAmI";
import Timeline from "./components/Timeline/Timeline";
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Zayousa from "./components/Portfolio/images/zayousa.png";
import Falak from "./components/Portfolio/images/falak.png";
import MrcMaroc from "./components/Portfolio/images/mrcmaroc.png";
import Planksetting from "./components/Portfolio/images/planksetting.gif";
import Game5x5 from "./components/Portfolio/images/demo.gif";

class App extends Component {

    componentDidMount() {
        const wow = new WOW();
        wow.init();
    }
    constructor () {
        super();
        this.name = 'Karim Oulad Chalha';
        this.position = 'Angular developer';
        this.email = 'ouladchalha.k@gmail.com';
        this.email_alt = 'contact@karimslab.com';
        this.tel = '+2126-4162-3527';
        this.country = 'Morocco';
        this.country_link = 'https://en.wikipedia.org/wiki/Morocco';
        this.address = '41 Rue Laymoune, Hay Cheikh Lamfadel, 11020 Salé';
        this.description = "I’M AN EAGER PROGRAMMER FROM MOROCCO, ARDENT ABOUT OPEN SOURCE AND THE NEW IT TECHNOLOGY." +
            "EXPERIENCED FULLSTACK DEVELOPER WITH A DEMONSTRATED HISTORY OF WORKING IN THE COMPUTER SOFTWARE INDUSTRY." +
            "SKILLED IN ANGULAR, LARAVEL, PYTHON.";
        this.experiences = [
            {
                id: 9,
                position: 'Master\'s Degree Business Analytics et Big Data',
                company: 'FST Settat',
                description: 'Faculté des Sciences et Techniques Settat',
                time: 'Oct 2019 - Current',
                icon: 'fas fa-graduation-cap fa-2x'
            },
            {
                id: 8, // This is just for lists key
                position: 'Lead Web Developer',
                company: 'RC2K / Iliad Free',
                description: <span>Developing an Incident Management System for <span className="text-secondary">Iliad Free.</span></span>,
                time: 'Jan 2019 - Current',
                icon: 'fas fa-briefcase fa-2x'
            },
            {
                id: 1,
                position: 'Engineering of Computer Systems',
                company: 'SupMTI',
                description: 'School of Management, Telecommunications and Computer Science',
                time: 'Oct 2018 - 2019',
                icon: 'fas fa-graduation-cap fa-2x'
            },
            {
                id: 2,
                position: 'Lead Web Developer',
                company: 'Graviton Geolocation',
                description: <span>Developing an Agricultural Information Management System for <span className="text-secondary">Cosumar Group</span>.</span>,
                time: 'May 2018 - Aug 2018',
                icon: 'fas fa-briefcase fa-2x'
            },
            {
                id: 3,
                position: 'Back-End Developer',
                company: 'Graviton Geolocation',
                description: `Integrated Odoo ERP to be used for internal usage & Developed/Maintained a existing Agricultural Information Management System.`,
                time: 'Jan 2018 - May 2018',
                icon: 'fas fa-briefcase fa-2x'
            },
            {
                id: 4,
                position: 'Full-Stack Developer',
                company: 'ITGSM Group',
                description: 'Maintain & Refactoring some existing projects in Symfony - Laravel - OctoberCMS.',
                time: 'Nov 2017 - Dec 2017',
                icon: 'fas fa-briefcase fa-2x'
            },
            {
                id: 5,
                position: 'Lead Web Developer',
                company: 'Zayousa BPO and WEB Agency',
                description: <span>Development of a CRM platform for Gas and Electricity distributors for the gas provider company <span className="text-secondary">Gazprom Energy France</span>.</span>,
                time: 'Apr 2016 - Jul 2017',
                icon: 'fas fa-briefcase fa-2x'
            },
            {
                id: 6,
                position: 'Full-Stack Developer',
                company: 'Majjane Servicos',
                description: 'Development of a web platform that backup folders and/or servers manually or by scheduling them.',
                time: 'Apr 2015 - May 2015',
                icon: 'fas fa-briefcase fa-2x'
            },
            {
                id: 7,
                position: 'Computer Development Technique',
                company: 'OFPPT ISTA',
                description: 'Specialized Institute of Applied Technology - Hay-Assalam',
                time: 'Sep 2013 - Jun 2015',
                icon: 'fas fa-graduation-cap fa-2x'
            }
        ];
        this.skills = [
            {
                id: 1,
                name: 'Front-End Development',
                icon: 'fas fa-laptop-code fa-3x',
                skills: [
                    <p key="1">Angular <span className="badge badge-primary">advanced</span></p>,
                    <p key="2">Bootstrap <span className="badge badge-primary">advanced</span></p>,
                    <p key="3">SASS/LESS</p>,
                    <p key="4">Webpack</p>,
                    <p key="5">DevExpress <span className="badge badge-primary">advanced</span></p>
                ]
            },
            {
                id: 2,
                name: 'Back-End Development',
                icon: 'fas fa-keyboard fa-3x',
                skills: [
                    <p key="1">Laravel <span className="badge badge-primary">advanced</span></p>,
                    <p key="2">NodeJS</p>,
                    <p key="3">Python</p>,
                    <p key="4">MySQL</p>,
                    <p key="5">PostgreSQL</p>,
                    <p key="6">MongoDB</p>,
                    <p key="7">MSSQL</p>
                ]
            },
            {
                id: 3,
                name: 'Tools',
                icon: 'fas fa-wrench fa-3x',
                skills: [
                    <p key="1">Trello <span className="badge badge-primary">advanced</span></p>,
                    <p key="2">Gnu/Linux <span className="badge badge-primary">advanced</span></p>,
                    <p key="3">SSH</p>,
                    <p key="4">GIT <span className="badge badge-primary">advanced</span></p>,
                    <p key="5">Slack</p>
                ]
            }
        ];
        this.portfolio = [
            {
                id: 1,
                image: Zayousa,
                link: 'https://zayousa.com',
                technologie: 'WORDPRESS'
            },
            {
                id: 2,
                image: Falak,
                link: 'https://astrologie-khattabi.com',
                technologie: 'GHOST'
            },
            {
                id: 3,
                image: MrcMaroc,
                link: 'https://mrcmaroc.org',
                technologie: 'WORDPRESS'
            },
            {
                id: 4,
                image: Planksetting,
                link: 'https://planksetting.github.io/',
                technologie: 'PYGTK'
            },
            {
                id: 5,
                image: Game5x5,
                link: 'https://5x5game.github.io',
                technologie: 'JQUERY'
            }
        ];
    }
    render() {
        return (
          <div className="App">
            <Intro name={this.name} position={this.position}/>
            <WhoAmI
                name={this.name}
                email={this.email}
                tel={this.tel}
                address={this.address}
                description={this.description}
            />
            <Timeline
                experiences={this.experiences}
            />
            <Skill skills={this.skills}/>
            <Portfolio portfolio={this.portfolio}/>
            <Footer
                email={this.email}
                email_alt={this.email_alt}
                tel={this.tel}
                country={this.country}
                country_link={this.country_link}
                />
          </div>
        );
    }
}

export default App;
