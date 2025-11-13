import {
  GlobeAsiaAustraliaIcon,
  ScaleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const impacts = [
  {
    icon: GlobeAsiaAustraliaIcon,
    titleKey: "impact.cards.1.title",
    descriptionKey: "impact.cards.1.description",
  },
  {
    icon: ScaleIcon,
    titleKey: "impact.cards.2.title",
    descriptionKey: "impact.cards.2.description",
  },
  {
    icon: UsersIcon,
    titleKey: "impact.cards.3.title",
    descriptionKey: "impact.cards.3.description",
  },
] as const;

const ImpactSection = () => {
  const { t } = useI18n();

  return (
    <section id="impact" className="bg-slate-50 py-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t("impact.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("impact.description")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {impacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeInSection
                key={item.titleKey}
                className="rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-lg shadow-emerald-100/40"
                delay={index * 120}
              >
                <div className="flex items-center gap-3 text-sm font-semibold uppercase text-emerald-500">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {t(item.titleKey as TranslationKey)}
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {t(item.descriptionKey as TranslationKey)}
                </p>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

