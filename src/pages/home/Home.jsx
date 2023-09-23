import React from "react";
import Banner from "./banner/Banner";
import HomeCard from "./homeCardsSection/HomeCardsSection";
import RecentJobPost from "./recentJobPost/RecentJobPost";
import Testimunial from "./testimunial/Testimunial";
import DownloadMobileApp from "./downloadMobileApp/DownloadMobileApp";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <HomeCard></HomeCard>
      <RecentJobPost></RecentJobPost>
      <Testimunial></Testimunial>
      <DownloadMobileApp></DownloadMobileApp>
    </main>
  );
};

export default Home;
