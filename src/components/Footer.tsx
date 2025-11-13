import { useI18n } from "../i18n";

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-10 text-center text-sm text-slate-400">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="font-semibold uppercase tracking-widest text-emerald-400">
          PANN CARBON
        </div>
        <p className="mt-2 text-slate-500">
          {t("footer.tagline")}
        </p>
        <p className="mt-4 text-xs text-slate-600">
          {t("footer.description")}
        </p>
        <p className="mt-3 text-[0.65rem] text-slate-600">
          {t("footer.copyright").replace("{year}", String(year))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

