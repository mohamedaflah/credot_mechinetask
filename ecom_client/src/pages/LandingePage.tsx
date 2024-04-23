import Brands from "@/components/custom/Brands";
import LandingArea from "@/components/custom/LandingArea";
import Product from "@/components/custom/Product";

function LandingPage() {
  return (
    <main className="relative">
      <LandingArea />
      <Product/>
      <Brands/>
    </main>
  );
}
export default LandingPage;
