const fs = require('fs');
const path = require('path');
const screenName = process.argv[2];

const screenTemplatePath = path.join(
	process.cwd(),
	'templates/screen/Screen.tsx'
);
const indexTemplatePath = path.join(process.cwd(), 'templates/screen/index.ts');

const dirPath = path.join(process.cwd(), 'app/screens/', screenName);
const outIndexPath = path.join(dirPath, 'index.ts');
const outTemplatePath = path.join(dirPath, 'index.ts');

const screenTemplate = fs.readFileSync(screenTemplatePath, {
	encoding: 'utf8',
});
const indexTemplate = fs.readFileSync(indexTemplatePath, { encoding: 'utf8' });

const screenOutput = screenTemplate.replace(/__screen_name__/g, screenName);
const indexOutput = indexTemplate.replace(/__screen_name__/g, screenName);

const res = fs.mkdirSync(dirPath);
fs.writeFileSync(path.join(dirPath, 'index.ts'), indexOutput);
fs.writeFileSync(path.join(dirPath, screenName + '.tsx'), screenOutput);

console.log('created!');
