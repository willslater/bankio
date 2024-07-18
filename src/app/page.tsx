import Features from "@/blocks/Features";
import Footer from "@/blocks/Footer";
import Header from "@/blocks/Header";
import PatternSection from "@/blocks/PatternSection";
import Services from "@/blocks/Services";
import Slider from "@/blocks/Slider";
import TopNav from "@/blocks/TopNav";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen p-6 md:container md:mx-auto">
        <TopNav />
        <Header />
        <Services />
      </main>

      <section className="relative w-full overflow-x-hidden">
        <Slider />
      </section>
      <section className="bg-white">
        <div className="p-6 md:mx-auto md:container ">
          <Features />
        </div>
      </section>
      <footer className="bg-black">
        <div className="p-6 md:mx-auto md:container ">
          <Footer />
        </div>
      </footer>
      <PatternSection />
      <div className="bg-white p-2 text-center text-xs">
        <p>Copyright &copy; 2024 theBank. All rights reserved</p>
      </div>
    </div>
  );
}
