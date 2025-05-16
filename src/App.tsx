import About from "./components/about"
import Contact from "./components/contact"
import Header from "./components/header"
import Hero from "./components/hero"
import Projects from "./components/projects"

function App() {

  return (
    <div className="relative">
      <div className="fixed inset-0 z-[-1]">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" /> */}
        {/* <Blobs /> */}
        <div
          className="absolute inset-0 bg-linear-to-tl to-slate-950/50 via-red-950/30 from-red-800/40 blur-2xl z-[-1]"
        ></div>
      </div>
      <div className='z-10 relative'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
