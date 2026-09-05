"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import ScrollReveal from "@/components/scroll-reveal"

const projects = [
  {
    title: "Matt Research and Development",
    category: "AI & Automation / R&D",
    description:
      "Official website of the office where I work, focusing completely on Research and Development. Features an automated Blogs page where tech blogs are daily generated using OpenAI API integration and n8n automation workflows.",
    technologies: ["Next.js", "OpenAI API", "n8n", "TypeScript", "Tailwind CSS"],
    image: "/mattrd.png",
    source: "https://mattrd.com",
    websiteUrl: "mattrd.com",
    featured: true,
    highlights: [
      "OpenAI API Integration",
      "Automated Daily Blogs",
      "Research & Development Focus",
      "n8n Workflow Automation"
    ]
  },
  {
    title: "My Indian Partner",
    category: "Full Stack Matrimony Platform",
    description:
      "A complete matrimony platform empowering users to register, log in, create profiles, and search for suitable matches with complete user management, full admin control, merchant payment gateway, and Google login.",
    technologies: ["React", "Next.js", "PostgreSQL", "Google Auth", "Payment Gateway"],
    image: "/mip.png",
    source: "https://myindianpartner.com",
    websiteUrl: "myindianpartner.com",
    featured: true,
    highlights: [
      "User Authentication",
      "Profile Creation & Management",
      "Match Selection System",
      "Admin Management",
      "Merchant Payment Integration",
      "Google Login Authentication"
    ]
  },
  {
    title: "Nanjil Varankal Matrimony",
    category: "Web Application Development",
    description:
      "Matrimonial application allowing admin user registration, profile management, and interactive match browsing for prospective brides and grooms.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Lovable AI"],
    image: "/nanjils.png",
    source: "https://www.nanjilvarankal.com/",
    websiteUrl: "nanjilvarankal.com",
    highlights: [
      "User Profiles",
      "Match Search Engine",
      "Admin Control",
      "Responsive Layout"
    ]
  },
  {
    title: "VR GALAXY NETWORKS",
    category: "Web Application Development",
    description: "Analytics dashboard with real-time data visualization and interactive performance charts for enterprise business insights.",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    image: "/vrgalaxy.png",
    source: "https://www.vrgalaxynetworks.com/",
    websiteUrl: "vrgalaxynetworks.com",
    highlights: [
      "Real-Time Analytics",
      "Interactive Charts",
      "Business Insights",
      "Performance Metrics"
    ]
  },
  {
    title: "Shaanvi Constructions",
    category: "Full Stack Development",
    description: "Modern construction company platform showcasing architectural projects, services, client portals, and real-time updates.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "WebSocket"],
    image: "/shaanvi.png",
    source: "https://shaanvi-construction.vercel.app/",
    websiteUrl: "shaanvi-construction.vercel.app",
    highlights: [
      "Construction Portfolio",
      "Project Showcase",
      "Client Management",
      "Real-Time Updates"
    ]
  },
  {
    title: "Employee Management System",
    category: "Web Application Development",
    description: "Headless HR and employee management portal with authentication, role-based access control, and flexible REST APIs.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "REST API"],
    image: "/matt.png",
    source: "https://matt-employee-site.vercel.app/login",
    websiteUrl: "matt-employee-site.vercel.app",
    highlights: [
      "Employee Records",
      "Role-Based Access Control",
      "Secure Authentication",
      "REST API Services"
    ]
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  const [scrollDistance, setScrollDistance] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)

  const targetTranslateX = useRef(0)
  const lastScrollY = useRef(0)
  const isProgrammaticScrolling = useRef(false)

  // Intercept click on hash links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        isProgrammaticScrolling.current = true

        const timer = setTimeout(() => {
          isProgrammaticScrolling.current = false
        }, 1500)

        const onScrollEnd = () => {
          isProgrammaticScrolling.current = false
          clearTimeout(timer)
          window.removeEventListener("scrollend", onScrollEnd)
        }
        window.addEventListener("scrollend", onScrollEnd)
      }
    }

    window.addEventListener("click", handleLinkClick)
    return () => window.removeEventListener("click", handleLinkClick)
  }, [])

  // Smooth lerp animation loop for translateX on desktop
  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      setTranslateX((prev) => {
        const diff = targetTranslateX.current - prev
        if (Math.abs(diff) < 0.1) {
          return targetTranslateX.current
        }
        return prev + diff * 0.1
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  useEffect(() => {
    const updateMeasurements = () => {
      if (!trackRef.current || !viewportRef.current) return
      // Only set scrollDistance on desktop screens (>= 1024px)
      if (window.innerWidth >= 1024) {
        const distance = Math.max(trackRef.current.scrollWidth - viewportRef.current.clientWidth, 0)
        setScrollDistance(distance)
      } else {
        setScrollDistance(0)
      }
    }

    updateMeasurements()
    window.addEventListener("resize", updateMeasurements)

    return () => window.removeEventListener("resize", updateMeasurements)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return
      const currentScrollY = window.scrollY
      lastScrollY.current = currentScrollY

      if (!sectionRef.current || scrollDistance === 0) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top + currentScrollY

      const progress = Math.min(Math.max((currentScrollY - sectionTop) / (scrollDistance * 1.5), 0), 1)
      targetTranslateX.current = progress * scrollDistance
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollDistance])

  const nextMobile = () => {
    setActiveMobileIndex((prev) => (prev + 1) % projects.length)
  }

  const prevMobile = () => {
    setActiveMobileIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const renderProjectCard = (project: (typeof projects)[number]) => {
    const { source, ...cardProject } = project
    const card = <ProjectCard {...cardProject} />

    if (!source) {
      return card
    }

    return (
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} project`}
        className="block h-full transition-transform duration-300 hover:-translate-y-1"
      >
        {card}
      </a>
    )
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-visible py-16 lg:py-0"
      style={{ 
        height: typeof window !== 'undefined' && window.innerWidth >= 1024 && scrollDistance 
          ? `calc(100vh + ${scrollDistance * 1.2}px)` 
          : undefined 
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="lg:sticky lg:top-0 z-10 flex min-h-screen max-w-7xl flex-col justify-center mx-auto px-4 py-12 sm:px-6 lg:px-8 md:py-20">
        <ScrollReveal variant="slide-up">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 inline-block px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore my latest work including AI automation, matrimony platforms, full-stack applications, and business dashboards.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop View: Interactive Horizontal Slider */}
        <div className="hidden lg:block">
          <ScrollReveal variant="scale">
            <div ref={viewportRef} className="overflow-hidden mb-8 py-4">
              <div
                ref={trackRef}
                className="flex gap-6 will-change-transform"
                style={{ transform: `translateX(-${translateX}px)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="h-full shrink-0 basis-[380px] xl:basis-[420px]"
                  >
                    {renderProjectCard(project)}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile & Tablet View: Responsive Cards Grid & Carousel */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {projects.map((project) => (
              <div key={project.title} className="h-full">
                {renderProjectCard(project)}
              </div>
            ))}
          </div>
        </div>

        {/* See All / Contact Button */}
        <ScrollReveal variant="slide-up" delay={200}>
          <div className="flex justify-center mt-6 md:mt-10">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 via-primary to-pink-600 text-white rounded-full font-semibold hover:opacity-95 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 shadow-xl shadow-purple-900/30"
            >
              Get In Touch For Projects
              <ArrowRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
