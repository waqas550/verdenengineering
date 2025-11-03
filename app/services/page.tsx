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
} from 'lucide-react';

const services = [
  {
    icon: Cable,
    title: 'Infrastructure Engineering',
    description: 'Advanced infrastructure solutions including bridges, roads, and utilities.',
    features: [
      'Bridge & tunnel design',
      'Road & highway systems',
      'Water management systems',
      'Infrastructure maintenance',
      'Structural analysis',
      'Asset management solutions',
    ],
    image:
      'https://images.pexels.com/photos/3216510/pexels-photo-3216510.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Zap,
    title: 'Energy Solutions',
    description: 'Comprehensive power and renewable energy systems.',
    features: [
      'Power generation systems',
      'Grid infrastructure',
      'Renewable energy integration',
      'Energy storage solutions',
      'Smart grid technology',
      'Energy consulting',
    ],
    image:
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Factory,
    title: 'Industrial Engineering',
    description: 'Manufacturing and industrial process solutions.',
    features: [
      'Process optimization',
      'Automation systems',
      'Equipment design & installation',
      'Plant engineering',
      'Safety systems',
      'Environmental compliance',
    ],
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    title: 'Construction Engineering',
    description: 'Civil and structural engineering for buildings and facilities.',
    features: [
      'Structural design',
      'Building systems',
      'Construction management',
      'Quality assurance',
      'Code compliance',
      'Project coordination',
    ],
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Mechanical Engineering',
    description: 'Precision mechanical systems and component design.',
    features: [
      'Mechanical design & CAD',
      'Hydraulic systems',
      'HVAC solutions',
      'Equipment engineering',
      'Vibration analysis',
      'Performance optimization',
    ],
    image:
      'https://images.pexels.com/photos/3862129/pexels-photo-3862129.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Hammer,
    title: 'Project Delivery',
    description: 'End-to-end project management and execution.',
    features: [
      'Project planning',
      'Resource management',
      'Timeline optimization',
      'Quality control',
      'Risk management',
      'Stakeholder coordination',
    ],
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive engineering solutions across all domains
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 last:mb-0"
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <ArrowRight className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is ready to design engineering solutions for your unique requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-medium shadow-lg"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
