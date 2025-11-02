'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Sun,
  Building2,
  Flame,
  ClipboardCheck,
  Wrench,
  Zap,
  Shield,
  Droplets,
  ThermometerSun,
  FileCheck,
  Settings,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Green Energy Solutions',
    description:
      'Comprehensive renewable energy systems designed for sustainability and efficiency.',
    features: [
      'Solar panel installation and maintenance',
      'Hybrid energy systems',
      'Energy storage solutions',
      'Grid-tie and off-grid systems',
      'Energy efficiency audits',
      'Renewable energy consulting',
    ],
    image:
      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    title: 'Construction Chemicals',
    description:
      'High-performance chemical solutions for construction and infrastructure projects.',
    features: [
      'Advanced waterproofing systems',
      'Concrete admixtures and additives',
      'Structural sealants and adhesives',
      'Protective coatings and paints',
      'Repair and restoration compounds',
      'Floor hardeners and toppings',
    ],
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flame,
    title: 'Fireproofing and Thermal Protection',
    description:
      'Cutting-edge fire safety systems and thermal insulation solutions.',
    features: [
      'Intumescent fire-retardant coatings',
      'Passive fire protection systems',
      'Thermal insulation materials',
      'Fire-rated doors and assemblies',
      'Smoke detection and suppression',
      'Fire safety audits and compliance',
    ],
    image:
      'https://images.pexels.com/photos/159805/smoke-fire-building-house-159805.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ClipboardCheck,
    title: 'Engineering Services & Consultancy',
    description:
      'Expert guidance and comprehensive engineering solutions for complex projects.',
    features: [
      'Feasibility studies and analysis',
      'Project management and oversight',
      'Sustainability audits and planning',
      'Technical specifications development',
      'Compliance and regulatory consulting',
      'Risk assessment and mitigation',
    ],
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Turnkey Project Solutions',
    description:
      'End-to-end project delivery from concept to completion and beyond.',
    features: [
      'Design and engineering',
      'Procurement and supply chain',
      'Installation and commissioning',
      'Testing and quality assurance',
      'Training and handover',
      'Maintenance and support',
    ],
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const additionalServices = [
  { icon: Zap, title: 'Energy Management', description: 'Smart monitoring and optimization' },
  { icon: Shield, title: 'Safety Systems', description: 'Comprehensive protection solutions' },
  { icon: Droplets, title: 'Water Treatment', description: 'Sustainable water management' },
  { icon: ThermometerSun, title: 'HVAC Solutions', description: 'Climate control systems' },
  { icon: FileCheck, title: 'Quality Assurance', description: 'Rigorous testing protocols' },
  { icon: Settings, title: 'Automation', description: 'Smart building technologies' },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
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
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive engineering solutions designed for a sustainable
              future
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
              className={`mb-20 last:mb-0 ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-green-600" />
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
                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
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
              Additional Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your engineering projects
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Our team is ready to design and implement tailored engineering
              solutions for your unique requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-medium shadow-lg"
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
