'use client';

import { data } from "@/types/main";

interface HomePageProps {
  data: data,
}

import Navbar from "@/app/components/Navbar";

const Home = ({data}: HomePageProps) => {
  console.log('Home.tsx data: ', data);
  return (
    <>
      <Navbar logo={"Thazin"} />
    </>
  )
}

export default Home