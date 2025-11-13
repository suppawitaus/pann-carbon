import {
  BanknotesIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const revenueStreams = [
  {
    icon: ChartBarIcon,
    titleKey: "business.revenue.items.1.title",
    descriptionKey: "business.revenue.items.1.description",
  },
  {
    icon: BanknotesIcon,
    titleKey: "business.revenue.items.2.title",
    descriptionKey: "business.revenue.items.2.description",
  },
] as const;

const valueFlows = [
  {
    icon: CursorArrowRaysIcon,
    titleKey: "business.value.items.1.title",
    descriptionKey: "business.value.items.1.description",
  },
  {
    icon: BuildingLibraryIcon,
    titleKey: "business.value.items.2.title",
    descriptionKey: "business.value.items.2.description",
  },
  {
    icon: BanknotesIcon,
    titleKey: "business.value.items.3.title",
    descriptionKey: "business.value.items.3.description",
  },
] as const;

const BusinessModelSection = () => {
  const { t } = useI18n();

  return (
    <section id="business" className="bg-white py-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t("business.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("business.description")}
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeInSection className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {t("business.revenue.title")}
            </h3>
            <div className="space-y-4">
              {revenueStreams.map(({ icon: Icon, titleKey, descriptionKey }, index) => {
                return (
                  <FadeInSection
                    key={titleKey}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-100"
                    delay={index * 80}
                  >
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase text-emerald-500">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      {t(titleKey as TranslationKey)}
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {t(descriptionKey as TranslationKey)}
                    </p>
                  </FadeInSection>
                );
              })}
            </div>
          </FadeInSection>
          <FadeInSection className="space-y-6" delay={150}>
            <h3 className="text-lg font-semibold text-slate-900">
              {t("business.value.title")}
            </h3>
            <div className="space-y-4">
              {valueFlows.map(({ icon: Icon, titleKey, descriptionKey }, index) => {
                return (
                  <FadeInSection
                    key={titleKey}
                    className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-100/40"
                    delay={index * 80}
                  >
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase text-emerald-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      {t(titleKey as TranslationKey)}
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {t(descriptionKey as TranslationKey)}
                    </p>
                  </FadeInSection>
                );
              })}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;

