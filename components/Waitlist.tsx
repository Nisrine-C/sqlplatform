import React, { useState } from "react";
import { Mail, User, Phone, MapPin, ArrowRight } from "lucide-react";
import { Toaster, toast } from "sonner";
import CustomToast from "./CustomToast";

export function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "Australia",
    "Singapore",
    "Switzerland",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Austria",
    "Belgium",
    "Ireland",
    "New Zealand",
    "South Korea",
    "Hong Kong",
    "UAE",
    "Luxembourg",
    "Monaco",
    "Liechtenstein",
    "Iceland",
    "Malta",
    "Cyprus",
    "Estonia",
    "Latvia",
    "Lithuania",
    "Slovenia",
    "Czech Republic",
    "Slovakia",
    "Poland",
    "Hungary",
    "Croatia",
    "Romania",
    "Bulgaria",
    "Greece",
    "Portugal",
    "Spain",
    "Italy",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      /* const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast(data.error);
        return;
      }

      toast.custom((t) => (
        <div>
          <h1>Information Submitted</h1>
          <button onClick={() => toast.dismiss(t)}>Dismiss</button>
        </div>
      ));
      /*
      toast.success("Information Successfully Submitted", {
        description: "Thank you for joining the waitlist!",
      });*/
      toast.promise(
        fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).then(async (res) => {
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Something went wrong");
          }
          return res.json();
        }),
        {
          loading: "Loading...",
          success: (data) => (
            <div className="text-white ">
              <div className="font-bold text-lg">
                You've been added to the waitlist!
              </div>
              <div className="text-sm opacity-70">
                Thanks for your submission.
              </div>
            </div>
          ),
          error: (data) => (
            <div className="text-white">
              <div className="font-bold text-lg">Unexpected error!</div>
              <div className="text-sm opacity-70">{data.message}</div>
            </div>
          ),
        }
      );
      setFormData({ name: "", email: "", phone: "", country: "" });
    } catch (error) {
      toast("Failed to submit.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="waitlist-section"
      className="relative z-50  py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-900 "
    >
      <div className="relative max-w-4xl mx-auto z-50">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-gray-400 font-light mb-8">
            Join the next generation of quantitative trading. Get early access
            to CapQuant's institutional-grade platform.
          </p>
          <div className="relative inline-flex items-center space-x-2">
            <div className="absolute inset-0 bg-black rounded-full border border-black z-10"></div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 z-20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-light">
                Limited Pre-Launch Registration
              </span>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-lg p-8 border border-gray-800 z-50">
          <form onSubmit={handleSubmit} className=" space-y-6 z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-gray-600 focus:border-gray-600 transition-colors font-light"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-gray-600 focus:border-gray-600 transition-colors font-light"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>
            <Toaster position="bottom-center" closeButton={true} theme="dark" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-1 focus:ring-gray-600 focus:border-gray-600 transition-colors font-light"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light text-gray-300 mb-2">
                  Country
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-1 focus:ring-gray-600 focus:border-gray-600 transition-colors font-light appearance-none"
                    required
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="group w-full flex items-center justify-center space-x-3 py-4 bg-white text-black rounded-lg font-light hover:bg-gray-100 transition-all cursor-pointer duration-200 text-lg"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-light text-white mb-2">
                  Early Access
                </div>
                <div className="text-gray-400 text-sm font-light">
                  Be among the first to experience CapQuant
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-2">
                  No Commitment
                </div>
                <div className="text-gray-400 text-sm font-light">
                  Join the waitlist with no obligations
                </div>
              </div>
              <div>
                <div className="text-2xl font-light text-white mb-2">
                  Exclusive Updates
                </div>
                <div className="text-gray-400 text-sm font-light">
                  Get insider updates on platform development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
