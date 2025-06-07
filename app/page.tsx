"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus, RotateCcw, Sparkles } from "lucide-react"
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  // Enhanced confetti when counter reaches 10
  useEffect(() => {
    if (count === 10) {
      // Double confetti burst for extra celebration
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b']
      })
      setTimeout(() => {
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e']
        })
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#00b894', '#00cec9', '#55a3ff', '#fd79a8']
        })
      }, 250)
    }
  }, [count])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center min-h-[50vh] bg-indigo-900 text-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          />
        </div>

        <div className="text-center px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight bg-gradient-to-r from-white via-blue-100 to-pink-100 bg-clip-text text-transparent"
          >
            Counting Joyfully, One Click at a Time
            <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-blue-200"
            >
              The fluffiest counter for your happiest moments
            </motion.span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mt-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex items-center justify-center mt-6 text-blue-200"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Beautifully Simple</span>
            <Sparkles className="w-4 h-4 ml-2" />
          </motion.div>
        </div>
      </motion.div>

      {/* Counter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center justify-center min-h-[50vh] py-16"
      >
        <div className="text-center space-y-10 p-8">
          {/* Counter Display */}
          <div className="space-y-4">
            <motion.div
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 500,
                damping: 25
              }}
              className="relative"
            >
              <motion.h2 
                className="text-8xl md:text-9xl font-light text-transparent bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 bg-clip-text tabular-nums"
                animate={count === 10 ? { 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {count}
              </motion.h2>
              {count === 10 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-4 -right-4"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 rounded-full shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </motion.div>
              )}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-slate-500 uppercase tracking-wider font-medium"
            >
              Counter
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base text-slate-600 mt-2 max-w-md mx-auto leading-relaxed"
            >
              Simple, beautiful, and exactly what you need. 
              <span className="text-indigo-600 font-medium">Watch the magic at 10!</span>
            </motion.p>
          </div>

          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={decrement} 
                variant="outline" 
                size="lg" 
                className="w-14 h-14 rounded-full p-0 border-2 border-red-200 hover:border-red-300 hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: -90 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Minus className="h-6 w-6 text-red-500" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={reset} 
                variant="ghost" 
                size="sm" 
                className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-all duration-200 px-4 py-2 rounded-full font-medium"
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                </motion.div>
                Reset
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={increment} 
                variant="outline" 
                size="lg" 
                className="w-14 h-14 rounded-full p-0 border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Plus className="h-6 w-6 text-green-500" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="w-64 mx-auto"
          >
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((count / 10) * 100, 100)}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              />
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {count < 10 ? `${10 - count} more to celebrate!` : "🎉 Celebration unlocked!"}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
