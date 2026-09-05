// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight, Code, Palette, Smartphone, Zap } from "lucide-react"
// import { ServiceCard } from "@/components/service-card"

// const services = [
//   {
//     icon: Palette,
//     title: "UI/UX Design",
//     description: "Creating intuitive and visually appealing designs that enhance user experience across all devices.",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: Code,
//     title: "Web Development",
//     description: "Building responsive and engaging websites tailored to your business needs using modern technologies.",
//     color: "from-pink-500 to-rose-500",
//   },
//   {
//     icon: Smartphone,
//     title: "App Development",
//     description: "Crafting seamless and user-friendly mobile app interfaces for optimal digital experiences.",
//     color: "from-purple-600 to-indigo-600",
//   },
//   {
//     icon: Zap,
//     title: "Full Stack Development",
//     description: "Building complete solutions with robust backends and beautiful frontends that scale effectively.",
//     color: "from-indigo-500 to-purple-500",
//   },
// ]

// export default function Services() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const next = () => setCurrentIndex((prev) => (prev + 1) % services.length)
//   const prev = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)

//   return (
//     <section id="services" className="py-16 md:py-20 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -left-32 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">Services</h2>
//           <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
//             Transforming ideas into intuitive digital experiences with cutting-edge technologies
//           </p>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} />
//           ))}
//         </div>

//         {/* Mobile/Tablet Carousel */}
//         <div className="lg:hidden">
//           <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4">
//             {services.map((service, index) => (
//               <div key={index} className="min-w-full sm:min-w-[calc(50%-12px)]">
//                 <ServiceCard {...service} />
//               </div>
//             ))}
//           </div>

//           {/* Carousel Controls */}
//           <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
//             <button
//               onClick={prev}
//               className="p-2 md:p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
//               aria-label="Previous service"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex gap-2">
//               {services.map((_, index) => (
//                 <div
//                   key={index}
//                   className={`h-2 rounded-full transition-all ${
//                     index === currentIndex ? "bg-primary w-6 md:w-8" : "bg-muted w-2"
//                   }`}
//                 />
//               ))}
//             </div>
//             <button
//               onClick={next}
//               className="p-2 md:p-3 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
//               aria-label="Next service"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }








"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

const skills = [
  {
    name: "HTML5",
    description: "Semantic markup and modern HTML5 features for building accessible and well-structured web applications.",
    color: "from-orange-500 to-red-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    description: "Advanced styling techniques including animations, flexbox, and grid for creating beautiful responsive designs.",
    color: "from-blue-500 to-cyan-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    description: "Modern ES6+ JavaScript for building interactive and dynamic web applications with excellent performance.",
    color: "from-yellow-400 to-orange-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    description: "Building reusable component-based user interfaces with React hooks and modern state management patterns.",
    color: "from-cyan-400 to-blue-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for production-grade applications with SSR, SSG, and optimized performance.",
    color: "from-gray-800 to-gray-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript development for building scalable and maintainable enterprise applications.",
    color: "from-blue-600 to-indigo-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom user interfaces with consistent design systems.",
    color: "from-cyan-500 to-blue-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "n8n",
    description: "Workflow automation platform for connecting APIs, building custom AI agents, and streamlining complex business logic.",
    color: "from-red-500 to-amber-500",
    logo: "https://cdn.simpleicons.org/n8n/FF6D5A"
  },
  {
    name: "OpenAI APIs",
    description: "Integrating cutting-edge LLMs (GPT-4o, Embeddings) for automated content creation, intelligent chatbots, and AI workflows.",
    color: "from-emerald-500 to-teal-600",
    logo: "https://cdn.simpleicons.org/openai/00A67E"
  },
  {
    name: "PostgreSQL",
    description: "Advanced relational database management with complex queries, transactions, and data integrity.",
    color: "from-blue-700 to-indigo-700",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Prisma ORM",
    description: "Type-safe database toolkit for Node.js and TypeScript with intuitive data modeling and migrations.",
    color: "from-indigo-500 to-purple-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
  },
  {
    name: "Vercel",
    description: "Cloud platform for deploying and scaling modern web applications with edge network optimization.",
    color: "from-gray-900 to-gray-700",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
  },
  {
    name: "Git",
    description: "Version control and collaborative development with branching strategies and efficient team workflows.",
    color: "from-orange-600 to-red-600",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  }
]

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % skills.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 4) % skills.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 4 + skills.length) % skills.length)
  }

  const visibleSkills = [
    skills[currentIndex % skills.length],
    skills[(currentIndex + 1) % skills.length],
    skills[(currentIndex + 2) % skills.length],
    skills[(currentIndex + 3) % skills.length]
  ]

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* SEO Header */}
        <ScrollReveal variant="slide-up">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Technical Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expertise in modern web technologies and frameworks for building scalable, performant applications
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {visibleSkills.map((skill, index) => (
              <ScrollReveal
                key={`${skill.name}-${currentIndex}-${index}`}
                variant="scale"
                delay={index * 100}
                className="h-full"
              >
                <div
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-full animate-slideIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Logo */}
                  <div className="relative flex justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-gray-900/80 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`}
                        className="w-14 h-14 object-contain filter drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-gray-800/80 hover:bg-purple-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 backdrop-blur-sm border border-gray-700/50"
              aria-label="Previous skills"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(skills.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index * 4)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 4) === index
                      ? 'bg-purple-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to skill set ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-gray-800/80 hover:bg-purple-600 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 backdrop-blur-sm border border-gray-700/50"
              aria-label="Next skills"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              {isAutoPlaying ? '⏸ Pause' : '▶ Auto-play'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}