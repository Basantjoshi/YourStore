import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      if (!form.name) newErrors.name = 'Name is required';
      if (!form.email) newErrors.email = 'Email is required';
      if (!form.message) newErrors.message = 'Message is required';
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted!');
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    };
  return (
  <>
   <section className="section__container bg-primary-light">
          <h2 className="section__header capitalize">Contact</h2>
          <div className="section__subheader space-x-2">
            <span className="hover:text-primary">
              <Link to="/">home</Link>
            </span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="hover:text-primary">
              <Link to="/shop">shop</Link>
            </span>
          </div>
        </section>
        <div className="min-h-screen bg-white py-12 px-6 sm:px-10 lg:px-24 text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch With Us</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FiMapPin className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiPhone className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiClock className="text-2xl text-blue-500" />
            <div>
              <h3 className="font-semibold text-lg">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Abc"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Abc@def.com"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="This is an optional"
              className="w-full border border-gray-300 rounded-lg p-3"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi! I'd like to ask about"
              className="w-full border border-gray-300 rounded-lg p-3 h-32"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default Contact
