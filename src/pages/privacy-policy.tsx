import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-gray-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-color-1 via-color-3 to-color-5 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <p className="text-lg leading-relaxed">
            This Privacy Policy outlines how we handle your personal and non-personal information, ensuring transparency and compliance with privacy laws, including GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act). By using this website, you agree to the terms outlined in this policy.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2 text-white">Personal Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, or other contact details submitted via forms.</li>
              <li>Any other data voluntarily provided through surveys, feedback, or subscriptions.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-white">Non-Personal Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, operating system, and other technical details.</li>
              <li>Website usage statistics, including pages visited, time spent on site, and referral sources.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <h3 className="text-xl font-semibold mb-2 text-white">Personal Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries or requests.</li>
              <li>To deliver newsletters or updates, if you have subscribed.</li>
              <li>To comply with legal obligations or protect against fraud.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-white">Non-Personal Information:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To analyze website traffic and improve user experience.</li>
              <li>To troubleshoot technical issues and enhance site functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Protection of Your Information</h2>
            <p>We use industry-standard measures such as encryption, firewalls, and secure servers to protect your data. Despite these precautions, no online data transmission is 100% secure, and users share information at their own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Cookies and Tracking Technologies</h2>
            <p>This website uses cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personalize your browsing experience.</li>
              <li>Track user behavior for analytics purposes.</li>
            </ul>
            <p className="mt-4">You can manage or disable cookies through your browser settings. Disabling cookies may limit site functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Privacy Rights</h2>
            <h3 className="text-xl font-semibold mb-2 text-white">GDPR (For EU Residents):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to access, correct, or delete your personal data.</li>
              <li>Right to data portability or to restrict processing of your information.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-white">CCPA (For California Residents):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to request disclosure of collected data.</li>
              <li>Right to request deletion of personal information.</li>
              <li>Right to opt out of the sale of personal data (though we do not sell data).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Children's Privacy</h2>
            <p>This website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe your child's information has been collected, please contact us to request removal.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p>For questions, concerns, or to exercise your privacy rights, contact us at:</p>
            <p className="mt-2">Email: comments@whitehouse.gov</p>
          </section>
        </div>
      </div>
    </div>
  );
}