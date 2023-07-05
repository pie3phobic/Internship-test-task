import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { FireIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import React from "react";
import GameCard from "../components/GameCard";

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
  return (
    <div className="bg-blue-950">
      <Head>
        <title>Matches Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex gap-[75px]">
        <div className="flex flex-col ml-20 mt-20">
          <div className="flex mb-10">
            <p className="text-4xl font-semibold text-white">Matches Game</p>
            <FireIcon className="text-purple-accent h-10" />
          </div>
          <p className="text-white w-[600px] font-light">
            Two people are playing a game. From the pile of 25 matches, each
            player takes either 1, 2 or 3 matches on each turn. The game is over
            once all matches are taken. Whoever has the even amount of matches
            wins.
          </p>
          <div className="flex flex-col gap-6">
            <button
              className="text-white font-semibold text text-2xl bg-purple-accent px-6 py-2 rounded-3xl mt-[120px] hover:scale-105 transform transition duration-200 ease-out w-[280px]"
              onClick={openGame}
            >
              Play Now! →
            </button>
            <button
              className="text-white font-semibold text text-2xl bg-purple-accent px-6 py-2 rounded-3xl hover:scale-105 transform transition duration-200 ease-out w-[280px]"
              onClick={openALternativeGame}
            >
              Alternative mode
            </button>
          </div>
        </div>
        <img
          src="match-game.png"
          className="w-[450px] rounded-3xl mt-16 mb-20"
        />
      </div>
      <div className="bg-dark-gray">
        <p className="text-white font-semibold pl-32 pt-8">Other games:</p>
        <div className="flex justify-center gap-16 mt-6 pb-8">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
        <div className="flex justify-end mr-10 gap-6 pb-4">
          <img src="google-play.png" className="w-[160px]" />
          <img src="app-store.png" className="w-[160px]" />
        </div>
      </div>
    </div>
  );
}
