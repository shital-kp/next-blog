import Image from "next/image"
import Link from "next/link"


const Header = () => {
  return (
    <div className="">
      <div className="">
        <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
        <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
        <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
      </div>

      <div className="">
        NextBlog
      </div>

      <div className="">
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  )
}

export default Header