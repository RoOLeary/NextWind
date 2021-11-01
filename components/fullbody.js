import Aos from 'aos';
import React, { useEffect, useState } from 'react'; 
import Form from './form'
import Slider from './slider';
import HomeIntro from './homeintro'
import HomeAbout from './homeabout'

const Fullbody = () => {


	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		Aos.init()
	},[])

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		},2000)
	},[])


    return(
        <>

		
			<HomeIntro />
		
			<HomeAbout />

	
			<Slider />
			
			<div className="w-full h-24 border-black bg-white flex justify-end">
				<div className="w-64 bg-black"></div>
			</div>

			<div className="w-full flex items-center justify-start relative" data-aos='fade-up' data-aos-mirror='true'>
				<div className="w-auto md:w-3/12"></div>
				<div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
					<a href="/work" className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24">
						<h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">Work</h3>
						<p className="text-lg md:text-xl font-serif text-gray-400">Various projects, freelance builds, long term dev</p>
					</a>
					<img src="https://source.unsplash.com/1600x900/?website" className="absolute top-0 left-0 block w-full h-full object-cover" />
				</div>
				<div className="w-1/12 absolute top-0 right-0 h-full bg-black"></div>
			</div>

	
		<div className="w-full h-12 border-black bg-white flex justify-end">
			<div className="w-64 bg-black"></div>
		</div>
		
		<div className="w-full flex items-center justify-start relative" data-aos='fade-up' data-aos-mirror='true'>
				<div className="w-auto md:w-3/12"></div>
				<div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
					<a href="/blog" className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24">
						<h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">Words</h3>
						<p className="text-lg md:text-xl font-serif text-gray-400">Latest News and Ramblings</p>
					</a>
					<img src="https://source.unsplash.com/1600x900/?words" className="absolute top-0 left-0 block w-full h-full object-cover" />
				</div>
				<div className="w-1/12 absolute top-0 right-0 h-full bg-black"></div>
			</div>
		
		{/* <div className="w-full h-12 border-black bg-white flex justify-end">
			<div className="w-64 bg-black"></div>
		</div> */}

		{/* <div className="w-full flex items-center justify-start relative" data-aos='fade-up' data-aos-mirror='true'>
			<div className="w-auto md:w-3/12"></div>
			<div className="w-full md:w-8/12 bg-gray-100 py-12 relative flex">
				<a href="#" className="block relative z-10 bg-white h-full w-full px-12 md:px-0 md:w-6/12 py-24 md:-ml-24">
					<h3 className="mb-2 uppercase text-gray-800 text-3xl font-bold tracking-widest">TOOLS</h3>
					<p className="text-lg md:text-xl font-serif text-gray-400">Current Developments</p>
				</a>
				<img src="https://source.unsplash.com/1600x900/?code" className="absolute top-0 left-0 block w-full h-full object-cover" />
			</div>
		<div className="w-1/12 absolute top-0 right-0 h-full bg-black"></div> */}

		

		
	{/* </div> */}


	
	<div className="w-full h-12 border-black bg-white flex justify-end">
		<div className="w-64 bg-black"></div>
	</div>
	


	<div className="w-full flex items-center justify-start relative">
		<div className="w-1/12 absolute top-0 right-0 h-full bg-black"></div>
	</div>


	
	<div className="w-full h-24 border-black bg-white flex justify-end">
		<div className="w-64 bg-black"></div>
	</div>
	

	<div className="relative bg-black px-4 py-24 flex items-center">
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
	</footer>
	</>
    )
}

export default Fullbody;


