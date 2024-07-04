"use client";

import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SANS_BOLD } from "@/lib/fonts";
import compass from "@/assets/compass.svg";
import ball from "@/assets/ball.svg";
import benzene from "@/assets/benzene.svg";
import paint from "@/assets/paint.svg";
import globe from "@/assets/globe.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quiz, Result } from "@/logic/interfaces";
import { CacheQuiz, GetQuiz, PurgeQuiz } from "@/logic/context/quiz";
import Loader from "@/components/loader";
import { useMutation } from "react-query";
import { SubmitQuiz } from "@/logic/calls/submitQuiz";
import { toast } from "@/components/ui/use-toast";
import { GetResults } from "@/logic/context/result";
import { useRouter } from "next/navigation";

const Page = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | undefined>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const submissionMutation = useMutation(
    "quizSubmission",
    (data: Quiz) => SubmitQuiz(data),
    {
      onSuccess: () => {
        PurgeQuiz();
        GetResults().then(() => {
          router.push("/result");
        });
      },
      onError: (e) => {
        if (e instanceof Error) {
          toast({
            variant: "destructive",
            title: "submission error",
            description: e.message,
          });
        } else {
          toast({
            variant: "destructive",
            title: "submission error",
            description: "check the console",
          });
        }
      },
    }
  );

  useEffect(() => {
    GetQuiz().then((data) => {
      setCurrentQuiz(data);
      setCurrentQuestionIndex(data.current_index);
    });
  }, []);

  const handleAnswerSelect = (index: number) => {
    if (!currentQuiz) return;

    const updatedQuiz = { ...currentQuiz };
    const currentQuestion = updatedQuiz.content[currentQuestionIndex];
    currentQuestion.answers = currentQuestion.answers.map((answer, i) => ({
      ...answer,
      selected: i === index,
    }));

    setCurrentQuiz(updatedQuiz);
    CacheQuiz(updatedQuiz);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        const updatedQuiz = { ...currentQuiz!, current_index: newIndex };
        setCurrentQuiz(updatedQuiz);
        CacheQuiz(updatedQuiz);
        return newIndex;
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuiz && currentQuestionIndex < currentQuiz.content.length - 1) {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        const updatedQuiz = { ...currentQuiz!, current_index: newIndex };
        setCurrentQuiz(updatedQuiz);
        CacheQuiz(updatedQuiz);
        return newIndex;
      });
    }
  };

  const handleEval = () => {
    submissionMutation.mutate(currentQuiz!);
  };

  const currentQuestion = currentQuiz?.content[currentQuestionIndex];
  const iconArray = [compass, paint, globe, benzene, ball];

  if (!currentQuiz || !currentQuestion) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return isDesktop ? (
    <div className="w-screen h-screen flex items-center justify-center gap-5 py-3">
      <div className="w-[50%] h-[100%] flex items-center justify-center px-2 py-2 bg-[#2E294E] relative rounded-2xl text-center">
        <h3 className={`${SANS_BOLD.className} text-[25px] text-[#D499B9]`}>
          {currentQuestion.content}
        </h3>
        <Image
          src={iconArray[currentQuestionIndex]}
          alt="caticon"
          width={150}
          height={150}
          className="absolute bottom-3 right-3"
        />
      </div>
      <div className="w-[40%] h-[80%] flex flex-col items-center justify-evenly">
        <p className={`${SANS_BOLD.className} text-[40px] text-[#2E294E]`}>
          Choose 1 Answer :)
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          {currentQuestion.answers.map((ans, index) => (
            <div
              key={index}
              className={`flex items-center justify-start px-3 cursor-pointer w-[350px] h-[60px] rounded-xl border-4 ${
                ans.selected ? "border-green-400" : "border-[#2E294E]"
              }`}
              onClick={() => handleAnswerSelect(index)}
            >
              {ans.text}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-32">
          <Button
            className="border-4 bg-transparent border-[#2E294E] text-[#2E294E] hover:bg-slate-100"
            onClick={() => handlePrevQuestion()}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          {currentQuestionIndex === currentQuiz?.content.length - 1 ? (
            <Button
              className="bg-[#2E294E] text-[#E8C185]"
              onClick={() => handleEval()}
            >
              Submit
            </Button>
          ) : (
            <Button
              className="bg-[#2E294E] text-[#E8C185]"
              onClick={() => handleNextQuestion()}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-4 py-4 gap-8">
      <div className="w-full h-fit flex items-center justify-evenly px-2 py-2 bg-[#2E294E] relative rounded-xl text-center">
        <h3 className={`${SANS_BOLD.className} text-[15px] text-[#D499B9]`}>
          {currentQuestion.content}
        </h3>
        <Image
          src={iconArray[currentQuestionIndex]}
          alt="caticon"
          width={20}
          height={20}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-3">
        {currentQuestion.answers.map((ans, index) => (
          <div
            key={index}
            className={`flex items-center justify-start px-3 cursor-pointer w-full h-[60px] rounded-xl border-4 ${
              ans.selected ? "border-green-400" : "border-[#2E294E]"
            }`}
            onClick={() => handleAnswerSelect(index)}
          >
            {ans.text}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-32">
        <Button
          className="border-4 bg-transparent border-[#2E294E] text-[#2E294E] hover:bg-slate-100"
          onClick={() => handlePrevQuestion()}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        {currentQuestionIndex === currentQuiz?.content.length - 1 ? (
          <Button
            className="bg-[#2E294E] text-[#E8C185]"
            onClick={() => handleEval()}
          >
            Submit
          </Button>
        ) : (
          <Button
            className="bg-[#2E294E] text-[#E8C185]"
            onClick={() => handleNextQuestion()}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Page;
