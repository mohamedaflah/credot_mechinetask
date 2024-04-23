import Brands from "@/components/custom/Brands";
import LandingArea from "@/components/custom/LandingArea";
import Offer from "@/components/custom/Offer";
import Product from "@/components/custom/Product";

function LandingPage() {
  return (
    <main className="relative">
      <LandingArea />
      <Offer />
      <Product/>
      <Brands/>
    </main>
  );
}
export default LandingPage;
