import Image from "next/image";
import moment from "moment";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ethers } from "ethers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { shortenAddress } from "../../utils";

import Layout from "../../components/layout";

import MintImg from "/public/logo.png";
import BokDaoMint from "../../utils/BokDAONFTV1.json";
import Loading from "../../components/Loading";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [1],
  });
  const { account, activate, active, library, chainId } =
    useWeb3React<Web3Provider>();
  const { t } = useTranslation("common");

  const [isTx, setTx] = useState(false);

  const mintNFT = async () => {
    try {
      setTx(true);
      const contracAddress = "0x276619746ef001707d20845f0c9eD609c077E9A5";
      const contract = new ethers.Contract(
        contracAddress,
        BokDaoMint.abi,
        library?.getSigner()
      );

      let nftTxn;
      nftTxn = moment().isBefore("2023-1-16", "day")
        ? await contract.mintNFT({
            value: ethers.utils.parseEther("1.2"),
          })
        : await contract.mintNFT({
            gasLimit: 100000,
            value: ethers.utils.parseEther("1.3"),
          });

      await nftTxn.wait();
      setTx(false);
      toast.success(t("mint-desc6"));
    } catch (err) {
      setTx(false);
      console.error(err);
      toast.error(t("mint-desc7"));
    }
  };

  useEffect(() => {
    activate(injectedConnector);
    if (chainId !== 1 && chainId !== undefined) {
      toast.error(t("mint-desc4"));
    }
  }, [activate, chainId]);

  const activateWallet = () => {
    if (!library) {
      toast.warning(t("mint-desc5").toString());
    } else {
      activate(injectedConnector);
    }
  };

  return (
    <Layout>
      <ToastContainer />
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
            START MINT
          </p>
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
            <span>{t("mint-desc1")}</span>
            {moment().isBefore("2023-1-16", "day") ? (
              <p className="font-bold">1.2 ETH</p>
            ) : (
              <p className="font-bold">1.3 ETH</p>
            )}
          </div>
          <div className="flex mt-12 justify-between text-white text-xl font-thin pb-4 border-b">
            <span>{t("mint-desc2")}</span>
            <p className="font-bold">1 EA</p>
          </div>
          <div className="flex mt-12 justify-between text-white text-xl font-thin pb-4 border-b">
            <span>{t("mint-desc3")}</span>
            {moment().isBefore("2023-1-16", "day") ? (
              <p className="font-bold">1.2 ETH</p>
            ) : (
              <p className="font-bold">1.3 ETH</p>
            )}
          </div>
          {active && (
            <p className="mt-8 text-white text-sm font-thin flex justify-end">
              {shortenAddress(account!)}
            </p>
          )}
          {active ? (
            <button
              className="flex justify-center content-center bg-primary w-full text-white text-2xl tracking-wider p-4 mt-2"
              onClick={mintNFT}
            >
              {isTx && <Loading />}
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
