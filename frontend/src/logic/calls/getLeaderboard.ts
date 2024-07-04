import axios from "axios";
import { Leaderboard, LeaderboardEntry } from "../interfaces";

/**
 * Invokes a GET request to get the latest leaderboard
 * 
 * @returns latest leaderboard
 */
export const GetLeaderboard = async (): Promise<Leaderboard | undefined> => {
  try {
    const res = await axios.get("http://localhost:8000/api/leaderboard");
    let parsedLeaderboard: LeaderboardEntry[] = [];
    res.data.forEach((en: any) => {
      parsedLeaderboard.push({
        position: en.position,
        username: en.username,
        xp: en.xp,
        correct_count: en.correct_count,
      });
    });

    return {
      entries: parsedLeaderboard,
    };
  } catch (error) {
    console.error("leaderboard get error:", error);
    throw error;
  }
};
