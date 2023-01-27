import { Button } from './Button'

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Button {...args} />

export const Normal = Template.bind({})
Normal.args = {

}


