"use client"

import type React from "react"

import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: React.ElementType
}

interface SkillCategoryProps {
  category: {
    name: string
    skills: Skill[]
  }
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <motion.div
      className="bg-purple-800/30 p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-purple-300">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <motion.span
            key={index}
            className="flex items-center bg-purple-700/50 px-3 py-1 rounded-full text-sm text-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <skill.icon className="mr-2 text-purple-400" />
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

