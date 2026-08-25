import Hero from "../tourpackages/Hero";
import Body from "../tourpackages/Body";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Discover handpicked travel packages from WOW The World Logistics for Dubai, London, Canada, Turkey, and more curated destinations.",
  alternates: {
    canonical: "/tourpackages",
  },
};

const TourPackages = () => {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Body />
    </main>
  );
};
export default TourPackages;
