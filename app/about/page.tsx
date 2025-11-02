'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Pioneering sustainable engineering solutions through cutting-edge technology and creative problem-solving.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description:
      'Unwavering commitment to delivering superior products and services that exceed industry standards.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description:
      'Building lasting partnerships by understanding and addressing unique client needs with tailored solutions.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description:
      'Environmental responsibility at the core of every project, ensuring a greener future for generations.',
  },
];

const leadership = [
  {
    name: 'John Anderson',
    role: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Engineering',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Sustainability Director',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Verden Engineering
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Engineering a sustainable future through innovation, excellence,
              and environmental responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Meaning of Verden
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Derived from Scandinavian roots, <strong>Verden</strong> means{' '}
                <em>&ldquo;The World&rdquo;</em> — a name that reflects our
                global vision and commitment to making a positive impact on the
                planet.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We believe that engineering excellence should serve not just our
                clients, but the entire world. Our name embodies our mission to
                create solutions that transcend borders and contribute to a more
                sustainable, efficient, and innovative global community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project we undertake is guided by this principle —
                thinking globally while acting locally, ensuring that our work
                today builds a better tomorrow for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="World and sustainability"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver innovative, sustainable engineering solutions that
                empower businesses and communities to thrive while preserving
                our planet. We are committed to excellence in green energy,
                construction technology, and safety systems that set new
                industry standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in sustainable engineering solutions,
                recognized for transforming industries through innovation,
                environmental stewardship, and unwavering commitment to quality.
                We envision a world where every project contributes to a cleaner,
                safer, and more efficient future.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Principles that guide every decision and drive our success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to engineering excellence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Founded with a vision to revolutionize the engineering industry,
              Verden Engineering has grown from a small team of passionate
              engineers to a comprehensive solutions provider. Our journey has
              been marked by continuous innovation, strategic partnerships, and
              an unwavering commitment to sustainability.
            </p>
            <p className="text-lg text-green-100 max-w-4xl mx-auto leading-relaxed">
              Today, we serve clients across multiple sectors, delivering
              turnkey solutions in green energy, construction chemicals,
              fireproofing, and engineering consultancy. Every project reflects
              our dedication to quality, safety, and environmental
              responsibility.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
