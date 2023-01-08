import Image from "next/image";
import moment from "moment";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { shortenAddress } from "../../utils";

import Layout from "../../components/layout";

import MintImg from "/public/logo.png";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation("common");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mintues, setMintuess] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });
  const { account, activate, active } = useWeb3React<Web3Provider>();

  useEffect(() => {
    setCountdown();
    activate(injectedConnector);
  }, [seconds]);

  const setCountdown = () => {
    const targetTime = moment("2023-01-14 23:59:59");
    const leftTime = targetTime.unix() - moment().unix();
    let duration = moment.duration(leftTime, "seconds");
    const interval = 1000;

    setInterval(() => {
      duration = moment.duration(duration.asSeconds() - 1, "seconds");
      setDays(duration.days());
      setHours(duration.hours());
      setMintuess(duration.minutes());
      setSeconds(duration.seconds());
    }, interval);
  };

  const activateWallet = () => {
    activate(injectedConnector);
  };

  return (
    <Layout>
      <section className="flex flex-col justify-center content-center mt-16 container sm-auto">
        <h2
          className="text-primary text-4xl xl:text-6xl font-bold flex justify-center content-center"
          data-aos="fade-up"
        >
          BOK.xyz
        </h2>
        <p
          className="mt-4 text-sm xl:text-base text-zinc-300 flex justify-center content-center font-thin"
          data-aos="fade-up"
        >
          A private group of 100 dedicated Korean NFT Collectors and Artists
        </p>
      </section>
      <section
        className="mt-8 flex justify-center content-center gap-8"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center content-center font-semibold">
          <p className="flex justify-center content-center text-white text-3xl">
            {days}
          </p>
          <span className="text-xs text-white">DAYS</span>
        </div>
        <div className="flex flex-col justify-center content-center font-semibold">
          <p className="flex justify-center content-center text-white text-3xl">
            {hours}
          </p>
          <span className="text-xs text-white">HOURS</span>
        </div>
        <div className="flex flex-col justify-center content-center font-semibold">
          <p className="flex justify-center content-center text-white text-3xl">
            {mintues}
          </p>
          <span className="text-xs text-white">MINUTES</span>
        </div>
        <div className="flex flex-col justify-center content-center font-semibold">
          <p className="flex justify-center content-center text-white text-3xl">
            {seconds}
          </p>
          <span className="text-xs text-white">SECONDS</span>
        </div>
      </section>
      <section
        className="flex mt-12 justify-center content-center gap-4 flex-col md:flex-row"
        data-aos="fade-up"
      >
        <section className="bg-zinc-700 p-8 w-full border">
          <h3 className="text-4xl text-primary font-semibold flex justify-center content-center">
            MINT
          </h3>
          <p className="text-sm flex justify-center content-center text-white font-semibold mt-2">
            100 NFT&apos;s Minted
          </p>
          <div className="flex mt-12 justify-between text-white text-xl font-thin pb-4 border-b">
            <span>BALANCE</span>
            <p className="font-bold">1.3 ETH</p>
          </div>
          <div className="flex mt-12 justify-between text-white text-xl font-thin pb-4 border-b">
            <span>AMOUNT</span>
            <p className="font-bold">1 EA</p>
          </div>
          <div className="flex mt-12 justify-between text-white text-xl font-thin pb-4 border-b">
            <span>TOTAL</span>
            <p className="font-bold">1.3 ETH</p>
          </div>
          {active && (
            <p className="mt-8 text-white text-sm font-thin flex justify-end">
              {shortenAddress(account!)}
            </p>
          )}
          {active ? (
            <button className="bg-primary w-full text-white text-2xl tracking-wider p-4 mt-2">
              MINT
            </button>
          ) : (
            <button
              className="bg-primary w-full text-white text-2xl tracking-wider p-4 mt-12"
              onClick={activateWallet}
            >
              Wallet Connect
            </button>
          )}
        </section>
        <section className="bg-zinc-700 p-12 w-full rounded flex justify-center content-center">
          <Image src={MintImg} alt="Bok DAO Mint" width={350} />
        </section>
      </section>
    </Layout>
  );
}
