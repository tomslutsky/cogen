const fs = require('fs');
const path = require('path');

const DEFAULT_TEMPLATE_DIR = 'lib/templates/component';
const DEFULT_TARGET_DIR = 'components';
const DEFAULT_EXT = 'js';

function generateComponent({
	targetPath = DEFULT_TARGET_DIR,
	templatePath,
	ext = DEFAULT_EXT,
	componentName,
}) {
	// template is taken either from args or from templates/component/Component.jsx
	const componentTemplatePath =
		templatePath || path.join(DEFAULT_TEMPLATE_DIR, `Component.jsx`);

	const indexTemplatePath = path.join(
		process.cwd(),
		'lib/templates/component/index.js'
	);

	const indexFileName = `index.${ext}`;
	const componentFileName = `${componentName}.${ext}x`;

	const dirPath = path.join(targetPath, componentName);
	const targetIndexPath = path.join(dirPath, indexFileName);
	const targetComponentPath = path.join(dirPath, componentFileName);

	const componentTemplate = fs.readFileSync(componentTemplatePath, {
		encoding: 'utf8',
	});
	const indexTemplate = fs.readFileSync(indexTemplatePath, {
		encoding: 'utf8',
	});

	const componentOutput = componentTemplate.replace(
		/__component_name__/g,
		componentName
	);
	const indexOutput = indexTemplate.replace(
		/__component_name__/g,
		componentName
	);

	const isComponentsDirExists = fs.existsSync(dirPath);
	if (!isComponentsDirExists) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
	fs.writeFileSync(targetIndexPath, indexOutput);
	fs.writeFileSync(targetComponentPath, componentOutput);

	console.log('created files:');
	console.log(targetIndexPath);
	console.log(targetComponentPath);
}

module.exports = generateComponent;
