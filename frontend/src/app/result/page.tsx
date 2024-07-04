"use client";

import { Result } from "@/logic/interfaces";
import React, { useEffect, useState } from "react";
import { GetResults } from "@/logic/context/result";
import { IBARRA_NOVA, MONO_THIN } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import correct from "@/assets/correct.svg";
import wrong from "@/assets/wrong.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const Page = () => {
  const [data, setdata] = useState<Result | undefined>();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  useEffect(() => {
    GetResults().then((data) => {
      setdata(data);
    });
  }, []);

  if (!data) {
    return null;
  }

  return isDesktop ? (
    <div className="w-screen h-screen flex items-center justify-center gap-2 px-4 py-4">
      <div className="w-1/2 h-3/4 flex flex-col items-center justify-center gap-7">
        <p className={`${IBARRA_NOVA.className} text-[3rem]`}>
          Your score: {data.correct_num}/5
        </p>
        <div className="w-full h-1/2 flex flex-col items-center justify-center gap-3">
          {data.cat_answered.map((ca, index) => (
            <div
              key={index}
              className={`w-[90%] h-[65px] ${MONO_THIN.className} rounded-sm cursor-pointer hover:-translate-y-2 duration-300 text-lg pxaround-4 flex items-center justify-start px-4 gap-4 bg-[#dcdcdc]`}
            >
              {ca.is_answered ? "1" : "0"} {ca.category} question answered
            </div>
          ))}
        </div>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex flex-col items-center justify-evenly">
      <p className={`${IBARRA_NOVA.className} text-[2.5rem]`}>
        Your score: {data.correct_num}/5
      </p>
      <div className="w-full h-1/2 flex flex-col items-center justify-center gap-3">
        {data.cat_answered.map((ca, index) => (
          <div
            key={index}
            className={`w-[90%] h-[45px] ${MONO_THIN.className} rounded-sm cursor-pointer hover:-translate-y-2 duration-300 text-sm px-4 flex items-center justify-start bg-[#dcdcdc]`}
          >
            {ca.is_answered ? "1" : "0"} {ca.category} questions answered
          </div>
        ))}
      </div>
      <Button onClick={() => router.push("/")}>Back to Home</Button>
    </div>
  );
};

export default Page;
