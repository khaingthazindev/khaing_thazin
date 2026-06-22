import Image from "next/image"
import { about } from "@/types/main";
import SectionWrapper from "./shared/SectionWrapper";

interface Props {
  aboutData: about,
  name: string
}

const About = ({ aboutData, name }: Props) => {
  
  const { aboutImage, aboutImageCaption, title, about, resumeUrl, callUrl } = aboutData
  
  return (
    <SectionWrapper id="about" className="min-h-[90vh] py-5 lg:py-12 bg-linear-145 from-white to-pink-200/30 dark:from-gray-900 dark:to-gray-900">
      <h2 className="text-4xl text-center">About Me</h2>
      
      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-7 lg:mt-10 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-gray-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <Image alt="profile" width={1000} height={1000} loading={'lazy'} className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100" src={aboutImage} />
          <span className="font-medium font-sans">{aboutImageCaption || '< I Build Stuff 🚀 />'}</span>
        </div>
        
        <div className="flex-1 text-left mx-4 mt-8 md:mt-0 md:mx-0 md:p-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold">{name}</p>
            <p className='text-violet-600 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10'>{title}</p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">{about}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About