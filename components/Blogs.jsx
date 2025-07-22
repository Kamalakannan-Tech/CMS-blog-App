import React from 'react'

function Blogs(props) {
  return (
    <>
        <div className="max-w-sm rounded  overflow-hidden shadow-lg">
            <img className="w-full" src={props.image} alt="Sunset in the mountains"/>
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