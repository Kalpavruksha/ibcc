/**
 * PRODUCT DATA FILE â€” Industrial Bearing & Chain Centre
 * -------------------------------------------------------
 * Edit this file to add, remove, or update products.
 * No component code needs to change â€” just edit the products array below.
 *
 * Category options (must match exactly):
 *   "Bearings" | "V-Belts" | "Fenner Poly-F" | "V-Pulley" | "Roller Chain"
 *   "Sprockets" | "Chain Pulley Block" | "Rice Mill Spares" | "Crusher Spares"
 *   "Conveyor Belts" | "Feed Spares" | "Gearboxes" | "Oil Seals & Couplings"
 *   "Wire Rope & Slings" | "Fasteners & Hardware" | "Material Handling"
 */

export type ProductCategory =
  | "Bearings"
  | "V-Belts"
  | "Fenner Poly-F"
  | "V-Pulley"
  | "Roller Chain"
  | "Sprockets"
  | "Chain Pulley Block"
  | "Rice Mill Spares"
  | "Crusher Spares"
  | "Conveyor Belts"
  | "Feed Spares"
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
  "Fenner Poly-F",
  "V-Pulley",
  "Roller Chain",
  "Sprockets",
  "Chain Pulley Block",
  "Conveyor Belts",
  "Gearboxes",
  "Oil Seals & Couplings",
  "Wire Rope & Slings",
  "Fasteners & Hardware",
  "Material Handling",
  "Rice Mill Spares",
  "Crusher Spares",
  "Feed Spares",
];

