import React from 'react';
import { Link } from 'react-router-dom';

export default function CopyrightPolicy() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-gray-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent">
          Copyright Policy
        </h1>
        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <p className="text-lg leading-relaxed">
              This website and all its contents, including but not limited to text, images, graphics, videos, logos, design elements, and other forms of media, are the exclusive property of Kai Trump and are protected by United States and international copyright laws. Unauthorized use of any materials on this website is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">What Is Covered Under Copyright Protection</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All original content created for this website.</li>
              <li>Photographs, videos, and other multimedia elements.</li>
              <li>Logos, branding, and design layouts unique to this site.</li>
              <li>Written content, including blogs, articles, and statements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Prohibited Actions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproducing, distributing, or republishing any materials from this site without prior written consent.</li>
              <li>Modifying, editing, or creating derivative works based on the original content.</li>
              <li>Using any content for commercial purposes, including advertisements, endorsements, or promotional materials, without explicit permission.</li>
              <li>Scraping or automated extraction of content for any purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Permitted Use</h2>
            <p>Content may be used for personal or educational purposes if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>It remains unaltered.</li>
              <li>Proper credit is attributed to Kai Trump with a link to the original source.</li>
              <li>Use does not violate the terms of this policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Legal Remedies for Copyright Violations</h2>
            <p>Any unauthorized use of the content will result in immediate legal action, including but not limited to demands for takedowns, financial damages, and criminal prosecution under applicable copyright laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">DMCA Compliance</h2>
            <p>This site complies with the Digital Millennium Copyright Act (DMCA). If you believe your copyrighted material has been used without authorization, you may submit a takedown request by providing the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A description of the copyrighted work that has been infringed.</li>
              <li>The URL of the content in question.</li>
              <li>Your contact information (name, email address, phone number).</li>
              <li>A statement of good faith belief that the use is unauthorized.</li>
            </ul>
            <p className="mt-4">Submit DMCA requests to comments@whitehouse.gov</p>
          </section>
        </div>
      </div>
    </div>
  );
}