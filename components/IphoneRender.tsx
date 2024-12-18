import React from 'react'

export default function IphoneRender() {
  return (
    <div className="relative w-full max-w-[300px] h-[600px] mx-auto md:mx-0">
      <div className="absolute inset-2 bg-black rounded-[54px] overflow-hidden">
        <iframe 
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYJA0BpfltOPjaWMF8MEDxq%2FARTEMIS-Basic-Demo%3Ftype%3Ddesign%26node-id%3D2046-1157%26t%3DvHkMzdt4PCXBGHoA-1" 
          className="w-[120%] h-[120%] -ml-[10%] -mt-[10%]"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute top-0 left-1/2 w-1/3 h-[30px] bg-black rounded-b-[16px] transform -translate-x-1/2"></div>
    </div>
  )
}

