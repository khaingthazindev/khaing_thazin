import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Link as ScrollLink } from 'react-scroll'
import Typewriter from 'typewriter-effect';
import { IoIosArrowForward } from 'react-icons/io';
import { main } from '@/types/main';

interface IntroProps {
  mainData: main
}

const Intro = ({ mainData }: IntroProps) => {
  
  const { theme } = useTheme()
  const { name, titles, heroImage, shortDesc, techStackImages } = mainData
  return (
    <section id='home' className={`${theme === 'dark' && "bg-gray-900"} relative min-h-screen w-full mx-auto overflow-hidden`}>
      
      <div className="absolute -z-10 min-h-screen h-full w-full dark:h-0 dark:w-0">
        <Image
          src={heroImage}
          alt="Background Image"
          fill
          sizes="100vh"
        />
      </div>
      
      <div className="py-16 lg:py-48 flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0">
        <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0">
          <div className="flex items-center gap-1">
            <Image src="/images/waving-hand.gif" alt="" width={20} height={20} />
            <p className="text-lg md:text-xl dark:text-gray-600">
              Hey
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold relative dark:text-gray-600">
            I&apos;m {name}
          </h1>
          <div className="flex flex-row items-start md:items-center gap-1.5">
            <h2 className="text-lg md:text-2xl dark:text-gray-600">
              I am into
            </h2>
            <Typewriter
              options={{
                strings: titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                wrapperClassName: "text-violet-600 dark:text-gray-600 text-lg md:text-2xl font-medium",
                cursorClassName: "text-violet-600 dark:text-gray-600 text-lg md:text-2xl"
              }}
            />
          </div>
          
          <p className='text-sm md:text-base text-gray-600'>
            {shortDesc}
          </p>
          
          <ScrollLink
            className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-gray-700 hover:dark:bg-gray-800 transition-colors group text-white"
            to={'about'}
            offset={-60}
            smooth={true}
            duration={500}
            isDynamic={true}
          >
            About Me
            <IoIosArrowForward className='group-hover:translate-x-1 transition-transform' />
          </ScrollLink>
        </div>
        
        <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0 ">
          <div className="w-56 h-56 rounded-full md:w-80 md:h-80 lg:-translate-x-16">
            <Image
              loading='eager'
              alt='avatar'
              width={1000}
              height={1000}
              className="rounded-full w-full h-full object-cover"
              src="/images/profile_avata.png" />
          </div>
          <div className="absolute p-5 bg-white dark:bg-gray-700 rounded-full -top-6 -left-12 lg:-top-14 lg:-left-32 hover:shadow-lg transition-shadow outline outline-gray-100 dark:outline-gray-900">
            <Image
              src={techStackImages[0]}
              alt='PHP'
              width={50}
              height={50} />
          </div>
          <div className="absolute p-5 bg-white dark:bg-gray-700 rounded-full -top-3 -right-1 lg:-right-4 hover:shadow-lg transition-shadow outline outline-gray-100 dark:outline-gray-900">
            <Image
              src={techStackImages[1]}
              alt='Javascript'
              className="h-6 w-6 md:h-10 md:w-10 object-cover"
              width={100}
              height={100} />
          </div>
          <div className="absolute p-5 bg-white dark:bg-gray-700 rounded-full bottom-[4rem] md:bottom-24 -right-16 md:-right-20 lg:bottom-[8.5rem] lg:-right-12 hover:shadow-lg transition-shadow outline outline-gray-100 dark:outline-gray-900">
            <Image
              src={techStackImages[2]}
              alt='TailwindCSS'
              className="h-6 w-6 md:h-10 md:w-10 object-cover"
              width={100}
              height={100} />
          </div>
          <div className="absolute p-5 bg-white dark:bg-gray-700 rounded-full bottom-[4rem] md:bottom-24 -right-16 md:-right-20 lg:bottom-[8.5rem] lg:-right-12 hover:shadow-lg transition-shadow outline outline-gray-100 dark:outline-gray-900">
            <Image
              src={techStackImages[2]}
              alt='TailwindCSS'
              className="h-6 w-6 md:h-10 md:w-10 object-cover"
              width={100}
              height={100} />
          </div>
          <div className="absolute p-5 bg-white dark:bg-gray-700 rounded-full -bottom-10 -right-8 lg:bottom-8 lg:-right-8 hover:shadow-lg transition-shadow outline outline-gray-100 dark:outline-gray-900">
            <Image
              src={techStackImages[3]}
              alt='TailwindCSS'
              className="h-6 w-6 md:h-10 md:w-10 object-cover"
              width={100}
              height={100} />
          </div>
          <div className="absolute p-5 bg-white dark:bg-gray-800 rounded-full -bottom-20 right-15 lg:-bottom-15 lg:right-8 hover:shadow-lg transition-shadow outline outline-gray-100 dark:outline-gray-900">
            <Image
              src={techStackImages[4]}
              alt='TailwindCSS'
              className="h-6 w-6 md:h-10 md:w-10 object-cover"
              width={100}
              height={100} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro