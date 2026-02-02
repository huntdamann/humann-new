"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { motion } from "motion/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Flip } from "gsap/Flip"

import { TiArrowDown } from "react-icons/ti";

import WhoWeAre from "@/src/slices/WhoWeAre"
import RecentWork from "@/src/slices/RecentWork"
import CTA from "@/src/slices/CTA"
import Scene from "@/src/components/3d/Scene"
import SimpleMenu from '../src/components/SimpleMenu'
import GenericButton from "@/src/components/ui/GenericButton"
import Parallax from "@/src/slices/Parallax"
import Header from '@/src/slices/Header'
import Footer from '../src/slices/Footer'
import useMediaQuery from '../src/hooks/useMediaQuery'

import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)


  const iconsRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)
  const elementFourRef = useRef<HTMLDivElement>(null)
  const elementThreeRef = useRef<HTMLDivElement>(null)
  const elementTwoRef = useRef<HTMLDivElement>(null)
  const text = "Checkout The Blog"


  // Small Device Media Query
  const isSmallDevice = useMediaQuery("(min-width: 320px) and (max-width: 425px)");



  const headerRef = useRef<HTMLElement>(null)
  const emblem = useRef<HTMLHeadingElement>(null)
  const elementFiveRef = useRef<HTMLDivElement>(null)
  const elementSixRef = useRef<HTMLDivElement>(null)




  useLayoutEffect(() => {
    if (
      !containerRef.current ||
      !contentRef.current ||
      !gridRef.current ||
      !elementRef.current ||
      !elementFourRef.current ||
      !elementThreeRef.current ||
      !elementTwoRef.current ||
      !elementFiveRef.current ||
      !profileRef.current ||
      !elementSixRef.current ||
      !headerRef.current
    ) {
      return
    }
  
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          pin: true,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      })
      
  
      const el = elementFiveRef.current!
  
      tl.add(() => {
        if (!isSmallDevice) {
          // NOT small device → do Flip
          const state = Flip.getState(el);
      
          el.classList.remove("fullscreen");
      
          Flip.from(state, {
            duration: 1,
            ease: "power4.inOut",
            absolute: true,
          });
        } else {
          // Small device → just remove fullscreen
          el.classList.add("fullscreen");
        }
      }, 0.2);
      
  
      tl.add(() => {
        const state = Flip.getState(el)
  
        el.classList.add("fullscreen")
  
        Flip.from(state, {
          duration: 1,
          ease: "power4.inOut",
          absolute: true,
        })
      }, 0.1)
  
      tl.to(
        headerRef.current!,
        {
          width: "50%",
          borderRadius: "15px",
          duration: 0.6,
          ease: "power3.out",
        },
        0.001
      )
  
      tl.to(
        headerRef.current!,
        {
          color: "#000000",
          backgroundColor: "hsl(0, 0%, 80%, 0.9)",
          // border: "1px gray solid",
          duration: 0.1,
          ease: "power2.out",
        },
        0.001
      )
  
      tl.to(
        contentRef.current!,
        {
          opacity: 0,
          duration: 0.1,
          scale: 0.55,
        },
        0.001
      )
  
      tl.from(
        elementRef.current!,
        {
          y: 200,
          x: -600,
          duration: 0.4,
          ease: "power3.out",
        },
        0.3
      )
  
      tl.from(
        elementFourRef.current!,
        {
          y: 200,
          x: -600,
          duration: 0.4,
          ease: "power3.out",
        },
        0.35
      )
      tl.from(
        elementSixRef.current!,
        {
          y: 300,
          duration: 0.4,
          ease: "power3.out",
        },
        0.35
      )
  
      tl.from(
        elementThreeRef.current!,
        {
          y: 200,
          x: 600,
          duration: 0.4,
          ease: "power3.out",
        },
        0.4
      )
  
      tl.from(
        elementTwoRef.current!,
        {
          y: 200,
          x: 600,
          duration: 0.4,
          ease: "power3.out",
        },
        0.45
      )
  
      tl.to(
        profileRef.current!,
        {
          
          duration: 0.4,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        0.35
      )
    }, containerRef)


    ScrollTrigger.refresh()

  
    return () => ctx.revert()
  }, [])
  

 
  return (
    <>
     <Header ref={headerRef}/>
      <div style={{}} ref={containerRef}>
       
        <section ref={gridRef} className="grid-container">
        <div ref={elementFiveRef} className="grid-element el-5 fullscreen">
             {/* Background video */}
             <div className="bg-video">
              {/* <div className="snowflake">

              </div> */}
             </div>
              
            <div ref={profileRef} className="profile-pic">
                <Image src='/images/profile.png' fill alt="Profile Pic" style={{objectFit: 'cover'}} />
            </div>

            <div ref={contentRef} className="element-content">
              <div className="hero-heading">
              <h1>Design Engineer</h1>
              <div className="sub-heading">
                <span>Web Design</span>
                <div className="circle"></div>
                <span>Web Development</span>
                <div className="circle"></div>

                <span>Graphic Design</span>
                <div className="circle"></div>

                <span>Vision Creation</span>

              </div>
              <div className="super-script">
                [2433]
              </div>
              </div>
              <div className="hero-tag">
                <span>Just a regular guy that likes to make things look cool for people </span>
              </div>
              <div style={{ display: "flex ", justifyContent: "space-between", padding: "2rem", position: "absolute", width:"100%", top: "35rem"}}>
                <span style={{fontSize: "2.5em"}}><TiArrowDown />
                </span>
                <span>Scroll Down</span>
              </div>
            </div>

          </div>
          <div ref={elementRef} className="grid-element el-1">
              <h3>About Me:</h3>
              <p className="">Engineer by day, creator always. I design and build things driven by curiosity and a desire to create work that’s useful, engaging, and genuinely enjoyable for others.</p>
          </div>
          <div ref={elementTwoRef} className="grid-element el-2">
          <h3>Offerings:</h3>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Graphic Design</li>
                <li>Vision Creation</li>
                <li>Product Visualization</li>

              </ul>
          </div>
          <div ref={elementThreeRef} className="grid-element el-3">
          <video
              src="/videos/Rough_Draft.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
          <div ref={elementFourRef} className="grid-element el-4">
            <video
              src="/videos/site.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
          <div ref={elementSixRef} className="grid-element el-6">
              <span>Hunter Mann</span>
          </div>

          
          
        </section>
      </div>


        <section className="section-info">
          <div style={{
            position: "absolute",
            height: "500px",
            borderRadius: "20px",
            width: "500px",
            right: "2rem",
            top: "5rem",
            padding: "1rem",
            marginLeft: "1rem",
            backgroundColor: "rgb(255, 255, 255, 0.9)",
            color: "black"
          }}>
            <span>
              
              Design is the backbone of creativity—the invisible structure that unites music, art, photography, videography, and every expressive medium into a coherent experience.

            </span>
          </div>
            <Scene />
        </section>
        <WhoWeAre />
        <section className="section-info">
          <h2>Offerings</h2>
          <SimpleMenu />
        </section>
        <RecentWork />
        {/* Desing is invisible Section */}
        <section className="section-content-1">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{
                once: false,
                amount: 0.6,
              }}
            >
              The best design is invisible...
            </motion.h2>
        </section>

        {/* Call To Action Section */}
        <CTA />


        <div className="blog-plug">
          <div className="">
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
             ))}
          </div>

          
          <GenericButton text={"Go"} link={"/blog"} />
        </div>
        <Footer />
       

    </>
  )
}
