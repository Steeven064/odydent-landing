import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Modules from "./components/Modules";
import Odontogram from "./components/Odontogram";
import Proof from "./components/Proof";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export const SIGNUP_URL = "https://odydent.vercel.app/login"; // URL de tu sistema

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Odontogram />
        <Proof />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </MotionConfig>
  );
}
