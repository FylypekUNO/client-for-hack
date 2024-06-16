"use client";
import Head from "next/head";
import MissionsInYourArea from "@/components/MainPage/MissionsInYourArea";
import Recommendations from "@/components/MainPage/Recommendations";
import InviteAFriend from "@/components/MainPage/InviteAFriend";
import YourTags from "@/components/MainPage/YourTags";
import TopMenu from "@/components/MainPage/TopMenu";
import { useState } from "react";
import MainPage from "@/components/Pages/MainPage";
import Tabs from "@/components/TabsSystem/Tabs";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("Missions");

  return (
    <div className="flex flex-col bg-white">
      <Head>
        <title>ResearchersHeaven</title>
        <meta name="description" content="A mobile-friendly webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow overflow-y-auto overflow-x-hidden bg-gray-200 pb-2 min-h-80 space-y-2">
        <TopMenu
          tabs={["Wallet", "Missions", "Profile"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tabs
          tabs={{
            Wallet: <MissionsInYourArea />,
            Missions: <MainPage />,
            Profile: <InviteAFriend />,
          }}
          activeTab={activeTab}
        />
      </main>
    </div>
  );
}
