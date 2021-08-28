import React from 'react'

function Six() {
    return (
    <div>
        <div>
            <h1 className="md:text-8xl text-5xl text-brand-GREEN md:pl-16 pl-5 pt-10 font-ciber-baskerville font-bold">Gallery</h1>
        </div>  
        <div className="md:flex md:flex-row md:space-x-3 md:pl-16 pl-5 pt-5">
        <p className="md:text-2xl text-gray-500 text-2xl font-CABIN font-semibold"> Basic Overview of your Premises, Amenitites & the Great Goa.</p>
        <div className="space-x-6 md:pr-5 md:pl-96 flex-row flex">
        <i class="fas fa-angle-double-left text-white bg-brand-GREEN md:text-2xl md:w-10 hmd:-10 md:text-center"></i>
        <i class="fas fa-angle-double-right text-white bg-brand-GREEN md:text-2xl md:h-10 md:w-10 md:text-center" ></i>
        </div>
        </div> 
        
    <section>
    {/* <div className="md:flex flex-row-1 flex-col-2">     */}
     <div>
        <div class="md:grid md:grid-cols-2 md:grid-rows-1 pt-10 px-6">
        <img src="/images/p10.jpg" className="rounded-2xl"/></div>
        <div class="md:flex md:flex-row md:space-x-6 pt-4 px-6">
        <img src="/images/p3.jpg" className="rounded-2xl h-60 "/>
        <img src="/images/p3.jpg" className="rounded-2xl h-60 "/>
        </div>
     </div>
    {/* <div> */}
     {/* <div class="md:flex md:flex-row md:space-x-6 pt-4 px-6">
        <img src="/images/p3.jpg" className="rounded-2xl h-60 "/>
        <img src="/images/p3.jpg" className="rounded-2xl h-60 "/>
        </div>
        <div class="md:grid md:grid-cols-2 md:grid-rows-1 pt-10 px-6">
        <img src="/images/p10.jpg" className="rounded-2xl"/></div>
     </div>     
    </div> */}
    </section>

    </div>
        
        
    )
}

export default Six
