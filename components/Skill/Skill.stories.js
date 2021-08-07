import Skill from '~/components/Skill/Skill';
export default {
  title: 'Components/Skill',
  component: Skill
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, {argTypes}) => ({
  components: {Skill},
  props: Object.keys(argTypes),
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  template: `<Skill :skills="skills" />`
});

export const Default = Template.bind({});
Default.args = {
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
  ]
}
