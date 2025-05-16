import Contact from "./components/contact"
import Header from "./components/header"
import Hero from "./components/hero"
import Projects from "./components/projects"

function App() {

  return (
    <div className="relative">
      <div className="fixed inset-0 z-[-1]">
        z{/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" /> */}
        {/* <Blobs /> */}
        <div
          className="absolute inset-0 bg-linear-to-t from-red-900/15 via-red-950/15 to-zinc-950 blur-2xl z-[-1]"
        ></div>
      </div>
      <div className='z-10 relative'>
        <Header />
        <Hero />
        {/* <About /> */}
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
