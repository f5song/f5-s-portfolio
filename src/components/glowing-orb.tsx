"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingOrbProps {
  className?: string
  color?: "purple" | "blue" | "indigo"
}

const colorVariants = {
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
}

export function GlowingOrb({ className, color = "purple" }: GlowingOrbProps) {
  return (
    <motion.div
      className={cn("absolute w-64 h-64 rounded-full opacity-20 blur-3xl", colorVariants[color], className)}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

