import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Bearings, V-Belts, Chains, Conveyor Belts & More",
  description:
    "Browse our full range of industrial spare parts: SKF/FAG bearings, Fenner V-belts, Rolon roller chains, sprockets, conveyor belts, rice mill & crusher spares. Hubballi, Karnataka.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ProductsClient />
    </Suspense>
  );
}
