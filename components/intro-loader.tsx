"use client"

import React, { useEffect, useState } from "react"

const LETTERS = ["M", "I", "T", "H", "U", "N", "K", "U", "M", "A", "R"]

export default function IntroLoader() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden"

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < LETTERS.length) {
          return prev + 1
        }
        clearInterval(interval)
        return prev
      })
    }, 150)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (visibleCount === LETTERS.length) {
      // Hold completed name briefly before fading out loader
      const finishTimer = setTimeout(() => {
        setIsFinished(true)
        document.body.style.overflow = "unset"
      }, 700)

      const hideTimer = setTimeout(() => {
        setIsHidden(true)
      }, 1400) // matches duration-700 fade transition

      return () => {
        clearTimeout(finishTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [visibleCount])

  if (isHidden) return null

  const progressPercentage = Math.round((visibleCount / LETTERS.length) * 100)

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        isFinished ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Website Loading Animation"
    >
      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-xl px-4 text-center">
        {/* Web Developer Tag Header */}
        <div className="mb-6 px-3.5 py-1 bg-purple-50 border border-purple-200 rounded-full text-xs font-mono font-semibold text-purple-700 tracking-wider uppercase animate-fade-in shadow-sm">
          &lt;System.Loading /&gt;
        </div>

        {/* Animated Name - Strictly single line on all screen sizes */}
        <div className="flex items-center justify-center flex-nowrap whitespace-nowrap gap-[1px] xs:gap-0.5 sm:gap-1 text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight sm:tracking-wider my-4 min-h-[3.5rem] sm:min-h-[5rem] w-full select-none">
          {LETTERS.slice(0, visibleCount).map((char, index) => {
            if (char === "K") {
              return (
                <span
                  key={index}
                  className="inline-flex items-center text-primary font-mono px-[1px] sm:px-0.5 font-black transform scale-105 transition-all duration-300 animate-scale-in"
                >
                  <span className="text-purple-400 font-light">&lt;</span>
                  <span className="text-primary font-mono drop-shadow-[0_0_10px_rgba(147,51,234,0.4)]">K</span>
                  <span className="text-purple-400 font-light">&gt;</span>
                </span>
              )
            }
            return (
              <span
                key={index}
                className="inline-block text-slate-900 transition-all duration-200 animate-fade-in"
              >
                {char}
              </span>
            )
          })}

          {/* Typing Cursor */}
          {!isFinished && (
            <span className="inline-block w-0.5 sm:w-1 h-5 xs:h-6 sm:h-9 md:h-12 bg-primary ml-0.5 sm:ml-1 animate-pulse rounded-full align-middle" />
          )}
        </div>

        {/* Loading Progress Line */}
        <div className="w-48 sm:w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-6 mb-3 shadow-inner border border-slate-200/60">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-primary to-indigo-600 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Monospace Loading Status */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-500 tracking-widest uppercase">
          <span>Loading</span>
          <span className="font-bold text-primary">{progressPercentage}%</span>
        </div>
      </div>
    </div>
  )
}
