import { useI18n, type TranslationKey } from "../i18n";

type TopicConfig = {
  titleKey: TranslationKey;
  objectiveKey: TranslationKey;
  focusKeys: TranslationKey[];
  outputKey: TranslationKey;
  referenceLabelKey: TranslationKey;
  referenceUrl: string;
};

const topicConfigs: TopicConfig[] = [
  {
    titleKey: "technology.topics.telematics.title",
    objectiveKey: "technology.topics.telematics.objective",
    focusKeys: [
      "technology.topics.telematics.focus.1",
      "technology.topics.telematics.focus.2",
      "technology.topics.telematics.focus.3",
    ],
    outputKey: "technology.topics.telematics.output",
    referenceLabelKey: "technology.topics.telematics.referenceLabel",
    referenceUrl:
      "https://www.eseye.com/uncategorized/from-crash-to-claim-the-role-of-iot-and-telematics-in-modern-auto-insurance/",
  },
  {
    titleKey: "technology.topics.battery.title",
    objectiveKey: "technology.topics.battery.objective",
    focusKeys: [
      "technology.topics.battery.focus.1",
      "technology.topics.battery.focus.2",
      "technology.topics.battery.focus.3",
    ],
    outputKey: "technology.topics.battery.output",
    referenceLabelKey: "technology.topics.battery.referenceLabel",
    referenceUrl:
      "https://ghgreduction.tgo.or.th/en/methodology/t-ver-classify-methodology/t-ver-methodology4.html",
  },
  {
    titleKey: "technology.topics.pricing.title",
    objectiveKey: "technology.topics.pricing.objective",
    focusKeys: [
      "technology.topics.pricing.focus.1",
      "technology.topics.pricing.focus.2",
      "technology.topics.pricing.focus.3",
    ],
    outputKey: "technology.topics.pricing.output",
    referenceLabelKey: "technology.topics.pricing.referenceLabel",
    referenceUrl: "https://www.mdpi.com/2227-9091/12/9/137",
  },
  {
    titleKey: "technology.topics.mrv.title",
    objectiveKey: "technology.topics.mrv.objective",
    focusKeys: [
      "technology.topics.mrv.focus.1",
      "technology.topics.mrv.focus.2",
      "technology.topics.mrv.focus.3",
    ],
    outputKey: "technology.topics.mrv.output",
    referenceLabelKey: "technology.topics.mrv.referenceLabel",
    referenceUrl: "https://www.mdpi.com/1996-1073/17/13/3296",
  },
  {
    titleKey: "technology.topics.engagement.title",
    objectiveKey: "technology.topics.engagement.objective",
    focusKeys: [
      "technology.topics.engagement.focus.1",
      "technology.topics.engagement.focus.2",
      "technology.topics.engagement.focus.3",
    ],
    outputKey: "technology.topics.engagement.output",
    referenceLabelKey: "technology.topics.engagement.referenceLabel",
    referenceUrl:
      "https://www.researchgate.net/publication/394548473_Telematics_in_Insurance_Challenges_and_Limitations",
  },
  {
    titleKey: "technology.topics.compliance.title",
    objectiveKey: "technology.topics.compliance.objective",
    focusKeys: [
      "technology.topics.compliance.focus.1",
      "technology.topics.compliance.focus.2",
      "technology.topics.compliance.focus.3",
    ],
    outputKey: "technology.topics.compliance.output",
    referenceLabelKey: "technology.topics.compliance.referenceLabel",
    referenceUrl: "https://www.mdpi.com/2071-1050/17/14/6586",
  },
];

const Technology = () => {
  const { t } = useI18n();

  const summaryRows = topicConfigs.map((topic) => ({
    title: t(topic.titleKey),
    objective: t(topic.objectiveKey),
    output: t(topic.outputKey),
  }));

  return (
    <main className="bg-slate-100 pb-20">
      <section className="border-b border-white/10 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-6 py-20 sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            {t("technology.hero.kicker")}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t("technology.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
            {t("technology.hero.tagline")}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 sm:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {topicConfigs.map((topic) => (
            <article
              key={topic.titleKey}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-slate-900">
                  {t(topic.titleKey)}
                </h2>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                  {t("technology.section.objectiveLabel")}
                </p>
                <p className="mt-2 text-base text-slate-600">
                  {t(topic.objectiveKey)}
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                  {t("technology.section.focusLabel")}
                </p>
                <ul className="mt-2 space-y-2 text-base text-slate-600">
                  {topic.focusKeys.map((focusKey) => (
                    <li key={focusKey} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                      <span>{t(focusKey)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                  {t("technology.section.outputLabel")}
                </p>
                <p className="mt-2 text-base text-slate-600">
                  {t(topic.outputKey)}
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("technology.section.referenceLabel")}
                </p>
                <a
                  href={topic.referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <span>{t(topic.referenceLabelKey)}</span>
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 sm:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t("technology.summary.title")}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {t("technology.summary.description")}
            </p>
          </div>

          <div className="grid gap-4 md:hidden">
            {summaryRows.map((row) => (
              <div
                key={row.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {row.title}
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div>
                    <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                      {t("technology.section.objectiveLabel")}
                    </p>
                    <p className="mt-1 text-base text-slate-600">
                      {row.objective}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                      {t("technology.section.outputLabel")}
                    </p>
                    <p className="mt-1 text-base text-slate-600">
                      {row.output}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead>
                <tr className="text-sm uppercase tracking-[0.18em] text-slate-500">
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("technology.summary.headers.topic")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("technology.summary.headers.objective")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("technology.summary.headers.output")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-base text-slate-600">
                {summaryRows.map((row) => (
                  <tr key={row.title} className="align-top">
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {row.title}
                    </td>
                    <td className="px-6 py-5">{row.objective}</td>
                    <td className="px-6 py-5">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-12 sm:px-12">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 shadow-sm sm:p-12">
          <h2 className="text-xl font-semibold text-emerald-800 sm:text-2xl">
            {t("technology.vision.title")}
          </h2>
          <p className="mt-4 text-lg text-emerald-900 sm:text-xl">
            {t("technology.vision.quote")}
          </p>
        </div>
      </section>

    </main>
  );
};

export default Technology;

