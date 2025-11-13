import { useEffect, useState, type MouseEvent } from "react";
import logo from "../assets/logo.png";
import { useI18n, type Language } from "../i18n";

const languages: Language[] = ["en", "th"];

const getPathname = () =>
  typeof window !== "undefined" ? window.location.pathname : "/";

const Navigation = () => {
  const { t, language, setLanguage } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState<string>(getPathname);

  const menuLinks = [
    { href: "/technology", label: t("menu.items.technology") },
    { href: "/business-market", label: t("menu.items.businessMarket") },
    { href: "/esg-policy", label: t("menu.items.esgPolicy") },
  ];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handlePopstate = () => setPathname(getPathname());
    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  const handleMenuLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "#") {
      event.preventDefault();
    } else if (href.startsWith("/")) {
      event.preventDefault();
      if (window.location.pathname !== href) {
        window.history.pushState({}, "", href);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }
    }
    setIsMenuOpen(false);
  };

  const isHome = pathname === "/";
  const handleBackHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (!isHome) {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="container relative mx-auto flex items-center justify-between gap-6 px-6 py-4 sm:px-12">
        <a
          href="#hero"
          className="flex items-center gap-3 text-emerald-200 transition hover:text-white"
        >
          <img
            src={logo}
            alt="PANN CARBON logo"
            className="h-10 w-auto drop-shadow-lg"
          />
          <span className="text-base font-semibold uppercase tracking-[0.35em]">
            PANN CARBON
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {!isHome && (
            <a
              href="/"
              onClick={handleBackHome}
              className="rounded-full border border-emerald-300/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-200 transition hover:text-white"
            >
              {t("nav.backToHome")}
            </a>
          )}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`rounded-full border border-emerald-300/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                isMenuOpen
                  ? "bg-emerald-400 text-slate-900"
                  : "text-emerald-200 hover:text-white"
              }`}
            >
              {t("menu.label")}
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-slate-700/60 bg-slate-900/95 p-4 shadow-lg shadow-emerald-500/10">
                <ul className="space-y-2 text-sm text-slate-200">
                  {menuLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(event) => handleMenuLinkClick(event, item.href)}
                        className="flex items-center rounded-lg px-2 py-1.5 transition hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex rounded-full border border-emerald-300/40 bg-slate-900/60 p-1 shadow-sm shadow-emerald-300/20">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-1 text-xs font-semibold uppercase transition ${
                  language === lang
                    ? "rounded-full bg-emerald-400 text-slate-900"
                    : "text-emerald-200 hover:text-white"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-3 bg-slate-900/90 px-4 py-3 text-xs font-semibold text-slate-200 md:hidden">
        {!isHome && (
          <div className="flex justify-center">
            <a
              href="/"
              onClick={handleBackHome}
              className="rounded-full border border-emerald-300/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200 transition hover:text-white"
            >
              {t("nav.backToHome")}
            </a>
          </div>
        )}
        <div className="flex justify-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`rounded-full border border-emerald-300/40 px-3 py-1 text-xs font-semibold uppercase transition ${
                isMenuOpen
                  ? "bg-emerald-400 text-slate-900"
                  : "text-emerald-200 hover:text-white"
              }`}
            >
              {t("menu.label")}
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-slate-700/60 bg-slate-900/95 p-3 text-left shadow-lg shadow-emerald-500/10">
                <ul className="space-y-2 text-slate-200">
                  {menuLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(event) => handleMenuLinkClick(event, item.href)}
                        className="block rounded-lg px-2 py-1.5 text-xs transition hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                setLanguage(lang);
                setIsMenuOpen(false);
              }}
              className={`rounded-full border border-emerald-300/40 px-3 py-1 text-xs font-semibold uppercase transition ${
                language === lang
                  ? "bg-emerald-400 text-slate-900"
                  : "text-emerald-200 hover:text-white"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

