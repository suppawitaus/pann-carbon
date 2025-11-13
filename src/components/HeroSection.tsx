import type { MouseEventHandler } from "react";
import {
  ArrowLongRightIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useI18n } from "../i18n";

type HeroSectionProps = {
  onLearnMoreClick?: MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
};

const HeroSection = ({ onLearnMoreClick }: HeroSectionProps) => {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-900 text-slate-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_60%)]" />
      <div className="container relative mx-auto flex min-h-[70vh] flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:px-12">
        <img
          src={logo}
          alt="PANN CARBON infinity logo"
          className="h-24 w-auto drop-shadow-2xl sm:h-28"
        />
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-slate-200 ring-1 ring-white/20 backdrop-blur">
          {t("hero.badge")}
        </div>
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-slate-200 sm:text-xl">
            {t("hero.subtitle")}
          </p>
          <p className="text-base text-slate-300 sm:text-lg">
            {t("hero.description")}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#flow"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-400/40 transition hover:bg-emerald-300"
            onClick={onLearnMoreClick}
          >
            {t("hero.primaryCta")}
            <ArrowLongRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <div className="flex gap-3">
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white hover:text-white"
            >
              <UsersIcon className="h-5 w-5" aria-hidden="true" />
              {t("hero.ctaOwners")}
            </a>
            <a
              href="#business"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white hover:text-white"
            >
              <ShieldCheckIcon className="h-5 w-5" aria-hidden="true" />
              {t("hero.ctaInsurers")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

