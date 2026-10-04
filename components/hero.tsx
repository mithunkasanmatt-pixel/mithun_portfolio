"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Mail, Github, Linkedin, Globe, ChevronRight } from "lucide-react"

export default function Hero() {
  const [isEmerging, setIsEmerging] = useState(false)

  useEffect(() => {
    // Trigger emergence animation after page/loader initialization
    const timer = setTimeout(() => {
      setIsEmerging(true)
    }, 2100)

    let animationFrameId: number
    let isAnimating = true

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY

        // 1. Part 1: MITHUN morphing into Navbar Logo Slot
        const mithunEl = document.getElementById("hero-morph-mithun")
        const mithunStartEl = document.getElementById("hero-mithun-placeholder")
        const navSlotEl = document.getElementById("navbar-logo-slot")

        if (mithunEl && mithunStartEl && navSlotEl) {
          const startRect = mithunStartEl.getBoundingClientRect()
          const navSlotRect = navSlotEl.getBoundingClientRect()

          const dockThreshold = 220
          const rawProgress = Math.min(Math.max(scrollY / dockThreshold, 0), 1)
          const progress =
            rawProgress < 0.5
              ? 2 * rawProgress * rawProgress
              : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2

          const startLeft = startRect.left
          const startTop = startRect.top
          const targetLeft = navSlotRect.left
          const targetTop = navSlotRect.top

          const startScale = 1
          const targetScale =
            navSlotRect.height > 0 && startRect.height > 0
              ? (navSlotRect.height * 0.75) / startRect.height
              : 0.45

          const currentLeft = startLeft + (targetLeft - startLeft) * progress
          const currentTop = startTop + (targetTop - startTop) * progress
          const currentScale = startScale + (targetScale - startScale) * progress

          mithunEl.style.left = `${currentLeft}px`
          mithunEl.style.top = `${currentTop}px`
          mithunEl.style.transform = `scale(${currentScale})`
          mithunEl.style.transformOrigin = "left center"
          mithunEl.style.zIndex = progress >= 0.85 ? "60" : "35"
        }

        // 2. Part 2: KUMAR morphing into About Section Header Title
        const kumarEl = document.getElementById("hero-morph-kumar")
        const kumarStartEl = document.getElementById("hero-kumar-placeholder")
        const kumarTargetEl = document.getElementById("about-title-kumar-target")
        const aboutEl = document.getElementById("about")

        if (kumarEl && kumarStartEl && kumarTargetEl && aboutEl) {
          const startRect = kumarStartEl.getBoundingClientRect()
          const targetRect = kumarTargetEl.getBoundingClientRect()

          const aboutRect = aboutEl.getBoundingClientRect()
          const aboutTopAbs = scrollY + aboutRect.top
          const morphStart = 60
          const morphEnd = Math.max(aboutTopAbs - window.innerHeight * 0.35, 250)

          const rawProgress = Math.min(Math.max((scrollY - morphStart) / (morphEnd - morphStart), 0), 1)
          const progress =
            rawProgress < 0.5
              ? 2 * rawProgress * rawProgress
              : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2

          const startLeft = startRect.left
          const startTop = startRect.top
          const targetLeft = targetRect.left
          const targetTop = targetRect.top

          const startScale = 1
          const targetScale =
            targetRect.height > 0 && startRect.height > 0
              ? targetRect.height / startRect.height
              : 0.95

          const currentLeft = startLeft + (targetLeft - startLeft) * progress
          const currentTop = startTop + (targetTop - startTop) * progress
          const currentScale = startScale + (targetScale - startScale) * progress

          kumarEl.style.left = `${currentLeft}px`
          kumarEl.style.top = `${currentTop}px`
          kumarEl.style.transform = `scale(${currentScale})`
          kumarEl.style.transformOrigin = "left center"
          kumarEl.style.zIndex = "35"
        }

        // 3. Morphing 3 Hero Tags to Below About Section
        const tagIds = [1, 2, 3]
        const aboutBottomSection = document.getElementById("about-bottom-tags-container")

        if (aboutBottomSection) {
          const bottomRect = aboutBottomSection.getBoundingClientRect()
          const bottomTopAbs = scrollY + bottomRect.top
          const tagStartScroll = 50
          const tagEndScroll = Math.max(bottomTopAbs - window.innerHeight * 0.35, 250)

          const rawProgressTag = Math.min(Math.max((scrollY - tagStartScroll) / (tagEndScroll - tagStartScroll), 0), 1)
          const progressTag =
            rawProgressTag < 0.5
              ? 2 * rawProgressTag * rawProgressTag
              : 1 - Math.pow(-2 * rawProgressTag + 2, 2) / 2

          tagIds.forEach((id) => {
            const morphTag = document.getElementById(`morph-tag-${id}`)
            const heroTag = document.getElementById(`hero-card-tag-${id}`)
            const targetTag = document.getElementById(`about-bottom-tag-target-${id}`)

            if (morphTag && heroTag && targetTag) {
              const startRect = heroTag.getBoundingClientRect()
              const targetRect = targetTag.getBoundingClientRect()

              const currentLeft = startRect.left + (targetRect.left - startRect.left) * progressTag
              const currentTop = startRect.top + (targetRect.top - startRect.top) * progressTag

              const startScale = 1
              const targetScale =
                targetRect.height > 0 && startRect.height > 0
                  ? targetRect.height / startRect.height
                  : 1
              const currentScale = startScale + (targetScale - startScale) * progressTag

              morphTag.style.left = `${currentLeft}px`
              morphTag.style.top = `${currentTop}px`
              morphTag.style.transform = `scale(${currentScale})`
              morphTag.style.transformOrigin = "center center"
              morphTag.style.zIndex = "35"
            }
          })
        }

        // 4. Morphing Technical Expertise text from About section to Services section title
        const expertiseEl = document.getElementById("hero-morph-expertise")
        const expertiseStartEl = document.getElementById("about-technical-expertise-placeholder")
        const expertiseTargetEl = document.getElementById("services-expertise-target")
        const servicesEl = document.getElementById("services")

        if (expertiseEl && expertiseStartEl && expertiseTargetEl && aboutEl && servicesEl) {
          const startRect = expertiseStartEl.getBoundingClientRect()
          const targetRect = expertiseTargetEl.getBoundingClientRect()

          const aboutRect = aboutEl.getBoundingClientRect()
          const servicesRect = servicesEl.getBoundingClientRect()

          const morphStart = scrollY + aboutRect.top + aboutRect.height * 0.3
          const morphEnd = scrollY + servicesRect.top + 80

          const rawProgress = Math.min(Math.max((scrollY - morphStart) / (morphEnd - morphStart), 0), 1)
          const progress =
            rawProgress < 0.5
              ? 2 * rawProgress * rawProgress
              : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2

          const startLeft = startRect.left
          const startTop = startRect.top
          const targetLeft = targetRect.left
          const targetTop = targetRect.top

          const startScale = 1
          const targetScale =
            targetRect.height > 0 && startRect.height > 0
              ? targetRect.height / startRect.height
              : 1.5

          const currentLeft = startLeft + (targetLeft - startLeft) * progress
          const currentTop = startTop + (targetTop - startTop) * progress
          const currentScale = startScale + (targetScale - startScale) * progress

          expertiseEl.style.left = `${currentLeft}px`
          expertiseEl.style.top = `${currentTop}px`
          expertiseEl.style.transform = `scale(${currentScale})`
          expertiseEl.style.transformOrigin = "left center"
          expertiseEl.style.zIndex = "35"
        }
      })
    }

    const updateLoop = () => {
      handleScroll()
      if (isAnimating) {
        requestAnimationFrame(updateLoop)
      }
    }
    updateLoop()

    const stopLoopTimer = setTimeout(() => {
      isAnimating = false
    }, 3500)

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      clearTimeout(timer)
      clearTimeout(stopLoopTimer)
      isAnimating = false
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 bg-white text-slate-800 overflow-hidden"
      aria-label="Hero section introducing Mithunkumar.C"
    >
      {/* Background Giant White Glow Circle behind the central person */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[520px] sm:h-[520px] md:w-[620px] md:h-[620px] lg:w-[700px] lg:h-[700px] bg-slate-50/80 rounded-full shadow-[0_10px_60px_rgba(0,0,0,0.04)] pointer-events-none -z-0" />

      {/* Floating 3D Background Decorative Shapes (Left Side) */}
      <div
        className="absolute top-28 left-[18%] w-10 h-10 border-4 border-slate-300 rounded-full transform -rotate-45 shadow-sm opacity-60 pointer-events-none hidden md:block animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div className="absolute bottom-36 left-[12%] w-8 h-8 bg-gradient-to-tr from-slate-200 to-slate-400 rounded-full shadow-md opacity-70 pointer-events-none hidden md:block" />

      {/* Part 1: MITHUN (Smoothly moves into Navbar as Logo) */}
      <a
        href="#home"
        id="hero-morph-mithun"
        className={`fixed z-35 font-black tracking-tight text-[#1a1c23] uppercase leading-none font-sans select-none text-3xl sm:text-5xl md:text-6xl lg:text-6xl pointer-events-auto transition-opacity duration-700 ${
          isEmerging ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transformOrigin: "left center",
          willChange: "transform, left, top",
        }}
      >
        MITHUN
      </a>

      {/* Part 2: KUMAR (Smoothly morphs into About Section Header) */}
      <a
        href="#about"
        id="hero-morph-kumar"
        className={`fixed z-35 font-black tracking-tight text-[#1a1c23] uppercase leading-none font-sans select-none text-3xl sm:text-5xl md:text-6xl lg:text-6xl pointer-events-auto transition-opacity duration-700 ${
          isEmerging ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transformOrigin: "left center",
          willChange: "transform, left, top",
        }}
      >
        KUMAR
      </a>

      {/* Morphing Technical Expertise Element */}
      <a
        href="#services"
        id="hero-morph-expertise"
        className={`fixed z-35 font-bold tracking-tight text-slate-900 uppercase font-sans select-none text-base sm:text-lg md:text-2xl pointer-events-auto transition-opacity duration-700 ${
          isEmerging ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transformOrigin: "left center",
          willChange: "transform, left, top",
        }}
      >
        Technical Expertise
      </a>

      {/* Morphing Tag 1: Full-Stack Developer */}
      <div
        id="morph-tag-1"
        className={`fixed z-35 px-5 py-2 sm:px-6 sm:py-2.5 bg-white border border-slate-200/90 rounded-2xl shadow-xl font-bold text-slate-900 text-xs sm:text-sm md:text-base pointer-events-none select-none transition-opacity duration-700 ${
          isEmerging ? "opacity-100" : "opacity-0"
        }`}
        style={{ transformOrigin: "center center", willChange: "left, top, transform" }}
      >
        Full-Stack Developer
      </div>

      {/* Morphing Tag 2: Web Developer */}
      <div
        id="morph-tag-2"
        className={`fixed z-35 px-5 py-2 sm:px-6 sm:py-2.5 bg-white border border-slate-200/90 rounded-2xl shadow-xl font-bold text-slate-900 text-xs sm:text-sm md:text-base pointer-events-none select-none transition-opacity duration-700 ${
          isEmerging ? "opacity-100" : "opacity-0"
        }`}
        style={{ transformOrigin: "center center", willChange: "left, top, transform" }}
      >
        Web Developer
      </div>

      {/* Morphing Tag 3: React & Next.js Specialist */}
      <div
        id="morph-tag-3"
        className={`fixed z-35 px-5 py-2 sm:px-6 sm:py-2.5 bg-white border border-slate-200/90 rounded-2xl shadow-xl font-bold text-slate-900 text-xs sm:text-sm md:text-base pointer-events-none select-none transition-opacity duration-700 ${
          isEmerging ? "opacity-100" : "opacity-0"
        }`}
        style={{ transformOrigin: "center center", willChange: "left, top, transform" }}
      >
        React & Next.js Specialist
      </div>

      <div className="relative z-10 max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* LEFT COLUMN: Subtitle, Name Placeholder, Description, Email Pill, Social Icons */}
          <div
            className={`lg:col-span-4 space-y-6 text-center lg:text-left order-2 lg:order-1 z-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isEmerging
                ? "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto"
                : "translate-y-12 lg:translate-y-0 lg:translate-x-[70%] scale-90 opacity-0 pointer-events-none"
            }`}
          >
            <div className="space-y-2">
              <p className="text-slate-600 font-bold text-lg sm:text-xl tracking-tight">
                Hello, I'm
              </p>

              {/* Invisible Layout Placeholder to reserve exact space in Hero for MITHUN KUMAR */}
              <div
                id="hero-name-placeholder"
                className="h-10 sm:h-14 md:h-16 w-full flex items-center justify-center lg:justify-start gap-2 sm:gap-3 font-black tracking-tight text-[#1a1c23] uppercase text-3xl sm:text-5xl md:text-6xl select-none"
              >
                <span id="hero-mithun-placeholder" className="opacity-0 pointer-events-none">
                  MITHUN
                </span>
                <span id="hero-kumar-placeholder" className="opacity-0 pointer-events-none">
                  KUMAR
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              Full-Stack Web Developer with 2+ years of experience building modern React, Next.js, and TypeScript web applications. I create intuitive digital experiences that solve complex problems.
            </p>

            {/* Email Capsule Pill & Social Icons */}
            <div className="pt-4 space-y-4">
              {/* Email Pill */}
              <div className="inline-flex items-center bg-white shadow-md shadow-slate-200/60 border border-slate-100 rounded-full px-5 py-2 text-slate-700 font-semibold text-sm">
                mithunkasan@gmail.com
              </div>

              {/* Social Media Buttons */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {/* Email Circle Icon */}
                <a
                  href="mailto:mithunkasan@gmail.com"
                  className="w-10 h-10 rounded-full bg-[#0088ff] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>

                {/* GitHub Circle Icon */}
                <a
                  href="https://github.com/Mithunkasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-slate-700 hover:bg-black hover:text-white flex items-center justify-center shadow-md border border-slate-200/80 transition-all hover:scale-110"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>

                {/* LinkedIn Circle Icon */}
                <a
                  href="https://www.linkedin.com/in/mithunkasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-slate-700 hover:bg-[#0a66c2] hover:text-white flex items-center justify-center shadow-md border border-slate-200/80 transition-all hover:scale-110"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>

                {/* Website Circle Icon */}
                <a
                  href="#projects"
                  className="w-10 h-10 rounded-full bg-white text-slate-700 hover:bg-purple-600 hover:text-white flex items-center justify-center shadow-md border border-slate-200/80 transition-all hover:scale-110"
                  aria-label="Projects"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Full Torso Portrait / Central Image */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 py-4 lg:py-0 z-20">
            <div className="relative w-[280px] h-[340px] sm:w-[380px] sm:h-[460px] md:w-[420px] md:h-[500px] lg:w-[440px] lg:h-[540px]">
              <Image
                src="/home.png"
                alt="Mithunkumar.C - Web Developer"
                fill
                priority
                className="object-contain object-bottom drop-shadow-xl"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 448px, 500px"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Stacked Floating Feature Showcase Cards */}
          <div className="lg:col-span-4 relative flex flex-col gap-6 items-center lg:items-end order-3 z-10">

            {/* Feature Card 1 - Top */}
            <div
              className={`flex flex-col items-center group cursor-pointer transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isEmerging
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto"
                  : "-translate-y-12 lg:translate-y-0 lg:-translate-x-[70%] scale-80 opacity-0 pointer-events-none"
              }`}
              style={{ transitionDelay: isEmerging ? "150ms" : "0ms" }}
            >
              <div className="w-56 sm:w-64 bg-white p-2.5 rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 relative group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/mip.png"
                    alt="Matrimony Platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Connecting diamond indicator & label pill */}
              <div className="flex flex-col items-center -mt-1">
                <div className="w-2 h-2 rotate-45 bg-slate-800 my-1.5" />
                <div
                  id="hero-card-tag-1"
                  className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-2xl border border-transparent font-bold text-xs sm:text-sm md:text-base tracking-wide text-center opacity-0 pointer-events-none select-none"
                >
                  Full-Stack Developer
                </div>
              </div>
            </div>

            {/* Feature Card 2 - Middle Right */}
            <div
              className={`flex flex-col items-center group cursor-pointer transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] lg:-mr-6 ${
                isEmerging
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto"
                  : "-translate-y-12 lg:translate-y-0 lg:-translate-x-[70%] scale-80 opacity-0 pointer-events-none"
              }`}
              style={{ transitionDelay: isEmerging ? "300ms" : "0ms" }}
            >
              <div className="w-48 sm:w-52 bg-white p-2.5 rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 relative group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-28 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/shaanvi.png"
                    alt="Construction Platform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Connecting diamond indicator & label pill */}
              <div className="flex flex-col items-center -mt-1">
                <div className="w-2 h-2 rotate-45 bg-slate-800 my-1.5" />
                <div
                  id="hero-card-tag-2"
                  className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-2xl border border-transparent font-bold text-xs sm:text-sm md:text-base tracking-wide text-center opacity-0 pointer-events-none select-none"
                >
                  Web Developer
                </div>
              </div>
            </div>

            {/* Feature Card 3 - Bottom */}
            <div
              className={`flex flex-col items-center group cursor-pointer transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isEmerging
                  ? "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto"
                  : "-translate-y-12 lg:translate-y-0 lg:-translate-x-[70%] scale-80 opacity-0 pointer-events-none"
              }`}
              style={{ transitionDelay: isEmerging ? "450ms" : "0ms" }}
            >
              <div className="w-56 sm:w-64 bg-white p-2.5 rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 relative group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/mattrd.png"
                    alt="AI & Automation R&D"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Connecting diamond indicator & label pill */}
              <div className="flex flex-col items-center -mt-1">
                <div className="w-2 h-2 rotate-45 bg-slate-800 my-1.5" />
                <div
                  id="hero-card-tag-3"
                  className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-2xl border border-transparent font-bold text-xs sm:text-sm md:text-base tracking-wide text-center opacity-0 pointer-events-none select-none"
                >
                  React & Next.js Specialist
                </div>
              </div>
            </div>

            {/* Right Edge Next Carousel Floating Button */}
            <a
              href="#about"
              className={`absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-100 text-slate-700 hover:text-black hover:scale-110 flex items-center justify-center transition-all hidden xl:flex ${
                isEmerging ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Next section"
            >
              <ChevronRight size={22} />
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}

