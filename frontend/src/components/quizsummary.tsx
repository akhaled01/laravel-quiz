import { MONO_THIN, SANS_BOLD } from "@/lib/fonts";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

export interface QuizSummaryCardInterface {
  score: number;
  xp: number;
}

const QuizSummaryCard = ({ score, xp }: QuizSummaryCardInterface) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex flex-col gap-1 align-middle justify-center cursor-pointer">
      <div className="flex items-center justify-center w-[250px] h-[250px] rounded-2xl bg-[#2E294E] hover:shadow-2xl duration-500">
        <p
          className={`text-[3rem] ${
            score <= 2
              ? "text-red-400"
              : score === 3
              ? "text-yellow-400"
              : "text-lime-400"
          } ${MONO_THIN.className}`}
        >
          {score}/5
        </p>
      </div>
      {isDesktop ? (
        <p className={`${SANS_BOLD.className}`}>XP gained ------------------&gt; {xp}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default QuizSummaryCard;
