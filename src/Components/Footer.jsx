// Footer.jsx
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState(null);
  const [subMsg, setSubMsg] = useState("");

  function validateEmail(e) {
    return /^\S+@\S+\.\S+$/.test(e);
  }

  function handleSubscribe(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setSubStatus("error");
      setSubMsg("Please enter a valid email address.");
      return;
    }
    setSubStatus("ok");
    setSubMsg("Thanks — you'll receive updates to your inbox.");
    setEmail("");
    setTimeout(() => {
      setSubStatus(null);
      setSubMsg("");
    }, 4500);
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                <FaCode className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Saquib Sayyed
                </h3>
                <div className="text-sm text-gray-400 font-medium">
                  Full Stack Developer
                </div>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Building digital experiences with modern web technologies. 
              Passionate about clean code, user experience, and continuous learning.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/saquibsayyedcoder", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1", label: "LinkedIn" },
                { icon: FaInstagram, href: "https://www.instagram.com/ss.saqib_muhammed/?next=%2F", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="text-xl text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <BsArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="text-primary text-lg" />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a
                    href="mailto:saquibsayyed12345@gmail.com"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    saquibsayyed12345@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FaPhone className="text-primary text-lg" />
                </div>
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <a
                    href="tel:+917378411134"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    +91 73784 11134
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FaMapMarkerAlt className="text-primary text-lg" />
                </div>
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div className="text-gray-400 text-sm">
                    Solapur, Maharashtra, India
                  </div>
                </div>
              </li>
            </ul>
          </div>

    
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {new Date().getFullYear()} Saquib Arif Sayyed.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex items-center gap-2 text-gray-500">
                <span>Made with</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>by Saquib</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}