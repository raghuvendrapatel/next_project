"use client";

import Link from 'next/link';

export default function About() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
     

<section className="bg-black/90 text-white py-20 px-4 lg:px-20 text-center">
  <h1 className="text-3xl md:text-5xl font-bold mb-4">About Code Rower</h1>
  <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
    We build high-performance digital solutions to empower businesses and people.
  </p>

  {/* Back Button */}
  <Link href="/">
    <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition">
      ← Back to Home
    </button>
  </Link>
</section>


      {/* Company Description */}
      <section className="py-16 px-4 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="max-w-sm mx-auto">
  <image
    src="https://assets.static-upwork.com/org-logo/1021485441380462592"
    alt="Company"
    className="rounded-2xl shadow-md object-contain w-full h-auto"
  />
  
</div>


          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Code Rower is a software company dedicated to delivering cutting-edge digital products. From design to deployment, we support businesses with intuitive, scalable, and secure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 lg:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative software solutions that enhance productivity and growth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in software development by delivering excellence, innovation, and value.
            </p>
          </div>
        </div>
      </section>

      {/* Values or Team */}
      <section className="py-16 px-4 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Innovation</h4>
              <p className="text-gray-600">We constantly explore new technologies and creative ideas.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Integrity</h4>
              <p className="text-gray-600">We are transparent, honest, and ethical in everything we do.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Excellence</h4>
              <p className="text-gray-600">We strive for excellence in service and delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
