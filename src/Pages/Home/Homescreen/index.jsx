import AboutMe from "../AboutMe";
import Certificate from "../Certificate";
import ContactMe from "../ContactMe";
import Experience from "../Experience";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Islamic from "../Islamic";
import MyEducations from "../MyEducations";
import MySkills from "../MySkills";
import Quotes from "../Quotes";
import Roll from "../Roll";

import Timeline from "../Timeline";



export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <Roll />
      <Timeline />
      <MySkills />
      <Certificate />
      <AboutMe />
      <MyEducations />
     <Quotes/>
      <Islamic/>
      <ContactMe />

      <Footer />
    </>
  );
}
