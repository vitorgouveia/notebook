import { FC } from "react"
import { useRouter } from "next/router"

import iosFrame from "../../ios.png"

const ios: FC = () => {
  const router = useRouter()
  return (
    <section className="w-screen h-screen overflow-x-hidden overflow-y-hidden flex items-center justify-center bg-gray-900">
      <iframe
        style={{
          zIndex: 1,
          width: `${343}px`,
          height: `95vh`,
          position: "absolute",
          top: "50%",
          left: "49%",
          borderRadius: "53px",
          transform: "translate(-50%, -50%)"
        }}
        src={router.query.url as string}
        frameBorder="0" />
      <img style={{ pointerEvents: "none" }}  className="h-full z-20" src={iosFrame.src} alt="" />
    </section>
  )
}

export default ios