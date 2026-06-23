const fs = require('fs');

let data = fs.readFileSync('src/data/products.ts', 'utf8');

// Replace in comments
data = data.replace(' | "Fenner Poly-F"', '');

// Replace in types
data = data.replace('  | "Fenner Poly-F"\n', '');

// Replace in ALL_CATEGORIES
data = data.replace('  "Fenner Poly-F",\n', '');

// Replace in actual products
data = data.replace(/category: "Fenner Poly-F"/g, 'category: "V-Belts"');

// Replace section header comment if present (just to be clean)
data = data.replace('// â”€â”€ FENNER POLY-F â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€', '');
// Wait, the encoding of "â”€â”€ FENNER POLY-F â”€â”€" is weird because of utf8 reading ANSI characters. 
// Let's use regex to remove that section comment
data = data.replace(/\/\/.*FENNER POLY-F.*/g, '');

fs.writeFileSync('src/data/products.ts', data);
console.log('Done');
