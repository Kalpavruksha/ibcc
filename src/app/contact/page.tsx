import type { Metadata } from "next";
import { Suspense } from "react";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Enquire About Products | Industrial Bearing & Chain Centre",
  description:
    "Contact Industrial Bearing & Chain Centre in Hubballi. Call 7349049883 or 8147027162, WhatsApp, or email industrialbearing.hubli@gmail.com. Plot #29, Industrial Area, Gokul Road, Hubballi 580030.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ContactClient />
    </Suspense>
  );
}
