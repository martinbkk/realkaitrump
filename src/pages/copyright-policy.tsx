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
        <div className="prose prose-invert">
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}