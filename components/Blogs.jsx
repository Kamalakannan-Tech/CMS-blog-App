import React from "react";
import Image from "next/image";
function Blogs(props) {
  return (
    <>
      <div className="max-w-sm rounded my-10 overflow-hidden shadow-lg">
        <Image
          className="w-full"
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
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.author}</p>
          <p className="text-gray-700 text-base leading-relaxed line-clamp-5 mb-4">
            {props.content}
          </p>
        </div>
        <div />
      </div>
    </>
  );
}

export default Blogs;
