'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      // Send to your backend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('error');
        console.error('API Error:', await response.text());
      }

      // Send to WhatsApp
      const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/+918125814077?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      setStatus('error');
      console.error('Submission Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Get in touch with our expert team for assistance.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Phone:</strong> +91 9063257392
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> attestationlegal@gmail.com
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="input-field"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-full bg-primary hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}