import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "../components/layout";

import Logo from "../../public/logo.png";
import Logotype from "../../public/logotype.svg";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <div className="flex justify-center content-center">
        <Image src={Logo} alt="bok.xyz logo" height={500} data-aos="fade-up" />
      </div>
      <div className="flex justify-center content-center">
        <Image src={Logotype} alt="bok.xyz" data-aos="fade-up" />
      </div>
      <section className="mt-16">
        <h2 className="text-primary text-4xl xl:text-6xl" data-aos="fade-up">
          What is Bok.xyz?
        </h2>
        <p className="mt-4 text-sm xl:text-base" data-aos="fade-up">
          A private group of 100 dedicated Korean NFT Collectors and Artists
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          1. Collecting Art Related Global Collective PFPs and Tickets
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          2. Connect Collectors - Exhibition NFT & Physical Art Established
          Traditional Artists and Creators - Open Salon In-person events ZOOM
        </p>
        <p className="mt-8 text-sm xl:text-base" data-aos="fade-up">
          3. Support Creative Entrepreneurship - Global trend research summary
        </p>
      </section>
    </Layout>
  );
}
