'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('seo');
  
  const services = {
    seo: {
      title: 'Search Engine Optimization',
      subtitle: 'Boost your visibility and organic traffic',
      description: 'Our SEO services help your business rank higher in search results, driving qualified traffic to your website. We use data-driven strategies and white-hat techniques to ensure sustainable growth.',
      features: [
        'Comprehensive keyword research and analysis',
        'On-page and technical SEO optimization',
        'High-quality link building strategies',
        'Local SEO for geographic targeting',
        'Regular performance tracking and reporting',
        'Competitor analysis and insights'
      ],
      results: 'For a B2B software company, we achieved a 185% increase in organic traffic and moved 47 keywords to the first page within 6 months.',
      icon: '🔍'
    },
    ppc: {
      title: 'Pay-Per-Click Advertising',
      subtitle: 'Targeted campaigns that convert',
      description: 'Our PPC management services maximize your ad spend ROI through strategic campaign planning, precise targeting, and continuous optimization across all major platforms.',
      features: [
        'Strategic campaign setup and management',
        'Advanced audience targeting and segmentation',
        'A/B testing for ad copy and creatives',
        'Conversion tracking and optimization',
        'Budget management and bid strategies',
        'Cross-platform advertising (Google, Meta, LinkedIn)'
      ],
      results: 'For a national retail chain, we increased conversions by 78% while reducing cost-per-acquisition by 42% in just 3 months.',
      icon: '🎯'
    },
    social: {
      title: 'Social Media Marketing',
      subtitle: 'Build engagement and brand loyalty',
      description: 'We create compelling social media strategies that resonate with your audience, build community, and drive meaningful engagement across all major platforms.',
      features: [
        'Custom content strategy and creation',
        'Community management and engagement',
        'Influencer partnerships and collaborations',
        'Social media advertising campaigns',
        'Analytics and performance reporting',
        'Brand reputation management'
      ],
      results: 'For a fashion brand, we grew their Instagram following by 340% and generated a 25% increase in direct sales through social channels.',
      icon: '💬'
    },
    email: {
      title: 'Email Marketing',
      subtitle: 'Personalized campaigns that perform',
      description: 'Our email marketing services help you nurture leads and retain customers through targeted, personalized email campaigns that drive action and build lasting relationships.',
      features: [
        'Email list segmentation and management',
        'Automated drip campaigns and workflows',
        'Custom email template design',
        'A/B testing and optimization',
        'Personalization and dynamic content',
        'Detailed analytics and reporting'
      ],
      results: 'For an e-commerce client, we achieved a 45% open rate and 8.2% click-through rate, generating a 320% increase in email-driven revenue.',
      icon: '📧'
    },
    content: {
      title: 'Content Creation',
      subtitle: 'Stories that engage and convert',
      description: 'We craft compelling content that tells your brand story, educates your audience, and drives conversions across all digital touchpoints.',
      features: [
        'Blog posts and articles',
        'Website copy and landing pages',
        'Video scripts and production',
        'Infographics and visual content',
        'Case studies and whitepapers',
        'Content distribution strategy'
      ],
      results: 'For a SaaS company, our content strategy generated 2.5M organic impressions and increased qualified leads by 165%.',
      icon: '✍️'
    },
    analytics: {
      title: 'Analytics and Tracking',
      subtitle: 'Data-driven insights for growth',
      description: 'We implement comprehensive analytics solutions that provide actionable insights into your digital marketing performance and customer behavior.',
      features: [
        'Google Analytics 4 setup and configuration',
        'Custom dashboard creation',
        'Conversion tracking implementation',
        'User behavior analysis',
        'Regular reporting and insights',
        'Recommendations for optimization'
      ],
      results: 'For a multi-channel retailer, we identified optimization opportunities that led to a 52% improvement in conversion rate.',
      icon: '📊'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-bold text-black">Positivus</span>
            </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/home" className="text-black hover:text-lime-400">About us</a>
            <a href="#" className="text-black font-medium text-lime-400">Service</a>
            <a href="/case" className="text-black hover:text-lime-400">Use Cases</a>
            <a href="/pricing" className="text-black hover:text-lime-400">Pricing</a>
            <a href="/blog" className="text-black hover:text-lime-400">Blog</a>
          </nav>
          <button className="px-6 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition">
            <a href="/signup">Request a quote</a>
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-2 text-black text-gray-600">
          <a href="#" className="hover:text-lime-400">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-lime-400">Services</a>
          <span>/</span>
          <span className="text-black font-medium">{services[activeService].title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-4">
          <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition">
            <ArrowLeft className="w-5 h-5" />
          </a>
          <h1 className="text-5xl font-bold text-black">Our Services</h1>
        </div>
        <p className="text-black text-gray-600 max-w-3xl">
          Explore our comprehensive digital marketing solutions designed to help your business grow and succeed online.
        </p>
      </div>

      {/* Service Navigation */}
      <div className="bg-gray-50 border-y text-black border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-4 overflow-x-auto">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition ${
                  activeService === key
                    ? 'bg-lime-400 text-black font-medium'
                    : 'bg-white border border-gray-300 hover:border-lime-400'
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="inline-block px-4 py-2 bg-lime-400 rounded-lg mb-6">
              <span className="text-2xl text-black">{services[activeService].icon}</span>
            </div>
            <h2 className="text-4xl font-bold text-black mb-4">{services[activeService].title}</h2>
            <p className="text-black text-gray-600 mb-8">{services[activeService].subtitle}</p>
            <p className="text-gray-700 leading-relaxed mb-8">
              {services[activeService].description}
            </p>
            
            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center gap-2">
              Book a consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Features */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6">What's Included</h3>
              <ul className="space-y-4">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-lime-400 rounded-full">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="bg-black text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Case Study Results</h3>
              <p className="text-gray-300 leading-relaxed">
                {services[activeService].results}
              </p>
              <button className="mt-6 px-6 py-3 bg-lime-400 text-black rounded-lg hover:bg-lime-300 transition">
                View full case study →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-lime-400 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Ready to transform your digital presence?</h2>
              <p className="text-xl mb-8">Let's discuss how we can help your business grow and succeed online.</p>
              <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Get your free proposal
              </button>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 opacity-10">
              <div className="absolute top-8 right-8 w-32 h-32 border-4 border-black rounded-full"></div>
              <div className="absolute bottom-8 right-16 w-24 h-24 bg-black rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-lime-400"></div>
                <span className="font-bold text-xl">Positivus</span>
              </div>
              <p className="text-gray-400 text-sm">
                Navigating the digital landscape for success
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-lime-400">SEO</a></li>
                <li><a href="#" className="hover:text-lime-400">PPC</a></li>
                <li><a href="#" className="hover:text-lime-400">Social Media</a></li>
                <li><a href="#" className="hover:text-lime-400">Email Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-lime-400">About us</a></li>
                <li><a href="#" className="hover:text-lime-400">Case Studies</a></li>
                <li><a href="#" className="hover:text-lime-400">Blog</a></li>
                <li><a href="#" className="hover:text-lime-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-gray-400">
                Email: info@positivus.com<br/>
                Phone: 555-567-8901
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Positivus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}