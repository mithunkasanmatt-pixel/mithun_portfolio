// "use client"

// import Image from "next/image"
// import { SkillBadge } from "@/components/skill-badge"
// import { Sparkles } from "lucide-react"

// const skills = [
//   { name: "React", category: "Frontend" },
//   { name: "Next.js", category: "Frontend" },
//   { name: "TypeScript", category: "Frontend" },
//   { name: "Tailwind CSS", category: "Styling" },
//   { name: "PostgreSQL", category: "Database" },
//   { name: "Prisma", category: "ORM" },
//   { name: "Git", category: "Tools" },
//   { name: "Vercel", category: "Deployment" },
// ]

// export default function About() {
//   return (
//     <section id="about" className="py-16 md:py-20 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/2 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-4 text-white">About me</h2>
//         <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">
//           Get to know me better and discover my journey as a web developer
//         </p>

//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           {/* Avatar */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-full blur-2xl opacity-30" />
//               <div className="relative w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
//                 <Image
//                   src="/image1.png"
//                   alt="Mithunkumar.C - Web Developer Profile"
//                   width={288}
//                   height={288}
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* About Content */}
//           <div className="space-y-4 md:space-y-6">
//             <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
//               Welcome to my portfolio! I'm Mithunkumar.C, a passionate full-stack web developer with 2 years of hands-on
//               experience in crafting beautiful and functional digital solutions. I specialize in creating intuitive
//               interfaces and robust backend systems using modern technologies.
//             </p>

//             <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
//               My expertise spans across frontend frameworks like React and Next.js, with strong proficiency in
//               TypeScript and Tailwind CSS. On the backend, I work with PostgreSQL, Prisma ORM, and Fast API to build
//               scalable applications. I'm passionate about clean code, responsive design, and delivering exceptional user
//               experiences.
//             </p>

//             <div className="glass rounded-xl p-4 md:p-6">
//               <div className="flex gap-3">
//                 <Sparkles className="text-primary flex-shrink-0" size={20} />
//                 <p className="text-sm md:text-base text-foreground">
//                   I'm committed to continuous learning and staying updated with the latest web development trends and
//                   best practices.
//                 </p>
//               </div>
//             </div>

//             {/* Skills */}
//             <div>
//               <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Skills</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
//                 {skills.map((skill) => (
//                   <SkillBadge key={skill.name} name={skill.name} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }











"use client"

import Image from "next/image"
import { Sparkles, Code2, Rocket, Award } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "n8n", category: "Automation" },
  { name: "OpenAI APIs", category: "AI & Automation" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Git", category: "Tools" },
  { name: "Vercel", category: "Deployment" },
]

const SkillBadge = ({ name, delay }: { name: string; delay: number }) => (
  <div 
    className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-xs md:text-sm font-medium text-white hover:border-primary/40 hover:scale-105 transition-all duration-300 text-center animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    {name}
  </div>
)

