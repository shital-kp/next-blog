'use client'
import { ThemeContext } from "@/app/context/ThemeContext"
import Image from "next/image"
import { useContext } from "react"

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className="w-10 h-5 rounded-[50px] cursor-pointer flex bg-black items-center justify-between relative">
      <Image src="/moon.svg" alt="night" width={14} height={14} />
      <div className="h-[15px] w-[15px] rounded-[50%] bg-white absolute left-[1px]"></div>
      <Image src="/sun.svg" alt="day" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle