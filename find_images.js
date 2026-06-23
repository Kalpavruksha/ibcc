const fs = require('fs');

const files = [
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/app/layout.tsx',
  'src/app/gallery/GalleryClient.tsx',
  'src/app/about/page.tsx',
  'src/app/page.tsx'
];

files.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/"\/images\/[^"]+"/g);
    if (matches) {
      console.log(`\n--- ${f} ---`);
      const unique = [...new Set(matches)];
      unique.forEach(m => console.log(m));
    }
  } catch(e) {}
});
