import React from 'react';
import Link from 'next/link';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import { social } from '@/types/main';

const Network = ({ socials }: { socials: social[] }) => {
  const iconMap = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub
  };
  
  return (
    <section id='socials' className="hidden lg:flex flex-col gap-3 z-20 fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 ">
      {socials.map((s: social) => {
        return (
          <Link
            href={s.link}
            target="_blank"
            rel="noreferrer"
            key={s.name}
            className="p-3 hover:animate-bounce rounded-full bg-violet-600 text-white">
            {
              //@ts-ignore
              React.createElement(iconMap[s.icon], {})
            }
          </Link>
        )
      })}
    </section>
  )
}

export default Network