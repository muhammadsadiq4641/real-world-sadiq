import React from "react";
import lineimg from "@assets/images/lineimg.png";
import Image from "next/image";
import TokenomicsBg from "@assets/images/tokenomics-bg.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Tokenomics = () => {
  return (
    <div className="container">
      <div className="max-md:flex max-md:flex-col mb-20 max-md:justify-center max-md:items-center">
        <h5 className="text-white font-outspaceFighter text-5xl font-normal max-lg:text-2xl max-md:text-center max-sm:text-xl">
          TOkenomics
        </h5>

        <Image src={lineimg} alt="lineimg" className="mt-1" />
      </div>
      <div className="flex max-[540px]:flex-col max-[540px]:gap-y-14 items-center justify-between">
        {/* card one  */}

        <div className="relative w-[238px] h-[239px] p-4 pt-7">
          <Image
            src={TokenomicsBg}
            alt="TokenomicsBg"
            className="absolute inset-0 w-full h-full"
          />
          <div className="pt-4">
            <h4 className="text-white font-outspaceFighter text-sm">
              Liquidity Pool
            </h4>
            <p className="font-clashDisplay text-[13px] mt-3 text-white">
              9,900,000 RWAI (90% of total supply)
            </p>
          </div>
          <div className="mt-7 flex justify-end">
            <div className="w-[84px]">
              <CircularProgressbar
                value={90}
                text={`${90}%`}
                styles={buildStyles({
                  // Colors
                  pathColor: "#00FFE3",
                  textColor: "#FFFFFF",
                  trailColor: "#00FFE31A",
                  backgroundColor: "#1E293B",
                })}
                className="font-outspaceFighter"
              />
            </div>
          </div>
        </div>
        <div className="space-y-14">
          {/* card two  */}

          <div className="relative w-[238px] h-[239px] p-4 pt-7">
            <Image
              src={TokenomicsBg}
              alt="TokenomicsBg"
              className="absolute inset-0 w-full h-full"
            />
            <div className="pt-4">
              <h4 className="text-white font-outspaceFighter text-sm">
                Development, Team & Marketing
              </h4>
              <p className="font-clashDisplay text-[13px] mt-3 text-white">
                715,000 RWAI (6.5% of total supply)
              </p>
            </div>
            <div className="mt-7 flex justify-end">
              <div className="w-[84px]">
                <CircularProgressbar
                  value={6.5}
                  text={`${6.5}%`}
                  styles={buildStyles({
                    // Colors
                    pathColor: "#00FFE3",
                    textColor: "#FFFFFF",
                    trailColor: "#00FFE31A",
                    backgroundColor: "#1E293B",
                  })}
                  className="font-outspaceFighter"
                />
              </div>
            </div>
          </div>

          {/* card three  */}

          <div className="relative w-[238px] h-[239px] p-4 pt-7">
            <Image
              src={TokenomicsBg}
              alt="TokenomicsBg"
              className="absolute inset-0 w-full h-full"
            />
            <div className="pt-4">
              <h4 className="text-white font-outspaceFighter text-sm">
                Advisors, Community Rewards & Emergency Reserve
              </h4>
              <p className="font-clashDisplay text-[13px] text-white mt-3">
                385,000 RWAI (3.5% of total supply)
              </p>
            </div>
            <div className="mt-7 flex justify-end">
              <div className="w-[84px]">
                <CircularProgressbar
                  value={3.5}
                  text={`${3.5}%`}
                  styles={buildStyles({
                    // Colors
                    pathColor: "#00FFE3",
                    textColor: "#FFFFFF",
                    trailColor: "#00FFE31A",
                    backgroundColor: "#1E293B",
                  })}
                  className="font-outspaceFighter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col w-full gap-4 mt-20">
        <h4 className="font-outspaceFighter text-[15.1px] text-white text-center">
          TOTAL SUPPLY
        </h4>
        <h2 className="text-gradient lg:text-4xl text-2xl max-[500px]:text-xl text-center font-outspaceFighter">
          11,000,000 RWAI (100% of total supply)
        </h2>
      </div>
    </div>
  );
};

export default Tokenomics;
