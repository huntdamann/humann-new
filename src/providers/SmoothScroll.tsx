"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })

    // 🔗 Sync Lenis → ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    // Use GSAP ticker (important!)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(lenis.raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
