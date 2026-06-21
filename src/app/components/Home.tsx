'use client';

import { data } from "@/types/main";

interface HomePageProps {
  data: data,
}

import Navbar from "@/app/components/Navbar";
import Intro from "@/app/components/Intro";

const Home = ({data}: HomePageProps) => {
  return (
    <>
      <Navbar logo={"Thazin"} />
      <Intro mainData={data.main} />
      {/*<div className="h-screen bg-[url('/images/main_bg.jpg')] bg-cover bg-center"></div>*/}
    </>
  )
}

export default Home