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
      className={`glass rounded-2xl overflow-hidden group border transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/20 ${
        featured
          ? "border-primary/50 bg-gradient-to-br from-primary/15 via-purple-900/20 to-background shadow-lg shadow-primary/10"
          : "border-gray-800 bg-gray-900/40 hover:border-primary/40"
      }`}
    >
      {/* Image Container with overlay & badge */}
      <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden bg-gray-950">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-300" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-primary text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            {category}
          </span>
          {featured && (
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
              ★ Featured
            </span>
          )}
        </div>

        {/* Website URL Quick Pill if present */}
        {websiteUrl && (
          <div className="absolute bottom-3 right-3 z-10">
            <span 
              className="px-3 py-1.5 bg-black/80 hover:bg-primary text-white text-xs font-medium rounded-lg backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-1.5 shadow-lg group/link"
            >
              <Globe className="w-3.5 h-3.5 text-primary group-hover/link:text-white transition-colors" />
              {websiteUrl.replace(/^https?:\/\//, '')}
              <ExternalLink className="w-3 h-3 text-gray-300 group-hover/link:text-white" />
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Key Features Highlights Bullet List if available */}
          {highlights.length > 0 && (
            <div className="mb-4 pt-3 border-t border-white/10">
              <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2.5">
                Key Features & Capabilities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="pt-3 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-medium rounded-md hover:bg-purple-900/60 transition-colors"
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
