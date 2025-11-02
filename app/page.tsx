'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Sun,
  Building2,
  Flame,
  ClipboardCheck,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Leaf,
} from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Green Energy Solutions',
    description: 'Solar, hybrid, and renewable energy systems',
  },
  {
    icon: Building2,
    title: 'Construction Chemicals',
    description: 'Waterproofing, sealants, coatings, and admixtures',
  },
  {
    icon: Flame,
    title: 'Fireproofing',
    description: 'Fire-retardant paints, insulation, and safety systems',
  },
  {
    icon: ClipboardCheck,
    title: 'Engineering Consultancy',
    description: 'Feasibility studies and sustainability audits',
  },
  {
    icon: Wrench,
    title: 'Turnkey Solutions',
    description: 'Design to installation and maintenance',
  },
];

const values = [
  'Sustainable Innovation',
  'Quality Excellence',
  'Client-Focused Solutions',
  'Environmental Responsibility',
];

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-2">
                <span className="text-green-400 font-medium">
                  Engineering a Sustainable Future
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-green-400">Verden Engineering</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Innovative engineering and sustainability solutions in green
              energy, construction chemicals, fireproof materials, and
              engineering consultancy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 md:h-24 text-white"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Verden
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Derived from Scandinavian roots, <strong>Verden</strong> means{' '}
              <em>&ldquo;The World&rdquo;</em> — representing our commitment to
              sustainability and global innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Solar panels and sustainable energy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation Meets Sustainability
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Verden Engineering is an innovative engineering and
                sustainability company offering eco-friendly, high-performance
                solutions. We specialize in green energy, construction
                chemicals, fireproof materials, and engineering consultancy.
              </p>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center mt-6 text-green-600 hover:text-green-700 font-medium"
              >
                Learn more about us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions designed for a sustainable
              future
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-medium shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to create sustainable engineering
              solutions for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-medium shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
