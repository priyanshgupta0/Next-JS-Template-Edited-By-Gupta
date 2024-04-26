import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Brands />
      <Testimonials />
      <Pricing />
      <Blog />
    </>
  );
}
