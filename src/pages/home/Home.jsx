import React from "react";
import Banner from "./banner/Banner";
import HomeCard from "./homeCards/HomeCard";
import RecentJobPost from "./recentJobPost/RecentJobPost";
import Testimunial from "./testimunial/Testimunial";
import DownloadMobileApp from "./downloadMobileApp/DownloadMobileApp";

const Home = () => {
  return (
    <main className="w-11/12 mx-auto">
      <Banner></Banner>
      <HomeCard></HomeCard>
      <RecentJobPost></RecentJobPost>
      <Testimunial></Testimunial>
      <DownloadMobileApp></DownloadMobileApp>
    </main>
  );
};

export default Home;
