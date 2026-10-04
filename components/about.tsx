"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Code2, Sparkles, Award } from "lucide-react"

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma ORM", category: "ORM" },
  { name: "Fast API", category: "Backend" },
  { name: "n8n", category: "Automation" },
  { name: "OpenAI APIs", category: "AI & Automation" },
  { name: "Git", category: "Tools" },
  { name: "Vercel", category: "Deployment" },
]

export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  const rightColRef = useRef<HTMLDivElement>(null)

  // Intersection observer to trigger smooth entrance animation for right content
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true)
        }
      },
      { threshold: 0.15 }
    )

    if (rightColRef.current) {
      observer.observe(rightColRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-16 md:py-24 relative overflow-hidden bg-white text-black"
      aria-label="About section introducing Mithunkumar.C"
    >
      <div className="relative z-10 max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-12 w-full">

        {/* Section Header: ABOUT Title with Target Slot for KUMAR & 3 Titles Below */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Main Title Row: ABOUT KUMAR */}
          <div
            id="about-title-target"
            className="flex items-center justify-center gap-3 sm:gap-4 font-black tracking-tight text-slate-900 text-3xl sm:text-5xl md:text-6xl text-center min-h-[3.5rem] sm:min-h-[4.5rem] mb-3 sm:mb-4"
          >
            <span className="uppercase text-slate-900 font-black tracking-tight">ABOUT MITHUN</span>
            <span
              id="about-title-kumar-target"
              className="inline-block text-slate-900 font-black tracking-tight opacity-0 pointer-events-none select-none"
            >
              KUMAR
            </span>
          </div>

          {/* Next Line Below About Section Title: Target Container for 3 Hero Titles */}
          <div
            id="about-bottom-tags-container"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto px-4"
          >
            <div
              id="about-bottom-tag-target-1"
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white border border-slate-200 rounded-2xl shadow-md font-bold text-slate-900 text-xs sm:text-sm md:text-base opacity-0 pointer-events-none select-none"
            >
              Full-Stack Developer
            </div>
            <div
              id="about-bottom-tag-target-2"
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white border border-slate-200 rounded-2xl shadow-md font-bold text-slate-900 text-xs sm:text-sm md:text-base opacity-0 pointer-events-none select-none"
            >
              Web Developer
            </div>
            <div
              id="about-bottom-tag-target-3"
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white border border-slate-200 rounded-2xl shadow-md font-bold text-slate-900 text-xs sm:text-sm md:text-base opacity-0 pointer-events-none select-none"
            >
              React & Next.js Specialist
            </div>
          </div>
        </div>

        {/* Main Grid: Left Side Image & Right Side Content (Height Matched & Aligned) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE: Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center h-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] bg-transparent">
              <Image
                src="/about.png"
                alt="Mithunkumar.C - Full-Stack Web Developer"
                fill
                priority
                className="object-contain object-center drop-shadow-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Trimmed Content Matching Left Image Height */}
          <div
            ref={rightColRef}
            className={`lg:col-span-7 flex flex-col justify-between space-y-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-left h-full ${
              isOpen
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-12 scale-95 opacity-0"
            }`}
          >
            {/* Developer Story Card */}
            <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-lg space-y-3">
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                <Code2 className="text-black" size={22} />
                <h3 className="text-lg sm:text-xl font-black text-black">
                  Developer's Story
                </h3>
              </div>

              <div className="space-y-2 text-slate-800 text-sm leading-relaxed font-medium">
                <p>
                  I'm <strong className="text-black font-bold">Mithunkumar.C</strong>, a passionate <strong className="text-black font-bold">Full-Stack Web Developer</strong> with over <strong className="text-black font-bold">2 years of professional experience</strong>. I specialize in <strong className="text-black font-bold">React, Next.js, TypeScript</strong>, and <strong className="text-black font-bold">Tailwind CSS</strong> for high-performance frontends, backed by <strong className="text-black font-bold">PostgreSQL, Prisma ORM, Fast API, n8n</strong>, and <strong className="text-black font-bold">OpenAI APIs</strong>.
                </p>
              </div>
            </div>

            {/* Development Philosophy Card */}
            <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-lg space-y-2">
              <div className="flex items-center gap-2.5">
                <Sparkles className="text-black flex-shrink-0" size={20} />
                <h4 className="text-base sm:text-lg font-bold text-black">
                  Development Philosophy
                </h4>
              </div>
              <p className="text-slate-800 text-sm leading-relaxed font-medium">
                I prioritize clean architecture, responsive design, and user-centric engineering—structuring every line of code for maintainability, speed, and real-world impact.
              </p>
            </div>

            {/* Technical Skills Badges */}
            <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl shadow-lg space-y-3">
              <div className="flex items-center gap-2.5">
                <Award className="text-black" size={20} />
                <h4
                  id="about-technical-expertise-placeholder"
                  className="text-base sm:text-lg font-bold text-black opacity-0 select-none pointer-events-none"
                >
                  Technical Expertise
                </h4>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-slate-100 text-black border border-slate-300 rounded-full text-xs font-bold shadow-sm hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}