"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { SANS_BOLD } from "@/lib/fonts";
import {
  RegistrationHandler,
  RegistrationInterface,
} from "@/logic/auth/register";
import { CircleUserRound, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useMutation } from "react-query";

const Page = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpass, setcpass] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const registrationMutation = useMutation(
    (info: RegistrationInterface) => RegistrationHandler(info),
    {
      onSuccess: () => {
        router.push("/auth");
      },
      onError: (error: any) => {
        toast({
          variant: "destructive",
          title: "Registration failed",
          description: error.message || "An error occurred during registration",
        });
      },
      onSettled: () => {
        setloading(false);
      },
    }
  );

  const submit = () => {
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !cpass.trim()
    ) {
      toast({
        variant: "destructive",
        title: "Missing required field",
        description: "Please fill out all fields",
      });
    } else if (password !== cpass) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "Your password and confirm password fields do not match",
      });
    } else {
      const data: RegistrationInterface = {
        username: username,
        email: email,
        password: password,
      };

      setloading(true);
      registrationMutation.mutate(data);
    }
  };

  const [loading, setloading] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[250px] h-[400px] lg:w-[500px] lg:h-[400px] lg:rounded-2xl py-7 px-5 flex flex-col gap-3">
        <p className={`${SANS_BOLD.className} text-[3rem]`}>Sign Up</p>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
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
          <Input
            placeholder="Password Confirmation"
            type="password"
            value={cpass}
            onChange={(e) => setcpass(e.target.value)}
          />
        </div>
        {loading ? (
          <Button disabled className="flex gap-2 lg:w-48">
            <Loader2 className="h-4 w-4 animate-spin" />
            <p>Please wait</p>
          </Button>
        ) : (
          <Button className="flex gap-2 lg:w-48" onClick={submit}>
            <CircleUserRound className="w-6 h-6" />
            <p>Sign Up</p>
          </Button>
        )}

        <Link href={"/auth"}>Or login Instead</Link>
      </div>
    </div>
  );
};

export default Page;
