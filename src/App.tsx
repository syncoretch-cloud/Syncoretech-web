import { useState } from "react";
import IntroSplash from "./components/IntroSplash";
import AtmosphereBackground from "./components/ui/AtmosphereBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecializationStrip from "./components/SpecializationStrip";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Approach from "./components/Approach";
import Values from "./components/Values";
import MissionVision from "./components/MissionVision";
import Philosophy from "./components/Philosophy";
import Projects from "./components/Projects";
import AdminTrigger from "./components/admin/AdminTrigger";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const INTRO_KEY = "syncore_intro_shown";

function App() {
  const [showIntro, setShowIntro] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem(INTRO_KEY)
  );

  const finishIntro = () => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroSplash onFinish={finishIntro} />}
      <AtmosphereBackground />

      <Navbar />
      <main>
        <Hero />
        <SpecializationStrip />
        <About />
        <Services />
        <Stats />
        <Team />
        <Projects />
        <Approach />
        <Values />
        <MissionVision />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <AdminTrigger />
    </>
  );
}

export default App;
