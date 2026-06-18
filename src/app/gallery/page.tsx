import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Product Photos | Industrial Bearing & Chain Centre",
  description:
    "View photos of our industrial product range — bearings, V-belts, roller chains, sprockets, conveyor belts, rice mill spares, and crusher parts. Industrial Bearing & Chain Centre, Hubballi.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
