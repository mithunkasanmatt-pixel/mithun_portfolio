"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Contact</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Get in touch and let's create something amazing together
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <ScrollReveal variant="slide-right" delay={150}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Let's Create Something Amazing Together</h3>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a
                  href="mailto:mithunkasan@gmail.com"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">mithunkasan@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916379721546"
                  className="flex items-center gap-4 p-4 glass rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">+91 6379721546</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Contact Form */}
          <ScrollReveal variant="slide-left" delay={250}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-primary/30 rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-primary/30 rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border-2 border-primary/30 rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary/20"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center font-semibold animate-pulse">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center font-semibold">Failed to send message. Please try again.</p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
