import { useEffect, useState } from "react";
import "./index.css";
import BusinessModelSection from "./components/BusinessModelSection";
import DifferentiationSection from "./components/DifferentiationSection";
import FlowSection from "./components/FlowSection";
import Footer from "./components/Footer";
import FutureSection from "./components/FutureSection";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import MarketSection from "./components/MarketSection";
import Navigation from "./components/Navigation";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TeamSection from "./components/TeamSection";
import Technology from "./pages/Technology";
import BusinessMarket from "./pages/BusinessMarket";
import EsgPolicy from "./pages/EsgPolicy";
import { useI18n } from "./i18n";

const getPathname = () =>
  typeof window !== "undefined" ? window.location.pathname : "/";

const usePathname = () => {
  const [pathname, setPathname] = useState<string>(getPathname);

  useEffect(() => {
    const handlePopstate = () => setPathname(getPathname());
    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  return pathname;
};

function App() {
  const pathname = usePathname();
  const { language } = useI18n();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  // Update HTML lang attribute for accessibility
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-lang", language);
      document.documentElement.setAttribute("lang", language);
    }
  }, [language]);

  const isTechnology = pathname === "/technology";
  const isBusinessMarket = pathname === "/business-market";
  const isEsgPolicy = pathname === "/esg-policy";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900" data-lang={language}>
      <Navigation />
      {isTechnology ? (
        <Technology />
      ) : isBusinessMarket ? (
        <BusinessMarket />
      ) : isEsgPolicy ? (
        <EsgPolicy />
      ) : (
        <main className="space-y-0">
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <FlowSection />
          <MarketSection />
          <BusinessModelSection />
          <DifferentiationSection />
          <ImpactSection />
          <FutureSection />
          <TeamSection />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
