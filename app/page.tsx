import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div className="relative z-20 bg-background">
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
