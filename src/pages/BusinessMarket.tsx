import { useI18n, type TranslationKey } from "../i18n";

type TopicConfig = {
  titleKey: TranslationKey;
  objectiveKey: TranslationKey;
  focusKeys: TranslationKey[];
  whyKey: TranslationKey;
  referenceLabelKey: TranslationKey;
  referenceUrl: string;
};

const topicConfigs: TopicConfig[] = [
  {
    titleKey: "businessMarket.topics.marketGrowth.title",
    objectiveKey: "businessMarket.topics.marketGrowth.objective",
    focusKeys: [
      "businessMarket.topics.marketGrowth.focus.1",
      "businessMarket.topics.marketGrowth.focus.2",
      "businessMarket.topics.marketGrowth.focus.3",
    ],
    whyKey: "businessMarket.topics.marketGrowth.why",
    referenceLabelKey: "businessMarket.topics.marketGrowth.referenceLabel",
    referenceUrl:
      "https://www.eppo.go.th/epposite/index.php/th/petroleum/item/21500-articles-energy-2025-03-31-03",
  },
  {
    titleKey: "businessMarket.topics.carbonInsurance.title",
    objectiveKey: "businessMarket.topics.carbonInsurance.objective",
    focusKeys: [
      "businessMarket.topics.carbonInsurance.focus.1",
      "businessMarket.topics.carbonInsurance.focus.2",
      "businessMarket.topics.carbonInsurance.focus.3",
    ],
    whyKey: "businessMarket.topics.carbonInsurance.why",
    referenceLabelKey: "businessMarket.topics.carbonInsurance.referenceLabel",
    referenceUrl:
      "https://www.krungsri.com/en/research/industry/industry-outlook/hi-tech-industries/electric-vehicle/io/electric-vehicle-2024",
  },
  {
    titleKey: "businessMarket.topics.tverStructure.title",
    objectiveKey: "businessMarket.topics.tverStructure.objective",
    focusKeys: [
      "businessMarket.topics.tverStructure.focus.1",
      "businessMarket.topics.tverStructure.focus.2",
      "businessMarket.topics.tverStructure.focus.3",
    ],
    whyKey: "businessMarket.topics.tverStructure.why",
    referenceLabelKey: "businessMarket.topics.tverStructure.referenceLabel",
    referenceUrl:
      "https://ghgreduction.tgo.or.th/en/what-is-t-ver/question-and-answer-about-t-ver/item/2105-t-ver.html",
  },
  {
    titleKey: "businessMarket.topics.microAggregation.title",
    objectiveKey: "businessMarket.topics.microAggregation.objective",
    focusKeys: [
      "businessMarket.topics.microAggregation.focus.1",
      "businessMarket.topics.microAggregation.focus.2",
      "businessMarket.topics.microAggregation.focus.3",
    ],
    whyKey: "businessMarket.topics.microAggregation.why",
    referenceLabelKey: "businessMarket.topics.microAggregation.referenceLabel",
    referenceUrl:
      "https://ghgreduction.tgo.or.th/en/methodology/t-ver-classify-methodology/t-ver-methodology4.html",
  },
  {
    titleKey: "businessMarket.topics.competitors.title",
    objectiveKey: "businessMarket.topics.competitors.objective",
    focusKeys: [
      "businessMarket.topics.competitors.focus.1",
      "businessMarket.topics.competitors.focus.2",
      "businessMarket.topics.competitors.focus.3",
    ],
    whyKey: "businessMarket.topics.competitors.why",
    referenceLabelKey: "businessMarket.topics.competitors.referenceLabel",
    referenceUrl: "https://tver.tgo.or.th/database/public/projects/1/2?lang=en",
  },
  {
    titleKey: "businessMarket.topics.pricingModel.title",
    objectiveKey: "businessMarket.topics.pricingModel.objective",
    focusKeys: [
      "businessMarket.topics.pricingModel.focus.1",
      "businessMarket.topics.pricingModel.focus.2",
      "businessMarket.topics.pricingModel.focus.3",
    ],
    whyKey: "businessMarket.topics.pricingModel.why",
    referenceLabelKey: "businessMarket.topics.pricingModel.referenceLabel",
    referenceUrl:
      "https://www.onep.go.th/%E0%B8%A5%E0%B8%94%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-carbon-neutrality-%E0%B9%81%E0%B8%A5%E0%B8%B0-net-zero-emissions/",
  },
  {
    titleKey: "businessMarket.topics.expansion.title",
    objectiveKey: "businessMarket.topics.expansion.objective",
    focusKeys: [
      "businessMarket.topics.expansion.focus.1",
      "businessMarket.topics.expansion.focus.2",
      "businessMarket.topics.expansion.focus.3",
    ],
    whyKey: "businessMarket.topics.expansion.why",
    referenceLabelKey: "businessMarket.topics.expansion.referenceLabel",
    referenceUrl: "https://www.roojai.com/article/car-insurance-tips/motor-insurance-impact-telematics/",
  },
  {
    titleKey: "businessMarket.topics.evInsurance.title",
    objectiveKey: "businessMarket.topics.evInsurance.objective",
    focusKeys: [
      "businessMarket.topics.evInsurance.focus.1",
      "businessMarket.topics.evInsurance.focus.2",
      "businessMarket.topics.evInsurance.focus.3",
    ],
    whyKey: "businessMarket.topics.evInsurance.why",
    referenceLabelKey: "businessMarket.topics.evInsurance.referenceLabel",
    referenceUrl: "https://www.roojai.com/en/article/press-release/electric-car-insurance-launch/",
  },
  {
    titleKey: "businessMarket.topics.telematicsPricing.title",
    objectiveKey: "businessMarket.topics.telematicsPricing.objective",
    focusKeys: [
      "businessMarket.topics.telematicsPricing.focus.1",
      "businessMarket.topics.telematicsPricing.focus.2",
      "businessMarket.topics.telematicsPricing.focus.3",
    ],
    whyKey: "businessMarket.topics.telematicsPricing.why",
    referenceLabelKey: "businessMarket.topics.telematicsPricing.referenceLabel",
    referenceUrl: "https://www.mdpi.com/2227-9091/12/9/137",
  },
  {
    titleKey: "businessMarket.topics.blockchainCarbon.title",
    objectiveKey: "businessMarket.topics.blockchainCarbon.objective",
    focusKeys: [
      "businessMarket.topics.blockchainCarbon.focus.1",
      "businessMarket.topics.blockchainCarbon.focus.2",
      "businessMarket.topics.blockchainCarbon.focus.3",
    ],
    whyKey: "businessMarket.topics.blockchainCarbon.why",
    referenceLabelKey: "businessMarket.topics.blockchainCarbon.referenceLabel",
    referenceUrl: "https://www.mdpi.com/1996-1073/17/13/3296",
  },
  {
    titleKey: "businessMarket.topics.iotTelematics.title",
    objectiveKey: "businessMarket.topics.iotTelematics.objective",
    focusKeys: [
      "businessMarket.topics.iotTelematics.focus.1",
      "businessMarket.topics.iotTelematics.focus.2",
      "businessMarket.topics.iotTelematics.focus.3",
    ],
    whyKey: "businessMarket.topics.iotTelematics.why",
    referenceLabelKey: "businessMarket.topics.iotTelematics.referenceLabel",
    referenceUrl:
      "https://www.eseye.com/uncategorized/from-crash-to-claim-the-role-of-iot-and-telematics-in-modern-auto-insurance/",
  },
];

const summaryRowKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
] as const;

const BusinessMarket = () => {
  const { t } = useI18n();

  const summaryRows = summaryRowKeys.map((key, index) => ({
    index: index + 1,
    area: t(`businessMarket.summary.rows.${key}.area` as TranslationKey),
    outcome: t(`businessMarket.summary.rows.${key}.outcome` as TranslationKey),
    context: t(`businessMarket.summary.rows.${key}.context` as TranslationKey),
  }));

  return (
    <main className="bg-slate-100 pb-20">
      <section className="border-b border-white/10 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-6 py-20 sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            {t("businessMarket.hero.kicker")}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t("businessMarket.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
            {t("businessMarket.hero.tagline")}
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
                  {t("businessMarket.section.objectiveLabel")}
                </p>
                <p className="mt-2 text-base text-slate-600">
                  {t(topic.objectiveKey)}
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                  {t("businessMarket.section.focusLabel")}
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
                  {t("businessMarket.section.whyLabel")}
                </p>
                <p className="mt-2 text-base text-slate-600">
                  {t(topic.whyKey)}
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("businessMarket.section.referenceLabel")}
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
              {t("businessMarket.summary.title")}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {t("businessMarket.summary.description")}
            </p>
          </div>

          <div className="grid gap-4 md:hidden">
            {summaryRows.map((row) => (
              <div
                key={row.index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {row.index.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {row.area}
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div>
                    <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                      {t("businessMarket.summary.headers.outcome")}
                    </p>
                    <p className="mt-1 text-base text-slate-600">
                      {row.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                      {t("businessMarket.summary.headers.context")}
                    </p>
                    <p className="mt-1 text-base text-slate-600">
                      {row.context}
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
                    {t("businessMarket.summary.headers.index")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("businessMarket.summary.headers.area")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("businessMarket.summary.headers.outcome")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("businessMarket.summary.headers.context")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-base text-slate-600">
                {summaryRows.map((row) => (
                  <tr key={row.index} className="align-top">
                    <td className="px-6 py-5 text-sm font-semibold text-slate-500">
                      {row.index.toString().padStart(2, "0")}
                    </td>
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {row.area}
                    </td>
                    <td className="px-6 py-5">{row.outcome}</td>
                    <td className="px-6 py-5">{row.context}</td>
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
            {t("businessMarket.vision.title")}
          </h2>
          <p className="mt-4 text-lg text-emerald-900 sm:text-xl">
            {t("businessMarket.vision.quote")}
          </p>
        </div>
      </section>

    </main>
  );
};

export default BusinessMarket;

