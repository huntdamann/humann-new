"use client"

import { useState, forwardRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { TbMenu } from "react-icons/tb"
import { FaArrowLeft } from "react-icons/fa6"

const Header = forwardRef(function Header(props, ref) {
  const [open, setOpen] = useState(false)

  return (
    <header ref={ref} className="fixed top-[10px] left-0 w-full  left-1/2 -translate-x-1/2 z-99 h-15">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 bg-transparent text-white">
        {/* <div className="left">
          <Image
            src="/images/logo-main.png"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div> */}

        <div className="middle">
          <div className="flex rounded-[20px] text-center p-2 bg-black text-sm flex-col">
            <span>Freelance Availability:</span>
            <span>March 2026</span>
          </div>
        </div>

        <div className="right">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: "1px black solid",
              padding: "1rem",
              borderRadius: "20px",
              backgroundColor: "black",
            }}
          >
            <span
              className="hover:text-yellow-50"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Let's Connect
            </span>
            <FaArrowLeft style={{ transform: "rotate(135deg)" }} />
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="px-3 border-white rounded"
          >
            {open ? "X" : <TbMenu />}
          </button>
        </div>
      </div>

      {/* Expandable Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="overflow-hidden rounded-md  text-white"
            style={{
                backgroundColor: "hsl(0, 0%, 80%, 0.9)",
            }}
          >
            <ul className="flex flex-col gap-6 px-6 py-8">
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
})

export default Header
