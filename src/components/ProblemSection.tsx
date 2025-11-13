import {
  BoltIcon,
  BuildingOffice2Icon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import FadeInSection from "./FadeInSection";
import { useI18n, type TranslationKey } from "../i18n";

const ProblemSection = () => {
  const { t } = useI18n();

  const painPoints = [
    {
      titleKey: "problem.groups.ev.title",
      icon: BoltIcon,
      bulletKeys: [
        "problem.groups.ev.bullet1",
        "problem.groups.ev.bullet2",
      ],
    },
    {
      titleKey: "problem.groups.insurers.title",
      icon: BuildingOffice2Icon,
      bulletKeys: [
        "problem.groups.insurers.bullet1",
        "problem.groups.insurers.bullet2",
      ],
    },
    {
      titleKey: "problem.groups.carbon.title",
      icon: CloudArrowUpIcon,
      bulletKeys: [
        "problem.groups.carbon.bullet1",
        "problem.groups.carbon.bullet2",
      ],
    },
  ] as const;

  return (
    <section id="problem" className="bg-white py-24">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {t("problem.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("problem.description")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {painPoints.map((group, index) => {
            const Icon = group.icon;
            return (
              <FadeInSection
                key={group.titleKey}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100"
                delay={index * 100}
              >
                <Icon className="h-10 w-10 text-emerald-500" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {t(group.titleKey as TranslationKey)}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {group.bulletKeys.map((key) => (
                    <li key={key} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <span>{t(key as TranslationKey)}</span>
                    </li>
                  ))}
                </ul>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

