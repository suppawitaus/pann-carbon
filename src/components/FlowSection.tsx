import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  ChartBarSquareIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const FlowSection = () => {
  const { t } = useI18n();

  const steps = [
    {
      icon: BoltIcon,
      titleKey: "flow.steps.1.title",
      descriptionKey: "flow.steps.1.description",
    },
    {
      icon: ShareIcon,
      titleKey: "flow.steps.2.title",
      descriptionKey: "flow.steps.2.description",
    },
    {
      icon: ChartBarSquareIcon,
      titleKey: "flow.steps.3.title",
      descriptionKey: "flow.steps.3.description",
    },
    {
      icon: BanknotesIcon,
      titleKey: "flow.steps.4.title",
      descriptionKey: "flow.steps.4.description",
    },
    {
      icon: ArrowTrendingUpIcon,
      titleKey: "flow.steps.5.title",
      descriptionKey: "flow.steps.5.description",
    },
  ] as const;

  return (
    <section id="flow" className="bg-white py-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t("flow.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("flow.subtitle")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeInSection
                key={step.titleKey}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm shadow-slate-100"
                delay={index * 80}
              >
                <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide text-emerald-500">
                  <span>
                    {t("flow.stepLabel").replace("{number}", String(index + 1))}
                  </span>
                  <span className="h-1 w-12 rounded-full bg-emerald-300" />
                </div>
                <Icon className="h-10 w-10 text-emerald-500" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-slate-900">
                  {t(step.titleKey as TranslationKey)}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t(step.descriptionKey as TranslationKey)}
                </p>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;

