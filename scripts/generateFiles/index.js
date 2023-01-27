const createTemplate = require('./templates/createFolder')

// Сегменты
const layer = process.argv[2] // получаем название слоя
const componentName = process.argv[3] // получаем название компонента

const layers = ['pages', 'components']

if (!layer || !layers.includes(layer)) {
	console.log(`Укажите слой ${layers.join(' или ')}`)
}

if (!componentName) {
	console.log('Укажите название компонента')
}

createTemplate(layer, componentName)



