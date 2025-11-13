import {
  ChartBarIcon,
  CurrencyDollarIcon,
  GlobeAsiaAustraliaIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const SolutionSection = () => {
  const { t } = useI18n();

  const points = [
    {
      icon: GlobeAsiaAustraliaIcon,
      key: "solution.points.1",
    },
    {
      icon: ChartBarIcon,
      key: "solution.points.2",
    },
    {
      icon: CurrencyDollarIcon,
      key: "solution.points.3",
    },
    {
      icon: ShieldCheckIcon,
      key: "solution.points.4",
    },
  ] as const;

  return (
    <section id="solution" className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeInSection className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-600">
              {t("solution.kicker")}
            </div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t("solution.title")}
            </h2>
            <p className="text-lg text-slate-600">
              {t("solution.description")}
            </p>
            <ul className="space-y-4 text-base text-slate-600">
              {points.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.key} className="flex gap-3">
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{t(point.key as TranslationKey)}</span>
                  </li>
                );
              })}
            </ul>
          </FadeInSection>
          <FadeInSection className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-8 shadow-lg shadow-emerald-100" delay={150}>
            <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />
            <div className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-sky-200 blur-3xl" />
            <div className="relative space-y-5">
              <h3 className="text-xl font-semibold text-slate-900">
                {t("solution.valueFlows.title")}
              </h3>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="rounded-xl bg-slate-50 p-4 shadow-sm shadow-slate-100">
                  <div className="text-sm font-semibold text-emerald-600">
                    {t("solution.valueFlows.ev.title")}
                  </div>
                  <p className="mt-1">
                    {t("solution.valueFlows.ev.description")}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 shadow-sm shadow-slate-100">
                  <div className="text-sm font-semibold text-emerald-600">
                    {t("solution.valueFlows.insurers.title")}
                  </div>
                  <p className="mt-1">
                    {t("solution.valueFlows.insurers.description")}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 shadow-sm shadow-slate-100">
                  <div className="text-sm font-semibold text-emerald-600">
                    {t("solution.valueFlows.buyers.title")}
                  </div>
                  <p className="mt-1">
                    {t("solution.valueFlows.buyers.description")}
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

