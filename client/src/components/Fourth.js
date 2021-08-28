import React from 'react'

function Fourth() {
    return (
        <>
        <div className="md:flex md:flex-row">
        <div class=" w-full md:px-20 xl:my-16 font-bold space-y-12 bg-brand-GREY pb-10 rounded-xl">
            <h1 className="my-10 md:text-8xl text-5xl font-bold text-brand-GREEN ml-3 font-ciber-baskerville">Conferences</h1>
            <p className="text-gray-600 md:text-3xl text-2xl my-4 ml-3 px-3 font-semibold font-CABIN">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In massa duis a lectus justo a. Non
            massa sodales quisque neque, sollicitudin neque
            vestibulum. Odio lorem a fames quisque eget
            egestas in phasellus lectus. Lacus, pellentesque in
            ipsum nibh tempus, ut non. Dolor at vitae, fusce
            laoreet cursus urna tortor.</p> 

            <p className="text-gray-600 md:text-3xl text-2xl my-4 ml-3 px-3 font-CABIN font-semibold">
            Malesuada vulputate id nunc arcu id consequat,
            elit tellus. Nulla est eu nisi, aliquam. Vulputate ut
            ut interdum risus elementum felis pretium, amet
            pulvinar. 
            </p> 
            <div className="text-right pb-10 pr-5">
            <button className=" border-brand-GREEN text-2xl font-extrabold text-brand-GREEN border-2 rounded-xl w-72 md:p-4 p-2"> See More</button>
        </div>
        </div>
            <img src="/images/p10.jpg" width={800} height={1400} className="rounded-2xl mr-16 md:mt-28 mt-10 relative md:-ml-20"/>
        </div>
        </>
    )
}

export default Fourth
