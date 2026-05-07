
import About from "@/components/about/About";
import Clients from "@/components/clients/Clients";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import HeroHome from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <HeroHome />

      <About />

      <Services />

      {/* <Clients /> */}

      {/* <Projects /> */}

      <Contact />

      <Footer />
    </>
  )
}
