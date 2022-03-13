<template>
  <div>
    <Intro name="Karim Oulad Chalha" position="Technical Project Manager" logo="/images/logo-128.png"
           background-img="/images/desktop.jpg" intro-layer="/images/intro-layer.svg" :social-network="socialNetwork"/>
    <WhoAmI name="Karim oulad Chalha" background-img="/images/karimslab.jpg"
            tel="+2126-4162-3527" email="ouladchalha.k@gmail.com"
            address="41 Rue Laymoune, Hay Cheikh Lamfadel, 11020 Salé"
            description="I'm an eager and experienced Technical Project Manager with a demonstrated history of working in the computer software industry. Skilled in Angular, Vuejs, Laravel and Python. Strong engineering professional and ardent about open source and the new IT with a Master focused in `Master Business Analytics and Big Data` from FST Settat."></WhoAmI>
    <Timeline :timeline="timeline"></Timeline>
    <Skill :skills="skills"></Skill>
    <Portfolio :projects="portfolio"></Portfolio>
  </div>
</template>

<script>

import Intro from "../components/Intro/Intro";
import WhoAmI from "../components/WhoAmI/WhoAmI";
import Timeline from "../components/Timeline/Timeline";
import Skill from "../components/Skill/Skill";
import Portfolio from "../components/Portfolio/Portfolio";

