import { IBM_Plex_Mono, IBM_Plex_Sans, Ibarra_Real_Nova } from "next/font/google";

export const SANS_BOLD = IBM_Plex_Sans({
  weight: "700",
  subsets: ["latin"],
});

export const SANS_MEDIUM = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const IBARRA_NOVA = Ibarra_Real_Nova({
  weight: "400",
  subsets: ["latin"],
});

export const MONO_THIN = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
})