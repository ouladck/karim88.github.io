import Timeline from '~/components/Timeline/Timeline';
export default {
  title: 'Components/Timeline',
  component: Timeline
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, {argTypes}) => ({
  components: {Timeline},
  props: Object.keys(argTypes),
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  template: `<Timeline :timeline="timeline" />`
});

export const Default = Template.bind({});
Default.args = {
  timeline: [
    {
      id: 11,
      position: 'Technical Project Manager',
      company: 'Gear9 - Groupe Thenext.Click',
      description: `<span>Participating in the development of many projects including <a href="https://www.inwi.ma/"
                                                                                            aria-label="inwi website">inwi website</a></span>`,
      time: 'Aug 2020 - Current',
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
}
