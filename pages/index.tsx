import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { FireIcon } from "@heroicons/react/solid";
import { useState } from "react";
import React from "react";
import GameCard from "../components/GameCard";
import CustomModeModal from "../components/CustomModeModal";

export default function Home() {
  const router = useRouter();
  const openGame = () => {
    router.push({
      pathname: "/game",
    });
  };
  const openALternativeGame = () => {
    router.push({
      pathname: "/alternative",
    });
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="bg-blue-950">
      <Head>
        <title>Matches Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row gap-[75px]">
        <div className="flex flex-col pl-14 md:pl-20 mt-20">
          <div className="flex mb-10">
            <p className="text-4xl font-semibold text-white">Matches Game</p>
            <FireIcon className="text-purple-accent h-10" />
          </div>
          <p className="text-white w-[300px] md:w-[570px] font-light">
            Two people are playing a game. From the pile of 25 matches, each
            player takes either 1, 2 or 3 matches on each turn. The game is over
            once all matches are taken. Whoever has the even amount of matches
            wins.
          </p>
          <div className="flex flex-col gap-6">
            <button
              className="text-white font-semibold text text-lg bg-purple-accent px-6 py-2 rounded-3xl mt-[60px] hover:scale-105 transform transition duration-200 ease-out w-[250px]"
              onClick={openGame}
            >
              Play Now! →
            </button>
            <button
              className="text-white font-semibold text text-lg bg-purple-accent px-6 py-2 rounded-3xl hover:scale-105 transform transition duration-200 ease-out w-[250px]"
              onClick={openALternativeGame}
            >
              Alternative mode
            </button>
            <button
              className="text-white font-semibold text text-lg bg-purple-accent px-6 py-2 rounded-3xl hover:scale-105 transform transition duration-200 ease-out w-[250px]"
              onClick={openModal}
            >
              Custom mode
            </button>
          </div>
          <CustomModeModal isOpen={isOpen} closeModal={closeModal} />
        </div>
        <div className="mr-10">
          <div className="bg-purple-accent/90 rounded-3xl hidden md:block p-9 my-16 mx-10 mb-32">
            <img src="match-game.png" className="w-[400px] rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="bg-dark-gray pt-6">
        <p className="text-white font-semibold pl-32 pt-8">Other games:</p>
        <div className="flex flex-col md:flex-row justify-center ml-24 mb-6 md:ml-0 md:mb-0 gap-16 mt-6 pb-8">
          <GameCard
            src={"other-games-1.png"}
            name={"Word Mania"}
            author={"Gameland"}
          />
          <GameCard
            src={"other-games-2.png"}
            name={"Power Pong"}
            author={"Gameland"}
          />
          <GameCard
            src={"other-games-4.png"}
            name={"Chess"}
            author={"Gameland"}
          />
          <GameCard
            src={"other-games-5.png"}
            name={"Block Pop"}
            author={"Gameland"}
          />
        </div>
        <div className="flex justify-end mr-10 gap-6 pb-4">
          <img src="google-play.png" className="w-[160px]" />
          <img src="app-store.png" className="w-[160px]" />
        </div>
      </div>
    </div>
  );
}
