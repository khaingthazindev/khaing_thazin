'use client';

import { data } from "@/types/main";

interface HomePageProps {
  data: data,
}

import Navbar from "@/app/components/Navbar";
import Intro from "@/app/components/Intro";
import Network from "@/app/components/Network";

const Home = ({data}: HomePageProps) => {
  return (
    <>
      <Navbar logo={"Thazin"} />
      <Intro mainData={data.main} />
      <Network socials={data.socials} />
    </>
  )
}

export default Home