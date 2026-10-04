"use client"

import { useEffect, useState, useRef } from "react"
import { Code, Database, Cpu, Layers, CheckCircle2 } from "lucide-react"

const cardsData = [
  {
    type: "video",
    title: "Full-Stack & AI Systems in Action",
    subtitle: "Interactive Technical Showcase",
    videoSrc: "/skills.mp4",
  },
  {
    type: "skill",
    icon: Code,
    title: "Frontend Engineering",
    subtitle: "React & Next.js Ecosystem",
    description: "Building production-grade, server-rendered applications with server components, TypeScript type safety, and responsive Tailwind interfaces.",
    skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS"],
  },
  {
    type: "skill",
    icon: Database,
    title: "Backend & Databases",
    subtitle: "Scalable Data Architecture",
    description: "Designing reliable PostgreSQL databases with Prisma ORM, performant Fast API REST endpoints, and secure authentication pipelines.",
    skills: ["PostgreSQL", "Prisma ORM", "Fast API", "REST APIs"],
  },
  {
    type: "skill",
    icon: Cpu,
    title: "AI & Automation",
    subtitle: "Intelligent Workflows",
    description: "Integrating OpenAI GPT-4o models, custom LLM agents, embeddings, and complex multi-service n8n automation workflows.",
    skills: ["OpenAI APIs", "n8n Workflows", "AI Agents", "LLM Pipelines"],
  },
  {
    type: "skill",
    icon: Layers,
    title: "DevOps & Cloud",
    subtitle: "Deployment & Version Control",
    description: "Deploying high-availability applications to Vercel, managing version control with Git branching, and optimizing edge performance.",
    skills: ["Vercel", "Git & GitHub", "Edge Network", "CI/CD"],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const totalScroll = sectionRef.current.offsetHeight - window.innerHeight
      if (totalScroll <= 0) return

      const currentScroll = -rect.top
      const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1)
      setScrollProgress(progress)

      // Bind video playback currentTime directly to scroll position
      if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        const targetTime = progress * videoRef.current.duration
        if (Math.abs(videoRef.current.currentTime - targetTime) > 0.02) {
          videoRef.current.currentTime = targetTime
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-white text-black min-h-[280vh] sm:min-h-[320vh]"
      aria-label="Services and Technical Expertise section"
    >
      {/* Sticky Viewport Container - Pins during 300vh scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white z-20">

        {/* Section Header with Morphing Target for Technical Expertise */}
        <div id="services-title-target" className="text-center pt-2 sm:pt-4 z-20">
          <div className="flex items-center justify-center gap-2 sm:gap-4 font-black tracking-tight text-slate-900 text-3xl sm:text-5xl md:text-6xl text-center">
            <span className="text-slate-400 uppercase font-black">SERVICES &</span>
            <span
              id="services-expertise-target"
              className="inline-block uppercase text-slate-900 font-black opacity-0 pointer-events-none select-none"
            >
              TECHNICAL EXPERTISE
            </span>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-bold mt-2 max-w-2xl mx-auto">
            Scroll down to explore video & skill showcase
          </p>
        </div>

        {/* Horizontal Cards Showcase Track */}
        <div className="relative w-full max-w-7xl mx-auto my-auto h-[380px] sm:h-[440px] flex items-center justify-center z-10 overflow-visible">
          <div className="relative w-full h-full flex items-center justify-center">
            {cardsData.map((card, index) => {
              // Calculate offset: Card 0 stays at fixed left position; subsequent cards slide out to the right one by one
              const offsetFactor = Math.min(Math.max((scrollProgress - index * 0.18) / 0.22, 0), 1)

              // Easing for smooth slide out
              const easedOffset =
                offsetFactor < 0.5
                  ? 2 * offsetFactor * offsetFactor
                  : 1 - Math.pow(-2 * offsetFactor + 2, 2) / 2

              // Calculate horizontal position (desktop / tablet / mobile)
              const cardWidth = typeof window !== "undefined" && window.innerWidth < 640 ? 280 : 340
              const gap = 20
              const translateX = index === 0 ? 0 : easedOffset * (index * (cardWidth + gap))

              // Calculate overall track centering shift as cards expand right
              const totalCardsShift = (scrollProgress * (cardsData.length - 1) * (cardWidth + gap)) / 2

              return (
                <div
                  key={index}
                  className="absolute transition-transform duration-75 ease-out"
                  style={{
                    transform: `translateX(${translateX - totalCardsShift}px)`,
                    zIndex: cardsData.length - index + 10,
                  }}
                >
                  {card.type === "video" ? (
                    /* CARD 0: Video Card (public/skills.mp4, NO BORDER) */
                    <div className="w-[280px] sm:w-[340px] h-[380px] sm:h-[440px] bg-black text-white rounded-2xl border-none outline-none overflow-hidden shadow-2xl relative flex flex-col justify-between">
                      <video
                        ref={videoRef}
                        src={card.videoSrc}
                        muted
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover border-none outline-none pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                      {/* Header Pill */}
                      <div className="relative z-10 p-5 flex justify-between items-center">
                        <span className="px-3 py-1 bg-white text-black font-extrabold text-xs rounded-full uppercase tracking-wider shadow-md">
                          Video Showcase
                        </span>
                      </div>

                      {/* Bottom Title */}
                      <div className="relative z-10 p-5 space-y-1 text-left">
                        <p className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
                          {card.subtitle}
                        </p>
                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    /* SKILLS CARDS (Cards 1..N): Pure Black & White Theme */
                    <div className="w-[280px] sm:w-[340px] h-[380px] sm:h-[440px] bg-white border border-slate-200 text-slate-900 rounded-2xl shadow-xl p-6 sm:p-7 flex flex-col justify-between text-left">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-black">
                            {card.icon && <card.icon size={24} />}
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            0{index + 1}
                          </span>
                        </div>

                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            {card.subtitle}
                          </p>
                          <h3 className="text-xl font-black text-slate-900 mt-1">
                            {card.title}
                          </h3>
                        </div>

                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                          {card.description}
                        </p>
                      </div>

                      {/* Skill Badges */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-2">
                          {card.skills?.map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 bg-slate-100 text-slate-900 border border-slate-300 rounded-lg text-xs font-bold flex items-center gap-1"
                            >
                              <CheckCircle2 size={12} className="text-black" />
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Scroll Progress Bar at Bottom */}
        <div className="z-20 text-center pb-2 sm:pb-4 flex flex-col items-center gap-2">
          <div className="w-48 sm:w-64 h-1.5 bg-slate-200 rounded-full overflow-hidden border border-slate-300">
            <div
              className="h-full bg-black transition-all duration-150 ease-out rounded-full"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <p className="text-[10px] sm:text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">
            Scroll Progress: {Math.round(scrollProgress * 100)}%
          </p>
        </div>

      </div>
    </section>
  )
}