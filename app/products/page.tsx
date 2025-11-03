'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Info } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Advanced Structural Steel Systems',
    category: 'Infrastructure',
    price: 'Custom Quote',
    description: 'High-grade structural steel solutions engineered for maximum durability.',
    image:
      'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Grade S355', 'ISO Certified', 'Custom Fabrication'],
  },
  {
    id: 2,
    name: 'Renewable Energy Systems',
    category: 'Energy',
    price: 'Custom Quote',
    description: 'Integrated solar and wind energy solutions with battery storage.',
    image:
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Solar Arrays', 'Grid Integration', 'Energy Storage'],
  },
  {
    id: 3,
    name: 'Industrial Automation Systems',
    category: 'Industrial',
    price: 'Custom Quote',
    description: 'Smart automation solutions for manufacturing and production facilities.',
    image:
      'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['PLC Control', 'IoT Integration', '24/7 Monitoring'],
  },
  {
    id: 4,
    name: 'Concrete & Foundation Systems',
    category: 'Construction',
    price: 'Custom Quote',
    description: 'Premium concrete solutions with advanced durability and performance.',
    image:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['High Strength', 'Weather Resistant', 'Fast Curing'],
  },
  {
    id: 5,
    name: 'Precision Hydraulic Systems',
    category: 'Mechanical',
    price: 'Custom Quote',
    description: 'Custom hydraulic systems for industrial and heavy equipment applications.',
    image:
      'https://images.pexels.com/photos/3862129/pexels-photo-3862129.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Pressure Rating', 'Custom Design', 'Maintenance Kit'],
  },
  {
    id: 6,
    name: 'Project Management Software',
    category: 'Project Delivery',
    price: 'Custom Quote',
    description: 'Integrated platform for tracking, planning, and executing complex projects.',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Real-time Tracking', 'Team Collaboration', 'Analytics Dashboard'],
  },
  {
    id: 7,
    name: 'Pipeline & Distribution Networks',
    category: 'Infrastructure',
    price: 'Custom Quote',
    description: 'Advanced pipeline systems for water, gas, and industrial fluid distribution.',
    image:
      'https://images.pexels.com/photos/3218546/pexels-photo-3218546.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Corrosion Resistant', 'High Capacity', 'ISO Certified'],
  },
  {
    id: 8,
    name: 'Power Distribution Equipment',
    category: 'Energy',
    price: 'Custom Quote',
    description: 'State-of-the-art transformers and distribution equipment for reliable power delivery.',
    image:
      'https://images.pexels.com/photos/208612/pexels-photo-208612.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['High Efficiency', 'Smart Grid Ready', 'Compact Design'],
  },
  {
    id: 9,
    name: 'Environmental Control Systems',
    category: 'Industrial',
    price: 'Custom Quote',
    description: 'HVAC and environmental management solutions for industrial facilities.',
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Temperature Control', 'Air Quality', 'Energy Efficient'],
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

export default function ProductsPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive engineering products across all domains
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
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-900">
                      {product.price}
                    </span>
                    <button className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-950 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
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
              Custom Solutions Available
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              All products can be customized to meet your specific requirements.
              Contact us for pricing and customization options.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-all transform hover:scale-105 font-medium shadow-lg">
              <Info className="mr-2 w-5 h-5" />
              Request Custom Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
