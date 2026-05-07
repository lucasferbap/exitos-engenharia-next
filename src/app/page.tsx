
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import HeroHome from "@/components/home/Home";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <HeroHome />

      <About />

      <Services />

      <Contact />

      <Footer />
    </>
  )
}
