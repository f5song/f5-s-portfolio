"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
} from "react-icons/fa";
import router from "next/router";

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
}

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      {/* 🔙 ปุ่ม Back */}
      <button
        onClick={() => router.back()}
        className="flex items-center mb-6 text-purple-400 hover:text-purple-200 transition duration-300"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 max-w-5xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {project.title}
        </h1>

        {project.images && project.images.length > 0 && (
          <div className="mb-12 relative flex justify-center">
            <div className="h-[800px] w-auto overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="h-full w-auto object-contain rounded-lg transition-opacity duration-500"
              />
            </div>

            {project.images.length > 1 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                <button
                  onClick={prevImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
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

            <div className="flex space-x-4">
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

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">
                Challenges and Learnings
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">
                    Challenges Faced
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">
                    Key Learnings
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {project.learnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </div>
              </div>
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
