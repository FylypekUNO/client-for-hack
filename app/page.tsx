"use client";
import Head from "next/head";
import MissionsInYourArea from "@/components/MainPage/MissionsInYourArea";
import Recommendations from "@/components/MainPage/Recommendations";
import InviteAFriend from "@/components/MainPage/InviteAFriend";
import YourTags from "@/components/MainPage/YourTags";
import TopMenu from "@/components/MainPage/TopMenu";
import { useState } from "react";
import Tabs from "@/components/TabsSystem/Tabs";
import BottomMenu, { BottomTab } from "@/components/BottomMenu";
import CreateMissionPage from "@/components/Pages/CreateMissionPage";
import HomePage from "@/components/Pages/HomePage";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("Home");

  const tabs = [
    new BottomTab(
      "Home",
      (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
      )
    ),
    new BottomTab(
      "Search",
      (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 4a2 2 0 114 0 2 2 0 01-4 0zm0 1a1 1 0 112 0 1 1 0 01-2 0zm6 11a6 6 0 00-6-6V5.08a6 6 0 1012 0V10a6 6 0 00-6 6z"
          ></path>
        </svg>
      )
    ),
    new BottomTab(
      "Profile",
      (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      )
    ),
    new BottomTab(
      "Settings",
      (
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
          />
        </svg>
      )
    ),
  ];

  return (
    <div className="flex flex-col bg-white">
      <Tabs
        tabs={{
          Home: <HomePage />,
          Search: <CreateMissionPage />,
        }}
        activeTab={activeTab}
      />

      <BottomMenu
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
