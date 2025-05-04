import React from 'react';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Ticket Prime</h4>
          <p className="text-sm text-gray-300">
            Ticket Prime is your go-to platform for booking event tickets with ease. We bring your favorite experiences
            closer to you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/events" className="text-white hover:text-gray-300 hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-gray-300 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-white hover:text-gray-300 hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300">
            Email:{' '}
            <a href="mailto:support@ticketprime.com" className="hover:underline">
              support@ticketprime.com
            </a>
          </p>
          <p className="text-sm text-gray-300">Phone: +84 123 456 789</p>
          <p className="text-sm text-gray-300">123 Event Street, Ho Chi Minh City, Vietnam</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500" aria-label="Facebook">
              <FacebookFilled />
            </a>
            <a href="#" className="hover:text-pink-500" aria-label="Instagram">
              <InstagramFilled />
            </a>
            <a href="#" className="hover:text-sky-400" aria-label="Twitter">
              <TwitterSquareFilled />
            </a>
            <a href="#" className="hover:text-red-600" aria-label="YouTube">
              <YoutubeFilled />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Ticket Prime</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
