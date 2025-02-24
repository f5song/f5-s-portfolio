"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  imagePosition: "left" | "right"
  technologies: string[]
  slug: string
}

export function ProjectCard({ title, description, image, imagePosition, technologies, slug }: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 bg-purple-900/20 p-8 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {imagePosition === "left" && (
        <div className="md:w-1/2 flex justify-center">
          <div style={{ width: "auto", height: "300px", overflow: "hidden" }}>
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              style={{
                width: "auto", // กว้างตามต้นฉบับ
                height: "100%", // ความสูงเท่ากันทุกภาพ
                objectFit: "contain", // ตัดส่วนเกินออก แต่ไม่ยืดภาพ
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      )}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-purple-800 text-purple-200 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`}>
          <motion.button
            className="mt-4 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.button>
        </Link>
      </div>
      {imagePosition === "right" && (
        <div className="md:w-1/2 flex justify-center">
          <div style={{ width: "auto", height: "300px", overflow: "hidden" }}>
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              style={{
                width: "auto",
                height: "100%",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}
