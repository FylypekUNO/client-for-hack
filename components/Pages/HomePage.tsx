import React from "react";
import TopMenu from "../MainPage/TopMenu";
import MissionsInYourArea from "../MainPage/MissionsInYourArea";
import InnerMainMissionsPage from "../InnerMainPages/InnerMainMissionsPage";
import InviteAFriend from "../MainPage/InviteAFriend";
import Tabs from "../TabsSystem/Tabs";

const HomePage = () => {
  const [activeTab, setActiveTab] = React.useState<string>("Missions");

  return (
    <main className="flex-grow overflow-y-auto overflow-x-hidden bg-gray-200 pb-2 min-h-80 space-y-2">
      <TopMenu
        tabs={["Wallet", "Missions", "Profile"]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Tabs
        tabs={{
          Wallet: <MissionsInYourArea />,
          Missions: <InnerMainMissionsPage />,
          Profile: <InviteAFriend />,
        }}
        activeTab={activeTab}
      />
    </main>
  );
};

export default HomePage;
