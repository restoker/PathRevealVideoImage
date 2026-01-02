import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function App() {
  const imageRef = useRef(null)
  const videoRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();

    tl
      .to(imageRef.current, {
        clipPath: "polygon(1% 1%, 99% 1%, 99% 99%, 1% 99%)",
        duration: 1.2,
        ease: "power3.out"
      })
    // .to(videoRef.current, {
    //   clipPath: "polygon(50% 45%, 55% 50%, 50% 55%, 45% 50%)",
    //   duration: 1,
    //   ease: "power3.out"
    // })

  }, [])
  // clip-path: polygon(30% 20%, 70% 20%, 70% 80%, 30% 80%);
  return (
    <>
      <div className="h-dvh w-full">
        <div className="h-full w-full flex">
          <div className="w-1/2 h-dvh">
            <img className="h-full w-full object-cover [clip-path:polygon(50%_45%,55%_50%,50%_55%,45%_50%)]" src="https://cdn.cosmos.so/ed4ca27e-af3e-462c-a524-4d56faaf0a9b?format=jpeg" alt="" ref={imageRef} />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-between">
            <h1 className="text-[10rem] text-center flex-1 font-bold">ACME</h1>
            <video className="object-cover object-center h-80 w-52" src="https://cdn.cosmos.so/a6b1ba7b-8f65-42ad-85bb-7dd6aedd73b7.mp4" autoPlay loop muted ref={videoRef}></video>
            <p className="flex-1 text-center max-w-xl flex items-center justify-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cum beatae explicabo voluptas inventore repellendus, tempora nemo quae itaque eligendi culpa mollitia vel ipsam aspernatur corrupti aliquam at rerum sit.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
