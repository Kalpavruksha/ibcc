const fs = require('fs');

const products = JSON.parse(fs.readFileSync('products_json.json', 'utf8'));

// 1. Missing image updates based on matching or adding
const updates = {
  "BLOCKS.webp": { name: "Blocks", category: "Chain Pulley Block" },
  "indef-chain-pulley-block.jpeg": { name: "Indef Chain Pulley Block", category: "Chain Pulley Block" },
  "Industrial-V-Belt-Pulley.jpg": { name: "Industrial V-Belt Pulley", category: "V-Pulley" },
  "NBC-Deep-Groove-Ball-Bearing.webp": { name: "NBC Deep Groove Ball Bearing", category: "Bearings" },
  "PIX belt.jpeg": { name: "PIX Belt", category: "V-Belts" },
  "POLY F FENNER V BELTS.jpg": { name: "Poly F Fenner V Belts", category: "V-Belts" },
  "square nut bolt.jpeg": { name: "Square Nut Bolt", category: "Fasteners & Hardware" },
  "Thrust-Roller-Bearing.jpg": { name: "Thrust Roller Bearing", category: "Bearings" },
  "welding-rod.jpeg": { name: "Welding Rod", category: "Fasteners & Hardware" },
  "BEARING SLEEVE.jpeg": { name: "Bearing Sleeve", category: "Bearings" },
  "Ball Bearings.webp": { name: "Ball Bearings", category: "Bearings" },
  "Elevator-Buckets metal.jpg": { name: "Elevator Buckets Metal", category: "Material Handling" },
  "Fenner-Belts.jpg": { name: "Fenner Belts", category: "V-Belts" },
  "OIL SEALS.jfif": { name: "Oil Seals", category: "Oil Seals & Couplings" },
  "PATTA BOLTS.jpg": { name: "Patta Bolts", category: "Fasteners & Hardware" },
  "PINBUSH COUPLING FENNER.png": { name: "Pinbush Coupling Fenner", category: "Oil Seals & Couplings" },
  "SMSR-TBD-Gearbox.jpg": { name: "SMSR TBD Gearbox", category: "Gearboxes" },
  "TROLLEY WHEELS.webp": { name: "Trolley Wheels", category: "Material Handling" },
  "V- type Conveyor-Belt.webp": { name: "V- Type Conveyor Belt", category: "Conveyor Belts" },
  "V-belt-Pulley.jpeg": { name: "V-Belt Pulley", category: "V-Pulley" },
  "WIRE ROPE 1.webp": { name: "Wire Rope 1", category: "Wire Rope & Slings" },
  "fenner-reduction-gear-boxes-f-20260309142734701.webp": { name: "Fenner Reduction Gear Boxes", category: "Gearboxes" },
  "flat slings.png": { name: "Flat Slings", category: "Wire Rope & Slings" },
  "impact-idlers stone crushers.jpg": { name: "Impact Idlers Stone Crushers", category: "Crusher Spares" },
  "indef-chain-pully-blocks-500x500.webp": { name: "Indef Chain Pulley Blocks 500x500", category: "Chain Pulley Block" },
  "lagging sheet converyer belt.webp": { name: "Lagging Sheet Conveyor Belt", category: "Conveyor Belts" },
  "nidel bearins.jfif": { name: "Nidel Bearings", category: "Bearings" },
  "nylon-gear-coupling.webp": { name: "Nylon Gear Coupling", category: "Oil Seals & Couplings" },
  "pillow-block-bearing.jpg": { name: "Pillow Block Bearing", category: "Bearings" },
  "plastic-elevator-buckets.webp": { name: "Plastic Elevator Buckets", category: "Material Handling" },
  "roller-chain-sprocket.jpg": { name: "Roller Chain Sprocket", category: "Roller Chain" },
  "rollers-and-idlers.jpg": { name: "Rollers And Idlers", category: "Conveyor Belts" },
  "skf-bearings-solutions.jpg": { name: "SKF Bearings Solutions", category: "Bearings" },
  "star coupling.webp": { name: "Star Coupling", category: "Oil Seals & Couplings" },
  "tapper-roller.webp": { name: "Tapper Roller", category: "Bearings" },
};

// Start fresh with exactly what the user gave
let newProducts = [];
let idCounter = 1;

for (const [imgFile, details] of Object.entries(updates)) {
  const pId = `prod-` + idCounter++;
  newProducts.push({
    id: pId,
    name: details.name,
    category: details.category,
    image: `/images/real image/${imgFile}`,
    description: `Premium quality ${details.name} for industrial applications.`,
  });
}

// Generate the new file
let oldCode = fs.readFileSync('src/data/products.ts', 'utf8');
const regex = /export const products: Product\[\] = \[[\s\S]*\];/;

const newArrStr = "export const products: Product[] = " + JSON.stringify(newProducts, null, 2).replace(/"([^"]+)":/g, '$1:') + ";";
const newCode = oldCode.replace(regex, newArrStr);

fs.writeFileSync('src/data/products.ts', newCode);
console.log("Written " + newProducts.length + " products.");
