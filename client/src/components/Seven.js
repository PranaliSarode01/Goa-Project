import React from 'react'

function Seven() {
    return (
     
        <div className="md:flex md:flex-col justify-center items-center md:w-full md:h-96 space-y-6 bg-brand-GREY p-5 mt-10">
        <div className="flex flex-col justify-center items-center max-w-4xl space-y-6 ">
            <h1 className="text-6xl text-brand-GREEN font-ciber-baskerville"><b>Contact Us</b></h1>
            <p className="text-center text-gray-500 justify-center p-5 text-2xl font-CABIN font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            In massa duis a lectus justo a. Non massa sodales quisque neque,  </p>
        </div> 
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3 justify-center items-center max-w-4xl">
            <input type="text" placeholder="Enter Your Email Here" className="p-5 w-full border-2 border-brand-GREEN rounded-xl" />
            <button className=" bg-brand-ORANGE mx-auto text-white font-bold p-5 w-80 focus:outline-none rounded-xl">
            Get In Touch
            </button>
       </div>
       </div>
       
    
    )
}

export default Seven
