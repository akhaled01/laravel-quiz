import React, { ReactNode } from "react";
import { useQuery } from "react-query";
import { GetLeaderboard } from "@/logic/calls/getLeaderboard";
import Loader from "./loader";
import { toast } from "./ui/use-toast";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const LeaderboardDialog = ({ children }: { children: ReactNode }) => {
  const { data, error, isLoading } = useQuery("getLeaderboard", GetLeaderboard);

  if (!data || isLoading) {
    return <Loader />;
  }

  if (error) {
    console.error("leaderboard error", error);

    toast({
      variant: "destructive",
      title: "leaderboard error",
      description: "error getting leaderboard",
    });
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="ml-4 lg:text-[2.4rem] sm:text-[1rem]">
          Top 10 Quizzers
        </DrawerTitle>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Position</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>XP</TableHead>
              <TableHead className="text-right">CorrectNumber</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.entries.map((en) => (
              <TableRow
                key={en.position}
              >
                <TableCell>{en.position}</TableCell>
                <TableCell>{en.username}</TableCell>
                <TableCell>{en.xp}</TableCell>
                <TableCell className="text-right">{en.correct_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DrawerContent>
    </Drawer>
  );
};

export default LeaderboardDialog;
