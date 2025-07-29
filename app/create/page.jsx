import React from "react";

function page() {
  return (
    <div className="w-full h-full">
      <form
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
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
            Author
          </label>
          <input
            type="author"
            id="author"
            name="author"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name..."
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cover Image &#40;Optional&#41;
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://example.com/image.png"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            type="content"
            id="content"
            name="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your post content here..."
            required
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
