import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

function Blogs(props) {
  return (
    <>
      <div className="w-[400px] h-[500px]  rounded-lg my-5 overflow-hidden shadow-lg group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
        <Image
          className="w-full group-hover:scale-105 transition-transform duration-300"
          src={props.image}
          width={100}
          height={100}
          quality={75}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxAQDxIQEBUXFBYVFx8iGR0iJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSX/2wBDARUVFRgaGRgaJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSX/wAARCAAPABADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAgMAAQQFBgf/xAAzEAABAwIDBQYGAwEBAAAAAAABAgMEAAUGBxESITEiURMiMkJRYXGRFDNSU3KRocH/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQECAwD/xAAiEQEBAAICAgIDAQAAAAAAAAAAAQIRAxIhMSIyQWFxIkH/2gAMAwEAAhEDEQA/AMkDhKQ8smQYuFzbcMEeE1k7Kx7WyI49TTW4kYZb6oKyaLtEC0Fz3cU9AOl5JkbiN4cUTJLi6t3UqxYW6+khqZ3TPDqVaZjdhRZ6WWqGHMeF5k3kltQr+VsmnW6/wBBJKUSMXB2CVfGPRc8o1uNlE1yUXcctTh0nQhxJRejGipKGCRXDzyqz/2Q=="
          alt="Blogs cover image"
        />
        <div className="px-6 py-4">
          <div className="flex justify-between text-gray-700 text-base">
            <div className="flex justify-end text-gray-700 text-base">
              <User className="mt-1 w-4 h-4 mr-1" />
              <span>{props.author}</span>
            </div>
            <div className="inline-block text-gray-700 text-base">
              {props.created_at}
            </div>
          </div>

          <div className="font-bold text-xl mb-2 group-hover:text-blue-500 line-clamp-2">
            {props.title}
          </div>
          <p className="text-gray-700 text-base leading-relaxed line-clamp-3 mb-4 ">
            {props.content}
          </p>
        </div>
        <div />
      </div>
    </>
  );
}

export default Blogs;
