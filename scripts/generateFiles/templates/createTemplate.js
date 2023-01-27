const fs = require('fs/promises')
const createFiles = require('./createFiles')
const resolveRoot = require('../helpers/resolveRoot')

module.exports = async (layer, componentName) => {
  const componentUpperName = componentName[0].toUpperCase() + componentName.slice(1)

  try {
    await fs.mkdir(resolveRoot('src', layer, componentUpperName))
  } catch (error) {
    console.log(`Не удалось создать директорию для компонента ${componentUpperName}`)
  }

  await createFiles(layer, componentUpperName)
}


