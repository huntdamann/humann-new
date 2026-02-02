"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Parallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect( () => {

    const context = gsap.context( () => {

        const tl = gsap.timeline({

            scrollTrigger: {

                trigger: containerRef.current,

                start: "top+=1000 bottom+=1000",

                end: "bottom+=1000 top+=1000",

                scrub: true,
                markers: true,

            },

        })

        .to(titleRef.current, {y: 150}, 0)

        

        

        

    })

    return () => context.revert();

}, [])

  return (
    <div ref={containerRef} className="section-info">
      <h2 ref={titleRef}>
        The best design is invisible...
      </h2>
    </div>
  )
}
