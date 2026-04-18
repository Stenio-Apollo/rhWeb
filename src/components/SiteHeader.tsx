import { useState } from "react";

import logo from "../assets/rhNative.png";

const supportNavItems = [
  { href: "#support-overview", label: "Overview" },
  { href: "#support-desk", label: "Support" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const legalNavItems = [
  { href: "/", label: "Support" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

type SiteHeaderProps = {
  mode?: "support" | "legal";
};

export function SiteHeader({ mode = "support" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = mode === "legal" ? legalNavItems : supportNavItems;

  return (
    <div className="sticky top-0 z-30 border-b border-[rgba(43,43,43,0.05)] bg-[rgba(251,247,243,0.68)] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4 py-4 max-md:w-[min(100%-20px,1180px)]">
        <a
          href={mode === "legal" ? "/" : "#top"}
          aria-label="Rhodie support home"
          className="inline-flex items-center gap-3.5 font-semibold tracking-[0.02em] text-rh-ink"
        >
          <img
            src={logo}
            alt="Rhodie logo"
            className="h-12 w-12 shadow-[0_10px_28px_rgba(0,0,0,0.16)]"
          />
          <span>Rhodie Support</span>
        </a>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          className="hidden rounded-full border border-[rgba(43,43,43,0.1)] bg-[rgba(251,247,243,0.58)] px-4 py-2 text-sm font-medium text-rh-ink max-md:inline-flex"
          onClick={() => setMenuOpen((value) => !value)}
        >
          Menu
        </button>

        <nav
          id="site-nav"
          className="flex flex-wrap items-center gap-5 max-md:hidden"
          aria-label="Section navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[rgba(43,43,43,0.76)] transition-colors duration-200 hover:text-rh-clay"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <div className="mx-auto hidden w-[min(1180px,calc(100%-32px))] pb-4 max-md:block max-md:w-[min(100%-20px,1180px)]">
          <div className="grid gap-2 rounded-[24px] border border-[rgba(43,43,43,0.08)] bg-[rgba(251,247,243,0.82)] p-3 shadow-[0_16px_40px_rgba(43,43,43,0.08)] backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-rh-ink transition-colors duration-200 hover:bg-[rgba(228,224,212,0.5)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
