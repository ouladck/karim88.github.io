import WhoAmI from '~/components/WhoAmI/WhoAmI';
export default {
  title: 'Components/WhoAmI',
  component: WhoAmI
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args, {argTypes}) => ({
  components: {WhoAmI},
  props: Object.keys(argTypes),
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  template: `<WhoAmI :name="name" :background-img="backgroundImg" :tel="tel" :email="email"
                     :address="address" :description="description" />`
});

export const Default = Template.bind({});
Default.args = {
  name: 'Karim oulad Chalha',
  address: `41 Rue Laymoune, Hay Cheikh Lamfadel, 11020 Salé`,
  description: `I'm an eager and experienced Technical Project Manager with a demonstrated history of working in the computer software industry. Skilled in Angular, Vuejs, Laravel and Python. Strong engineering professional and ardent about open source and the new IT with a Master focused in \`Master Business Analytics and Big Data\` from FST Settat.`,
  tel: '+2126-4162-3527',
  email: 'ouladchalha.k@gmail.com',
  backgroundImg: 'https://www.karimslab.com/static/media/karim.0a796852.jpg',
}
