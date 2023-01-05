import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "../components/layout";

import Logo from "/public/logo.png";
import Logotype from "/public/logotype.svg";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation("common");

  return (
    <Layout>
      <div className="flex justify-center content-center">
        <Image src={Logo} alt="bok.xyz logo" height={500} data-aos="fade-up" />
      </div>
      <div className="flex justify-center content-center">
        <Image src={Logotype} alt="bok.xyz" data-aos="fade-up" />
      </div>
      <section className="mt-16">
        <h2
          className="text-primary text-4xl xl:text-6xl font-bold"
          data-aos="fade-up"
        >
          {t("title1")}
        </h2>
        <p className="mt-4 text-sm xl:text-base" data-aos="fade-up">
          {t("desc1")}
        </p>
      </section>
      <section className="mt-16">
        <h2
          className="text-primary text-4xl xl:text-6xl font-bold"
          data-aos="fade-up"
        >
          {t("title2")}
        </h2>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc2")}
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc3")}
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc4")}
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc5")}
        </p>
      </section>
      <section className="mt-16">
        <h2
          className="text-primary text-4xl xl:text-6xl font-bold"
          data-aos="fade-up"
        >
          {t("title3")}
        </h2>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc6")}
        </p>
      </section>
    </Layout>
  );
}
