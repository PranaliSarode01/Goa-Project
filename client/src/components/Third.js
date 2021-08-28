import React from 'react'

const Third = () => {
    return (
      
      <>
        <div className="md:flex md:flex-row">
        <div className="bg-brand-ORANGE h-full w-40"></div>
        <img src="/images/p10.jpg" width={800} height={1400} className="rounded-3xl md:ml-16 "/>
        
        <div class=" w-full md:px-20 xl:my-16 space-y-12 bg-brand-GREY pb-10">
            <h1 className="my-10 md:text-8xl text-5xl font-bold text-brand-GREEN ml-3 pt-3 font-ciber-baskerville ">About Us</h1>
            <p className="text-gray-600 md:text-3xl text-2xl my-4 ml-3 font-CABIN font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            massa duis a lectus justo a. Non massa sodales quisque
            neque, sollicitudin neque vestibulum. Odio lorem a fames
            quisque eget egestas in phasellus lectus. Lacus,  </p>

            <p className="text-gray-600 md:text-3xl text-2xl my-4 ml-3 font-CABIN font-medium">
            pellentesque in ipsum nibh tempus, ut non. Dolor at vitae,
            fusce laoreet cursus urna tortor. Malesuada vulputate id nunc
            arcu id consequat, elit tellus. 
            </p>
            <button className=" bg-brand-GREEN text-white text-2xl p-3 w-96 font-bold rounded-xl">Contact Us</button>
          </div>
          </div>

        </>
    )
}

export default Third
