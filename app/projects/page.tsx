'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const projects = [
  {
    title: 'Highway Bridge Infrastructure',
    category: 'Infrastructure',
    year: '2024',
    location: 'California, USA',
    description:
      'Large-scale bridge engineering and construction spanning 2.5km across valley with advanced structural design.',
    image:
      'https://images.pexels.com/photos/327502/pexels-photo-327502.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Renewable Energy Farm',
    category: 'Energy',
    year: '2024',
    location: 'Arizona, USA',
    description:
      '50MW solar and wind hybrid energy generation facility with battery storage integration.',
    image:
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Manufacturing Plant Automation',
    category: 'Industrial',
    year: '2023',
    location: 'Ohio, USA',
    description:
      'Complete industrial automation system with IoT integration and real-time monitoring.',
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Commercial Complex Development',
    category: 'Construction',
    year: '2023',
    location: 'New York, USA',
    description:
      '45-story commercial building with advanced structural engineering and sustainable systems.',
    image:
      'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Precision Hydraulic Systems',
    category: 'Mechanical',
    year: '2024',
    location: 'Texas, USA',
    description:
      'Custom hydraulic system design and installation for heavy industrial equipment.',
    image:
      'https://images.pexels.com/photos/3862129/pexels-photo-3862129.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Airport Terminal Project',
    category: 'Project Delivery',
    year: '2023',
    location: 'Florida, USA',
    description:
      'Integrated project delivery for major airport terminal expansion and modernization.',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Water Treatment Facility',
    category: 'Infrastructure',
    year: '2024',
    location: 'Illinois, USA',
    description:
      'Advanced water purification and treatment system with environmental compliance.',
    image:
      'https://images.pexels.com/photos/3218546/pexels-photo-3218546.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Smart Grid Distribution Network',
    category: 'Energy',
    year: '2023',
    location: 'Washington, USA',
    description:
      'Intelligent power distribution network with AI optimization and real-time control.',
    image:
      'https://images.pexels.com/photos/208612/pexels-photo-208612.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Logistics Hub Construction',
    category: 'Construction',
    year: '2024',
    location: 'Nevada, USA',
    description:
      'Large-scale logistics facility with advanced construction techniques and automation.',
    image:
      'https://images.pexels.com/photos/3862131/pexels-photo-3862131.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const categories = [
  'All',
  'Infrastructure',
  'Energy',
  'Industrial',
  'Construction',
  'Mechanical',
  'Project Delivery',
];

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcasing engineering excellence across all domains
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    index === 0
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-blue-900" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-blue-900" />
                      Completed {project.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Project Statistics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">
                  Completed Projects
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  1.2B
                </div>
                <div className="text-gray-600 font-medium">
                  Total Project Value
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  15+
                </div>
                <div className="text-gray-600 font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
