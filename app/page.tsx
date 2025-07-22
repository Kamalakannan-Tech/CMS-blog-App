"use client"
import Image from "next/image";
import Blogs from "../components/Blogs"
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs,setBlog]=useState(null);
  useEffect(
    ()=>{
      fetch("http://localhost:4000/Blogs")
      .then(Response =>{return Response.json()})
      .then(data=>setBlog(data))
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setBlog([]);
        }
  )
  },[])
  if (blogs === null) {
    return <p>Loading blogs...</p>; 
  }

  if (blogs.length === 0) {
    return <p>Failed to fetch data</p>; 
  }
  return (
  <>
    
    {blogs.map((blog) => (
      <Blogs key={blog.id} image={blog.image} title={blog.title} content={blog.body} />
    ))}
  </>
);
}
