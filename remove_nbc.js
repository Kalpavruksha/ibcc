const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');
const regex = /\{\s*id: "[^"]+",\s*name: "NBC Deep Groove Ball Bearing",[\s\S]*?\},/g;
code = code.replace(regex, '');
fs.writeFileSync('src/data/products.ts', code);
console.log('Removed NBC Bearing');
