import { ClosingSection } from "./components/ClosingSection";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { SiteHeader } from "./components/SiteHeader";
import { SupportDeskSection } from "./components/SupportDeskSection";
import { SupportPathsSection } from "./components/SupportPathsSection";

export default function App() {
  return (
    <div className="relative">
      <SiteHeader />
      <HeroSection />
      <SupportPathsSection />
      <SupportDeskSection />
      <FaqSection />
      <ClosingSection />
    </div>
  );
}
