import FadeInSection from "./FadeInSection";
import founder1Img from "../assets/Founder_1.png";
import founder2Img from "../assets/Founder_2.png";
import founder3Img from "../assets/Founder_3.png";
import { useI18n, type TranslationKey } from "../i18n";

const teamMembers = [
  { key: "1", image: founder1Img },
  { key: "2", image: founder2Img },
  { key: "3", image: founder3Img },
] as const;

const TeamSection = () => {
  const { t } = useI18n();

  return (
    <section id="team" className="bg-slate-900 py-24 text-slate-100">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t("team.title")}
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {t("team.subtitle")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => {
            const nameKey = `team.members.${member.key}.name` as TranslationKey;
            const roleKey = `team.members.${member.key}.role` as TranslationKey;
            const descriptionKey =
              `team.members.${member.key}.description` as TranslationKey;

            return (
              <FadeInSection
                key={member.key}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur"
                delay={index * 120}
              >
                <img
                  src={member.image}
                  alt={t(nameKey)}
                  className="mb-4 h-32 w-32 rounded-full border border-white/20 object-cover object-center shadow-lg"
                />
                <div className="text-lg font-semibold text-white">
                  {t(nameKey)}
                </div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wide text-emerald-300">
                  {t(roleKey)}
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  {t(descriptionKey)}
                </p>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

