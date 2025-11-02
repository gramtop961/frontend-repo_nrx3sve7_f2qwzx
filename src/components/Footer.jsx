import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold text-gray-900">CampusMart</div>
          <p className="mt-2 text-gray-600">
            A student-first marketplace to buy and sell everything you need for campus life.
          </p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Support</div>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a className="hover:text-gray-900" href="#">Help Center</a></li>
            <li><a className="hover:text-gray-900" href="#">Safety Tips</a></li>
            <li><a className="hover:text-gray-900" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Legal</div>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a className="hover:text-gray-900" href="#">Terms</a></li>
            <li><a className="hover:text-gray-900" href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} CampusMart. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
