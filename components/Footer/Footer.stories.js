import Footer from '~/components/Footer/Footer';
export default {
  title: 'Components/Footer',
  component: Footer
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, {argTypes}) => ({
  components: {Footer},
  props: Object.keys(argTypes),
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  template: `<Footer :tel="tel" :email="email"
                     :background-img="backgroundImg" />`
});

export const Default = Template.bind({});
Default.args = {
  tel: '+2126-4162-3527',
  email: 'ouladchalha.k@gmail.com',
  backgroundImg: 'https://picsum.photos/1200/300',
}
