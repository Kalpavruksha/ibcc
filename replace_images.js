const fs = require('fs');

let data = fs.readFileSync('src/data/products.ts', 'utf8');

// Global replacements of old placeholder image paths with the closest real image category equivalent
data = data.replace(/"\/images\/product-bearings\.png"/g, '"/images/real image/skf-bearings-solutions.jpg"');
data = data.replace(/"\/images\/product-bearing-taper\.png"/g, '"/images/real image/tapper-roller.webp"');

data = data.replace(/"\/images\/product-vbelts\.png"/g, '"/images/real image/Fenner-Belts.jpg"');
data = data.replace(/"\/images\/product-vpulley\.png"/g, '"/images/real image/V-belt-Pulley.jpeg"');
data = data.replace(/"\/images\/real-photo-chain\.png"/g, '"/images/real image/roller-chain-sprocket.jpg"');
data = data.replace(/"\/images\/real-photo-sprockets\.png"/g, '"/images/real image/roller-chain-sprocket.jpg"');
data = data.replace(/"\/images\/product-pulley-block\.png"/g, '"/images/real image/indef-chain-pully-blocks-500x500.webp"');
data = data.replace(/"\/images\/product-conveyor-belts\.png"/g, '"/images/real image/V- type Conveyor-Belt.webp"');
data = data.replace(/"\/images\/product-gearboxes\.png"/g, '"/images/real image/SMSR-TBD-Gearbox.jpg"');
data = data.replace(/"\/images\/product-oil-seals\.png"/g, '"/images/real image/OIL SEALS.jfif"');
data = data.replace(/"\/images\/product-wire-rope\.png"/g, '"/images/real image/WIRE ROPE 1.webp"');
data = data.replace(/"\/images\/product-fasteners\.png"/g, '"/images/real image/PATTA BOLTS.jpg"');
data = data.replace(/"\/images\/product-material-handling\.png"/g, '"/images/real image/TROLLEY WHEELS.webp"');
data = data.replace(/"\/images\/product-ricemill-spares\.png"/g, '"/images/real image/plastic-elevator-buckets.webp"');
data = data.replace(/"\/images\/product-crusher-spares\.png"/g, '"/images/real image/impact-idlers stone crushers.jpg"');
data = data.replace(/"\/images\/product-feed-spares\.png"/g, '"/images/real image/lagging sheet converyer belt.webp"');
data = data.replace(/"\/images\/real-photo-idlers\.png"/g, '"/images/real image/rollers-and-idlers.jpg"');

// Specific overrides to map certain products to their exact real images
data = data.replace(
  /name: "FAG Spherical Roller Bearing",\s+category: "Bearings",\s+image: "\/images\/real image\/skf-bearings-solutions\.jpg"/,
  'name: "FAG Spherical Roller Bearing",\n    category: "Bearings",\n    image: "/images/real image/Ball Bearings.webp"'
);

data = data.replace(
  /name: "NTN Angular Contact Bearing",\s+category: "Bearings",\s+image: "\/images\/real image\/skf-bearings-solutions\.jpg"/,
  'name: "NTN Angular Contact Bearing",\n    category: "Bearings",\n    image: "/images/real image/Ball Bearings.webp"'
);

data = data.replace(
  /name: "ARB Pillow Block Bearing \(UCF Series\)",\s+category: "Bearings",\s+image: "\/images\/real image\/skf-bearings-solutions\.jpg"/,
  'name: "ARB Pillow Block Bearing (UCF Series)",\n    category: "Bearings",\n    image: "/images/real image/pillow-block-bearing.jpg"'
);

data = data.replace(
  /name: "Plumber Block Bearing \(SY\/SNH Series\)",\s+category: "Bearings",\s+image: "\/images\/real image\/skf-bearings-solutions\.jpg"/,
  'name: "Plumber Block Bearing (SY/SNH Series)",\n    category: "Bearings",\n    image: "/images/real image/pillow-block-bearing.jpg"'
);

data = data.replace(
  /name: "Bearing Sleeve \/ Adapter Sleeve",\s+category: "Bearings",\s+image: "\/images\/real image\/skf-bearings-solutions\.jpg"/,
  'name: "Bearing Sleeve / Adapter Sleeve",\n    category: "Bearings",\n    image: "/images/real image/BEARING SLEEVE.jpeg"'
);

data = data.replace(
  /name: "Needle Roller Bearing",\s+category: "Bearings",\s+image: "\/images\/real image\/skf-bearings-solutions\.jpg"/,
  'name: "Needle Roller Bearing",\n    category: "Bearings",\n    image: "/images/real image/nidel bearins.jfif"'
);

data = data.replace(
  /name: "Pin Bush Coupling \(Flange Coupling\)",\s+category: "Oil Seals & Couplings",\s+image: "\/images\/real image\/OIL SEALS\.jfif"/,
  'name: "Pin Bush Coupling (Flange Coupling)",\n    category: "Oil Seals & Couplings",\n    image: "/images/real image/PINBUSH COUPLING FENNER.png"'
);

data = data.replace(
  /name: "Jaw \/ Spider Coupling",\s+category: "Oil Seals & Couplings",\s+image: "\/images\/real image\/OIL SEALS\.jfif"/,
  'name: "Jaw / Spider Coupling",\n    category: "Oil Seals & Couplings",\n    image: "/images/real image/star coupling.webp"'
);

data = data.replace(
  /name: "Chain Coupling Set",\s+category: "Oil Seals & Couplings",\s+image: "\/images\/real image\/OIL SEALS\.jfif"/,
  'name: "Chain Coupling Set",\n    category: "Oil Seals & Couplings",\n    image: "/images/real image/nylon-gear-coupling.webp"'
);

data = data.replace(
  /name: "Elevator Buckets PVC\/Metal",\s+category: "Material Handling",\s+image: "\/images\/real image\/TROLLEY WHEELS\.webp"/,
  'name: "Elevator Buckets PVC/Metal",\n    category: "Material Handling",\n    image: "/images/real image/Elevator-Buckets metal.jpg"'
);

data = data.replace(
  /name: "Polyester Webbing Sling \(Flat \/ Round\)",\s+category: "Wire Rope & Slings",\s+image: "\/images\/real image\/WIRE ROPE 1\.webp"/,
  'name: "Polyester Webbing Sling (Flat / Round)",\n    category: "Wire Rope & Slings",\n    image: "/images/real image/flat slings.png"'
);

data = data.replace(
  /name: "Manual Chain Block . 1 Ton",\s+category: "Chain Pulley Block",\s+image: "\/images\/real image\/indef-chain-pully-blocks-500x500\.webp"/,
  'name: "Manual Chain Block — 1 Ton",\n    category: "Chain Pulley Block",\n    image: "/images/real image/indef-chain-pulley-block.jpeg"'
);

data = data.replace(
  /name: "Helical Gearbox \(Foot Mount\)",\s+category: "Gearboxes",\s+image: "\/images\/real image\/SMSR-TBD-Gearbox\.jpg"/,
  'name: "Helical Gearbox (Foot Mount)",\n    category: "Gearboxes",\n    image: "/images/real image/fenner-reduction-gear-boxes-f-20260309142734701.webp"'
);

fs.writeFileSync('src/data/products.ts', data);
console.log("Updated products.ts");
