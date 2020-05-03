const { program } = require('commander');
const { version } = require('../package.json');
const genereateComponent = require('./generators/component');
program.version(version);

program
	.arguments('<name>')
	.option('-P, --path <path>', 'Path for the component to be created')
	.option('-ts, --typescript', 'Typescript usgae', false)
	.option('-T, --template <template>', 'Template file for the component')
	.parse(process.argv);

genereateComponent({
	targetPath: program.path,
	ext: program.typescript ? 'ts' : 'js',
	componentName: program.args[0],
	templatePath: program.template,
});
