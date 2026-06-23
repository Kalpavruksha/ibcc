const fs = require('fs');

let oldCode = fs.readFileSync('src/data/products.ts', 'utf8');

oldCode = oldCode.replace(/  \| "Sprockets"\n/, '');
oldCode = oldCode.replace(/  \| "Rice Mill Spares"\n/, '');
oldCode = oldCode.replace(/  \| "Feed Spares"\n/, '');
oldCode = oldCode.replace(/  "Sprockets",\n/, '');
oldCode = oldCode.replace(/  "Rice Mill Spares",\n/, '');
oldCode = oldCode.replace(/  "Feed Spares",\n/, '');

fs.writeFileSync('src/data/products.ts', oldCode);

let pc = fs.readFileSync('src/app/products/ProductsClient.tsx', 'utf8');
pc = pc.replace(/  "Sprockets": ".*",\n/, '');
pc = pc.replace(/  "Rice Mill Spares": ".*",\n/, '');
pc = pc.replace(/  "Feed Spares": ".*",\n/, '');

fs.writeFileSync('src/app/products/ProductsClient.tsx', pc);

console.log("Cleanup complete");
