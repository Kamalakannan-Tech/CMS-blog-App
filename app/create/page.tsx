"use client";

import React, { useState } from "react";
import { Save } from "lucide-react";
import { toast } from "react-toastify";

function Page() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    coverImage: "",
    content: "",
    created_at: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogWithDate = {
      ...formData,
      created_at: new Date().toISOString(), // 👈 Adds current timestamp
    };

    try {
      const res = await fetch("http://localhost:4000/Blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogWithDate),
      });

      if (res.ok) {
        toast.success("Blog uploaded successfully!");
        setFormData({
          title: "",
          author: "",
          coverImage: "",
          content: "",
          created_at: "",
        });
      } else {
        toast.error("Blog not uploaded!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Blog not uploaded!");
    }
  };

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
        title="Create New Post"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Post title..."
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="author"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name..."
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="coverImage"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cover Image (Optional)
          </label>
          <input
            type="url"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://example.com/image.png"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={8}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your post content here..."
            required
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="flex justify-end bg-gradient-to-r from-indigo-500 to-blue-500 hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <Save className="mt-1 w-4 h-4 mr-2" />
            <span>Publish Post</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
