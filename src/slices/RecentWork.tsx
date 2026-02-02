import React from "react";
import Image from "next/image";
import '../css/WhoWeAre.css'
import { motion } from "motion/react"
import { AnimatedTestimonials } from "../components/animated-testimonials";

export default function RecentWork() {

    const testimonials = [
        {
          quote:
          "A clean, dynamic, and fully responsive portfolio template built with NextJS, TailwindCSS, and Framer Motion. Designed with a modern Bento grid layout, this template highlights projects and visuals in an engaging, minimalist format ideal for creatives and professionals alike.",
          name: "Bentolio",
          designation: "Framer Motion, HTML5, CSS",
          src: "/images/bento-design.webp",
          drop: true,
        },
        {
          quote:
          "A professional, modern, and fully responsive website template for restaurants, built with NextJS, TailwindCSS, and Framer Motion. This template includes various features seen across other professional brands for a sleek user experience.",
          name: "Drip",
          designation: "Blender, Figma, Adobe Illustrator, Adobe Premiere",
          src:"/images/drip_final.png",
          drop: true,
        },
        {
          quote:
          "A professional, modern, and fully responsive website template for restaurants, built with NextJS, TailwindCSS, and Framer Motion. This template includes various features seen across other professional brands for a sleek user experience.",
          name: "Wingland",
          designation: "Framer Motion, HTML5, CSS, Three",
          src:"/images/thumbnail.jpeg",
          drop: true,
        },
        {
          quote:
          "A professional, modern, and fully responsive website template for restaurants, built with NextJS, TailwindCSS, and Framer Motion. This template includes various features seen across other professional brands for a sleek user experience.",
          name: "LuckyLiquids",
          designation: "Framer Motion, HTML5, CSS, Three",
          src:"/images/thumbnail.jpeg",
          drop: false,
        },
        {
          quote:
          "A professional, modern, and fully responsive website template for restaurants, built with NextJS, TailwindCSS, and Framer Motion. This template includes various features seen across other professional brands for a sleek user experience.",
          name: "Calisthenics & Conversation",
          designation: "Webflow",
          src:"/images/logo.png",
          drop: false,
          
        },
        
       
      ];

    return (
        <>
            <section className="section-content noise">

                <motion.h2  whileInView={{y: 0, opacity: 1}} transition={{ease: "circOut"}} initial={{y:40, opacity: 0}} viewport={{amount: 0.4}}>Work</motion.h2>

                <AnimatedTestimonials testimonials={testimonials}/>
                
            </section>
        
        </>
    )
}