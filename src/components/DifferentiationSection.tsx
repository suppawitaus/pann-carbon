import { AdjustmentsHorizontalIcon, ChartBarIcon, UsersIcon } from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const cards = [
  {
    titleKey: "differentiation.cards.1.title",
    descriptionKey: "differentiation.cards.1.description",
    icon: ChartBarIcon,
  },
  {
    titleKey: "differentiation.cards.2.title",
    descriptionKey: "differentiation.cards.2.description",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    titleKey: "differentiation.cards.3.title",
    descriptionKey: "differentiation.cards.3.description",
    icon: UsersIcon,
  },
] as const;

const DifferentiationSection = () => {
  const { t } = useI18n();

  return (
    <section id="differentiation" className="bg-slate-900 py-24 text-slate-100">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeInSection className="space-y-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t("differentiation.title")}
            </h2>
            <p className="text-lg text-slate-300">
              {t("differentiation.description")}
            </p>
          </FadeInSection>
          <FadeInSection
            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            delay={120}
          >
            {cards.map(({ titleKey, icon: Icon, descriptionKey }, index) => (
              <FadeInSection
                key={titleKey}
                className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                delay={index * 80}
              >
                <div className="flex items-center gap-3 text-base font-semibold text-white">
                  <Icon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  {t(titleKey as TranslationKey)}
                </div>
                <p className="text-sm text-slate-200">
                  {t(descriptionKey as TranslationKey)}
                </p>
              </FadeInSection>
            ))}
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
