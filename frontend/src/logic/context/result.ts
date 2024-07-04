import { Result } from "../interfaces";

export const CacheResults = (data: Result) => {
  localStorage.setItem("current_results", JSON.stringify(data));
};

export const purgeResults = () => {
  localStorage.removeItem("current_results");
};

export const GetResults = async (): Promise<Result | undefined> => {
  if (localStorage.getItem("current_results")) {
    console.log("using cached results");
    return JSON.parse(localStorage.getItem("current_results")!) as Result;
  }
};
