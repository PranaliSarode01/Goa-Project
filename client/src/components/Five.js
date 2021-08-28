import React from 'react'

function Five() {
    return (
        <div>
        <div className=" bg-brand-GREY md:w-11/12 px-10 py-8 relative md:-mb-60 md:mt-20 mt-10" >
        <div className="space-y-8 font-bold ">
            <h1 className=" text-brand-GREEN md:text-7xl text-5xl font-ciber-baskerville">Restaurant</h1>
            <p className="md:text-3xl text-2xl text-gray-600 font-CABIN">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu curabitur nunc aliquet eu nulla risus
            mattis. Diam massa, mattis vestibulum aliquam nec pulvinar fusce nec. Dolor enim et et venenatis
            est habitant sit dictum aliquam. Cursus viverra nec metus elementum id erat lacus. Maecenas in
            urna non eu. Odio senectus placerat nisl augue consequat mauris sit fermentum tincidunt.</p>
            <p className="md:text-3xl text-2xl text-gray-600 font-CABIN">
            A laoreet luctus accumsan adipiscing urna, purus metus viverra scelerisque. At neque risus aliquam
            gravida enim sed convallis mauris. Etiam ipsum aliquam, ut eu lacus, vitae integer. Eu elit, at
            aliquam ut. Ut arcu egestas dignissim et purus nisl sit.</p>
            <p className="md:text-3xl text-2xl text-gray-600 font-CABIN"> Complmentary Breakfast will be available </p>
            </div>
        <div className="text-2xl md:text-3xl text-gray-600 flex flex-row md:space-x-28 space-x-20 font-semibold pt-6 font-CABIN">
            <h1>Mon-Fir</h1> 
            <h1>Sat-Sun</h1>
        </div>
        <div className="md:text-3xl text-2xl text-brand-GREEN flex flex-row space-x-10 font-medium">
            <h1>8am to 11am</h1> 
            <h1>9am to 1pm</h1>
        </div>
        </div>
        <div className=" bg-brand-ORANGE h-24 w-full"></div>
        <div>
        <img src="/images/p11.jpg" className=" w-screen h-96"/>
        </div>
        <div className="bg-brand-GREEN h-5 w-full"></div>
        </div>
    )
}

export default Five
