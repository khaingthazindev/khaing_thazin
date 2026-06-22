import Image from "next/image"
import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color';
import { skill } from "@/types/main";
import { useTheme } from "next-themes";

const SkillCard = ({ name, image }: skill) => {
    const { theme } = useTheme();
    
    const [bgColor, setBgColor] = useState("");
    
    useEffect(() => {
        new FastAverageColor().getColorAsync(image)
            .then(color => {
                const rgb = color.rgb.split(')');
                setBgColor(rgb[0] + ', 0.2)');
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div
              title={name}
              style={{ backgroundColor: bgColor }}
              className={"h-20 w-20 md:h-24 md:w-24 rounded-full dark:bg-grey-800 flex items-center justify-center shadow-lg"}>
              <Image
                  alt="skill"
                  width={100}
                  height={100}
                  className={`h-12 w-12 md:h-14 md:w-14 object-contain ${theme === 'dark' && (name === "GitHub" || name === "Vercel" || name === "NextJS" || name === "ExpressJS" ? 'invert' : 'invert-0')}`}
                  src={image} />
            </div>
            <p className="text-sm md:text-base">{name}</p>
        </div>
    )
}

export default SkillCard