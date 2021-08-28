import React from 'react'

function First() {
    return (
        <>
        <div class='text-left h-screen bg-fixed bg-cover bg-no-repeat text-white relative' style={{backgroundImage: "url('/images/p1.jpg')"}}>
            <div className="text-center justify-center pt-72 space-y-10">
            <h1 class="md:text-8xl text-5xl">Js</h1>
            <h1 class="md:text-7xl font-medium text-2xl">Lorem ipsum dolor sit amet,<br></br>
             consectetur adipiscing elit.</h1>
            <h1 class="md:text-4xl text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>    
            </div>
        </div>
        <div className=" bg-brand-ORANGE h-8 w-full"></div>
            <div className=" shadow-xl md:m-32 p-2 flex md:flex-col flex-col md:h-96 space-y-20 pt-20 bg-brand-GREY rounded-xl md:-mt-40 relative">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 w-auto">
            <div className="flex flex-col md:justify-start justify-center md:items-start items-center mx-auto">
            <h1 className=" text-2xl p-1 text-gray-600">Check In Date</h1>
        <div>
            <i class="fas fa-calendar-alt text-2xl pl-4 absolute text-center h-7 w-7 mt-3 text-brand-GREEN"></i>
            <input className="p-4 border-2 border-brand-ORANGE rounded-xl"></input>
        </div>
        </div>
        <div className="flex flex-col md:justify-start justify-center md:items-start items-center mx-auto">
            <h1 className="text-2xl p-1 text-gray-600">Check In Date</h1>
        <div>
            <i class="fas fa-calendar-alt text-2xl pl-4 absolute text-center h-7 w-7 mt-3 text-brand-GREEN"></i>
            <input className="p-4 border-2 border-brand-ORANGE rounded-xl"></input>
        </div>
        </div>
        <div className="flex flex-col justify-start md:items-start items-center mx-auto">
            <h1 className="text-2xl p-1 text-gray-600">Members</h1>
        <div>
            <input className="p-4 border-2 border-brand-ORANGE rounded-xl"></input>
            <i class="fas fa-angle-down text-3xl -m-10 absolute mt-3 text-center text-brand-GREEN"></i>
        </div>
        </div> 
        <div className="flex flex-col justify-start md:items-start items-center mx-auto overflow-hidden">
            <h1 className=" text-2xl p-1 text-gray-600">Rooms</h1>
        <div>
            <input className="p-4 border-2 border-brand-ORANGE rounded-xl"></input>
            <i class="fas fa-angle-down text-3xl -m-10 absolute mt-3 text-center text-brand-GREEN"></i>
        </div>
        </div>
        </div>
        <div className="flex flex-row w-full text-2xl justify-center items-center pb-8">
            <button className=" bg-brand-GREEN text-white rounded-xl p-4 w-96 font-medium ">Check Availability</button>
        </div>
        </div>
        </>
    
    )
}

export default First
