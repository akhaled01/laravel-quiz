import React from "react";
import Image from "next/image";
import profile from "@/assets/profile.svg";
import leaderboard from "@/assets/leaderboard.svg";
import quiz from "@/assets/quiz.svg";
import logout from "@/assets/logout.svg";
import HoverTip from "./hovertip";
import ProfileComponent from "./profileModal";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/navigation";
import { deleteCookie, hasCookie } from "cookies-next";
import LeaderboardDialog from "./Leaderboard";
import login from "@/assets/login.svg";

const SideNav = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("user_id");
    router.push("/auth");
  };

  return (
    <div
      className={`bg-[#2E294E] flex ${
        isDesktop
          ? `flex-col items-center ${hasCookie("user_id") ? "justify-around" : "justify-center"} h-screen w-[120px]`
          : "fixed bottom-0 w-full flex-row justify-center gap-4 h-[60px]"
      } duration-500`}
    >
      {hasCookie("user_id") ? (
        <HoverTip text="View Profile">
          <ProfileComponent>
            <Image
              src={profile}
              className="cursor-pointer px-2 py-2 rounded-xl hover:bg-[#595092b1] duration-500"
              alt="profile"
              width={isDesktop ? 70 : 60}
            />
          </ProfileComponent>
        </HoverTip>
      ) : (
        <HoverTip text="Login">
          <Image
            src={login}
            className="cursor-pointer px-2 py-2 rounded-xl hover:bg-[#595092b1] duration-500"
            alt="profile"
            width={isDesktop ? 70 : 60}
          />
        </HoverTip>
      )}

      <div
        className={`flex ${
          isDesktop
            ? "flex-col align-middle justify-center gap-2"
            : "flex-row gap-4"
        }`}
      >
        <HoverTip text="Leaderboard">
          <LeaderboardDialog>
            <Image
              src={leaderboard}
              className="cursor-pointer px-2 py-2 rounded-xl hover:bg-[#595092b1] duration-500"
              alt="leaderboard"
              width={isDesktop ? 70 : 50}
            />
          </LeaderboardDialog>
        </HoverTip>
        <HoverTip text="Start Quiz">
          <Link href={`${hasCookie("user_id") ? "/quiz" : "/auth"}`}>
            <Image
              src={quiz}
              className="cursor-pointer px-2 py-2 rounded-xl hover:bg-[#595092b1] duration-500"
              alt="quiz"
              width={isDesktop ? 70 : 50}
            />
          </Link>
        </HoverTip>
      </div>

      {hasCookie("user_id") ? (
        <HoverTip text="Logout">
          <Image
            src={logout}
            className="cursor-pointer px-2 py-2 rounded-xl hover:bg-[#595092b1] duration-500"
            alt="logout"
            width={isDesktop ? 70 : 50}
            onClick={() => handleLogout()}
          />
        </HoverTip>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideNav;
