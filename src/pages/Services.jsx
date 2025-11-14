import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost your organic visibility and dominate search engine results with our comprehensive SEO strategies.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      ),
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Technical SEO Audits',
        'Link Building Strategies',
        'Local SEO Services',
        'SEO Performance Tracking',
      ],
    },
    {
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience across all major social media platforms.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      ),
      features: [
        'Social Media Strategy Development',
        'Content Creation & Curation',
        'Community Management',
        'Social Media Advertising',
        'Influencer Marketing',
        'Analytics & Reporting',
      ],
    },
    {
      title: 'Content Marketing',
      description: 'Create compelling content that attracts, engages, and converts your target audience.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      features: [
        'Content Strategy & Planning',
        'Blog Writing & Publishing',
        'Video Content Production',
        'Infographic Design',
        'E-books & Whitepapers',
        'Content Distribution',
      ],
    },
    {
      title: 'Pay-Per-Click Advertising',
      description: 'Drive immediate results with targeted PPC campaigns that maximize your advertising ROI.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'Display Advertising',
        'Remarketing Campaigns',
        'Conversion Optimization',
      ],
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns that drive engagement.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      features: [
        'Email Strategy Development',
        'List Building & Segmentation',
        'Newsletter Design & Creation',
        'Automation Workflows',
        'A/B Testing',
        'Performance Analytics',
      ],
    },
    {
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and transparent reporting.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      features: [
        'Website Analytics Setup',
        'Conversion Tracking',
        'Custom Dashboard Creation',
        'Monthly Performance Reports',
        'Competitor Analysis',
        'ROI Measurement',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to help your business thrive in the digital landscape.
            We combine strategy, creativity, and technology to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures your success every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business, goals, and target audience to create a tailored strategy.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a comprehensive digital marketing plan aligned with your objectives.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implement campaigns with precision and attention to detail for optimal results.',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuously monitor, analyze, and refine strategies for maximum performance.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored digital marketing solutions for diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'E-commerce',
              'Healthcare',
              'Real Estate',
              'Technology',
              'Finance',
              'Education',
              'Hospitality',
              'Professional Services',
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer border border-gray-200 hover:border-primary"
              >
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a custom strategy that drives real results for your business
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
