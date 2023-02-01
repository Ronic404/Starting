const fs = require('fs/promises')
const resolveRoot = require('../helpers/resolveRoot')
const componentTemplate = require('./componentTemplate')
const storyTemplate = require('./storyTemplate')
const styleTemplate = require('./styleTemplate')
const publicApiTemplate = require('./publicApiTemplate')

module.exports = async (layer, componentName, requiredFiles) => {
  const createComponent = async () => {
    try {
      await fs.writeFile(
        resolveRoot('src', layer, componentName, `${componentName}.jsx`),
        componentTemplate(componentName),
      )

      if (requiredFiles.storybook) {
          await fs.writeFile(
            resolveRoot('src', layer, componentName, `${componentName}.stories.jsx`),
            storyTemplate(layer, componentName),
          )
      }

      if (requiredFiles.css) {
          await fs.writeFile(
            resolveRoot('src', layer, componentName, `${componentName}.module.scss`),
            styleTemplate(componentName),
          )
      }

      await fs.writeFile(
        resolveRoot('src', layer, componentName, 'index.js'),
        publicApiTemplate(componentName)
      )
    } catch (error) {
      console.log('Не удалось создать компонент')
    }
  }

  await createComponent()
}
