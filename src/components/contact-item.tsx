"use client"

import type React from "react"

import { motion } from "framer-motion"

interface ContactItemProps {
  icon: React.ElementType
  name: string
  username: string
  link: string
  color: string
}

export function ContactItem({ icon: Icon, name, username, link, color }: ContactItemProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} text-white p-4 rounded-full text-xl flex items-center space-x-4 w-full max-w-md hover:opacity-80 transition duration-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="text-2xl" />
      <span className="font-semibold">{name}</span>
      <span className="ml-auto">{username}</span>
    </motion.a>
  )
}

