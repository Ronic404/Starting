module.exports = (layer, componentName) => `import { ${componentName} } from './${componentName}'

export default {
  title: '${layer}/${componentName}',
  component: ${componentName},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <${componentName} {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
`
