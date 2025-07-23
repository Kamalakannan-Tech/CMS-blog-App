import React from 'react'
import Image from 'next/image'
function Blogs(props) {
  return (
    <>
        <div className="max-w-sm rounded my-10 overflow-hidden shadow-lg">
            <Image className="w-full" src={props.image} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.content}
                    </p>
                </div>
            <div/>  
        </div>
    </>
  )
}

export default Blogs