"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { SANS_BOLD } from "@/lib/fonts";
import { AuthHandler, AuthInterface } from "@/logic/auth/login";
import { PurgeQuiz } from "@/logic/context/quiz";
import { purgeResults } from "@/logic/context/result";
import { Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";

const Page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const authMutation = useMutation((info: AuthInterface) => AuthHandler(info), {
    onSuccess: () => {
      router.push("/");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: error.message || "An error occurred during authentication",
      });
    },
    onSettled: () => {
      setloading(false);
    },
  });

  useEffect(() => {
    PurgeQuiz();
    purgeResults();
  }, []);

  const submit = () => {
    if (!email.trim() || !password.trim()) {
      toast({
        variant: "destructive",
        title: "Missing required field",
        description: "Please fill out all fields",
      });
    } else {
      const data: AuthInterface = {
        email: email,
        password: password,
      };

      setloading(true);
      authMutation.mutate(data);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[250px] h-[400px] lg:w-[500px] lg:h-[400px] lg:rounded-2xl py-7 px-5 flex flex-col gap-3">
        <p className={`${SANS_BOLD.className} text-[3rem]`}>Log In</p>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        {loading ? (
          <Button disabled className="flex gap-2 lg:w-48">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p>Please wait</p>
          </Button>
        ) : (
          <Button className="flex gap-2 lg:w-48" onClick={submit}>
            <Lock className="w-5 h-5" />
            <p>Log In</p>
          </Button>
        )}
        <Link href={"/register"}>Or Signup Instead</Link>
      </div>
    </div>
  );
};

export default Page;
