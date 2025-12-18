'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, TrendingUp, Users, DollarSign, Target, ChevronDown } from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCase, setExpandedCase] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS' },
    { id: 'retail', name: 'Retail' },
    { id: 'finance', name: 'Finance' }
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'ecommerce',
      client: 'TechStyle Fashion',
      industry: 'E-commerce Fashion',
      challenge: 'Low organic visibility and declining online sales',
      solution: 'Comprehensive SEO strategy with content marketing and technical optimization',
      results: {
        traffic: '+340%',
        revenue: '+285%',
        conversion: '+52%',
        timeline: '8 months'
      },
      metrics: [
        { label: 'Organic Traffic', value: '340%', icon: TrendingUp },
        { label: 'Revenue Growth', value: '285%', icon: DollarSign },
        { label: 'Conversion Rate', value: '52%', icon: Target },
        { label: 'New Customers', value: '12.5K', icon: Users }
      ],
      testimonial: "Positivus transformed our digital presence. The results exceeded our expectations, and the team's expertise in fashion e-commerce was evident from day one.",
      author: 'Jessica Chen, CMO at TechStyle Fashion',
      services: ['SEO', 'Content Marketing', 'PPC'],
      image: '🛍️'
    },
    {
      id: 2,
      category: 'saas',
      client: 'CloudSync Pro',
      industry: 'SaaS Technology',
      challenge: 'High customer acquisition costs and low trial conversions',
      solution: 'Multi-channel PPC strategy with landing page optimization and email nurturing',
      results: {
        cac: '-65%',
        trials: '+420%',
        conversion: '+89%',
        timeline: '6 months'
      },
      metrics: [
        { label: 'CAC Reduction', value: '65%', icon: DollarSign },
        { label: 'Trial Signups', value: '420%', icon: Users },
        { label: 'Trial to Paid', value: '89%', icon: Target },
        { label: 'MRR Growth', value: '$450K', icon: TrendingUp }
      ],
      testimonial: "The team's understanding of SaaS metrics and growth strategies was impressive. They didn't just drive traffic—they drove the right traffic that converted.",
      author: 'Marcus Johnson, CEO at CloudSync Pro',
      services: ['PPC', 'Landing Page Optimization', 'Email Marketing'],
      image: '☁️'
    },
    {
      id: 3,
      category: 'retail',
      client: 'Urban Home Decor',
      industry: 'Home & Living Retail',
      challenge: 'Limited social media presence and low brand awareness among millennials',
      solution: 'Instagram-first social strategy with influencer partnerships and UGC campaigns',
      results: {
        followers: '+780%',
        engagement: '+520%',
        sales: '+195%',
        timeline: '10 months'
      },
      metrics: [
        { label: 'Follower Growth', value: '780%', icon: Users },
        { label: 'Engagement Rate', value: '8.4%', icon: Target },
        { label: 'Social Sales', value: '195%', icon: DollarSign },
        { label: 'UGC Posts', value: '2.8K', icon: TrendingUp }
      ],
      testimonial: "We went from a virtually invisible social presence to becoming a go-to brand for millennial home decor. The influencer strategy was brilliant.",
      author: 'Sarah Mitchell, Marketing Director at Urban Home Decor',
      services: ['Social Media Marketing', 'Influencer Marketing', 'Content Creation'],
      image: '🏡'
    },
    {
      id: 4,
      category: 'finance',
      client: 'SecureBank Digital',
      industry: 'Financial Services',
      challenge: 'Complex regulations limiting digital marketing and low online account openings',
      solution: 'Compliant content strategy with educational focus and retargeting campaigns',
      results: {
        accounts: '+245%',
        leads: '+380%',
        cost: '-48%',
        timeline: '12 months'
      },
      metrics: [
        { label: 'Account Openings', value: '245%', icon: Users },
        { label: 'Qualified Leads', value: '380%', icon: Target },
        { label: 'Cost per Lead', value: '48%', icon: DollarSign },
        { label: 'Content Reach', value: '2.1M', icon: TrendingUp }
      ],
      testimonial: "Navigating financial services regulations while driving growth seemed impossible until we partnered with Positivus. They understood compliance without sacrificing results.",
      author: 'David Park, VP of Digital at SecureBank',
      services: ['Content Marketing', 'SEO', 'Analytics'],
      image: '🏦'
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

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
            <a href="/service" className="text-black hover:text-lime-400">Services</a>
            <a href="#" className="text-black font-medium text-lime-400">Use Cases</a>
            <a href="/pricing" className="text-black hover:text-lime-400">Pricing</a>
            <a href="/blog" className="text-black hover:text-lime-400">Blog</a>
          </nav>
          <button className="px-6 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition">
            <a href="/signup">Request a quote</a>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-6">
          <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition">
            <ArrowLeft className="w-5 h-5" />
          </a>
          <h1 className="text-6xl font-bold text-black">Case Studies</h1>
        </div>
        <p className="text-2xl text-gray-600 max-w-3xl mb-12">
          Real results from real clients. See how we've helped businesses transform their digital presence and achieve measurable growth.
        </p>

        <div className="bg-black text-white rounded-3xl p-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-5xl font-bold text-lime-400 mb-2">500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-lime-400 mb-2">$2.5B+</div>
            <div className="text-gray-400">Revenue Generated</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-lime-400 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-lime-400 mb-2">3.2x</div>
            <div className="text-gray-400">Average ROI</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-y border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto text-black px-6 py-6">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition ${
                  selectedCategory === category.id
                    ? 'bg-lime-400 text-black font-medium'
                    : 'bg-white border border-gray-300 hover:border-lime-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {filteredCases.map((caseStudy) => (
            <div key={caseStudy.id} className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition">
              <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{caseStudy.image}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-black mb-2">{caseStudy.client}</h2>
                      <p className="text-gray-600">{caseStudy.industry}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {caseStudy.services.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-lime-400 rounded-full text-black font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  {caseStudy.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                        <Icon className="w-8 h-8 text-lime-400 mb-3" />
                        <div className="text-3xl font-bold text-black mb-1">{metric.value}</div>
                        <div className="text-black text-gray-600">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-black font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      The Challenge
                    </h3>
                    <p className="text-gray-700">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-black font-bold mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                      Our Solution
                    </h3>
                    <p className="text-gray-700">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="bg-black text-white rounded-2xl p-8">
                  <div className="text-6xl mb-4 opacity-20">"</div>
                  <p className="text-xl mb-6 italic">{caseStudy.testimonial}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">— {caseStudy.author}</p>
                    <button 
                      onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
                      className="px-6 py-3 bg-lime-400 text-black rounded-lg hover:bg-lime-300 transition flex items-center gap-2"
                    >
                      View full case study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">Meet Our Team</h2>
          <p className="text-black text-gray-600 max-w-2xl mx-auto">
            The experts behind your success. Our team of digital marketing specialists brings years of experience and proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-lime-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-8 bg-lime-400 rounded-full p-2 hover:bg-lime-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-black text-center mb-2">Jane Doe</h3>
            <p className="text-lime-400 font-medium text-center mb-4">Director of Operations</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                7+ years of experience in project management and team leadership. Specializes in scaling digital marketing operations and driving cross-functional collaboration.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-lime-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  MB
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-8 bg-lime-400 rounded-full p-2 hover:bg-lime-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-black text-center mb-2">Michael Brown</h3>
            <p className="text-lime-400 font-medium text-center mb-4">Senior SEO Specialist</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                10+ years of experience in SEO and content strategy. Proficient in keyword research and on-page optimization techniques.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-lime-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  BW
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-8 bg-lime-400 rounded-full p-2 hover:bg-lime-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-black text-center mb-2">Brian Williams</h3>
            <p className="text-lime-400 font-medium text-center mb-4">Social Media Manager</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                8+ years of experience in social media marketing. Highly skilled in creating engaging content and building online communities.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-lime-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  SK
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-8 bg-lime-400 rounded-full p-2 hover:bg-lime-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-black text-center mb-2">Sarah Kim</h3>
            <p className="text-lime-400 font-medium text-center mb-4">Content Creator</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                5+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-lime-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  JL
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-8 bg-lime-400 rounded-full p-2 hover:bg-lime-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-black text-center mb-2">John Lee</h3>
            <p className="text-lime-400 font-medium text-center mb-4">PPC Strategist</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                6+ years of experience in managing PPC campaigns. Certified in Google Ads and Facebook advertising platforms.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-lime-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-28 h-28 bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  EP
                </div>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="absolute top-0 right-8 bg-lime-400 rounded-full p-2 hover:bg-lime-300 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl font-bold text-black text-center mb-2">Emily Parker</h3>
            <p className="text-lime-400 font-medium text-center mb-4">Analytics Specialist</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                7+ years of experience in data analysis and reporting. Expert in Google Analytics, data visualization, and performance tracking.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 border-2 text-black border-black rounded-lg hover:bg-black hover:text-white transition text-lg font-medium">
            See all team
          </button>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-lime-400 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-4">Ready to be our next success story?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help your business achieve similar results and transform your digital marketing.
              </p>
              <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition text-lg">
                Get your free proposal
              </button>
            </div>
            <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
              <div className="absolute top-12 right-12 w-40 h-40 border-8 border-black rounded-full"></div>
              <div className="absolute bottom-12 right-24 w-32 h-32 bg-black rounded-lg rotate-12"></div>
              <div className="absolute top-32 right-48 w-4 h-4 bg-black"></div>
            </div>
          </div>
        </div>
      </div>

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