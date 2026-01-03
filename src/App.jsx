import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText";
import { useRef } from "react"

gsap.registerPlugin(SplitText);

function App() {
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline();
    gsap.set(imageRef.current, { width: "100%", height: "100%" });
    gsap.set(videoRef.current, { position: 'absolute', width: '100%', height: '100%', top: '0%', left: '0%' });
    gsap.set(textRef.current, { display: 'none' });
    gsap.set(headingRef.current, { display: 'none' });

    const splitTitle = new SplitText(headingRef.current, {
      type: 'chars',
      charsClass: 'char',
      mask: 'chars'
    });

    const splitText = new SplitText(textRef.current, {
      type: 'lines',
      linesClass: 'line',
      mask: 'lines',
    });

    tl
      .to(videoRef.current, {
        height: "22rem",
        width: "17rem",
        top: '28%',
        left: '30%',
        duration: 1.2,
        delay: 0.8,
        ease: "expo.inOut",
      })
      .to(imageRef.current, {
        clipPath: "polygon(1% 1%, 99% 1%, 99% 99%, 1% 99%)",
        duration: 1.2,
        ease: "expo.inOut"
      }, '<')
      .to(headingRef.current, {
        display: 'flex',
        ease: "power1.inOut",
        duration: 1.2,
      })
      .from(splitTitle.chars, {
        yPercent: 100,
        ease: "power1.inOut",
        stagger: 0.2,
        duration: 1.2,
        opacity: 0,
      }, '<')
      .to(textRef.current, {
        display: 'flex',
        ease: "power1.inOut",
      }, '<')
      .from(splitText.lines, {
        yPercent: 100,
        ease: "power1.inOut",
        stagger: 0.2,
        duration: 1.2,
      }, '<')
    // .to(videoRef.current, {
    //   clipPath: "polygon(50% 45%, 55% 50%, 50% 55%, 45% 50%)",
    //   duration: 1,
    //   ease: "power3.out"
    // })

  }, [])
  // clip-path: polygon(30% 20%, 70% 20%, 70% 80%, 30% 80%);
  // h-80 w-52
  return (
    <>
      <div className="h-dvh w-full overflow-hidden">
        <div className="h-full w-full flex">
          <div className="w-1/2 h-dvh">
            <img className="h-full w-full object-cover [clip-path:polygon(50%_45%,55%_50%,50%_55%,45%_50%)]" src="https://cdn.cosmos.so/ed4ca27e-af3e-462c-a524-4d56faaf0a9b?format=jpeg" alt="" ref={imageRef} />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-between relative overflow-hidden">
            <div className="overflow-hidden">
              <h1 ref={headingRef} className="text-[10rem] text-center flex-1 font-bold space-y-3">ACME</h1>
            </div>
            <div className="flex-1 mt-10">
              <video className="object-cover object-center h-80 w-52" src="https://cdn.cosmos.so/a6b1ba7b-8f65-42ad-85bb-7dd6aedd73b7.mp4" autoPlay loop muted ref={videoRef}></video>
            </div>
            <div className="flex flex-col justify-start flex-1 ">
              <p ref={textRef} className="flex-1 text-center max-w-xl flex items-center justify-center overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cum beatae explicabo voluptas inventore repellendus, tempora nemo quae itaque eligendi culpa mollitia vel ipsam aspernatur corrupti aliquam at rerum sit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
