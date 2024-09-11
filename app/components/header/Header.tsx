import Image from "next/image"
import Link from "next/link"
import AuthLinks from "../authLinks/AuthLinks"
import ThemeToggle from "../themeToggle/ThemeToggle"


const Header = () => {
  return (
    <div className="flex justify-between h-[100px] items-center">
      <div className="flex gap-[10px] flex-1">
        <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
        <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
        <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
      </div>

      <div className="flex-1 text-center font-bold text-4xl">
        NextBlog
      </div>

      <div className="flex gap-5 flex-1 justify-between text-xl font-medium">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Header