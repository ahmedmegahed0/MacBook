import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/ProductViewer"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>

      <NavBar />
      <Hero  />
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all z-50"
        aria-label="Back to top"
      > ↑
      </button> */}
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App