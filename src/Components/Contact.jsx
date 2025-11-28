import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
  FaPaperPlane,
  FaUser,
  FaClock,
  FaGlobe,
  FaWhatsapp
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const ACCESS_KEY = "0c7e4e14-6446-4d5d-93a5-66d73a53764b";

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => {
        setStatus(null);
        setStatusMessage("");
      }, 6000);
      return () => clearTimeout(t);
    }
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setStatusMessage("");
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) {
      const first = Object.keys(v)[0];
      const el = formRef.current?.querySelector(`[name="${first}"]`);
      el?.focus();
      return;
    }

    setSending(true);
    try {
      const payload = {
        access_key: ACCESS_KEY,
        name: form.name,
        email: form.email,
        message: form.message,
        subject: `Contact form — ${form.name}`,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data?.success) {
        setStatus("success");
        setStatusMessage("Thanks — your message has been sent. I will reply soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("web3forms error", data);
        setStatus("error");
        setStatusMessage("Something went wrong — please try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Network error — please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "saquibsayyed12345@gmail.com",
      href: "mailto:saquibsayyed12345@gmail.com",
      color: "text-red-400"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 73784 11134",
      href: "tel:+917378411134",
      color: "text-green-400"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+91 73784 11134",
      href: "https://wa.me/917378411134",
      color: "text-green-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Solapur, Maharashtra, India",
      href: "#",
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/saquibsayyedcoder",
      color: "text-gray-700 dark:text-gray-300",
      bg: "bg-gray-100 dark:bg-gray-800"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30"
    }
  ];

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDarkMode ? (
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase border transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-white/10 backdrop-blur-sm text-purple-300 border-white/10' 
                : 'bg-purple-100 text-purple-700 border-purple-200'
            }`}>
              Get In Touch
            </span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r mb-4 ${
            isDarkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
          }`}>
            Let's Work Together
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind or want to collaborate? Send me a message and let's create something amazing together.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Info Card */}
            <div className={`rounded-3xl p-6 border-2 transition-all duration-500 ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700/50' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <FaUser className="text-purple-500" />
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group ${
                      isDarkMode 
                        ? 'hover:bg-white/10' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${item.color} ${
                      isDarkMode ? 'bg-white/10' : 'bg-gray-100'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.label}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${social.bg} ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`rounded-3xl p-6 border-2 transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <FaClock className="text-purple-500" />
                Office Hours
              </h3>
              <div className="space-y-2">
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Mon - Fri:</strong> 10:00 AM - 7:00 PM
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Sat:</strong> 11:00 AM - 4:00 PM
                </p>
                <p className={`text-xs mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Open to remote work & freelancing. Please email to schedule a call.
                </p>
              </div>
              
              <motion.a
                href="mailto:saquibsayyed12345@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}
              >
                <FaEnvelope />
                Schedule a Call
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className={`rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700/50' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send Me a Message
              </h2>

              <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Have a project, a question or want to collaborate? Send me a message — I usually reply within 24–48 hours.
              </p>

              {/* Status Messages */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl mb-6 ${
                      status === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : 'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {status === 'success' ? (
                        <FaCheckCircle className="text-green-500 text-lg" />
                      ) : (
                        <FaTimesCircle className="text-red-500 text-lg" />
                      )}
                      <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                        {statusMessage}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          errors.name 
                            ? 'border-red-500 focus:border-red-500' 
                            : isDarkMode
                              ? 'border-gray-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-purple-500'
                              : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-purple-500'
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                    </div>
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        id="name-error" 
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-500 focus:border-red-500' 
                            : isDarkMode
                              ? 'border-gray-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-purple-500'
                              : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-purple-500'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                    </div>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        id="email-error" 
                        className="text-red-500 text-sm mt-2 flex items-center gap-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or question..."
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : isDarkMode
                          ? 'border-gray-600 bg-slate-700/50 text-white placeholder-gray-400 focus:border-purple-500'
                          : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-purple-500'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      id="message-error" 
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: sending ? 1 : 1.02 }}
                    whileTap={{ scale: sending ? 1 : 0.98 }}
                    className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      sending
                        ? 'bg-gray-400 cursor-not-allowed'
                        : isDarkMode
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    }`}
                  >
                    {sending ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() => { setForm({ name: "", email: "", message: "" }); setErrors({}); }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Clear Form
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}