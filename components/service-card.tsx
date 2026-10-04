import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export function ServiceCard({ icon: Icon, title, description, color }: ServiceCardProps) {
  return (
    <div className="glass rounded-2xl p-6 md:p-8 group hover:border-primary/50 transition-all duration-300 h-full flex flex-col border border-purple-100 shadow-sm">
      <div
        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}
      >
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 flex-grow leading-relaxed">{description}</p>
    </div>
  )
}
