import About from "./components/about"
import { Blobs } from "./components/blobs"
import Header from "./components/header"
import Hero from "./components/hero"
import Projects from "./components/projects"

function App() {

  return (
    <div className=" relative min-h-screen">
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <Blobs />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App
