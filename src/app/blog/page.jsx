'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Search, Tag } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'seo', name: 'SEO', count: 8 },
    { id: 'social', name: 'Social Media', count: 6 },
    { id: 'ppc', name: 'PPC', count: 5 },
    { id: 'content', name: 'Content Marketing', count: 3 },
    { id: 'trends', name: 'Industry Trends', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'seo',
      title: 'The Ultimate Guide to SEO in 2024: Strategies That Actually Work',
      excerpt: 'Discover the latest SEO techniques and algorithm updates that are driving real results. Learn how AI and machine learning are transforming search optimization.',
      author: 'Michael Brown',
      authorRole: 'Senior SEO Specialist',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      image: '🔍',
      tags: ['SEO', 'Digital Marketing', 'Google'],
      featured: true
    },
    {
      id: 2,
      category: 'social',
      title: 'Instagram Algorithm Decoded: How to Boost Your Reach in 2024',
      excerpt: 'Understand the latest Instagram algorithm changes and learn proven tactics to increase your organic reach and engagement rates.',
      author: 'Brian Williams',
      authorRole: 'Social Media Manager',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      image: '📱',
      tags: ['Instagram', 'Social Media', 'Algorithm'],
      featured: true
    },
    {
      id: 3,
      category: 'ppc',
      title: 'Google Ads Optimization: 10 Ways to Lower Your CPC',
      excerpt: 'Learn cost-effective strategies to optimize your Google Ads campaigns and maximize ROI without increasing your budget.',
      author: 'John Lee',
      authorRole: 'PPC Strategist',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      image: '💰',
      tags: ['Google Ads', 'PPC', 'ROI'],
      featured: false
    },
    {
      id: 4,
      category: 'content',
      title: 'Content Marketing ROI: How to Measure What Matters',
      excerpt: 'Stop guessing if your content works. Discover the key metrics and tools to accurately measure your content marketing ROI.',
      author: 'Sarah Kim',
      authorRole: 'Content Creator',
      date: 'Dec 8, 2024',
      readTime: '5 min read',
      image: '📊',
      tags: ['Content Marketing', 'Analytics', 'ROI'],
      featured: false
    },
    {
      id: 5,
      category: 'seo',
      title: 'Local SEO Mastery: Dominate Your Geographic Market',
      excerpt: 'A comprehensive guide to local SEO strategies that help small businesses rank higher in local search results.',
      author: 'Michael Brown',
      authorRole: 'Senior SEO Specialist',
      date: 'Dec 5, 2024',
      readTime: '9 min read',
      image: '📍',
      tags: ['Local SEO', 'Small Business', 'Google My Business'],
      featured: false
    },
    {
      id: 6,
      category: 'social',
      title: 'TikTok for Business: A Beginner\'s Guide to Success',
      excerpt: 'Learn how to leverage TikTok\'s explosive growth for your business with practical tips and real campaign examples.',
      author: 'Brian Williams',
      authorRole: 'Social Media Manager',
      date: 'Dec 3, 2024',
      readTime: '6 min read',
      image: '🎵',
      tags: ['TikTok', 'Social Media', 'Video Marketing'],
      featured: false
    },
    {
      id: 7,
      category: 'trends',
      title: 'AI in Marketing: 5 Tools Every Marketer Should Use',
      excerpt: 'Explore the best AI-powered marketing tools that are changing the game and how to integrate them into your workflow.',
      author: 'Emily Parker',
      authorRole: 'Analytics Specialist',
      date: 'Nov 30, 2024',
      readTime: '10 min read',
      image: '🤖',
      tags: ['AI', 'Marketing Tools', 'Automation'],
      featured: false
    },
    {
      id: 8,
      category: 'ppc',
      title: 'Facebook Ads vs Google Ads: Which is Right for You?',
      excerpt: 'A detailed comparison of the two biggest advertising platforms to help you decide where to invest your ad budget.',
      author: 'John Lee',
      authorRole: 'PPC Strategist',
      date: 'Nov 28, 2024',
      readTime: '7 min read',
      image: '⚖️',
      tags: ['Facebook Ads', 'Google Ads', 'Comparison'],
      featured: false
    },
    {
      id: 9,
      category: 'content',
      title: 'Video Content Strategy: From Planning to Production',
      excerpt: 'Create compelling video content that engages your audience and drives conversions with this step-by-step guide.',
      author: 'Sarah Kim',
      authorRole: 'Content Creator',
      date: 'Nov 25, 2024',
      readTime: '8 min read',
      image: '🎬',
      tags: ['Video Marketing', 'Content Strategy', 'Production'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            <a href="/case" className="text-black hover:text-lime-400">Use Cases</a>
            <a href="/pricing" className="text-black hover:text-lime-400">Pricing</a>
            <a href="#" className="text-black font-medium text-lime-400">Blog</a>
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
          <h1 className="text-6xl font-bold text-black">Our Blog</h1>
        </div>
        <p className="text-2xl text-gray-600 max-w-3xl mb-8">
          Insights, strategies, and tips to help you navigate the digital marketing landscape and grow your business.
        </p>

        <div className="max-w-2xl relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 text-black rounded-xl focus:border-lime-400 focus:outline-none text-lg"
          />
        </div>
      </div>

      <div className="bg-gray-50 border-y text-black border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-lime-400 text-black font-medium'
                    : 'bg-white border border-gray-300 hover:border-lime-400'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category.id ? 'bg-black text-white' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedCategory === 'all' && !searchQuery && (
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold  text-black mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-gradient-to-br from-lime-400 to-lime-300 rounded-3xl overflow-hidden hover:shadow-2xl transition group cursor-pointer">
                <div className="p-8">
                  <div className="text-7xl mb-6">{post.image}</div>
                  <div className="flex gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-gray-700 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-black/20">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-bold">{post.author}</div>
                        <div className="text-sm text-gray-700">{post.authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-700">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center gap-2">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="max-w-7xl mx-auto text-black px-6 py-16">
        {selectedCategory !== 'all' || searchQuery ? (
          <h2 className="text-3xl font-bold mb-8">
            {searchQuery ? `Search results for "${searchQuery}"` : 'All Articles'}
          </h2>
        ) : (
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        )}
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {(searchQuery || selectedCategory !== 'all' ? filteredPosts : regularPosts).map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition group cursor-pointer">
                <div className="p-8">
                  <div className="text-6xl mb-4">{post.image}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-lime-400 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-lime-400 transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition font-medium flex items-center justify-center gap-2">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-50 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest digital marketing insights, tips, and trends delivered straight to your inbox every week.
              </p>
              <div className="flex gap-4 text-white max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
                <button className="px-8 py-4 bg-lime-400 text-black  rounded-lg hover:bg-lime-300 transition font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
            <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
              <div className="absolute top-12 right-12 w-40 h-40 border-8 border-white rounded-full"></div>
              <div className="absolute bottom-12 right-24 w-32 h-32 bg-white rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-black px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Topics</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['SEO', 'Social Media', 'PPC', 'Content Marketing', 'Email Marketing', 'Analytics', 'AI', 'Video Marketing', 'Instagram', 'Google Ads', 'TikTok', 'Facebook Ads', 'Local SEO', 'ROI', 'Automation'].map((tag, idx) => (
            <button
              key={idx}
              className="px-6 py-3 bg-gray-100 rounded-full hover:bg-lime-400 transition font-medium text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-lime-400 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-4">Ready to Transform Your Digital Marketing?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Put these insights into action. Let's discuss how we can help your business grow.
              </p>
              <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition text-lg">
                Get your free proposal
              </button>
            </div>
            <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
              <div className="absolute top-12 right-12 w-40 h-40 border-8 border-black rounded-full"></div>
              <div className="absolute bottom-12 right-24 w-32 h-32 bg-black rounded-lg rotate-12"></div>
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