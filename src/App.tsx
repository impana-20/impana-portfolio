import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero />

      <About />
      <Experience />
      <Tech />
      <Works />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