export default {
  components: {Portfolio, Skill, Timeline, WhoAmI, Intro},
  loading: {
    color: 'blue',
    height: '5px'
  },
  data() {
    return {
      timeline: [
        {
          id: 11,
          position: 'Fullstack (Vuejs / PHP) Consultant',
          company: 'SIDEXIA',
          description: `<span></span>`,
          time: 'Feb 2022 - Current',
          icon: 'fas fa-briefcase fa-2x',
          companies: [
            { image: `images/companies/veolia.png`, alt: `Veolia`, url: `https://www.veoliawatertechnologies.com` },
            { image: `images/companies/fluksaqua.png`, alt: `FluksAqua`, url: `https://www.fluksaqua.com/en/` },
            { image: `images/companies/birdz.png`, alt: `birdz`, url: `https://www.birdz.com/` }
          ]
        },
        {
          id: 11,
          position: 'Technical Project Manager',
          company: 'Gear9 - Groupe Thenext.Click',
          description: `<span>Participating in the development of many projects including <a href="https://www.inwi.ma/"
                                                                                            aria-label="inwi website">inwi website</a></span>`,
          time: 'Aug 2020 - Dec 2021',
          icon: 'fas fa-briefcase fa-2x',
          companies: [
            { image: `images/companies/inwi.svg`, alt: `inwi`, url: `https://inwi.ma` },
            { image: `images/companies/pmi.png`, alt: `Philip Morris International` },
            { image: `images/companies/sg.png`, alt: `Soglease & La Marocaine Vie` },
            { image: `images/companies/aivam.svg`, alt: `AIVAM` },
          ]
        },
        {
          id: 10,
          position: 'Senior Web Developer',
          company: 'CodeCave',
          description: `<span>Participating in the development of a cyber-security penetration testing platform called <a
            href="https://www.buglab.io/" aria-label="Buglab website">Buglab</a></span>`,
          time: 'Mar 2020 - Jul 2020',
          icon: 'fas fa-briefcase fa-2x',
          companies: [
            { image: `images/companies/buglab.png`, alt: `Buglab` }
          ]
        },
        {
          id: 9,
          position: 'Master\'s Degree Business Analytics et Big Data',
          company: 'FST Settat',
          description: 'Faculté des Sciences et Techniques Settat',
          time: 'Oct 2019 - 2020',
          icon: 'fas fa-graduation-cap fa-2x'
        },
        {
          id: 8, // This is just for lists key
          position: 'Lead Web Developer',
          company: 'RC2K / Iliad Free',
          description: `<span>Developing an Incident Management System for <span
            class="text-secondary">Iliad Free.</span></span>`,
          time: 'Jan 2019 - Mar 2020',
          icon: 'fas fa-briefcase fa-2x',
          companies: [
            { image: `images/companies/free.png`, alt: `Iliad Free Telecom` }
          ]
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
          description: `<span>Developing an Agricultural Information Management System for <span
            class="text-secondary">Cosumar Group</span>.</span>`,
          time: 'May 2018 - Aug 2018',
          icon: 'fas fa-briefcase fa-2x',
          companies: [
            { image: `images/companies/cosumar.jpg`, alt: `Cosumar (Project Attaysir)'` }
          ]
        },
        {
          id: 3,
          position: 'Back-End Developer',
          company: 'Graviton Geolocation',
          description: `Integrated Odoo ERP to be used for internal usage & Developed/Maintained a existing Agricultural Information Management System.`,
          time: 'Jan 2018 - May 2018',
          icon: 'fas fa-briefcase fa-2x',
          companies: [
            { image: `images/companies/cosumar.jpg`, alt: `Cosumar` }
          ]
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
          description: `<span>Development of a CRM platform for Gas and Electricity distributors for the gas provider company <span
            class="text-secondary">Gazprom Energy France</span>.</span>`,
          time: 'Apr 2016 - Jul 2017',
          icon: 'fas fa-briefcase fa-2x',
          companies: [
            { image: `images/companies/gazprom.svg`, alt: `Gazprom France` }
          ]
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
      ],
      skills: [
        {
          id: 1,
          name: 'Front-End Development',
          icon: 'fas fa-laptop-code fa-3x',
          skills: [
            {name: 'Angular', advanced: true},
            {name: 'Vue.js', advanced: true},
            {name: 'Bootstrap', advanced: true},
            {name: 'SASS/LESS', advanced: false},
            {name: 'Webpack', advanced: false},
            {name: 'DevExpress', advanced: true}
          ]
        },
        {
          id: 2,
          name: 'Back-End Development',
          icon: 'fas fa-keyboard fa-3x',
          skills: [
            {name: 'Laravel', advanced: true},
            {name: 'NodeJS', advanced: false},
            {name: 'Python', advanced: false},
            {name: 'MySQL', advanced: false},
            {name: 'PostgreSQL', advanced: false},
            {name: 'MongoDB', advanced: false},
            {name: 'MSSQL', advanced: false}
          ]
        },
        {
          id: 3,
          name: 'Tools',
          icon: 'fas fa-wrench fa-3x',
          skills: [
            {name: 'Trello', advanced: true},
            {name: 'Jira', advanced: true},
            {name: 'Gnu/Linux', advanced: true},
            {name: 'SSH', advanced: true},
            {name: 'GIT', advanced: true},
            {name: 'Slack', advanced: false},
            {name: 'Subversion/SVN', advanced: false}
          ]
        }
      ],
      portfolio: [
        {
          id: 1,
          image: "/images/portfolio/zayousa.png",
          link: 'https://zayousa.com',
          technologie: 'WORDPRESS',
          isVideo: false
        },
        {
          id: 2,
          image: '/images/portfolio/falak.png',
          link: 'https://astrologie-khattabi.com',
          technologie: 'GHOST',
          isVideo: false
        },
        {
          id: 3,
          image: '/images/portfolio/mrcmaroc.png',
          link: 'https://mrcmaroc.org',
          technologie: 'WORDPRESS',
          isVideo: false
        },
        {
          id: 4,
          image: '/images/portfolio/demo-planksetting.mp4',
          link: 'https://planksetting.github.io/',
          technologie: 'PYGTK',
          isVideo: true
        },
        {
          id: 5,
          image: '/images/portfolio/demo-5x5.mp4',
          link: 'https://5x5game.github.io',
          technologie: 'JQUERY',
          isVideo: true
        }
      ],
      socialNetwork: [
        {link: 'https://github.com/karim88', className: 'text-github', icon: 'fab fa-github'},
        {link: 'https://linkedin.com/in/karim88', className: 'text-linkedin', icon: 'fab fa-linkedin'},
        {link: 'https://fb.com/herr.linux88', className: 'text-facebook', icon: 'fab fa-facebook'},
        {link: 'https://cv.karimslab.com/pdf/karim_oulad_chalha_en_6_1.pdf', className: 'text-danger', icon: 'fas fa-file-pdf'}
      ]
    }
  }
}
</script>
