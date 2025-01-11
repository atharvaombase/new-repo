import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Subject
        </label>
        <input
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      {status.message && (
        <div className={`text-sm ${status.type === "error" ? "text-red-500" : "text-green-500"}`}>
          {status.message}
        </div>
      )}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon text-black bg-neon hover:bg-neon-dark disabled:opacity-50"
      >
        <Send className="w-4 h-4 mr-2" />
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;