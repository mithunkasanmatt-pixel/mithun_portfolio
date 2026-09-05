// "use client"

// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
// import Image from "next/image"

// export default function Hero() {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6 md:space-y-8 order-2 md:order-1">
//             <div className="space-y-4">
//               <p className="text-primary font-semibold tracking-widest uppercase text-sm">Welcome to my world ✨</p>
//               <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//                 Hi, I'm <span className="gradient-text">Mithunkumar.C</span>
//               </h1>
//               <h2 className="text-2xl md:text-4xl font-bold text-white">
//                 <span className="text-primary">Web</span> Developer
//               </h2>
//               <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
//                 Passionate full-stack developer. I create intuitive and visually appealing digital experiences.
//                 Transform ideas into seamless designs that meet users' expectations.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-3 md:gap-4">
//               <a
//                 href="#projects"
//                 className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-background rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
//               >
//                 My Projects
//               </a>
//               <a
//                 href="/resume.pdf"
//                 className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-primary text-white rounded-full font-semibold hover:bg-primary/10 transition-colors text-sm md:text-base"
//               >
//                 Download CV
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
//                 aria-label="GitHub profile"
//               >
//                 <Github size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
//                 aria-label="LinkedIn profile"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="mailto:mithunkasan@gmail.com"
//                 className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
//                 aria-label="Send email"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Right Illustration - CHANGE: Remove background box, show on mobile, increase size */}
//           <div className="flex justify-center items-center relative order-1 md:order-2">
//             <div
//               className="
//       relative
//       w-64 h-64
//       sm:w-72 sm:h-72
//       md:w-80 md:h-80
//       lg:w-106 lg:h-106
//       xl:w-[30rem] xl:h-[30rem]
//     "
//             >
//               <Image
//                 src="/image1.png"
//                 alt="Developer 3D character - Mithunkumar.C Web Developer"
//                 fill
//                 priority
//                 className="object-contain"
//                 sizes="
//         (max-width: 640px) 256px,
//         (max-width: 768px) 288px,
//         (max-width: 1024px) 320px,
//         (max-width: 1280px) 384px,
//         448px
//       "
//               />
//             </div>
//           </div>

//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <ArrowDown className="text-primary" size={24} />
//         </div>
//       </div>
//     </section>
//   )
// }












"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* SEO Meta Content - Add this to your page.tsx or layout.tsx */}
      {/* 
      <head>
        <title>Mithunkumar.C - Full Stack Web Developer | React & Next.js Expert</title>
        <meta name="description" content="Professional full-stack web developer specializing in React, Next.js, and modern web technologies. Creating intuitive, visually appealing digital experiences that transform ideas into seamless designs." />
        <meta name="keywords" content="web developer, full-stack developer, React developer, Next.js, frontend developer, Mithunkumar, portfolio" />
        <meta property="og:title" content="Mithunkumar.C - Full Stack Web Developer" />
        <meta property="og:description" content="Passionate full-stack developer creating intuitive digital experiences" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </head>
      */}

      <section 
        id="home" 
        className="sticky top-0 z-10 min-h-screen flex items-center justify-center pt-16 overflow-hidden"
        aria-label="Hero section introducing Mithunkumar.C, web developer"
      >
        {/* Enhanced Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div 
            className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '2s' }}
          />
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content with Staggered Animations */}
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                {/* Welcome Text - Fade in from left */}
                <p 
                  className={`text-primary font-semibold tracking-widest uppercase text-sm transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  Welcome to my world ✨
                </p>

                {/* Main Heading - Fade in with scale */}
                <h1 
                  className={`text-4xl md:text-6xl font-bold text-white leading-tight transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  Hi, I'm <span className="gradient-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">Mithunkumar.C</span>
                </h1>

                {/* Role Title - Slide in from bottom */}
                <h2 
                  className={`text-2xl md:text-4xl font-bold text-white transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <span className="text-primary">Web</span> Developer
                </h2>

                {/* Description - Fade in */}
                <p 
                  className={`text-base md:text-lg text-muted-foreground max-w-md leading-relaxed transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  Passionate full-stack developer specializing in creating intuitive and visually appealing digital experiences.
                  I transform innovative ideas into seamless, user-centric designs that exceed expectations.
                </p>
              </div>

              {/* CTA Buttons - Slide up */}
              <div 
                className={`flex flex-wrap gap-3 md:gap-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <a
                  href="#projects"
                  className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-background rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl"
                  aria-label="View my projects"
                >
                  My Projects
                </a>
                <a
                  href="/Mithunkumar Resume 2026.pdf"
                  className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-primary text-white rounded-full font-semibold hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-sm md:text-base"
                  aria-label="Download my resume"
                  download="Mithunkumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>

              {/* Social Links - Fade in with stagger */}
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <a
                  href="https://github.com/Mithunkasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Visit my GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mithunkasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Connect with me on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:mithunkasan@gmail.com"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Send me an email at mithunkasan@gmail.com"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Illustration - Float animation */}
            <div 
              className={`flex justify-center items-center relative order-1 md:order-2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] animate-float"
              >
                <Image
                  src="/image1.png"
                  alt="3D illustration of Mithunkumar.C, a professional web developer working on modern web applications"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 480px"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Enhanced */}
          <button
            onClick={() => {
              const nextSection = document.getElementById('about')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 cursor-pointer hover:scale-110 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
            aria-label="Scroll to next section"
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
              <ArrowDown className="text-primary" size={24} />
            </div>
          </button>
        </div>

        {/* Custom Animations Styles */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-float,
            .animate-bounce,
            .animate-pulse,
            .animate-gradient {
              animation: none;
            }
          }
        `}</style>
      </section>
    </>
  )
}
