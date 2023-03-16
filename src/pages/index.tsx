import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";
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
        <p className="mt-8 text-sm xl:text-base mb-8" data-aos="fade-up">
          {t("desc5")}
        </p>
        <a
          href="https://medium.com/@tbjqfnb/bok-xyz-story-1ddcd841dbf1"
          className="text-sm xl:text-base"
          data-aos="fade-up"
        >
          https://medium.com/@tbjqfnb/bok-xyz-story-1ddcd841dbf1
        </a>
      </section>
      <section className="mt-16">
        <h2
          className="text-primary text-4xl xl:text-6xl font-bold"
          data-aos="fade-up"
        >
          {t("title3")}
        </h2>
        <Link href="mint">
          <button
            className="mt-8 pl-8 pr-8 pt-3 pb-3 text-xl border hover:bg-primary text-white hover:text-zinc-100"
            data-aos="fade-up"
          >
            {t("desc6")}
          </button>
        </Link>
      </section>
      <section className="mt-16" data-aos="fade-up">
        <h2
          className="text-primary text-4xl xl:text-6xl font-bold mb-8"
          data-aos="fade-up"
        >
          Offline Event
        </h2>
        <YouTube
          videoId="UJLnk9zGAzk"
          opts={{ playerVars: { autoplay: 1 }, width: "95%" }}
        />
      </section>
      <section className="mt-16">
        <h2
          className="text-primary text-4xl xl:text-6xl font-bold"
          data-aos="fade-up"
        >
          {t("title4")}
        </h2>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc7")}{" "}
          <a
            className="hover:text-primary"
            href="https://twitter.com/bokqueen0718"
            target="_blank"
            rel="noreferrer"
          >
            @bokqueen0718
          </a>
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc8")}{" "}
          <a
            className="hover:text-primary"
            href="https://twitter.com/iambbrone"
            target="_blank"
            rel="noreferrer"
          >
            @iambbrone
          </a>
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc9")}{" "}
          <a
            className="hover:text-primary"
            href="https://twitter.com/Dodori4390"
            target="_blank"
            rel="noreferrer"
          >
            @Dodori4390
          </a>
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc10")}{" "}
          <a
            className="hover:text-primary"
            href="https://twitter.com/godmimi3"
            target="_blank"
            rel="noreferrer"
          >
            @godmimi3
          </a>
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc11")}{" "}
          <a
            className="hover:text-primary"
            href="https://twitter.com/dilrong_"
            target="_blank"
            rel="noreferrer"
          >
            @dilrong_
          </a>
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc12")}{" "}
          <a
            className="hover:text-primary"
            href="https://twitter.com/sj_chu815"
            target="_blank"
            rel="noreferrer"
          >
            @sj_chu815
          </a>
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          {t("desc13")}{" "}
          <a
            className="hover:text-primary"
            href="https://twitter.com/taekabow"
            target="_blank"
            rel="noreferrer"
          >
            @taekabow
          </a>
        </p>
      </section>
    </Layout>
  );
}
