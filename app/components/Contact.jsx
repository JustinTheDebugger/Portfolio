import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e37f2727-c9e4-4a48-b99a-90f2591cac9a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.error("Submission error:", data);
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-collectRoutesUsingEdgeRuntime.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className={`text-center mb-2 text-lg font-ovo`}>Connect with me</h4>
      <h2 className={`text-center text-5xl font-ovo`}>Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd like to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter youre message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-full md:w-max flex items-center justify-center
           gap-2 bg-black/80 text-white rounded-full mx-auto 
          hover:bg-black duration-500 cursor-pointer"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p
          className={`mt-4 text-center text-sm ${
            result?.toLowerCase().includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
