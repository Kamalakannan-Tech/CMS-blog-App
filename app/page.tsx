"use client";
import Blogs from "../components/Blogs";
import Link from "next/link";
import { useEffect, useState } from "react";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
function FormattedDate({ dateString }) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <span>{formattedDate}</span>;
}

export default function Home() {
  const [blogs, setBlog] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/Blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setBlog([]);
      });
  }, []);

  if (blogs === null)
    return <p className="text-center mt-10">Loading blogs...</p>;
  if (blogs.length === 0)
    return <p className="text-center mt-10">Failed to fetch data</p>;

  return (
    <div className="flex flex-wrap justify-evenly mx-10">
      {blogs.map((blog) => (
        <Link
          key={blog.title}
          href={`/post/${slugify(blog.title)}`}
          className="mb-6"
        >
          <Blogs
            image={blog.coverImage}
            author={blog.author}
            title={blog.title}
            content={blog.content}
            created_at={<FormattedDate dateString={blog.created_at} />}
          />
        </Link>
      ))}
    </div>
  );
}
