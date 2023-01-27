import { MainPage } from './MainPage'

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <MainPage {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
