
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div
        className="relative z-0"
        style={{
          backgroundColor: '#0f0f23',
          backgroundImage: `
            linear-gradient(45deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      >
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
