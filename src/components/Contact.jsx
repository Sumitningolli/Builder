import React from 'react';

const Contact = () => {
  return (
    <section className="bg-black py-16 px-6 text-black" id="contact">
      <h2 className="text-4xl font-bold text-center text-gray-300 mb-10">Contact Us</h2>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-lg" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded-lg" />
          <textarea placeholder="Your Message" rows="5" className="border p-3 rounded-lg" />
          <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
