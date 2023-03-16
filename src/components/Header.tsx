import Head from "next/head";

const Header = () => {
  return (
    <header className="flex justify-center sticky top-0">
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
      <nav className="flex w-full justify-end p-4">
        <a
          type="button"
          className="text-white bg-primary focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          href="https://app.bokdao.xyz"
          target="_blank"
          rel="noreferrer"
        >
          Go to App
        </a>
      </nav>
    </header>
  );
};

export default Header;
