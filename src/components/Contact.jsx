import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <section id="contact" className="relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s talk</h2>
            <p className="mt-4 text-neutral-700">
              Tell me about your project—site, goals, timing, and budget. I’ll reply within 1–2 business days.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href="mailto:studio@example.com" className="inline-flex items-center gap-2 text-neutral-800 hover:underline">
                <Mail className="h-4 w-4" /> studio@example.com
              </a>
              <a href="tel:+1234567890" className="block text-neutral-800 hover:underline inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> +1 (234) 567-890
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-neutral-600 mb-1">Project type</label>
                  <select
                    name="type"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Hospitality</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-neutral-600 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                    placeholder="Tell me about your site, scope, and timeline"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-neutral-500">By sending, you agree to be contacted about your inquiry.</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-800 transition"
                >
                  Send message
                </button>
              </div>

              {status === 'submitted' && (
                <div className="mt-4 rounded-lg bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-sm">
                  Thank you. Your message has been received.
                </div>
              )}
            </form>
            <p className="text-xs text-neutral-500 mt-3">
              Prefer email? Write to studio@example.com with drawings or references.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
