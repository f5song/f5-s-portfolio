"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
} from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
  challenges: string[];
  learnings: string[];
  futureImprovements: string[];
  videoUrl?: string;
}

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${slug}`);
        if (!res.ok) throw new Error("Project not found");
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  if (!project)
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Project not found
      </div>
    );

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-6">
      {/* 🔙 ปุ่ม Back */}
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center px-5 py-3 rounded-lg bg-opacity-40 bg-gray-800 backdrop-blur-lg 
                     hover:bg-opacity-60 transition duration-300 ease-in-out shadow-md text-purple-300 
                     hover:text-white border border-purple-500"
        >
          <FaArrowLeft className="mr-2 text-lg" /> Back to Projects
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 max-w-5xl mt-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {project.title}
        </h1>

        {/* ✅ ปรับ Layout ของรูปและวิดีโอ */}
        <div className="mb-12 flex md:flex-row flex-col items-center gap-6">
          {/* 🔹 ภาพโปรเจค */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="h-[600px] w-auto overflow-hidden rounded-lg shadow-lg relative">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="h-full w-auto object-contain rounded-lg transition-opacity duration-500"
              />
            </div>

            {/* 🔄 ปุ่มเลื่อนรูป */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>

          {/* 🎥 วิดีโอ Demo YouTube (ถ้ามี) */}
          {project.videoUrl && (
            <div className="md:w-1/2 flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">
                Demo
              </h2>
              <iframe
                width="100%"
                height="350"
                src={project.videoUrl.replace("watch?v=", "embed/")}
                title="Project Demo Video"
                allowFullScreen
                className="rounded-lg shadow-lg border border-gray-700"
              ></iframe>
            </div>
          )}
        </div>

        {/* ✅ Layout ใหม่: Project Overview ด้านซ้าย / Challenges and Learnings ด้านขวา */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* 🔹 ด้านซ้าย: Project Overview และ GitHub / Live Link */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-800 text-purple-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 🔗 GitHub และ Live Demo */}
            <div className="mt-8 flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* 🔹 ด้านขวา: Challenges and Learnings */}
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">
                Challenges and Learnings
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">
                Future Improvements
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.futureImprovements.map((improvement, index) => (
                  <li key={index}>{improvement}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
