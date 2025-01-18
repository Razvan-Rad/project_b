import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col items-end sm:flex-row justify-end"> 
          <div className="flex flex-col space-y-2 sm:mr-8"> 
            <Link href="/" className="hover:text-gray-200">Main Page</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </div>
          <div className="flex flex-col space-y-2 sm:mr-8"> 
            <Link href="/privacy" className="hover:text-gray-200">User Privacy</Link>
            <Link href="/terms" className="hover:text-gray-200">Terms and Conditions</Link>
            <Link href="/report" className="hover:text-gray-200">Report an Issue</Link> 
          </div>
          <p className="sm:mr-8">© 2025 Razvan</p> 
        </div>
      </footer>
    );
  }
  