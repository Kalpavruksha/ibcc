/**
 * PRODUCT DATA FILE â€” Industrial Bearing & Chain Centre
 * -------------------------------------------------------
 * Edit this file to add, remove, or update products.
 * No component code needs to change â€” just edit the products array below.
 *
 * Category options (must match exactly):
 *   "Bearings" | "V-Belts" | "V-Pulley" | "Roller Chain"
 *   "Sprockets" | "Chain Pulley Block" | "Rice Mill Spares" | "Crusher Spares"
 *   "Conveyor Belts" | "Feed Spares" | "Gearboxes" | "Oil Seals & Couplings"
 *   "Wire Rope & Slings" | "Fasteners & Hardware" | "Material Handling"
 */

export type ProductCategory =
  | "Bearings"
  | "V-Belts"
  | "V-Pulley"
  | "Roller Chain"
  | "Chain Pulley Block"
  | "Crusher Spares"
  | "Conveyor Belts"
  | "Gearboxes"
  | "Oil Seals & Couplings"
  | "Wire Rope & Slings"
  | "Fasteners & Hardware"
  | "Material Handling";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  description: string;
  brand?: string;
};

export const ALL_CATEGORIES: ProductCategory[] = [
  "Bearings",
  "V-Belts",
  "V-Pulley",
  "Roller Chain",
  "Chain Pulley Block",
  "Conveyor Belts",
  "Gearboxes",
  "Oil Seals & Couplings",
  "Wire Rope & Slings",
  "Fasteners & Hardware",
  "Material Handling",
  "Crusher Spares",
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Blocks",
    category: "Chain Pulley Block",
    image: "/images/real image/BLOCKS.webp",
    description: "Premium quality Blocks for industrial applications."
  },
  {
    id: "prod-2",
    name: "Indef Chain Pulley Block",
    category: "Chain Pulley Block",
    image: "/images/real image/indef-chain-pulley-block.jpeg",
    description: "Premium quality Indef Chain Pulley Block for industrial applications."
  },
  {
    id: "prod-3",
    name: "Industrial V-Belt Pulley",
    category: "V-Pulley",
    image: "/images/real image/Industrial-V-Belt-Pulley.jpg",
    description: "Premium quality Industrial V-Belt Pulley for industrial applications."
  },
  
  {
    id: "prod-5",
    name: "PIX Belt",
    category: "V-Belts",
    image: "/images/real image/PIX belt.jpeg",
    description: "Premium quality PIX Belt for industrial applications."
  },
  {
    id: "prod-6",
    name: "Poly F Fenner V Belts",
    category: "V-Belts",
    image: "/images/real image/POLY F FENNER V BELTS.jpg",
    description: "Premium quality Poly F Fenner V Belts for industrial applications."
  },
  {
    id: "prod-7",
    name: "Square Nut Bolt",
    category: "Fasteners & Hardware",
    image: "/images/real image/square nut bolt.jpeg",
    description: "Premium quality Square Nut Bolt for industrial applications."
  },
  {
    id: "prod-8",
    name: "Thrust Roller Bearing",
    category: "Bearings",
    image: "/images/real image/Thrust-Roller-Bearing.jpg",
    description: "Premium quality Thrust Roller Bearing for industrial applications."
  },
  {
    id: "prod-9",
    name: "Welding Rod",
    category: "Fasteners & Hardware",
    image: "/images/real image/welding-rod.jpeg",
    description: "Premium quality Welding Rod for industrial applications."
  },
  {
    id: "prod-10",
    name: "Bearing Sleeve",
    category: "Bearings",
    image: "/images/real image/BEARING SLEEVE.jpeg",
    description: "Premium quality Bearing Sleeve for industrial applications."
  },
  {
    id: "prod-11",
    name: "Ball Bearings",
    category: "Bearings",
    image: "/images/real image/Ball Bearings.webp",
    description: "Premium quality Ball Bearings for industrial applications."
  },
  {
    id: "prod-12",
    name: "Elevator Buckets Metal",
    category: "Material Handling",
    image: "/images/real image/Elevator-Buckets metal.jpg",
    description: "Premium quality Elevator Buckets Metal for industrial applications."
  },
  {
    id: "prod-13",
    name: "Fenner Belts",
    category: "V-Belts",
    image: "/images/real image/Fenner-Belts.jpg",
    description: "Premium quality Fenner Belts for industrial applications."
  },
  {
    id: "prod-14",
    name: "Oil Seals",
    category: "Oil Seals & Couplings",
    image: "/images/real image/OIL SEALS.jfif",
    description: "Premium quality Oil Seals for industrial applications."
  },
  {
    id: "prod-15",
    name: "Patta Bolts",
    category: "Fasteners & Hardware",
    image: "/images/real image/PATTA BOLTS.jpg",
    description: "Premium quality Patta Bolts for industrial applications."
  },
  {
    id: "prod-16",
    name: "Pinbush Coupling Fenner",
    category: "Oil Seals & Couplings",
    image: "/images/real image/PINBUSH COUPLING FENNER.png",
    description: "Premium quality Pinbush Coupling Fenner for industrial applications."
  },
  {
    id: "prod-17",
    name: "SMSR TBD Gearbox",
    category: "Gearboxes",
    image: "/images/real image/SMSR-TBD-Gearbox.jpg",
    description: "Premium quality SMSR TBD Gearbox for industrial applications."
  },
  {
    id: "prod-18",
    name: "Trolley Wheels",
    category: "Material Handling",
    image: "/images/real image/TROLLEY WHEELS.webp",
    description: "Premium quality Trolley Wheels for industrial applications."
  },
  {
    id: "prod-19",
    name: "V- Type Conveyor Belt",
    category: "Conveyor Belts",
    image: "/images/real image/V- type Conveyor-Belt.webp",
    description: "Premium quality V- Type Conveyor Belt for industrial applications."
  },
  {
    id: "prod-20",
    name: "V-Belt Pulley",
    category: "V-Pulley",
    image: "/images/real image/V-belt-Pulley.jpeg",
    description: "Premium quality V-Belt Pulley for industrial applications."
  },
  {
    id: "prod-21",
    name: "Wire Rope 1",
    category: "Wire Rope & Slings",
    image: "/images/real image/WIRE ROPE 1.webp",
    description: "Premium quality Wire Rope 1 for industrial applications."
  },
  {
    id: "prod-22",
    name: "Fenner Reduction Gear Boxes",
    category: "Gearboxes",
    image: "/images/real image/fenner-reduction-gear-boxes-f-20260309142734701.webp",
    description: "Premium quality Fenner Reduction Gear Boxes for industrial applications."
  },
  {
    id: "prod-23",
    name: "Flat Slings",
    category: "Wire Rope & Slings",
    image: "/images/real image/flat slings.png",
    description: "Premium quality Flat Slings for industrial applications."
  },
  {
    id: "prod-24",
    name: "Impact Idlers Stone Crushers",
    category: "Crusher Spares",
    image: "/images/real image/impact-idlers stone crushers.jpg",
    description: "Premium quality Impact Idlers Stone Crushers for industrial applications."
  },
  {
    id: "prod-25",
    name: "Indef Chain Pulley Blocks 500x500",
    category: "Chain Pulley Block",
    image: "/images/real image/indef-chain-pully-blocks-500x500.webp",
    description: "Premium quality Indef Chain Pulley Blocks 500x500 for industrial applications."
  },
  {
    id: "prod-26",
    name: "Lagging Sheet Conveyor Belt",
    category: "Conveyor Belts",
    image: "/images/real image/lagging sheet converyer belt.webp",
    description: "Premium quality Lagging Sheet Conveyor Belt for industrial applications."
  },
  {
    id: "prod-27",
    name: "Nidel Bearings",
    category: "Bearings",
    image: "/images/real image/nidel bearins.jfif",
    description: "Premium quality Nidel Bearings for industrial applications."
  },
  {
    id: "prod-28",
    name: "Nylon Gear Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/real image/nylon-gear-coupling.webp",
    description: "Premium quality Nylon Gear Coupling for industrial applications."
  },
  {
    id: "prod-29",
    name: "Pillow Block Bearing",
    category: "Bearings",
    image: "/images/real image/pillow-block-bearing.jpg",
    description: "Premium quality Pillow Block Bearing for industrial applications."
  },
  {
    id: "prod-30",
    name: "Plastic Elevator Buckets",
    category: "Material Handling",
    image: "/images/real image/plastic-elevator-buckets.webp",
    description: "Premium quality Plastic Elevator Buckets for industrial applications."
  },
  {
    id: "prod-31",
    name: "Roller Chain Sprocket",
    category: "Roller Chain",
    image: "/images/real image/roller-chain-sprocket.jpg",
    description: "Premium quality Roller Chain Sprocket for industrial applications."
  },
  {
    id: "prod-32",
    name: "Rollers And Idlers",
    category: "Conveyor Belts",
    image: "/images/real image/rollers-and-idlers.jpg",
    description: "Premium quality Rollers And Idlers for industrial applications."
  },
  {
    id: "prod-33",
    name: "SKF Bearings Solutions",
    category: "Bearings",
    image: "/images/real image/skf-bearings-solutions.jpg",
    description: "Premium quality SKF Bearings Solutions for industrial applications."
  },
  {
    id: "prod-34",
    name: "Star Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/real image/star coupling.webp",
    description: "Premium quality Star Coupling for industrial applications."
  },
  {
    id: "prod-35",
    name: "Tapper Roller",
    category: "Bearings",
    image: "/images/real image/tapper-roller.webp",
    description: "Premium quality Tapper Roller for industrial applications."
  }
];


