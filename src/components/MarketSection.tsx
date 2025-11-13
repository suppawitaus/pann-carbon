import { BoltIcon, ChartPieIcon, GlobeAsiaAustraliaIcon, ScaleIcon } from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const highlights = [
  { icon: BoltIcon, key: "market.highlights.1" },
  { icon: GlobeAsiaAustraliaIcon, key: "market.highlights.2" },
  { icon: ScaleIcon, key: "market.highlights.3" },
  { icon: ChartPieIcon, key: "market.highlights.4" },
] as const;

const marketFocus = [
  {
    icon: GlobeAsiaAustraliaIcon,
    titleKey: "market.focus.tam.title",
    descriptionKey: "market.focus.tam.description",
  },
  {
    icon: BoltIcon,
    titleKey: "market.focus.sam.title",
    descriptionKey: "market.focus.sam.description",
  },
  {
    icon: ChartPieIcon,
    titleKey: "market.focus.som.title",
    descriptionKey: "market.focus.som.description",
  },
] as const;

const MarketSection = () => {
  const { t } = useI18n();

  return (
    <section id="market" className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeInSection className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t("market.title")}
            </h2>
            <p className="text-lg text-slate-600">
              {t("market.description")}
            </p>
            <ul className="space-y-4 text-base text-slate-600">
              {highlights.map(({ icon: Icon, key }) => (
                <li key={key} className="flex gap-3">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-emerald-500" aria-hidden="true" />
                  <span>{t(key as TranslationKey)}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>
          <FadeInSection className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-lg shadow-emerald-100" delay={120}>
            <h3 className="text-xl font-semibold text-slate-900">
              {t("market.focus.title")}
            </h3>
            <div className="mt-6 space-y-6">
              {marketFocus.map(({ icon: Icon, titleKey, descriptionKey }, index) => (
                <FadeInSection
                  key={titleKey}
                  delay={index * 80}
                  className="flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4"
                >
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-emerald-500" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-semibold uppercase text-slate-500">
                      {t(titleKey as TranslationKey)}
                    </div>
                    <p className="mt-2 text-base text-slate-700">
                      {t(descriptionKey as TranslationKey)}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

