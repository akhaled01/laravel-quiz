"use client";

import Cardio from "@/components/cardio";
import Loader from "@/components/loader";
import QuizSummaryCard from "@/components/quizsummary";
import SideNav from "@/components/sidenav";
import { toast } from "@/components/ui/use-toast";
import { SANS_BOLD } from "@/lib/fonts";
import { GetPreviousQuizzes } from "@/logic/calls/getQuizzes";
import { hasCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const router = useRouter();

  const { data, error, isLoading } = useQuery(
    "previosQuizzesData",
    GetPreviousQuizzes
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    toast({
      variant: "destructive",
      title: "Data fetch error",
      description: "There was an error fetching your previous quizzes",
    });
  }

  return (
    <div className="flex items-center justify-start w-screen h-screen bg-[#DDDDDD]">
      <SideNav />
      <div className="w-full h-screen overflow-scroll">
        <p
          className={`${SANS_BOLD.className} mt-20 ml-10 lg:text-[3rem] text-[1.5rem] mb-2`}
        >
          Previous Performances
        </p>
        {data.quizzes.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-1 place-items-center w-full h-full sm:flex-col sm:mb-11">
            {data.quizzes.map((quiz_data: any) => (
              <QuizSummaryCard
                key={quiz_data.quiz_id}
                score={quiz_data.quiz_correct_num}
                xp={quiz_data.quiz_xp_gained}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[50%] gap-10">
            <Cardio />
            <p className={`${SANS_BOLD.className} lg:text-[2rem]`}>
              {hasCookie("user_id")
                ? "No Quizzes found. Do Some Quizzes Now!"
                : "Login to get started!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
