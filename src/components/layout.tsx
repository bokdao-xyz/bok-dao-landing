import Head from "next/head";

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
    </div>
  );
};

export default Layout;
