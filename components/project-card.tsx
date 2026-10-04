import Image from "next/image"
import { ExternalLink, CheckCircle2, Sparkles, Globe } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  featured?: boolean
  websiteUrl?: string
  highlights?: string[]
}

export function ProjectCard({ 
  title, 
  category, 
  description, 
  technologies, 
  image, 
  featured = false,
  websiteUrl,
  highlights = []
}: ProjectCardProps) {
  return (
    <div
      className={`glass rounded-2xl overflow-hidden group border transition-all duration-500 h-full flex flex-col hover:shadow-xl hover:shadow-purple-500/10 ${
        featured
          ? "border-primary/40 bg-gradient-to-br from-purple-50 via-fuchsia-50/40 to-white shadow-lg shadow-purple-500/10"
          : "border-slate-200/90 bg-white hover:border-primary/40 shadow-sm"
      }`}
    >
      {/* Image Container with overlay & badge */}
      <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden bg-slate-900">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-purple-200 text-purple-900 text-xs font-semibold rounded-full shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            {category}
          </span>
          {featured && (
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1">
              ★ Featured
            </span>
          )}
        </div>

        {/* Website URL Quick Pill if present */}
        {websiteUrl && (
          <div className="absolute bottom-3 right-3 z-10">
            <span 
              className="px-3 py-1.5 bg-slate-900/90 hover:bg-primary text-white text-xs font-medium rounded-lg backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-1.5 shadow-md group/link"
            >
              <Globe className="w-3.5 h-3.5 text-purple-300 group-hover/link:text-white transition-colors" />
              {websiteUrl.replace(/^https?:\/\//, '')}
              <ExternalLink className="w-3 h-3 text-slate-300 group-hover/link:text-white" />
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Key Features Highlights Bullet List if available */}
          {highlights.length > 0 && (
            <div className="mb-4 pt-3 border-t border-slate-200">
              <p className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-2.5">
                Key Features & Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="pt-3 border-t border-slate-200">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 bg-purple-50 border border-purple-200 text-purple-800 text-xs font-semibold rounded-md hover:bg-purple-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
