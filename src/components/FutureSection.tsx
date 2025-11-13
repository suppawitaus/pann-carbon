import {
  ArrowTrendingUpIcon,
  GlobeAsiaAustraliaIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const futurePoints: TranslationKey[] = [
  "future.points.1",
  "future.points.2",
  "future.points.3",
];

const roadmapItems: TranslationKey[] = [
  "future.roadmap.items.1",
  "future.roadmap.items.2",
  "future.roadmap.items.3",
];

const iconsForPoints = [
  GlobeAsiaAustraliaIcon,
  SignalIcon,
  ArrowTrendingUpIcon,
] as const;

const FutureSection = () => {
  const { t } = useI18n();

  return (
    <section id="future" className="bg-white py-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeInSection className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t("future.title")}
            </h2>
            <p className="text-lg text-slate-600">
              {t("future.description")}
            </p>
            <ul className="space-y-4 text-base text-slate-600">
              {futurePoints.map((key, index) => {
                const Icon = iconsForPoints[index];
                return (
                  <li key={key} className="flex gap-3">
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-emerald-500" aria-hidden="true" />
                    {t(key)}
                  </li>
                );
              })}
            </ul>
          </FadeInSection>
          <FadeInSection className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-100" delay={150}>
            <h3 className="text-lg font-semibold text-slate-900">
              {t("future.roadmap.title")}
            </h3>
            <ol className="mt-4 space-y-4 text-sm text-slate-600">
              {roadmapItems.map((key, index) => (
                <li key={key} className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-emerald-500 text-center text-xs font-bold leading-[1.5rem] text-white">
                    {index + 1}
                  </span>
                  {t(key)}
                </li>
              ))}
            </ol>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;

