import React, { ReactNode, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuery } from "react-query";
import { GetProfile } from "@/logic/calls/getProfile";
import { IBARRA_NOVA, SANS_BOLD, SANS_MEDIUM } from "@/lib/fonts";
import Loader from "./loader";
import { toast } from "./ui/use-toast";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { hasCookie } from "cookies-next";

export interface ProfileData {
  data: any;
  children: ReactNode;
}

const ProfileDrawer = ({ data, children }: ProfileData) => {
  const catArray = ["history", "geography", "science", "art", "sports"];
  const [catindex, setcatindex] = useState(0);

  const changeIndex = () => {
    if (catindex === 4) {
      setcatindex(0);
    } else {
      setcatindex(catindex + 1);
    }
  };

  const currentCategory = catArray[catindex];
  const currentPercentage = Object.values(
    data.correct_percentages[catindex]
  )[0];
  const currentCorrect = Object.values(data.correct_numbers[catindex])[0];
  const totalCorrect = Object.values(data.total_numbers[catindex])[0];

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>Your Profile</DrawerHeader>
        <div className="flex flex-col items-center justify-between w-full px-4 gap-6">
          <div className="flex items-center justify-center gap-6">
            <p className={`${SANS_BOLD.className} text-[18px]`}>
              @{data.username}
            </p>
            <p className={`${SANS_MEDIUM.className} text-[10px]`}>
              {data.email}
            </p>
            <p className={`${IBARRA_NOVA.className} text-[10px]`}>
              {data.rank}
            </p>
            <p
              className={`${SANS_MEDIUM.className} text-[10px] text-[#0000007a]`}
            >
              XP: {data.xp}
            </p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <p
                className={`${SANS_MEDIUM.className} text-[#00000060] text-[10px]`}
              >
                % Correct Answers
              </p>
              <p className={`${SANS_BOLD.className} text-[28px]`}>
                {typeof currentPercentage === "number"
                  ? currentPercentage.toFixed(1)
                  : "N/A"}
                %
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p
                className={`${SANS_MEDIUM.className} text-[#00000060] text-[10px]`}
              >
                No. Correct Answers
              </p>
              <p className={`${SANS_BOLD.className} text-[28px]`}>
                {currentCorrect as ReactNode}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p
                className={`${SANS_MEDIUM.className} text-[#00000060] text-[10px]`}
              >
                No. Answers
              </p>
              <p className={`${SANS_BOLD.className} text-[28px]`}>
                {totalCorrect as ReactNode}
              </p>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={changeIndex}>{currentCategory}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const ProfileDialog = ({ data, children }: ProfileData) => {
  const catArray = ["history", "geography", "science", "art", "sports"];
  const [catindex, setcatindex] = useState(0);

  const changeIndex = () => {
    if (catindex === 4) {
      setcatindex(0);
    } else {
      setcatindex(catindex + 1);
    }
  };

  const currentCategory = catArray[catindex];
  const currentPercentage = Object.values(
    data.correct_percentages[catindex]
  )[0];
  const currentCorrect = Object.values(data.correct_numbers[catindex])[0];
  const totalCorrect = Object.values(data.total_numbers[catindex])[0];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[800px] h-[350px]">
        <DialogHeader>
          <DialogTitle>Your Profile</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex flex-col items-center justify-center gap-0">
            <p className={`${SANS_BOLD.className} text-[28px]`}>
              @{data.username}
            </p>
            <p className={`${SANS_MEDIUM.className} text-[18px]`}>
              {data.email}
            </p>
            <p className={`${IBARRA_NOVA.className} text-[18px]`}>
              {data.rank}
            </p>
            <p
              className={`${SANS_MEDIUM.className} text-[16px] text-[#0000007a]`}
            >
              XP: {data.xp}
            </p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <p
                className={`${SANS_MEDIUM.className} text-[#00000060] text-[20px]`}
              >
                % Correct Answers
              </p>
              <p className={`${SANS_BOLD.className} text-[30px]`}>
                {typeof currentPercentage === "number"
                  ? currentPercentage.toFixed(1)
                  : "N/A"}
                %
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p
                className={`${SANS_MEDIUM.className} text-[#00000060] text-[20px]`}
              >
                No. Correct Answers
              </p>
              <p className={`${SANS_BOLD.className} text-[30px]`}>
                {currentCorrect as ReactNode}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <p
                className={`${SANS_MEDIUM.className} text-[#00000060] text-[20px]`}
              >
                No. Answers
              </p>
              <p className={`${SANS_BOLD.className} text-[30px]`}>
                {totalCorrect as ReactNode}
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={changeIndex}>{currentCategory}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ProfileComponent = ({ children }: { children: ReactNode }) => {
  if (!hasCookie("user_id")) {
    return null
  }
  const { data, error, isLoading } = useQuery("profileData", GetProfile);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    toast({
      variant: "destructive",
      title: "data fetch error",
      description: "there was an error fetching your profile data",
    });
  }

  return data && isDesktop ? (
    <ProfileDialog data={data}>{children}</ProfileDialog>
  ) : (
    <ProfileDrawer data={data}>{children}</ProfileDrawer>
  );
};

export default ProfileComponent;
