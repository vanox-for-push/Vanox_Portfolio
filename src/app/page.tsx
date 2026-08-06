import Hero from "@/components/home/Hero";
import SolutionsSection from "@/components/home/SolutionsSection";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <About />
      <WhyChooseUs />
      <Industries />
      <CTA />
    </>
  );
}

