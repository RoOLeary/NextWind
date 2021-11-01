export default function HomeAbout(){
    
    return(
        <div className="bg-gray-200 py-24 relative">
			
            <div className="relative mt-24 -mb-24 bg-black px-12 py-24 flex items-center">
                <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px", transform: "translateZ(0)"}}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-black fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                <div className="hidden md:block w-3/12"></div>
                <div className="flex-1 relative">
                    <div className="font-serif text-white opacity-75 text-base md:text-xl max-w-2xl leading-loose pb-12" data-aos='fade-up'>
                        <h2 className="text-white font-bold tracking-widest text-3xl pb-4">About Me</h2>
                        <p>Branding is the foundation of your business. A fantastic digital experience relies on the brand resonating perfectly with your target audience. We help businesses assert their position in their industry by providing a brand identity that's solid and memorable.</p>
                    </div>
                    <span className="absolute top-0 left-0 w-4 h-full bg-white opacity-50 -ml-20"></span>
                </div>
            </div>
           
            <br /><br />

            <div className="w-full h-auto border-black bg-white flex justify-end">
                <img src="https://ronan-oleary.com/wp-content/uploads/2021/09/ro-flip2.jpg" className="relative block w-full h-50 object-cover -mt-12" data-aos='fade-right' />
                <div className="w-64 bg-gray-800"></div>
            </div>


            <div className="bg-black px-12 py-24 flex items-center">
                <div className="hidden md:block w-3/12"></div>
                <div className="flex-1 relative" data-aos='fade-down'>
                    <div className="font-serif text-white opacity-75 text-base md:text-xl max-w-2xl leading-loose">
                        <h2 className="text-white font-bold tracking-widest text-3xl pb-4">What I do</h2>
                    </div>
                    <p className="font-serif text-gray-500 text-base md:text-xl max-w-2xl leading-loose">
                        I made my first website in 2008(!) and was hooked from the moment I hit save. Since then I have gained experience across an array of award-winning and globally recognised tech, media, events and advertising companies.<br />
                        These days, I build on top of the amazing Craft CMS and WordPress platforms, or with super-cutting edge stuff like React and my current favourite, Next.js.
                        <br /><br />
                        I'm highly proficient with HTML, JavaScript, PHP and specialise in developing (and scaling) CMS sites and applications (some of whom serve millions of users per month). Among my weapons of choice are Craft CMS, WordPress, Laravel, React, Vue, SCSS and Tailwind CSS.
                    </p>
                    <span className="absolute top-0 left-0 w-4 h-full bg-gray-300 -ml-20"></span>
                </div>
            </div>
 
        </div>
    );
}