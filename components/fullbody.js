import React, { useState } from 'react'; 
import Form from './form'

const Fullbody = () => {

    return(
        <>
       
        

	


	<div className="py-24 px-12 md:px-32">
		<div className="container mx-auto">
			<h1 className="text-2xl md:text-6xl font-black uppercase text-black tracking-widest leading-normal mb-12 pl-10">We Build The Web</h1>
			<div className="font-serif leading-loose tracking-wide text-base md:text-lg text-black opacity-50 max-w-xl md:ml-64">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel venenatis velit. Donec placerat, quam eu fermentum vestibulum, justo felis accumsan metus, eget mollis est nibh in sapien. </p>
			</div>
		</div>
	</div>
	
	

	<div className="bg-gray-200 py-24 relative">
		<div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px", transform:"translateZ(0)"}}>
			<svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
				<polygon className="text-gray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
			</svg>
		</div>
		<div className="w-full h-full top-0 left-0 absolute flex flex-col items-center justify-start"></div>
		<div className="container mx-auto px-12">
			<h2 className="text-black uppercase font-bold tracking-widest text-3xl pb-4">Just Announced</h2>
			<div className="relative z-10 w-full flex flex-wrap">
				
				<div className="md:mb-2 md:mb-0 w-full md:w-2/3 h-64 md:h-96 bg-black overflow-hidden relative">
					<img src="https://images.unsplash.com/photo-1545060894-7b45236d00b3?w=1200" alt="Citybrand Website Design by Digizu" className="w-full h-auto opacity-50" />
					<h2 className="text-white uppercase font-bold tracking-widest text-3xl absolute bottom-0 left-0 pl-10 pb-10">City Brand</h2>
				</div>
				<div className="flex-1 h-64 md:h-96 flex flex-wrap md:pl-1">
					<div className="w-1/2 h-1/2 md:px-1 md:pb-1">
						<img src="https://images.unsplash.com/photo-1545060894-7b45236d00b3?w=1200" alt="" className="px-6 bg-white w-full h-full object-contain filter-grayscale" />
					</div>
					<div className="w-1/2 h-1/2 md:px-1 md:pb-1">
						<img src="https://images.unsplash.com/photo-1545060894-7b45236d00b3?w=1200" alt="" className="w-full h-full object-cover filter-grayscale" />
						<h2 className="text-black">City Brand</h2>
					</div>
				</div>
			</div>
			<div className="relative z-10 w-full flex flex-wrap pb-12">
				<div className="w-full md:flex-1 h-64 md:h-96 flex flex-wrap md:pr-1">
					<div className="w-1/2 h-1/2 md:px-1 md:pb-1">
						<img src="https://placedog.net/1200/350" alt="" className="w-full h-full object-cover filter-grayscale" />
					</div>
					<div className="w-1/2 h-1/2 md:px-1 md:pb-1">
						<img src="https://placedog.net/1200/350" alt="TEST UNIT Branding Design by Digizu" className="w-full h-full object-cover filter-grayscale" />
					</div>
				</div>
				<div className="w-full md:w-2/3 h-64 md:h-96 bg-black overflow-hidden relative">
					<img src="https://placedog.net/1200/350" alt="TEST UNIT Design by Digizu" className="w-full h-auto opacity-50" />
					<h2 className="text-white text-right uppercase font-bold tracking-widest text-3xl absolute bottom-0 right-0 pr-10 pb-10">TEST UNIT</h2>
				</div>
			</div>
		</div>
		<div className="relative mt-24 -mb-24 bg-black px-12 py-24 flex items-center">
			<div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px", transform: "translateZ(0)"}}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-black fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div className="hidden md:block w-3/12"></div>
			<div className="flex-1 relative">
				<div className="font-serif text-white opacity-75 text-base md:text-xl max-w-2xl leading-loose">
					<h2 className="text-white uppercase font-bold tracking-widest text-3xl pb-4">About Us</h2>
					<p>Branding is the foundation of your business. A fantastic digital experience relies on the brand resonating perfectly with your target audience. We help businesses assert their position in their industry by providing a brand identity that's solid and memorable.</p>
				</div>
				<span className="absolute top-0 left-0 w-4 h-full bg-white opacity-50 -ml-20"></span>
			</div>
		</div>
	</div>
	<div className="w-full bg-white flex flex-wrap">	
		<div className="px-12 md:-px-0 w-full md:w-4/12 bg-white flex items-center justify-start md:justify-end">
			<div className="shadow-xl md:shadow-none sm:px-4 px-12 py-12 md:pl-36 md:pr-24 bg-white md:-mr-64 relative z-10">
				<h1 className="mb-8 text-3xl md:text-5xl text-black text-bold uppercase font-bold tracking-widest leading-tight">
					LATEST TOUR ANNOUNCEMENTS
				</h1>
				<h2 className="text-lg md:text-2xl font-serif text-gray-500">Exceptional Contemporary Living</h2>
			</div>
		</div>
		<div className="-mt-64 md:mt-0 w-full md:flex-1">
			<img src="https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=900&amp;ixid=eyJhcHBfaWQiOjF9&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=800" className="w-full h-full object-cover" />
		</div>
	</div>

	<div className="bg-black px-12 py-24 flex items-center">
		<div className="hidden md:block w-3/12"></div>
		<div className="flex-1 relative">
			<h2 className="mb-8 uppercase text-white text-2xl font-bold tracking-widest">Our Expertise</h2>
			<p className="font-serif text-gray-500 text-base md:text-xl max-w-2xl leading-loose">RJ Investments brings luxury living to the rental market through bespoke renovations, at affordable prices with quality property management.</p>
			<span className="absolute top-0 left-0 w-4 h-full bg-gray-300 -ml-20"></span>
	    </div>
    </div>
	
	<div className="w-full h-24 border-black bg-white flex justify-end">
		<div className="w-64 bg-black"></div>
	</div>

	<div className="w-full flex items-center justify-start relative">
		<div className="w-auto md:w-3/12"></div>
		<div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
			<a href="#" className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24">
				<h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">Shows</h3>
				<p className="text-lg md:text-xl font-serif text-gray-400">Completed Builds</p>
			</a>
			<img src="https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=900&amp;ixid=eyJhcHBfaWQiOjF9&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1200" className="absolute top-0 left-0 block w-full h-full object-cover" />
		</div>
		<div className="w-1/12 absolute top-0 right-0 h-full bg-black"></div>
	</div>

	
	<div className="w-full h-12 border-black bg-white flex justify-end">
		<div className="w-64 bg-black"></div>
	</div>
	

	<div className="w-full flex items-center justify-start relative">
		<div className="w-auto md:w-3/12"></div>
		<div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
			<a href="#" className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24">
				<h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">Artists</h3>
				<p className="text-lg md:text-xl font-serif text-gray-400">Current Developments</p>
			</a>
			<img src="https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=900&amp;ixid=eyJhcHBfaWQiOjF9&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1200" className="absolute top-0 left-0 block w-full h-full object-cover" />
		</div>

		<div className="w-1/12 absolute top-0 right-0 h-full bg-black"></div>
	</div>


	
	<div className="w-full h-12 border-black bg-white flex justify-end">
		<div className="w-64 bg-black"></div>
	</div>
	


	<div className="w-full flex items-center justify-start relative">
		<div className="w-1/12 absolute top-0 right-0 h-full bg-black"></div>
	</div>


	
	<div className="w-full h-24 border-black bg-white flex justify-end">
		<div className="w-64 bg-black"></div>
	</div>
	

	<div className="relative bg-black px-12 py-24 flex items-center">
		<div className="hidden md:block w-3/12"></div>
		<div className="relative flex flex-col min-w-0 break-words md:w-1/2 mb-6 shadow-lg bg-gray-300">
			<div className="flex-auto p-5 lg:p-10">
				<Form />
			</div>
		</div> 
	</div>
	
	<footer className="relative bg-gray-300 pt-8 pb-6">
		<div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px", transform: "translateZ(0)"}}>
			<svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
				<polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
			</svg>
		</div>
		<div className="container mx-auto px-4">
			<div className="flex flex-wrap items-center md:justify-between justify-center">
				<div className="w-full md:w-4/12 px-4 mx-auto text-center">
					<div className="text-sm text-gray-600 font-semibold py-1">Copyright © 2020 NextWind by <a href="https://ronan-oleary.com" className="text-gray-600 hover:text-gray-900">Ro</a>.
					</div>
				</div>
			</div>
		</div>
	</footer>
        </>
    )
}

export default Fullbody;


