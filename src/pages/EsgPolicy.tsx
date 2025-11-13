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
    titleKey: "esgPolicy.topics.netZero.title",
    objectiveKey: "esgPolicy.topics.netZero.objective",
    focusKeys: [
      "esgPolicy.topics.netZero.focus.1",
      "esgPolicy.topics.netZero.focus.2",
      "esgPolicy.topics.netZero.focus.3",
    ],
    whyKey: "esgPolicy.topics.netZero.why",
    referenceLabelKey: "esgPolicy.topics.netZero.referenceLabel",
    referenceUrl:
      "https://www.onep.go.th/ลดโลกร้อนด้วย-carbon-neutrality-และ-net-zero-emissions/",
  },
  {
    titleKey: "esgPolicy.topics.ltLeds.title",
    objectiveKey: "esgPolicy.topics.ltLeds.objective",
    focusKeys: [
      "esgPolicy.topics.ltLeds.focus.1",
      "esgPolicy.topics.ltLeds.focus.2",
      "esgPolicy.topics.ltLeds.focus.3",
    ],
    whyKey: "esgPolicy.topics.ltLeds.why",
    referenceLabelKey: "esgPolicy.topics.ltLeds.referenceLabel",
    referenceUrl:
      "https://unfccc.int/sites/default/files/resource/Thailand%20LT-LEDS%20%28Revised%20Version%29_08Nov2022.pdf",
  },
  {
    titleKey: "esgPolicy.topics.tverPathway.title",
    objectiveKey: "esgPolicy.topics.tverPathway.objective",
    focusKeys: [
      "esgPolicy.topics.tverPathway.focus.1",
      "esgPolicy.topics.tverPathway.focus.2",
      "esgPolicy.topics.tverPathway.focus.3",
    ],
    whyKey: "esgPolicy.topics.tverPathway.why",
    referenceLabelKey: "esgPolicy.topics.tverPathway.referenceLabel",
    referenceUrl:
      "https://ghgreduction.tgo.or.th/en/what-is-t-ver/question-and-answer-about-t-ver/item/2105-t-ver.html",
  },
  {
    titleKey: "esgPolicy.topics.insuranceEsg.title",
    objectiveKey: "esgPolicy.topics.insuranceEsg.objective",
    focusKeys: [
      "esgPolicy.topics.insuranceEsg.focus.1",
      "esgPolicy.topics.insuranceEsg.focus.2",
      "esgPolicy.topics.insuranceEsg.focus.3",
    ],
    whyKey: "esgPolicy.topics.insuranceEsg.why",
    referenceLabelKey: "esgPolicy.topics.insuranceEsg.referenceLabel",
    referenceUrl:
      "https://www.oic.or.th/web-upload/1xff0d34e409a13ef56eea54c52a291126/202303/m_page/252/36/file_download/21d111b4240d33863b021aad57f5647d.pdf",
  },
  {
    titleKey: "esgPolicy.topics.digitalMrv.title",
    objectiveKey: "esgPolicy.topics.digitalMrv.objective",
    focusKeys: [
      "esgPolicy.topics.digitalMrv.focus.1",
      "esgPolicy.topics.digitalMrv.focus.2",
      "esgPolicy.topics.digitalMrv.focus.3",
    ],
    whyKey: "esgPolicy.topics.digitalMrv.why",
    referenceLabelKey: "esgPolicy.topics.digitalMrv.referenceLabel",
    referenceUrl:
      "https://www.researchgate.net/publication/389549261_The_Role_of_Blockchain_Technology_in_Enhancing_Carbon_Credit_Market_Transparency",
  },
  {
    titleKey: "esgPolicy.topics.publicEngagement.title",
    objectiveKey: "esgPolicy.topics.publicEngagement.objective",
    focusKeys: [
      "esgPolicy.topics.publicEngagement.focus.1",
      "esgPolicy.topics.publicEngagement.focus.2",
      "esgPolicy.topics.publicEngagement.focus.3",
    ],
    whyKey: "esgPolicy.topics.publicEngagement.why",
    referenceLabelKey: "esgPolicy.topics.publicEngagement.referenceLabel",
    referenceUrl:
      "https://www.unescap.org/sites/default/d8files/2024-12/EV%20in%20ASEAN%20and%20Thailand%20by%20Prof%20Yossapong%20Laoonual%2C%20KMUTT.pdf",
  },
  {
    titleKey: "esgPolicy.topics.renewableEnergy.title",
    objectiveKey: "esgPolicy.topics.renewableEnergy.objective",
    focusKeys: [
      "esgPolicy.topics.renewableEnergy.focus.1",
      "esgPolicy.topics.renewableEnergy.focus.2",
      "esgPolicy.topics.renewableEnergy.focus.3",
    ],
    whyKey: "esgPolicy.topics.renewableEnergy.why",
    referenceLabelKey: "esgPolicy.topics.renewableEnergy.referenceLabel",
    referenceUrl:
      "https://www.eppo.go.th/index.php/en/component/k2/item/21500-articles-energy-2025-03-31-03",
  },
  {
    titleKey: "esgPolicy.topics.partnerships.title",
    objectiveKey: "esgPolicy.topics.partnerships.objective",
    focusKeys: [
      "esgPolicy.topics.partnerships.focus.1",
      "esgPolicy.topics.partnerships.focus.2",
      "esgPolicy.topics.partnerships.focus.3",
    ],
    whyKey: "esgPolicy.topics.partnerships.why",
    referenceLabelKey: "esgPolicy.topics.partnerships.referenceLabel",
    referenceUrl:
      "https://www.bot.or.th/en/financial-innovation/sustainable-finance/green/Thailand-Taxonomy.html",
  },
];

const summaryRowKeys = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

const EsgPolicy = () => {
  const { t } = useI18n();

  const summaryRows = summaryRowKeys.map((key, index) => ({
    index: index + 1,
    area: t(`esgPolicy.summary.rows.${key}.area` as TranslationKey),
    outcome: t(`esgPolicy.summary.rows.${key}.outcome` as TranslationKey),
    context: t(`esgPolicy.summary.rows.${key}.context` as TranslationKey),
  }));

  return (
    <main className="bg-slate-100 pb-20">
      <section className="border-b border-white/10 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-6 py-20 sm:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
            {t("esgPolicy.hero.kicker")}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t("esgPolicy.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
            {t("esgPolicy.hero.tagline")}
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
                  {t("esgPolicy.section.objectiveLabel")}
                </p>
                <p className="mt-2 text-base text-slate-600">
                  {t(topic.objectiveKey)}
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-600">
                  {t("esgPolicy.section.focusLabel")}
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
                  {t("esgPolicy.section.whyLabel")}
                </p>
                <p className="mt-2 text-base text-slate-600">
                  {t(topic.whyKey)}
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("esgPolicy.section.referenceLabel")}
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
              {t("esgPolicy.summary.title")}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {t("esgPolicy.summary.description")}
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
                      {t("esgPolicy.summary.headers.outcome")}
                    </p>
                    <p className="mt-1 text-base text-slate-600">
                      {row.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.18em] text-emerald-600">
                      {t("esgPolicy.summary.headers.context")}
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
                    {t("esgPolicy.summary.headers.index")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("esgPolicy.summary.headers.area")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("esgPolicy.summary.headers.outcome")}
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    {t("esgPolicy.summary.headers.context")}
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
            {t("esgPolicy.vision.title")}
          </h2>
          <p className="mt-4 text-lg text-emerald-900 sm:text-xl">
            {t("esgPolicy.vision.quote")}
          </p>
        </div>
      </section>

    </main>
  );
};

export default EsgPolicy;

