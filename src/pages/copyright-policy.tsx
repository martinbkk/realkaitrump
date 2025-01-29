import React from 'react';
import { Link } from 'react-router-dom';

export default function CopyrightPolicy() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/"
          className="inline-block mb-8 text-blue-400 hover:text-blue-300"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Copyright Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">Last updated: March 12, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Copyright Policy outlines the rights and responsibilities regarding the use of content on RealKaiTrump's website. We respect intellectual property rights and expect our users to do the same.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Copyright Ownership</h2>
            <p className="mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, video clips, and software, is the property of RealKaiTrump or its content suppliers and is protected by United States and international copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Permitted Use</h2>
            <p className="mb-4">Users may:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>View content for personal, non-commercial use</li>
              <li>Share content through social media platforms using provided sharing tools</li>
              <li>Link to our content with proper attribution</li>
            </ul>
            
            <p className="mb-4">Users may not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or alter any content</li>
              <li>Use content for commercial purposes without permission</li>
              <li>Redistribute content without explicit authorization</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Digital Millennium Copyright Act (DMCA)</h2>
            <p className="mb-4">
              We comply with the Digital Millennium Copyright Act (DMCA). If you believe your copyrighted work has been used inappropriately on our website, please provide us with the following information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>A description of the copyrighted work</li>
              <li>The location of the allegedly infringing material on our site</li>
              <li>Your contact information</li>
              <li>A statement of good faith belief that the use is not authorized</li>
              <li>A statement that the information is accurate and that you are the copyright owner or authorized to act on their behalf</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Fair Use</h2>
            <p className="mb-4">
              We respect fair use principles as outlined in copyright law. This includes use of copyrighted material for purposes such as criticism, commentary, news reporting, teaching, scholarship, or research.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. User-Generated Content</h2>
            <p className="mb-4">
              By submitting content to our website (if applicable), you grant us a non-exclusive, royalty-free license to use, modify, reproduce, and distribute the content. You represent that you have all necessary rights to grant this license.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p className="mb-4">
              We reserve the right to modify this Copyright Policy at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p className="mb-4">
              For copyright inquiries or to report potential violations, please contact us through our social media channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}