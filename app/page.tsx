"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus, RotateCcw } from "lucide-react"

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8 p-8">
        {/* Counter Display */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 tabular-nums">{count}</h1>
          <p className="text-sm text-gray-500 uppercase tracking-wider">Counter</p>
          <p className="text-base text-gray-700 mt-2">This website provides a simple interactive counter. Use the buttons below to increment, decrement, or reset the value. Great for quick counts or demonstrations!</p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button onClick={decrement} variant="outline" size="lg" className="w-12 h-12 rounded-full p-0">
            <Minus className="h-5 w-5" />
          </Button>

          <Button onClick={reset} variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>

          <Button onClick={increment} variant="outline" size="lg" className="w-12 h-12 rounded-full p-0">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        {/* Subtle branding */}
        <div className="pt-8">
          <p className="text-xs text-gray-400">Simple Counter</p>
        </div>
      </div>
    </div>
  )
}
