import React, { useState } from "react";
import { UserPlus } from "lucide-react";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    department: "",
    motivation: "",
    experience: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting application..." });

    try {
      const response = await fetch('http://localhost:5000/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Application submitted successfully!" });
        setFormData({
          name: "",
          email: "",
          year: "",
          department: "",
          motivation: "",
          experience: ""
        });
      } else {
        setStatus({ type: "error", message: "Failed to submit application. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
      console.error("Submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.message && (
        <div className={`p-4 rounded-md ${
          status.type === "success" ? "bg-green-800/50 text-green-200" : 
          status.type === "error" ? "bg-red-800/50 text-red-200" : ""
        }`}>
          {status.message}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Full Name
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
          Year of Study
        </label>
        <input
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          min="1"
          max="4"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Department
        </label>
        <input
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Why do you want to join CodeStorm?
        </label>
        <textarea
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          rows={4}
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Previous coding experience (if any)
        </label>
        <textarea
          className="w-full px-4 py-2 bg-storm-dark border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
          rows={4}
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon text-black bg-neon hover:bg-neon-dark disabled:opacity-50"
      >
        <UserPlus className="w-4 h-4 mr-2" />
        {status.type === "loading" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default JoinForm;