export const products: Product[] = [
  // â”€â”€ BEARINGS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "skf-deep-groove-ball-bearing",
    name: "SKF Deep Groove Ball Bearing",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "Genuine SKF deep groove ball bearings for general industrial use, available in multiple sizes (6200â€“6320 series).",
    brand: "SKF",
  },
  {
    id: "fag-spherical-roller-bearing",
    name: "FAG Spherical Roller Bearing",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "FAG spherical roller bearings designed for heavy radial and axial loads in demanding industrial environments.",
    brand: "FAG",
  },
  {
    id: "ntn-angular-contact-bearing",
    name: "NTN Angular Contact Bearing",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "NTN angular contact ball bearings for combined radial and axial loads, suitable for high-speed applications.",
    brand: "NTN",
  },
  {
    id: "arb-pillow-block-bearing",
    name: "ARB Pillow Block Bearing (UCF Series)",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "ARB housed pillow block bearings for easy mounting and alignment in conveyor and mill applications.",
    brand: "ARB",
  },
  {
    id: "nbc-taper-roller-bearing",
    name: "NBC Taper Roller Bearing",
    category: "Bearings",
    image: "/images/product-bearing-taper.png",
    description: "NBC taper roller bearings for axial and radial load capacity, widely used in gearboxes and wheel hubs.",
    brand: "NBC",
  },
  {
    id: "plumber-block-bearing",
    name: "Plumber Block Bearing (SY/SNH Series)",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "Heavy-duty plumber block bearings for shaft support in conveyor and heavy machinery installations.",
  },
  {
    id: "bearing-sleeve",
    name: "Bearing Sleeve / Adapter Sleeve",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "Adapter and withdrawal sleeves for mounting bearings on plain shafts without keyways â€” all standard sizes available.",
  },
  {
    id: "skf-self-aligning-bearing",
    name: "Self-Aligning Ball Bearing (1200â€“1316 Series)",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "Self-aligning ball bearings that accommodate shaft misalignment â€” ideal for agricultural machinery and conveyors.",
    brand: "SKF",
  },
  {
    id: "needle-roller-bearing",
    name: "Needle Roller Bearing",
    category: "Bearings",
    image: "/images/product-bearings.png",
    description: "Compact needle roller bearings for high radial load capacity in limited space â€” used in gearboxes and pumps.",
  },

  // â”€â”€ V-BELTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "vbelt-a-series",
    name: "V-Belt â€” A Section (A26â€“A96)",
    category: "V-Belts",
    image: "/images/product-vbelts.png",
    description: "Standard A-section V-belts for light to medium power transmission in fans, pumps, and general machinery.",
  },
  {
    id: "vbelt-b-series",
    name: "V-Belt â€” B Section (B30â€“B120)",
    category: "V-Belts",
    image: "/images/product-vbelts.png",
    description: "B-section V-belts for medium to heavy-duty drives in industrial and agricultural equipment.",
  },
  {
    id: "vbelt-c-series",
    name: "V-Belt â€” C Section (C38â€“C240)",
    category: "V-Belts",
    image: "/images/product-vbelts.png",
    description: "Heavy-duty C-section V-belts for high-torque industrial applications including crushers and compressors.",
  },
  {
    id: "vbelt-d-series",
    name: "V-Belt â€” D Section / Z Section",
    category: "V-Belts",
    image: "/images/product-vbelts.png",
    description: "D-section and Z-section V-belts for high-horsepower drives and precision timing applications.",
  },
  {
    id: "fenner-eco-plus-vbelt",
    name: "Fenner Eco Plus V-Belt",
    category: "V-Belts",
    image: "/images/product-vbelts.png",
    description: "Fenner Eco Plus wrapped V-belts with enhanced grip and longer service life for industrial power drives.",
    brand: "Fenner",
  },
  {
    id: "3-pin-roller-set",
    name: "3-Pin Roller Sets",
    category: "V-Belts",
    image: "/images/product-vbelts.png",
    description: "3-pin roller sets for power transmission and timing applications in industrial machinery drives.",
  },

  // â”€â”€ FENNER POLY-F â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "fenner-polyf-plus-belt",
    name: "Fenner Poly-F Plus Belt",
    category: "Fenner Poly-F",
    image: "/images/product-vbelts.png",
    description: "Fenner Poly-F Plus raw-edge cogged V-belts â€” superior grip, greater flexibility, up to 30% more power than standard wrapped belts.",
    brand: "Fenner",
  },
  {
    id: "fenner-polyf-spc",
    name: "Fenner Poly-F SPC Belt",
    category: "Fenner Poly-F",
    image: "/images/product-vbelts.png",
    description: "Fenner Poly-F SPC raw-edge cogged wedge belt for heavy-duty industrial drives â€” heat and oil resistant.",
    brand: "Fenner",
  },
  {
    id: "fenner-polyf-wedge-belt",
    name: "Fenner Poly-F Wedge Belt (SP Section)",
    category: "Fenner Poly-F",
    image: "/images/product-vbelts.png",
    description: "Fenner wedge belts in SPA, SPB, SPC sections for compact drive systems requiring high power density.",
    brand: "Fenner",
  },
  {
    id: "fenner-polyf-timing-belt",
    name: "Fenner Timing Belt (HTD/T Series)",
    category: "Fenner Poly-F",
    image: "/images/product-vbelts.png",
    description: "Fenner HTD and T-section timing belts for synchronous power transmission with no slippage.",
    brand: "Fenner",
  },

  // â”€â”€ V-PULLEY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "ci-vgroove-pulley",
    name: "Cast Iron V-Groove Pulley (SPZ/SPA/SPB/SPC)",
    category: "V-Pulley",
    image: "/images/product-vpulley.png",
    description: "Precision-machined cast iron V-groove pulleys for standard V-belt and Poly-F belt drives, all taper bore sizes.",
  },
  {
    id: "taper-lock-pulley",
    name: "Taper Lock Pulley",
    category: "V-Pulley",
    image: "/images/product-vpulley.png",
    description: "Taper lock style V-pulleys for easy mounting and removal without keyways, suitable for heavy-duty applications.",
  },
  {
    id: "solid-flat-pulley",
    name: "Solid / Flat Belt Pulley",
    category: "V-Pulley",
    image: "/images/product-vpulley.png",
    description: "Solid and flat rim pulleys in various face widths and diameters for flat belt power transmission systems.",
  },
  {
    id: "pto-pulley",
    name: "PTO Pulleys (Hollow/Solid Bore)",
    category: "V-Pulley",
    image: "/images/product-vpulley.png",
    description: "PTO pulleys with hollow or solid bore options for agricultural machinery and rice mill drive systems.",
  },
  {
    id: "pulley-bush",
    name: "Pulley Bush (Taper Lock Bush)",
    category: "V-Pulley",
    image: "/images/product-vpulley.png",
    description: "Taper lock bushes for quick and accurate pulley and sprocket mounting on shafts â€” 1008 to 5050 series.",
  },
  {
    id: "pulley-hollow-solid",
    name: "Pulley Hollow/Solid â€” Rice Mill Type",
    category: "V-Pulley",
    image: "/images/product-vpulley.png",
    description: "Hollow and solid bore pulleys specifically designed for rice mill and feed mill machinery drives.",
  },

  // â”€â”€ ROLLER CHAIN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "rolon-simplex-roller-chain",
    name: "Rolon Simplex Roller Chain (06Bâ€“32B)",
    category: "Roller Chain",
    image: "/images/real-photo-chain.png",
    description: "Rolon simplex roller chains in BS/ISO pitch sizes for standard conveyor, elevator, and drive applications.",
    brand: "Rolon",
  },
  {
    id: "diamond-duplex-roller-chain",
    name: "Diamond Duplex Roller Chain",
    category: "Roller Chain",
    image: "/images/real-photo-chain.png",
    description: "Diamond duplex and triplex roller chains for high-torque multi-strand drive applications in industrial equipment.",
    brand: "Diamond",
  },
  {
    id: "hero-industrial-chain",
    name: "Hero Industrial Chain",
    category: "Roller Chain",
    image: "/images/real-photo-chain.png",
    description: "Hero brand industrial roller chains for agricultural, conveyor, and general purpose transmission drives.",
    brand: "Hero",
  },
  {
    id: "ansi-roller-chain",
    name: "ANSI Standard Roller Chain (#40â€“#120)",
    category: "Roller Chain",
    image: "/images/real-photo-chain.png",
    description: "ANSI standard roller chains (40, 50, 60, 80, 100, 120 pitch) for machinery manufactured to American standards.",
  },
  {
    id: "heavy-duty-conveyor-chain",
    name: "Heavy Duty Conveyor Chain (BS/ISO)",
    category: "Roller Chain",
    image: "/images/real-photo-chain.png",
    description: "Extended pitch conveyor chains for bucket elevators, apron conveyors, and drag chain systems.",
  },

  // â”€â”€ SPROCKETS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "plain-bore-sprocket",
    name: "Plain Bore Sprocket (BS/ANSI)",
    category: "Sprockets",
    image: "/images/real-photo-sprockets.png",
    description: "Precision-machined plain bore sprockets in all standard BS and ANSI chain pitches, 8T to 120T tooth range.",
  },
  {
    id: "keyway-hub-sprocket",
    name: "Finished Bore Sprocket with Hub",
    category: "Sprockets",
    image: "/images/real-photo-sprockets.png",
    description: "Hubbed sprockets with machined keyway and set screw for direct shaft mounting in conveyor and drive applications.",
  },
  {
    id: "taper-bore-sprocket",
    name: "Taper Lock Sprocket",
    category: "Sprockets",
    image: "/images/real-photo-sprockets.png",
    description: "Taper lock sprockets for quick and accurate alignment on shafts in high-torque chain drive systems.",
  },
  {
    id: "double-pitch-sprocket",
    name: "Double Pitch Sprocket",
    category: "Sprockets",
    image: "/images/real-photo-sprockets.png",
    description: "Double pitch sprockets for slow-speed conveyor and elevator applications with extended pitch chains.",
  },

  // â”€â”€ CHAIN PULLEY BLOCK â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "manual-chain-block-1t",
    name: "Manual Chain Block â€” 1 Ton",
    category: "Chain Pulley Block",
    image: "/images/product-pulley-block.png",
    description: "Heavy-duty manual chain block with 1-ton capacity for vertical lifting in workshops and warehouses.",
  },
  {
    id: "manual-chain-block-3t",
    name: "Manual Chain Block â€” 3 Ton",
    category: "Chain Pulley Block",
    image: "/images/product-pulley-block.png",
    description: "3-ton capacity hand chain hoist for heavy lifting operations in factories, construction, and maintenance.",
  },
  {
    id: "manual-chain-block-5t",
    name: "Manual Chain Block â€” 5 Ton",
    category: "Chain Pulley Block",
    image: "/images/product-pulley-block.png",
    description: "5-ton heavy-duty manual chain hoist for industrial lifting â€” compact design, smooth operation.",
  },
  {
    id: "lever-hoist-1t",
    name: "Lever Hoist / Come-Along â€” 1.5 Ton",
    category: "Chain Pulley Block",
    image: "/images/product-pulley-block.png",
    description: "Ratchet lever hoist for pulling, tensioning, and positioning loads in confined spaces and maintenance tasks.",
  },
  {
    id: "gear-trolley",
    name: "Gear Trolley (Plain / Push Type)",
    category: "Chain Pulley Block",
    image: "/images/product-pulley-block.png",
    description: "Gear and push trolleys for I-beam mounting, enabling horizontal load movement along overhead rails.",
  },

  // â”€â”€ CONVEYOR BELTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "flat-conveyor-belt-ep",
    name: "Flat Conveyor Belt â€” EP Grade",
    category: "Conveyor Belts",
    image: "/images/product-conveyor-belts.png",
    description: "EP (Polyester-Nylon) flat conveyor belts for general material handling â€” superior strength, low elongation, heat resistance.",
  },
  {
    id: "chevron-conveyor-belt",
    name: "Chevron / Profile Conveyor Belt",
    category: "Conveyor Belts",
    image: "/images/product-conveyor-belts.png",
    description: "Chevron patterned conveyor belts for inclined conveying of bulk materials â€” prevents material rollback.",
  },
  {
    id: "conveyor-belt-fastener",
    name: "Conveyor Belt Fasteners & Clips",
    category: "Conveyor Belts",
    image: "/images/product-conveyor-belts.png",
    description: "Heavy-duty belt fasteners, lacing clips, and joining accessories for all conveyor belt widths.",
  },
  {
    id: "idler-roller-conveyor",
    name: "Conveyor Idler Rollers",
    category: "Conveyor Belts",
    image: "/images/product-conveyor-belts.png",
    description: "Steel and HDPE idler rollers for flat and troughing conveyor systems â€” available with sealed or greaseable bearings.",
  },
  {
    id: "webbing-sling-belt",
    name: "Webbing Sling Belts",
    category: "Conveyor Belts",
    image: "/images/product-conveyor-belts.png",
    description: "Polyester webbing sling belts for safe lifting of loads â€” rated 1T to 10T, various widths and lengths available.",
  },
  {
    id: "rubber-diaphragm",
    name: "Diaphragm Rubber / Leather",
    category: "Conveyor Belts",
    image: "/images/product-conveyor-belts.png",
    description: "Industrial rubber and leather diaphragms for pumps, valves, and conveyor system sealing applications.",
  },

  // â”€â”€ GEARBOXES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "worm-gearbox",
    name: "Worm Gearbox",
    category: "Gearboxes",
    image: "/images/product-gearboxes.png",
    description: "Worm gear reducers for slow-speed, high-torque applications â€” used in conveyor drives, mixers, and rice mill equipment.",
  },
  {
    id: "helical-gear-box",
    name: "Helical Gearbox (Foot Mount)",
    category: "Gearboxes",
    image: "/images/product-gearboxes.png",
    description: "Helical gear reducers in foot and flange mount configurations â€” high efficiency for industrial power transmission.",
  },
  {
    id: "gearbox-spares",
    name: "Gearbox Spares (Gears / Shafts / Seals)",
    category: "Gearboxes",
    image: "/images/product-gearboxes.png",
    description: "Replacement gears, shafts, oil seals, and bearings for standard worm and helical gearbox overhaul.",
  },
  {
    id: "bevel-gearbox",
    name: "Bevel Gearbox / Right Angle Drive",
    category: "Gearboxes",
    image: "/images/product-gearboxes.png",
    description: "Bevel and right-angle gearboxes for drive direction change applications in industrial machinery.",
  },

  // â”€â”€ OIL SEALS & COUPLINGS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "rotary-oil-seal",
    name: "Rotary Oil Seal (NBR / Viton)",
    category: "Oil Seals & Couplings",
    image: "/images/product-oil-seals.png",
    description: "NBR and Viton rotary oil seals for shaft sealing in gearboxes, pumps, and motors â€” all standard sizes.",
  },
  {
    id: "o-ring-set",
    name: "O-Ring Sets (Metric / Imperial)",
    category: "Oil Seals & Couplings",
    image: "/images/product-oil-seals.png",
    description: "Nitrile and Viton O-rings in metric and imperial sizes for hydraulic, pneumatic, and general sealing applications.",
  },
  {
    id: "pin-bush-coupling",
    name: "Pin Bush Coupling (Flange Coupling)",
    category: "Oil Seals & Couplings",
    image: "/images/product-oil-seals.png",
    description: "Pin and bush flexible couplings for motor-to-gearbox and drive shaft connections â€” cushions shock loads.",
  },
  {
    id: "chain-coupling-set",
    name: "Chain Coupling Set",
    category: "Oil Seals & Couplings",
    image: "/images/product-oil-seals.png",
    description: "Roller chain couplings consisting of two sprockets and a duplex roller chain â€” compact, flexible shaft coupling.",
  },
  {
    id: "jaw-coupling",
    name: "Jaw / Spider Coupling",
    category: "Oil Seals & Couplings",
    image: "/images/product-oil-seals.png",
    description: "Polyurethane spider jaw couplings for vibration damping and misalignment tolerance in drive connections.",
  },

  // â”€â”€ WIRE ROPE & SLINGS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "wire-rope-6x19",
    name: "Wire Rope 6Ã—19 Construction",
    category: "Wire Rope & Slings",
    image: "/images/product-wire-rope.png",
    description: "6Ã—19 IWRC and fibre core wire ropes for hoisting, rigging, and crane applications â€” available in 6mm to 32mm diameter.",
  },
  {
    id: "wire-rope-6x37",
    name: "Wire Rope 6Ã—37 â€” Flexible Grade",
    category: "Wire Rope & Slings",
    image: "/images/product-wire-rope.png",
    description: "Highly flexible 6Ã—37 wire rope for winches, cranes, and hoists requiring frequent bending over sheaves.",
  },
  {
    id: "galvanized-wire-rope",
    name: "Galvanized Wire Rope",
    category: "Wire Rope & Slings",
    image: "/images/product-wire-rope.png",
    description: "Zinc-galvanized wire rope for outdoor and marine applications â€” corrosion resistant, long service life.",
  },
  {
    id: "wire-rope-sling-eye-eye",
    name: "Wire Rope Sling (Eye-Eye Type)",
    category: "Wire Rope & Slings",
    image: "/images/product-wire-rope.png",
    description: "Eye-to-eye wire rope slings for safe load lifting in crane and hoist applications â€” WLL rated.",
  },
  {
    id: "webbing-sling",
    name: "Polyester Webbing Sling (Flat / Round)",
    category: "Wire Rope & Slings",
    image: "/images/product-wire-rope.png",
    description: "Flat and round polyester webbing slings for gentle, safe lifting of machinery and fabricated components.",
  },

  // â”€â”€ FASTENERS & HARDWARE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "square-bolts-nuts",
    name: "Square Bolts & Nuts",
    category: "Fasteners & Hardware",
    image: "/images/product-fasteners.png",
    description: "Mild steel and high-tensile square bolts and nuts for crusher, conveyor, and heavy equipment assembly.",
  },
  {
    id: "patta-bolts",
    name: "Patta Bolts (U-Bolts / Strap Bolts)",
    category: "Fasteners & Hardware",
    image: "/images/product-fasteners.png",
    description: "Patta (strap) bolts for securing conveyor idler frames, pipe clamps, and machinery fixtures.",
  },
  {
    id: "hex-bolt-set",
    name: "Hex Bolt & Nut Sets (Grade 8.8)",
    category: "Fasteners & Hardware",
    image: "/images/product-fasteners.png",
    description: "High-tensile hex bolt and nut sets in M6 to M36 sizes for structural and machinery assembly.",
  },
  {
    id: "wire-mesh-woven",
    name: "Wire Mesh â€” Woven / Welded",
    category: "Fasteners & Hardware",
    image: "/images/product-fasteners.png",
    description: "Woven and welded wire mesh in SS, MS, and GI for screening, separation, and protective guarding.",
  },
  {
    id: "springs-compression",
    name: "Compression Springs (Industrial)",
    category: "Fasteners & Hardware",
    image: "/images/product-fasteners.png",
    description: "Industrial compression springs for crusher toggle plates, valves, and machinery cushioning applications.",
  },
  {
    id: "tension-springs",
    name: "Tension / Extension Springs",
    category: "Fasteners & Hardware",
    image: "/images/product-fasteners.png",
    description: "Tension springs for industrial machinery, screen separators, and conveyor tensioning systems.",
  },

  // â”€â”€ MATERIAL HANDLING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "trolley-wheels-polyurethane",
    name: "Trolley Wheels (Polyurethane/Cast Iron)",
    category: "Material Handling",
    image: "/images/product-material-handling.png",
    description: "Heavy-duty trolley and caster wheels in PU and cast iron for factory floor material handling trolleys.",
  },
  {
    id: "conveyor-roller-steel",
    name: "Conveyor Steel Roller",
    category: "Material Handling",
    image: "/images/real-photo-idlers.png",
    description: "Steel conveyor rollers with sealed bearings for gravity and powered roller conveyor systems.",
  },
  {
    id: "buckets-pvc-metal",
    name: "Elevator Buckets PVC/Metal",
    category: "Material Handling",
    image: "/images/product-material-handling.png",
    description: "PVC and metal elevator buckets for grain, paddy, cement, and bulk material vertical conveying.",
  },
  {
    id: "blocks-snatch-blocks",
    name: "Snatch Blocks / Pulley Blocks",
    category: "Material Handling",
    image: "/images/product-material-handling.png",
    description: "Single and double sheave snatch blocks for rope rigging, load redirection, and mechanical advantage.",
  },

  // â”€â”€ RICE MILL SPARES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "rubber-roller-ricemill",
    name: "Rice Mill Rubber Rollers",
    category: "Rice Mill Spares",
    image: "/images/product-ricemill-spares.png",
    description: "High-quality rubber rolls for paddy huskers â€” compatible with all major rice mill makes. Long service life.",
  },
  {
    id: "emery-sheller-stone",
    name: "Emery Sheller Stones",
    category: "Rice Mill Spares",
    image: "/images/product-ricemill-spares.png",
    description: "Emery and carborundum sheller stones for hulling and polishing paddy. Available in all standard sizes.",
  },
  {
    id: "paddy-separator-screen",
    name: "Paddy Separator Screens",
    category: "Rice Mill Spares",
    image: "/images/product-ricemill-spares.png",
    description: "Woven wire mesh and perforated metal screens for paddy separators, ensuring clean grain separation.",
  },
  {
    id: "ricemill-bearing-set",
    name: "Rice Mill Bearing Set (Complete)",
    category: "Rice Mill Spares",
    image: "/images/product-ricemill-spares.png",
    description: "Complete bearing sets for all rice mill shafts â€” huller, sheller, polisher, and blower shafts.",
  },
  {
    id: "ricemill-vbelt-set",
    name: "Rice Mill V-Belt Set",
    category: "Rice Mill Spares",
    image: "/images/product-ricemill-spares.png",
    description: "Pre-matched V-belt sets for all rice mill drives â€” C, B, and A section belts for each drive section.",
  },
  {
    id: "ricemill-blower-fan",
    name: "Rice Mill Blower Fan / Impeller",
    category: "Rice Mill Spares",
    image: "/images/product-ricemill-spares.png",
    description: "Replacement blower fans and impellers for rice mill paddy cleaning and aspiration systems.",
  },
  {
    id: "ricemill-pulley-set",
    name: "Rice Mill Pulley Set",
    category: "Rice Mill Spares",
    image: "/images/product-ricemill-spares.png",
    description: "Complete pulley sets for all rice mill drive sections â€” matched for balanced operation and reduced belt wear.",
  },

  // â”€â”€ CRUSHER SPARES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "jaw-plate-crusher",
    name: "Jaw Plates (Fixed & Movable)",
    category: "Crusher Spares",
    image: "/images/product-crusher-spares.png",
    description: "Manganese steel jaw plates for stone and mineral jaw crushers â€” high wear resistance and consistent crushing performance.",
  },
  {
    id: "toggle-plate-crusher",
    name: "Toggle Plates",
    category: "Crusher Spares",
    image: "/images/product-crusher-spares.png",
    description: "Safety toggle plates for jaw crushers that protect the machine from uncrushable material damage.",
  },
  {
    id: "crusher-bearing-set",
    name: "Crusher Bearing Set",
    category: "Crusher Spares",
    image: "/images/product-crusher-spares.png",
    description: "Heavy-duty spherical roller bearing sets for primary and secondary crusher main shafts and eccentric assemblies.",
  },
  {
    id: "crusher-vbelt-set",
    name: "Crusher V-Belt Set (C/D Section)",
    category: "Crusher Spares",
    image: "/images/product-crusher-spares.png",
    description: "Heavy C and D-section V-belt sets for crusher main drives, matched in sets for balanced loading.",
  },
  {
    id: "crusher-flywheel-pulley",
    name: "Crusher Flywheel Pulley",
    category: "Crusher Spares",
    image: "/images/product-crusher-spares.png",
    description: "Replacement flywheel pulleys for jaw and cone crushers â€” balanced and precision-bored for smooth operation.",
  },

  // â”€â”€ FEED SPARES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "hammer-mill-screen",
    name: "Hammer Mill Screens",
    category: "Feed Spares",
    image: "/images/product-feed-spares.png",
    description: "Perforated and woven wire hammer mill screens for feed grinding â€” various hole sizes for coarse to fine grinding.",
  },
  {
    id: "feed-mill-hammers",
    name: "Hammer Mill Hammers / Beaters",
    category: "Feed Spares",
    image: "/images/product-feed-spares.png",
    description: "Heat-treated reversible hammers and beaters for feed mill hammer mills â€” extends grinding intervals.",
  },
  {
    id: "feed-elevator-bucket",
    name: "Elevator Buckets (Plastic/Steel)",
    category: "Feed Spares",
    image: "/images/product-feed-spares.png",
    description: "Plastic and steel elevator buckets for grain and feed vertical conveyors â€” all standard CC and MF mounting pitches.",
  },
  {
    id: "feed-conveyor-chain",
    name: "Feed Conveyor Chain & Paddles",
    category: "Feed Spares",
    image: "/images/product-feed-spares.png",
    description: "Drag chain and paddle sets for feed mill chain conveyors â€” wear-resistant and compatible with all major feed plant brands.",
  },
  {
    id: "feed-mixer-paddles",
    name: "Feed Mixer Paddles / Ribbons",
    category: "Feed Spares",
    image: "/images/product-feed-spares.png",
    description: "Replacement paddles and ribbon flights for horizontal feed mixer machines â€” SS and MS available.",
  },
];


