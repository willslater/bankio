import Logo from "@/components/Logo";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-8 text-white py-10">
      <div className="flex md:flex-col gap-10">
        <Logo />
        <p className="text-xs max-w-40">
          A modern bank for modern needs, working with you the customer to
          fulfil your needs
        </p>
      </div>
      <div>
        <div>Quick links</div>
        <nav className="grid grid-cols-2 gap-2 pt-8">
          <div>
            <a href="#" className="block py-2 text-sm">
              About us
            </a>
            <a href="#" className="block py-2 text-sm">
              Services
            </a>
            <a href="#" className="block py-2 text-sm">
              Careers
            </a>
          </div>
          <div>
            <a href="#" className="block py-2 text-sm">
              Download
            </a>
            <a href="#" className="block py-2 text-sm">
              Blog
            </a>
            <a href="#" className="block py-2 text-sm">
              Help
            </a>
          </div>
        </nav>
      </div>
      <div>
        <p className="text-sm">
          To keep up to date with all the latest news and updates enter your
          email to subscribe to our newsletter
        </p>
      </div>
    </div>
  );
};

export default Footer;
