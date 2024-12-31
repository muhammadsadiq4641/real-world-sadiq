import React from "react";
import Image from "next/image";
import Logo from "@assets/images/logo.png";
import X from "@assets/images/x.png";
import Telegram from "@assets/images/telegram.png";
import Etherscan from "@assets/images/etherscan.png";
import Dextool from "@assets/images/dextool.png";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="container mb-10">
      <div className="flex max-[620px]:flex-col max-[620px]:gap-y-5 items-center justify-between">
        <Image src={Logo} alt="logo" />
        <div>
          <p className="text-white text-sm font-medium">
            © <span className="underline">Realworld AI</span> {currentYear}. All
            rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center md:gap-5 gap-3">
          <Image
            src={X}
            alt="twiiter"
            className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
          />
          <Image
            src={Telegram}
            alt="telegram"
            className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
          />
          <Image
            src={Etherscan}
            alt="etherscan"
            className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
          />
          <Image
            src={Dextool}
            alt="dextool"
            className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
