const fs = require('fs');
const code = fs.readFileSync('src/data/products.ts', 'utf8');
const usedImages = code.match(/"\/images\/real image\/[^"]+"/g) || [];
const unique = [...new Set(usedImages)].map(s => s.replace(/"/g, '').replace('/images/real image/', ''));

const allImages = fs.readdirSync('public/images/real image');
const missing = allImages.filter(img => !unique.includes(img));

console.log('--- Missing Images ---');
missing.forEach(m => console.log(m));

console.log('\n--- Used Images ---');
unique.forEach(u => console.log(u));
