"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { User } from "lucide-react";

function slugify(title: string) {
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

export default function BlogBySlug() {
  const { slug } = useParams();
  const [post, setPost] = useState<any | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch("http://localhost:4000/Blogs")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((blog: any) => slugify(blog.title) === slug);
        setPost(found); // could be undefined if not found
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false); // even on error, stop loading
      });
  }, [slug]);

  if (isLoading) return <p className="text-center mt-10">Loading Blog...</p>;

  if (!post) return <p className="text-center mt-10">Blog Not Found</p>;

  return (
    <div className="w-[800px] h-[800px] mx-auto my-10 p-4 shadow-lg rounded-lg">
      <Image
        className="w-full mb-4 rounded"
        src={post.coverImage}
        quality={75}
        alt="Blog image"
        width={800}
        height={500}
      />
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="flex justify-between text-gray-700 text-base">
        <div className="flex justify-end text-gray-700 text-base">
          <User className="mt-1 w-4 h-4 mr-1" />
          <span>{post.author}</span>
        </div>
        <div className="inline-block text-gray-700 text-base">
          {<FormattedDate dateString={post.created_at} />}
        </div>
      </div>
      <p className="text-base text-gray-800 whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
}
