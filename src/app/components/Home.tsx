'use client';

import { data } from "@/types/main";

interface HomePageProps {
  data: data,
}

import Navbar from "@/app/components/Navbar";

const Home = ({data}: HomePageProps) => {
  return (
    <>
      <Navbar logo={"Thazin"} />
      <div className="h-500 bg-[url('/images/main_bg.jpg')] bg-cover bg-center"></div>
    </>
  )
}

export default Home