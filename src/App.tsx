import { LegalPage } from "./components/LegalPage";
import { ClosingSection } from "./components/ClosingSection";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { SiteHeader } from "./components/SiteHeader";
import { SupportDeskSection } from "./components/SupportDeskSection";
import { SupportPathsSection } from "./components/SupportPathsSection";
import { privacySections, termsSections } from "./content/legalContent";

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/privacy") {
    return (
      <div className="relative">
        <SiteHeader mode="legal" />
        <LegalPage
          title="Privacy Policy"
          effectiveDate="April 18, 2026"
          intro="This Privacy Policy explains what Rhodie collects, how that information is used, and the choices available to users of the Rhodie app."
          sections={privacySections}
        />
      </div>
    );
  }

  if (pathname === "/terms") {
    return (
      <div className="relative">
        <SiteHeader mode="legal" />
        <LegalPage
          title="Terms of Use"
          effectiveDate="April 18, 2026"
          intro="These Terms of Use govern access to and use of the Rhodie app, including journaling, gratitude, tasks, calendar tools, insights, and optional paid subscription features."
          sections={termsSections}
        />
      </div>
    );
  }

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
