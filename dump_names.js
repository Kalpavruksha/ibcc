const fs = require('fs');
const data = fs.readFileSync('src/data/products.ts', 'utf8');
const names = data.match(/name: "([^"]+)"/g);
console.log(names);
