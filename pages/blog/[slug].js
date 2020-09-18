import React from 'react'; 
import Nav from '../../components/nav'
import Footer from '../../components/footer'

const Post = ({ props }) => {


    console.log(props);

    return(
        <>
            <Nav />
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-12 hover:opacity-50">
                            FleshLight
                        </h1>
                    </div>
                    <div className="max-w-xl font-serif leading-loose tracking-wide text-lg text-black mb-12 format-content">
                        <p>Pellentesque congue sit amet urna feugiat accumsan. Pellentesque iaculis, augue vitae vehicula finibus, urna risus molestie massa, a volutpat mauris mi id erat. Donec malesuada justo eget ex accumsan bibendum. Phasellus arcu diam, tristique sit amet faucibus non, efficitur consequat est.</p>
                    </div>
                </article>
            </div>
            <Footer />
        </>
    )
}

export default Post;


