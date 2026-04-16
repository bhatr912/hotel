'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    travelers: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          travelers: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data.message || 'Failed to send email. Please try again.');
      }
    } catch (error: any) {
      setError(error.message || 'Network error. Please check your connection.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${compact ? 'p-6' : 'p-10'} bg-white`}>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">Hi <span className="inline-block animate-wave origin-bottom-right">👋</span></span>
        <span className="font-black text-on-surface text-sm lg:text-base">, Get Perfect Kashmir Itinerary.</span>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm font-bold">
          {error}
        </div>
      )}

      <form className="space-y-4 lg:space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Full Name<span className="text-red-500">*</span>:
            </label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Mobile No.<span className="text-red-500">*</span>:
            </label>
            <input 
              type="tel" 
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                setFormData(prev => ({ ...prev, mobile: value }));
              }}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Enter mobile number"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              Email<span className="text-red-500">*</span>:
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Enter email address"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
              No. Of Travelers<span className="text-red-500">*</span>:
            </label>
            <input 
              type="number" 
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm"
              placeholder="Number of people"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-black text-on-surface uppercase tracking-widest mb-1.5">
            Message <span className="text-gray-400 font-medium">(optional)</span>
          </label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium text-xs lg:text-sm min-h-[100px] lg:min-h-[120px] resize-none"
            placeholder="Write your message (max 200 characters)"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={loading || submitted}
          className={`w-full py-4 font-black rounded-xl shadow-lg transition-all active:scale-[0.98] uppercase tracking-widest text-xs lg:text-sm cursor-pointer ${
            submitted 
              ? 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/20' 
              : 'bg-primary hover:bg-primary/90 disabled:opacity-70 text-white shadow-primary/20'
          }`}
        >
          {submitted ? '✓ Thank you! We\'ll contact you soon.' : loading ? 'Sending...' : 'Get Free Quote'}
        </button>
      </form>
    </div>
  );
}
