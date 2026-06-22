'use client';

import { data } from "@/types/main";

interface HomePageProps {
  data: data,
}

import Navbar from "@/app/components/Navbar";
import Intro from "@/app/components/Intro";
import Network from "@/app/components/Network";
import About from "@/app/components/About";
import Skills from "@/app/components/skills/Skills";

const Home = ({data}: HomePageProps) => {
  return (
    <>
      <Navbar logo={"Thazin"} />
      <Intro mainData={data.main} />
      <Network socials={data.socials} />
      <About aboutData={data.about} name={data.main.name} />
      <Skills skillData={data.skills} />
    </>
  )
}

export default Home