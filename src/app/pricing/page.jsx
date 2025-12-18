'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, X, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showTooltip, setShowTooltip] = useState(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Perfect for small businesses',
      monthlyPrice: 999,
      annualPrice: 9990,
      description: 'Essential digital marketing services to get your business online and growing.',
      features: [
        { name: 'Basic SEO optimization', included: true },
        { name: 'Google My Business setup', included: true },
        { name: 'Social media management (2 platforms)', included: true },
        { name: 'Monthly performance report', included: true },
        { name: 'Email support', included: true },
        { name: 'Up to 5 blog posts/month', included: true },
        { name: 'Basic website analytics', included: true },
        { name: 'PPC campaign management', included: false },
        { name: 'Advanced analytics dashboard', included: false },
        { name: 'Dedicated account manager', included: false },
        { name: 'Custom strategy sessions', included: false },
        { name: 'Priority support', included: false }
      ],
      cta: 'Get started',
      popular: false,
      color: 'gray'
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'Most popular for growing companies',
      monthlyPrice: 2499,
      annualPrice: 24990,
      description: 'Comprehensive marketing solutions with advanced features and dedicated support.',
      features: [
        { name: 'Advanced SEO optimization', included: true },
        { name: 'Google My Business optimization', included: true },
        { name: 'Social media management (4 platforms)', included: true },
        { name: 'Weekly performance reports', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'Up to 12 blog posts/month', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'PPC campaign management (up to $5K/month)', included: true },
        { name: 'Email marketing campaigns', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Monthly strategy sessions', included: true },
        { name: 'Competitor analysis', included: false }
      ],
      cta: 'Start free trial',
      popular: true,
      color: 'lime'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'Custom solutions for large organizations',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      description: 'Fully customized marketing strategies with white-glove service and unlimited support.',
      features: [
        { name: 'Enterprise SEO with technical audits', included: true },
        { name: 'Multi-location optimization', included: true },
        { name: 'Social media management (unlimited)', included: true },
        { name: 'Real-time reporting & dashboards', included: true },
        { name: '24/7 priority support', included: true },
        { name: 'Unlimited content creation', included: true },
        { name: 'Custom analytics & BI integration', included: true },
        { name: 'PPC campaign management (unlimited)', included: true },
        { name: 'Marketing automation', included: true },
        { name: 'Dedicated team of specialists', included: true },
        { name: 'Weekly strategy sessions', included: true },
        { name: 'Comprehensive competitor analysis', included: true }
      ],
      cta: 'Contact sales',
      popular: false,
      color: 'black'
    }
  ];

  const addOns = [
    {
      name: 'Content Marketing Package',
      description: 'Additional 10 blog posts, 2 whitepapers, and 4 case studies per month',
      price: 599
    },
    {
      name: 'Video Marketing',
      description: '4 professional videos per month with editing and optimization',
      price: 1299
    },
    {
      name: 'Influencer Partnerships',
      description: 'Influencer outreach, campaign management, and performance tracking',
      price: 899
    },
    {
      name: 'Conversion Rate Optimization',
      description: 'A/B testing, heatmaps, user testing, and landing page optimization',
      price: 799
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you reach your limits. You can either upgrade your plan or purchase add-ons to extend your capacity.'
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Absolutely! Our Enterprise plan is fully customizable. We also offer custom solutions for any business size with unique requirements.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any of our plans. We believe in transparent pricing with no hidden costs.'
    },
    {
      question: 'What\'s included in the free trial?',
      answer: 'Our 14-day free trial includes full access to all Professional plan features. No credit card required to start.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No long-term contracts required. All plans are month-to-month, though you save with annual billing.'
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

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
            <a href="#" className="text-black font-medium text-lime-400">Pricing</a>
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
          <h1 className="text-6xl font-bold text-black">Pricing Plans</h1>
        </div>
        <p className="text-2xl text-gray-600 max-w-3xl mb-12">
          Choose the perfect plan for your business. All plans include our core services with transparent pricing and no hidden fees.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-black' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className={`relative w-16 h-8 rounded-full transition ${
              billingCycle === 'annual' ? 'bg-lime-400' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition transform ${
                billingCycle === 'annual' ? 'translate-x-8' : ''
              }`}
            />
          </button>
          <span className={`text-lg font-medium ${billingCycle === 'annual' ? 'text-black' : 'text-gray-400'}`}>
            Annual
            <span className="ml-2 px-2 py-1 bg-lime-400 rounded text-xs font-bold">Save 17%</span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl overflow-hidden text-black border-2 transition hover:shadow-2xl ${
                plan.popular
                  ? 'border-lime-400 shadow-xl scale-105'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-lime-400 text-black px-6 py-2 rounded-bl-2xl font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.color === 'lime' ? 'bg-lime-50' : plan.color === 'black' ? 'bg-gray-900 text-white' : 'bg-white'}`}>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.color === 'black' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.tagline}
                </p>

                <div className="mb-6">
                  {typeof plan.monthlyPrice === 'number' ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.annualPrice.toLocaleString()}
                        </span>
                        <span className={`text-lg ${plan.color === 'black' ? 'text-gray-400' : 'text-gray-600'}`}>
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className={`text-sm mt-2 ${plan.color === 'black' ? 'text-gray-400' : 'text-gray-600'}`}>
                          ${Math.round(plan.annualPrice / 12).toLocaleString()}/month billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-5xl font-bold">{plan.monthlyPrice}</div>
                  )}
                </div>

                <p className={`mb-8 text-sm ${plan.color === 'black' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <button
                  className={`w-full py-4 rounded-lg font-medium transition mb-8 ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : plan.color === 'black'
                      ? 'bg-lime-400 text-black hover:bg-lime-300'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg mb-4">What's included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="mt-0.5 p-1 bg-lime-400 rounded-full flex-shrink-0">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                      ) : (
                        <div className={`mt-0.5 p-1 rounded-full flex-shrink-0 ${plan.color === 'black' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <X className={`w-3 h-3 ${plan.color === 'black' ? 'text-gray-500' : 'text-gray-400'}`} />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? '' : plan.color === 'black' ? 'text-gray-500' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">Power-Up Your Plan</h2>
          <p className="text-black text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Enhance any plan with our premium add-ons for specialized services
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, idx) => (
              <div key={idx} className="bg-white border border-gray-200 text-black rounded-2xl p-8 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                    <p className="text-gray-600 text-sm">{addon.description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold">${addon.price}</div>
                    <div className="text-sm text-gray-600">/month</div>
                  </div>
                </div>
                <button className="w-full py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white transition font-medium">
                  Add to plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl text-black mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Got questions? We've got answers.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition text-left"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <div className={`transform transition ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedFaq === idx && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 text-black  py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Compare All Features</h2>
          
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="text-left p-6 font-bold">Features</th>
                    <th className="text-center p-6 font-bold">Starter</th>
                    <th className="text-center p-6 font-bold bg-lime-400 text-black">Professional</th>
                    <th className="text-center p-6 font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingPlans[0].features.map((_, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                      <td className="p-6 font-medium">{pricingPlans[0].features[idx].name}</td>
                      <td className="p-6 text-center">
                        {pricingPlans[0].features[idx].included ? (
                          <Check className="w-5 h-5 mx-auto text-lime-400" />
                        ) : (
                          <X className="w-5 h-5 mx-auto text-gray-300" />
                        )}
                      </td>
                      <td className="p-6 text-center bg-lime-50">
                        {pricingPlans[1].features[idx].included ? (
                          <Check className="w-5 h-5 mx-auto text-lime-400" />
                        ) : (
                          <X className="w-5 h-5 mx-auto text-gray-300" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {pricingPlans[2].features[idx].included ? (
                          <Check className="w-5 h-5 mx-auto text-lime-400" />
                        ) : (
                          <X className="w-5 h-5 mx-auto text-gray-300" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-lime-400 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-4">Still not sure which plan is right?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's talk! Our team will help you find the perfect solution for your business needs and budget.
              </p>
              <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition text-lg">
                Schedule a consultation
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