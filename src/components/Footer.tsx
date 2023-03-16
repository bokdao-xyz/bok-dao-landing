import Image from "next/image";

import Twitter from "/public/twitter.svg";
import Discord from "/public/discord.svg";
import Telegram from "/public/telegram.svg";

const Footer = () => {
  return (
    <footer className="mt-16 flex justify-center">
      <div className="flex flex-col">
        <p className="flex text-zinc-300 text-xs">BOK DAO Community</p>
        <div className="flex justify-center gap-4">
          <a
            className="flex justify-center content-center mt-4 mb-4"
            href="https://twitter.com/bokdao_"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Twitter} alt="bok.xyz" width={32} />
          </a>
          <a
            className="flex justify-center content-center mt-4 mb-4"
            href="https://discord.gg/DgQvWUShtk"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Discord} alt="bok.xyz" width={32} />
          </a>
          <a
            className="flex justify-center content-center mt-4 mb-4"
            href="https://t.me/BOKDAO_Chat"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Telegram} alt="bok.xyz" width={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
