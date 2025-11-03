'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Building2,
  Zap,
  Factory,
  Wrench,
  Cable,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const domains = [
  {
    icon: Cable,
    title: 'Infrastructure',
    description: 'Advanced infrastructure solutions',
  },
  {
    icon: Zap,
    title: 'Energy',
    description: 'Power and renewable systems',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Manufacturing and industrial solutions',
  },
  {
    icon: Building2,
    title: 'Construction',
    description: 'Building and civil engineering',
  },
  {
    icon: Wrench,
    title: 'Mechanical',
    description: 'Mechanical systems and design',
  },
  {
    icon: Hammer,
    title: 'Project Delivery',
    description: 'End-to-end project management',
  },
];

const values = [
  'Engineering Excellence',
  'Multi-Domain Expertise',
  'Innovative Solutions',
  'Client Partnership',
];

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

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
              <div className="bg-blue-700/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2">
                <span className="text-blue-200 font-medium">
                  Multi-Domain Engineering Excellence
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Engineering Solutions Across All
              <span className="text-blue-300"> Sectors</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Verden Engineering delivers comprehensive, innovative solutions
              across infrastructure, energy, industrial, and construction
              domains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                Explore Solutions
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-blue-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Verden
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A forward-thinking engineering company delivering specialized
              solutions across multiple domains with over 15 years of industry
              expertise.
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
                  src="https://images.pexels.com/photos/3216510/pexels-photo-3216510.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Engineering solutions"
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
                Multi-Domain Engineering Expertise
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Verden Engineering specializes in delivering comprehensive
                solutions across infrastructure, energy, industrial, and
                construction sectors. Our integrated approach ensures seamless
                execution and superior results.
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
                    <CheckCircle2 className="w-5 h-5 text-blue-900 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center mt-6 text-blue-900 hover:text-blue-950 font-medium"
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
              Our Domains
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering across diverse sectors
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <domain.icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {domain.title}
                </h3>
                <p className="text-gray-600">{domain.description}</p>
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
              className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-all transform hover:scale-105 font-medium shadow-lg"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to deliver comprehensive engineering
              solutions across all domains.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-medium shadow-lg"
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
