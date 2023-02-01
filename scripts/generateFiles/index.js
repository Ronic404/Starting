const ask = require('./helpers/ask')
const createTemplate = require('./templates/createTemplate')

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

const getRequiredFiles = async () => {
    const files = {}

    files.css = await ask('Нужен ли вам css-файл (y или n) > ');
    files.storybook = await ask('Нужен ли вам storybook-файл (y или n) > ');

    return files
};

Promise.resolve(getRequiredFiles())
    .then((requiredFiles) => {
        createTemplate(layer, componentName, requiredFiles)
    })

