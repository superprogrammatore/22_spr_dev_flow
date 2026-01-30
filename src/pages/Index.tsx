import { Hero } from "@/components/Hero";
import { SimulationsGrid } from "@/components/SimulationsGrid";
import { DXBenefits } from "@/components/DXBenefits";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SimulationsGrid />
      <DXBenefits />
      <Footer />
    </div>
  );
};

export default Index;
