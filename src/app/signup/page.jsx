'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Upload, X } from 'lucide-react';

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    services: [],
    budget: '',
    timeline: '',
    message: '',
    hearAbout: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const services = [
    { id: 'seo', name: 'Search Engine Optimization', icon: '🔍' },
    { id: 'ppc', name: 'Pay-Per-Click Advertising', icon: '🎯' },
    { id: 'social', name: 'Social Media Marketing', icon: '💬' },
    { id: 'email', name: 'Email Marketing', icon: '📧' },
    { id: 'content', name: 'Content Creation', icon: '✍️' },
    { id: 'analytics', name: 'Analytics and Tracking', icon: '📊' }
  ];

  const budgetRanges = [
    'Under $1,000/month',
    '$1,000 - $2,500/month',
    '$2,500 - $5,000/month',
    '$5,000 - $10,000/month',
    'Over $10,000/month',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP - Need to start immediately',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    'Just exploring options'
  ];

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            <a href="/blog" className="text-black hover:text-lime-400">Blog</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-black px-6 py-16">
        <div className="flex items-center gap-4 mb-6">
          <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition">
            <ArrowLeft className="w-100 h-5" />
          </a>
          <h1 className="text-6xl font-bold">Request a Quote</h1>
        </div>
        <p className="text-3xl text-gray-600 max-w-30xl  mb-8">
          Tell us about your project and we'll provide a customized proposal with transparent pricing.
        </p>

        {/* Progress Bar */}
        <div className="max-w-20xl mb-12">
          <div className="flex justify-between mb-3">
            <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-lime-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-8">
          
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="bg-gray-50 rounded-3xl text-black p-8 border border-gray-200">
              <h2 className="text-3xl font-bold mb-6">Tell us about yourself</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="NAME"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="EMAIL"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 1234567890"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    placeholder="https://www.yourwebsite.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2">How did you hear about us?</label>
                  <select
                    value={formData.hearAbout}
                    onChange={(e) => setFormData({...formData, hearAbout: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="blog">Blog/Article</option>
                    <option value="ad">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Services & Budget */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="bg-gray-50 text-black rounded-3xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">What services are you interested in? *</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-6 rounded-2xl border-2 transition text-left ${
                        formData.services.includes(service.id)
                          ? 'border-lime-400 bg-lime-50'
                          : 'border-gray-300 bg-white hover:border-lime-400'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-3xl mb-2">{service.icon}</div>
                          <div className="font-bold">{service.name}</div>
                        </div>
                        {formData.services.includes(service.id) && (
                          <div className="p-1 bg-lime-400 rounded-full">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 text-black rounded-3xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">What's your budget range? *</h2>
                
                <div className="space-y-3">
                  {budgetRanges.map((range) => (
                    <label
                      key={range}
                      className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition ${
                        formData.budget === range
                          ? 'border-lime-400 bg-lime-50'
                          : 'border-gray-300 bg-white hover:border-lime-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={formData.budget === range}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="mr-4 w-5 h-5 text-lime-400"
                      />
                      <span className="font-medium">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 text-black rounded-3xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">When do you want to start? *</h2>
                
                <div className="space-y-3">
                  {timelines.map((timeline) => (
                    <label
                      key={timeline}
                      className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition ${
                        formData.timeline === timeline
                          ? 'border-lime-400 bg-lime-50'
                          : 'border-gray-300 bg-white hover:border-lime-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={timeline}
                        checked={formData.timeline === timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                        className="mr-4 w-5 h-5 text-lime-400"
                      />
                      <span className="font-medium">{timeline}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Project Details */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-3xl text-black p-8 border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">Tell us about your project</h2>
                
                <div>
                  <label className="block text-black font-medium mb-2">Project Description *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-lime-400 focus:outline-none resize-none"
                  />
                  <p className="text-sm text-gray-600 mt-2">Minimum 50 characters</p>
                </div>
              </div>

              <div className="bg-gray-50 text-black rounded-3xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">Upload relevant documents (optional)</h2>
                <p className="text-gray-600 mb-6">Share any documents that might help us understand your project better (brand guidelines, existing analytics, competitor examples, etc.)</p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-lime-400 transition">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-600">PDF, DOC, JPG, PNG (Max 10MB each)</p>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-lime-400 rounded-lg">
                            📄
                          </div>
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-sm text-gray-600">{(file.size / 1024).toFixed(2)} KB</div>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                        >
                          <X className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-8">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-8 py-4 border-2 text-black border-black rounded-lg hover:bg-black hover:text-white transition font-medium flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={
                  (currentStep === 1 && (!formData.name || !formData.email || !formData.company)) ||
                  (currentStep === 2 && (formData.services.length === 0 || !formData.budget || !formData.timeline))
                }
                className="px-8 py-4 bg-lime-400 text-black rounded-lg hover:bg-lime-300 transition font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!formData.message || formData.message.length < 50}
                className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Request
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto text-black px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What happens next?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">We Review Your Request</h3>
              <p className="text-gray-600">
                Our team carefully reviews your submission to understand your needs and goals within 24 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Schedule a Consultation</h3>
              <p className="text-gray-600">
                We'll reach out to schedule a free 30-minute consultation to discuss your project in detail.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Receive Your Proposal</h3>
              <p className="text-gray-600">
                Within 3-5 business days, you'll receive a detailed proposal with transparent pricing and timelines.
              </p>
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