import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const slugToCategory: Record<string, string> = {
  "bearings": "Bearings",
  "v-belts": "V-Belts",
  "v-pulley": "V-Pulley",
  "roller-chains": "Roller Chain",
  "sprockets": "Sprockets",
  "chain-pulley-block": "Chain Pulley Block",
  "conveyor-belts": "Conveyor Belts",
  "rice-mill-spares": "Rice Mill Spares",
  "crusher-spares": "Crusher Spares",
  "gearboxes": "Gearboxes",
  "oil-seals": "Oil Seals & Couplings",
  "wire-ropes": "Wire Rope & Slings",
  "fasteners": "Fasteners & Hardware",
  "material-handling": "Material Handling",
};

export function generateStaticParams() {
  return Object.keys(slugToCategory).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = slugToCategory[params.slug];
  if (!category) return {};

  const titles: Record<string, string> = {
    "Bearings": "SKF, FAG & NTN Bearings Supplier in Hubballi | IBCC",
    "V-Belts": "Fenner Poly-F V-Belts Dealer in Hubballi | IBCC",
    "Roller Chain": "Rolon, Diamond & Hero Roller Chains Hubballi | IBCC",
    "Conveyor Belts": "Heavy Duty Conveyor Belts & Idlers Hubballi | IBCC",
    "Rice Mill Spares": "Genuine Rice Mill Rubber Rollers & Spares | IBCC",
    "Crusher Spares": "Stone Crusher Jaw Plates & Spares Hubballi | IBCC",
  };

  return {
    title: titles[category] || `${category} Supplier in Hubballi | Industrial Bearing & Chain Centre`,
    description: `Buy genuine ${category.toLowerCase()} from Industrial Bearing & Chain Centre, Hubballi. Authorized stockist serving North Karnataka. Call 9062186130.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = slugToCategory[params.slug];
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <>
      <div className="bg-gradient-to-br from-[#072a6b] via-[#0B3D91] to-[#1a52b3] pt-12 pb-20">
        <div className="container-xl text-center">
          <p className="badge-amber mb-3">Product Category</p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">{category}</h1>
          <p className="text-white/65 max-w-2xl mx-auto text-lg">
            Hubballi's most trusted supplier for genuine {category.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="section-padding bg-slate-50 min-h-screen">
        <div className="container-xl">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-extrabold text-[#0B3D91]">
              Available {category} ({categoryProducts.length})
            </h2>
            <Link href="/products" className="text-sm font-bold text-[#F2A900] hover:underline">
              &larr; Back to all products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all group flex flex-col">
                <div className="relative h-48 bg-slate-100 p-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  {p.brand && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#0B3D91] text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-sm z-10">
                      {p.brand}
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-[#0B3D91] text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                    {p.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#0B3D91] text-[15px] leading-tight mb-2">{p.name}</h3>
                  <p className="text-slate-500 text-xs flex-1 line-clamp-3 leading-relaxed mb-4">{p.description}</p>
                  
                  <Link
                    href={`/contact?product=${encodeURIComponent(p.name)}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#F2A900] text-[#072a6b] font-bold py-2.5 rounded-lg text-sm hover:bg-[#ffc200] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
