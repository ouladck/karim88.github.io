import Portfolio from '~/components/Portfolio/Portfolio';
export default {
  title: 'Components/Portfolio',
  component: Portfolio
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, {argTypes}) => ({
  components: {Portfolio},
  props: Object.keys(argTypes),
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  template: `
    <Portfolio :projects="projects" />`
});

export const Default = Template.bind({});
Default.args = {
  projects: [
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
}
