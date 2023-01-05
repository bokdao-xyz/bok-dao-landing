import Head from "next/head";
import Image from "next/image";

import Discord from "/public/discord.svg";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen h-full">
      <Head>
        <title>
          Bok.xyz - A private group of 100 dedicated Korean NFT Collectors and
          Artists
        </title>
        <meta
          property="og:description"
          content="A private group of 100 dedicated Korean NFT Collectors and Artists"
        />
      </Head>
      <main className="main-content flex flex-col flex-grow p-4 xl:p-0 container mx-auto text-zinc-300">
        {children}
      </main>
      <footer className="mt-16 flex justify-center">
        <div className="flex flex-col">
          <p className="flex text-zinc-300 text-xs">BOK DAO Community</p>
          <a
            className="flex justify-center content-center mt-4 mb-4"
            href="https://discord.gg/DgQvWUShtk"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Discord} alt="bok.xyz" width={32} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
