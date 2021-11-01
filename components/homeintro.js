export default function HomeIntro() {

    return(
        <div className="py-24 px-12 md:px-32">
			<div className="container mx-auto">
				<h1 className="text-2xl md:text-6xl font-black  text-black tracking-widest leading-normal mb-12 pl-10">Hello There, I'm Ronan</h1>
				<div className="flex">
					<img className="starting-logo dark-version default-logo" alt="Ronan O'Leary" src="https://ronan-oleary.com/wp-content/uploads/2017/06/rosenberg.png" style={{ "height": "150px" }} />
					<div className="font-serif leading-loose tracking-wide text-base md:text-lg text-black opacity-50 max-w-lg md:ml-12">
						<p>I'm a versatile, experienced Web Developer and Producer, with 12 years professional experience crafting websites and applications, predominantly rooted in front-end engineering, but not shy of working with back-end languages, technologies and configurations.</p>
					</div>
				</div>
			</div>
		</div>
    )

}