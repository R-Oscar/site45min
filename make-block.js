const fs = require('fs');
const dir = 'src/blocks';
const scssEntry = 'src/index.scss';

let blockName = process.argv[2];
let path = `${dir}/${blockName}`;
if (fs.existsSync(path)) {
    throw new Error('Block already exists');
}

fs.mkdirSync(path);

// Creating stylesheet
fs.writeFile(`${path}/${blockName}.scss`, '', (err) => {
   if (err) {
       return console.log(err);
   }

   console.log(`Created ${path}/${blockName}.scss`);
});

// Creating layout
fs.writeFile(`${path}/${blockName}.pug`, '', (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Created ${path}/${blockName}.pug`);
});

fs.appendFile(scssEntry, `\n@import 'blocks/${blockName}/${blockName}';`, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`Added to ${scssEntry}`);
});