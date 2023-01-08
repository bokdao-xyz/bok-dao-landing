import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
};

export default appWithTranslation(App);
