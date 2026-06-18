"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Reuse icons
function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

// Data passed as props from the server component
interface Props {
  brands: any[];
  categories: any[];
}

export default function HomeClient({ brands, categories }: Props) {
  const router = useRouter();

  // Animated Counters State
  const [years, setYears] = useState(0);
  const [brandsCount, setBrandsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  // Part Finder State
  const [machine, setMachine] = useState("");
  const [partNeeded, setPartNeeded] = useState("");

  // Horizontal Showcase State
  const [activeIndustry, setActiveIndustry] = useState("All");

  useEffect(() => {
    // Simple counter animation
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setYears(Math.floor((currentStep / steps) * 9));
      setBrandsCount(Math.floor((currentStep / steps) * 9));
      setProductsCount(Math.floor((currentStep / steps) * 500));

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handlePartFinderSearch = () => {
    if (partNeeded) {
      router.push(`/products?category=${encodeURIComponent(partNeeded)}`);
    } else {
      router.push(`/products`);
    }
  };

  const INDUSTRIES = ["All", "Rice Mill", "Stone Crusher", "Conveyor"];

  const filteredCategories = activeIndustry === "All" 
    ? categories 
    : categories.filter(c => c.desc.toLowerCase().includes(activeIndustry.toLowerCase()) || c.label.toLowerCase().includes(activeIndustry.toLowerCase()));

  return (
    <>
      {/* ── STICKY SIDE LABEL ────────────────────────────────────────────── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 origin-right -rotate-90 hidden xl:block">
        <div className="bg-[#0B3D91] text-white/90 text-xs font-bold tracking-[0.2em] uppercase px-6 py-2 rounded-t-md shadow-lg border-t border-x border-white/20">
          Hubballi's Trusted Bearing Supplier
        </div>
      </div>

      {/* ── HERO WITH ANIMATED SVG & PART FINDER ──────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#05183d]">
        {/* Animated Background SVG */}
        <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center pointer-events-none">
          <svg className="animate-spin-slow w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] text-[#0B3D91]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10a40 40 0 1 0 0 80 40 40 0 0 0 0-80zm0 60a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm25-20a25 25 0 1 1-50 0 25 25 0 0 1 50 0z" />
            {Array.from({ length: 12 }).map((_, i) => (
              <circle key={i} cx={50 + 32 * Math.cos(i * Math.PI / 6)} cy={50 + 32 * Math.sin(i * Math.PI / 6)} r="3" fill="#F2A900" />
            ))}
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#05183d] via-transparent to-[#05183d] z-0" />

        <div className="container-xl relative z-10 w-full py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F2A900] inline-block animate-pulse" />
              <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">
                Established 2016 · Hubballi, Karnataka
              </span>
            </div>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Industrial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] to-[#ffda6a]">
                Bearings,
              </span> Chains & Belts
            </h1>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Your trusted source for genuine industrial spare parts. Serving rice mills, crushers, conveyors & manufacturing units.
            </p>

            {/* Animated Counters */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-[#F2A900] text-4xl font-extrabold leading-none">{years}+</p>
                <p className="text-white/60 text-sm mt-1 uppercase tracking-wider font-semibold">Years</p>
              </div>
              <div>
                <p className="text-[#F2A900] text-4xl font-extrabold leading-none">{brandsCount}+</p>
                <p className="text-white/60 text-sm mt-1 uppercase tracking-wider font-semibold">Brands</p>
              </div>
              <div>
                <p className="text-[#F2A900] text-4xl font-extrabold leading-none">{productsCount}+</p>
                <p className="text-white/60 text-sm mt-1 uppercase tracking-wider font-semibold">Products</p>
              </div>
            </div>
          </div>

          {/* Part Finder Widget */}
          <div className="w-full max-w-md lg:w-[400px]">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-6 text-center">Find Your Part</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-2">1. What machine do you run?</label>
                  <select 
                    value={machine}
                    onChange={(e) => setMachine(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 text-white rounded-lg px-4 py-3 outline-none focus:border-[#F2A900]"
                  >
                    <option value="" className="text-slate-800">Select Machine...</option>
                    <option value="Rice Mill" className="text-slate-800">Rice Mill</option>
                    <option value="Stone Crusher" className="text-slate-800">Stone Crusher</option>
                    <option value="Conveyor" className="text-slate-800">Conveyor System</option>
                    <option value="Other" className="text-slate-800">Other Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-2">2. What do you need?</label>
                  <select 
                    value={partNeeded}
                    onChange={(e) => setPartNeeded(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 text-white rounded-lg px-4 py-3 outline-none focus:border-[#F2A900]"
                  >
                    <option value="" className="text-slate-800">Select Category...</option>
                    <option value="Bearings" className="text-slate-800">Bearings</option>
                    <option value="V-Belts" className="text-slate-800">V-Belts</option>
                    <option value="Roller Chain" className="text-slate-800">Chains & Sprockets</option>
                    <option value="Conveyor Belts" className="text-slate-800">Conveyor Belts</option>
                    <option value="Spares" className="text-slate-800">Specialized Spares</option>
                  </select>
                </div>

                <button 
                  onClick={handlePartFinderSearch}
                  className="w-full bg-[#F2A900] text-[#072a6b] font-extrabold py-4 rounded-lg mt-4 hover:bg-[#ffda6a] transition-colors shadow-lg shadow-[#F2A900]/20 flex justify-center items-center gap-2"
                >
                  Search Inventory <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE STOCK TICKER ────────────────────────────────────────────── */}
      <div className="bg-[#0B3D91] border-y border-white/10 overflow-hidden py-3 shadow-inner">
        <div className="flex gap-8 whitespace-nowrap marquee-track" style={{ width: "max-content" }}>
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex gap-8 items-center text-sm font-semibold">
              <span className="text-white"><span className="text-[#F2A900]">SKF 6205</span> — In Stock ✓</span>
              <span className="text-white/30">•</span>
              <span className="text-white"><span className="text-[#F2A900]">Fenner B-Belt</span> — In Stock ✓</span>
              <span className="text-white/30">•</span>
              <span className="text-white"><span className="text-[#F2A900]">Rolon 10B Chain</span> — In Stock ✓</span>
              <span className="text-white/30">•</span>
              <span className="text-white"><span className="text-[#F2A900]">Taper Roller Bearings</span> — In Stock ✓</span>
              <span className="text-white/30">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-16">
            <p className="badge-amber mb-3">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91]">How It Works</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Getting the right industrial spare parts has never been easier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 relative">
              <div className="w-16 h-16 bg-[#0B3D91] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-[#0B3D91]/20">1</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tell Us The Part</h3>
              <p className="text-slate-500">Send us a WhatsApp message or call with the machine model, bearing number, or belt size.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 relative">
              <div className="w-16 h-16 bg-[#F2A900] text-[#072a6b] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-[#F2A900]/20">2</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">We Check Stock</h3>
              <p className="text-slate-500">Our experts instantly check our inventory and provide a competitive quote with genuine brand options.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 relative">
              <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-[#25D366]/20">3</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Same Day Dispatch</h3>
              <p className="text-slate-500">Confirm your order, and we ensure same-day dispatch so your machinery is up and running fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CINEMATIC SIDE-SCROLL SHOWCASE ─────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container-xl mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#F2A900] text-sm font-bold uppercase tracking-wider mb-2">Premium Categories</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Product Showcase</h2>
            </div>
            
            {/* Industry Selector Toggle */}
            <div className="flex bg-white/10 p-1 rounded-lg">
              {INDUSTRIES.map(ind => (
                <button 
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${activeIndustry === ind ? 'bg-[#F2A900] text-[#072a6b]' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 px-4 md:px-12 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          {filteredCategories.map((cat, i) => (
            <Link href={cat.href} key={i} className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center group">
              <div className="relative h-[300px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image src={cat.img} alt={cat.label} fill className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.label}</h3>
                  <p className="text-white/60 text-sm line-clamp-2">{cat.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── GOOGLE REVIEWS SECTION ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4 text-[#F2A900]">
              {[1,2,3,4,5].map(i => <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3D91]">Trusted by Industries</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">What our clients say about our service and products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Best stockist in North Karnataka for SKF and Fenner. Ajitkumar always provides genuine parts and their same-day delivery has saved our mill from downtime multiple times.", author: "Rajesh Patil", role: "Rice Mill Owner" },
              { text: "Very competitive pricing on jaw crusher spares and conveyor belts. The team has excellent technical knowledge and helped us select the right heavy-duty bearings.", author: "Manjunath S.", role: "Stone Crusher Operator" },
              { text: "One-stop shop for all industrial needs. We have been sourcing roller chains and pulleys from them since 2018. Highly recommend their prompt WhatsApp response.", author: "Vinay Kumar", role: "Plant Manager" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#F2A900] mb-4">
                    {[1,2,3,4,5].map(s => <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B3D91] text-white flex items-center justify-center font-bold text-lg">{review.author[0]}</div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{review.author}</h4>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                  <div className="ml-auto">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden border-t border-slate-100">
        <div className="container-xl mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Authorised Stockist For</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 marquee-track" style={{ width: "max-content" }}>
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm px-6 py-4 min-w-[140px] hover:border-[#F2A900] hover:shadow-md transition-all"
              >
                <div className="relative w-28 h-10">
                  <Image src={brand.logo} alt={`${brand.name} logo`} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-[#F2A900]" aria-label="Call to action">
        <div className="container-xl py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-[#072a6b] text-2xl sm:text-3xl font-extrabold leading-tight">
                Need a quote or urgent spare?
              </h2>
              <p className="text-[#072a6b]/70 mt-2">
                Call or WhatsApp us directly — we respond fast. Most items available same-day.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919062186130"
                className="flex items-center gap-2 bg-[#072a6b] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#0B3D91] transition-colors shadow-lg"
              >
                <PhoneIcon />
                9062186130
              </a>
              <a
                href="https://wa.me/919062186130?text=Hello%2C%20I%20need%20a%20quote%20for%20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#1db954] transition-colors shadow-lg"
              >
                <WhatsAppIcon />
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
