// import Link from "next/link"
// import Image from "next/image"

// const Logo = () => {
//   return (
//     <Link href="/">
//       <Image
//         className="max-w-[100px] md:max-w-[165px]"
//         src="/lws_logo.png"
//         alt="Lws"
//         height={100}
//         width={165}
//       />
//     </Link>
//   )
// }

// export default Logo

import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"      // ✅ Correct for local image from /public
        alt="Lws"
        height={100}
        width={165}
      />
    </Link>
  )
}

export default Logo
