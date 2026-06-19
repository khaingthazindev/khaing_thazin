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
    </>
  )
}

export default Home