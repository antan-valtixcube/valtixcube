import {
    Audiowide,
    Montserrat,
    Play,
    Roboto_Flex,
} from "next/font/google";

export const audiowide = Audiowide({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-audiowide",
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const play = Play({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-play",
});

export const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    variable: "--font-roboto-flex",
});