export default function About() {
  return (
    <section 
      id="about" 
      className="py-12 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <ScrollReveal variant="slide-up">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white animate-fade-in" itemProp="name">
              About Mithunkumar.C
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Full-Stack Web Developer | 2+ Years Experience | React & Next.js Specialist
            </p>
          </div>
        </ScrollReveal>

        {/* Newspaper-Style Layout */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Featured Article Block */}
            <ScrollReveal variant="slide-right" delay={100}>
              <article className="glass rounded-2xl p-6 md:p-8 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="text-primary animate-bounce-subtle" size={20} />
                  <h3 className="text-xl md:text-2xl font-bold text-white">The Developer's Story</h3>
                </div>
                
                <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p itemProp="description" className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                    <strong className="text-white">Welcome to my digital portfolio.</strong> I'm <span itemProp="name">Mithunkumar.C</span>, 
                    a dedicated <span itemProp="jobTitle">full-stack web developer</span> with over <strong>2 years of professional experience</strong> in 
                    building modern, scalable web applications. My journey in software development has been driven by a passion 
                    for creating elegant solutions to complex problems.
                  </p>

                  <p className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                    Specializing in the <strong>React ecosystem</strong>, I craft responsive, high-performance user interfaces 
                    using <strong>Next.js</strong> for server-side rendering and optimal SEO. My frontend expertise extends to 
                    <strong> TypeScript</strong> for type-safe code and <strong>Tailwind CSS</strong> for modern, maintainable styling. 
                    I believe in writing clean, semantic code that prioritizes both user experience and developer experience.
                  </p>

                  <p className="animate-fade-in" style={{ animationDelay: '800ms' }}>
                    On the backend, I architect robust systems using <strong>PostgreSQL databases</strong> managed through 
                    <strong> Prisma ORM</strong>, and develop efficient APIs with <strong>Fast API</strong>. My development 
                    workflow leverages <strong>Git</strong> for version control and <strong>Vercel</strong> for seamless 
                    deployment pipelines, ensuring rapid iteration and reliable delivery.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            {/* Philosophy Block */}
            <ScrollReveal variant="slide-right" delay={200}>
              <div className="glass rounded-2xl p-6 md:p-8 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <Sparkles className="text-secondary flex-shrink-0 mt-1 animate-pulse-glow" size={24} />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2 text-white">Development Philosophy</h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      I'm committed to <strong>continuous learning</strong> and staying at the forefront of web development 
                      innovations. My approach emphasizes <strong>clean architecture</strong>, <strong>responsive design principles</strong>, 
                      and delivering exceptional user experiences that exceed expectations. Every project is an opportunity 
                      to push boundaries and implement best practices.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Skills Grid */}
            <ScrollReveal variant="slide-right" delay={300}>
              <div className="glass rounded-2xl p-6 md:p-8 border border-primary/10 hover:border-primary/20 transition-all duration-500">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="text-primary animate-bounce-subtle" size={20} />
                  <h3 className="text-xl md:text-2xl font-bold text-white">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                  {skills.map((skill, index) => (
                    <SkillBadge key={skill.name} name={skill.name} delay={index * 100} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Newspaper-Style Image */}
          <div className="lg:col-span-4">
            <ScrollReveal variant="slide-left" delay={200} className="lg:sticky lg:top-24">
              {/* Newspaper Frame */}
              <div className="relative bg-gradient-to-br from-zinc-100 to-zinc-200 p-4 md:p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:rotate-1">
                {/* Newspaper Header */}
                <div className="border-b-4 border-zinc-800 pb-3 mb-4 animate-fade-in">
                  <div className="text-center">
                    <p className="text-xs font-serif text-zinc-600 mb-1 animate-slide-in-down">THE DEVELOPER TIMES</p>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 tracking-tight animate-scale-in">
                      PROFILE
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1 animate-slide-in-up" style={{ animationDelay: '200ms' }}>Vol. 2024 • Feature Story</p>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative mb-4 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-lg -rotate-1 animate-pulse-slow" />
                  <div className="relative bg-white p-2 rounded-lg border-2 border-zinc-800 shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105">
                    <div className="relative w-full aspect-square overflow-hidden">
                      <Image
                        src="/image.png"
                        alt="Mithunkumar.C - Professional Full-Stack Web Developer specializing in React, Next.js, and TypeScript"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                        itemProp="image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="border-t-2 border-zinc-800 pt-3 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <p className="text-xs md:text-sm font-serif text-zinc-800 text-center italic">
                    "Crafting digital experiences with precision and passion"
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="mt-4 p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="text-yellow-400 animate-bounce-subtle" size={16} />
                    <h5 className="text-sm font-bold text-white">Quick Facts</h5>
                  </div>
                  <ul className="text-xs text-zinc-300 space-y-1.5">
                    <li className="flex items-start gap-2 hover:text-white transition-colors duration-200 animate-slide-in-left" style={{ animationDelay: '700ms' }}>
                      <span className="text-primary mt-0.5">▸</span>
                      <span><strong>Experience:</strong> 2+ years in web development</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-white transition-colors duration-200 animate-slide-in-left" style={{ animationDelay: '800ms' }}>
                      <span className="text-primary mt-0.5">▸</span>
                      <span><strong>Specialization:</strong> Full-stack development</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-white transition-colors duration-200 animate-slide-in-left" style={{ animationDelay: '900ms' }}>
                      <span className="text-primary mt-0.5">▸</span>
                      <span><strong>Focus:</strong> Modern web technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mithunkumar.C",
            "jobTitle": "Full-Stack Web Developer",
            "description": "Experienced full-stack web developer specializing in React, Next.js, TypeScript, and modern web technologies with 2+ years of professional experience",
            "knowsAbout": ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Git", "Vercel", "Fast API"],
            "image": "/image.png"
          })
        }}
      />

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slide-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slide-in-right {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slide-in-down {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slide-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 1; 
            filter: drop-shadow(0 0 2px currentColor);
          }
          50% { 
            opacity: 0.8; 
            filter: drop-shadow(0 0 8px currentColor);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-40px) translateX(-10px); 
            opacity: 0.3;
          }
          75% { 
            transform: translateY(-20px) translateX(5px); 
            opacity: 0.4;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-up,
          .animate-slide-in-left,
          .animate-slide-in-right,
          .animate-slide-in-down,
          .animate-slide-in-up,
          .animate-scale-in {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .animate-pulse-slow,
          .animate-pulse-glow,
          .animate-bounce-subtle,
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}