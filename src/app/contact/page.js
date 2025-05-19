
"use client";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
       <p className="text-gray-500 text-lg">
  We&apos;d love to hear from you! Fill out the form and we&apos;ll get back to you shortly.
</p>

      </div>

      {/* Contact Form */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
            <p>Email: contact@coderower.com</p>
            <p>Phone: +1 234 567 8901</p>
            <p>Location: New York, USA</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Business Hours</h2>
            <p>Mon - Fri: 9am to 6pm</p>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
