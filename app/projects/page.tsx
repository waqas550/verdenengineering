'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag } from 'lucide-react';

const projects = [
  {
    title: 'GreenTech Solar Farm',
    category: 'Green Energy',
    year: '2024',
    location: 'California, USA',
    description:
      'Large-scale solar energy installation providing 50MW of clean power to residential communities.',
    image:
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Metropolitan Tower Waterproofing',
    category: 'Construction Chemicals',
    year: '2023',
    location: 'New York, USA',
    description:
      'Comprehensive waterproofing solution for a 45-story commercial building using advanced polymer technology.',
    image:
      'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Industrial Complex Fire Safety',
    category: 'Fireproofing',
    year: '2024',
    location: 'Texas, USA',
    description:
      'Complete fire protection system including intumescent coatings and suppression systems for manufacturing facility.',
    image:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Smart Campus Energy Management',
    category: 'Turnkey Solution',
    year: '2023',
    location: 'Boston, USA',
    description:
      'Integrated energy management system with solar, storage, and automation for university campus.',
    image:
      'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Coastal Resort Sustainable Design',
    category: 'Engineering Consultancy',
    year: '2024',
    location: 'Florida, USA',
    description:
      'Sustainability consulting and feasibility study for eco-friendly resort development.',
    image:
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Bridge Infrastructure Protection',
    category: 'Construction Chemicals',
    year: '2023',
    location: 'Oregon, USA',
    description:
      'Structural repair and protective coating application for highway bridge restoration project.',
    image:
      'https://images.pexels.com/photos/327502/pexels-photo-327502.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Hybrid Energy Microgrid',
    category: 'Green Energy',
    year: '2024',
    location: 'Arizona, USA',
    description:
      'Off-grid hybrid solar and wind energy system with battery storage for remote mining operation.',
    image:
      'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Hospital Fire & Safety Upgrade',
    category: 'Fireproofing',
    year: '2023',
    location: 'Illinois, USA',
    description:
      'Comprehensive fire safety system upgrade including detection, suppression, and emergency systems.',
    image:
      'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Sustainable Office Complex',
    category: 'Turnkey Solution',
    year: '2024',
    location: 'Washington, USA',
    description:
      'Full-service design and construction of LEED-certified office building with green technologies.',
    image:
      'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const categories = [
  'All',
  'Green Energy',
  'Construction Chemicals',
  'Fireproofing',
  'Engineering Consultancy',
  'Turnkey Solution',
];

export default function ProjectsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
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
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Showcasing excellence in sustainable engineering across diverse
              industries
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
                      ? 'bg-green-600 text-white shadow-lg'
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
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-green-600" />
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
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  150+
                </div>
                <div className="text-gray-600 font-medium">
                  Completed Projects
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  50MW
                </div>
                <div className="text-gray-600 font-medium">
                  Green Energy Installed
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
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

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life with our
              proven expertise and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
