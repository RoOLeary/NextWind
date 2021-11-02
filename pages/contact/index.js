import React from 'react'; 
import Form from './../../components/form'
import Layout from './../../components/layout'
import Link from 'next/link';
function Contact(){

    return (
        <Layout>
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black text-gray-800 tracking-widest leading-tight mb-12">
                           Contact
                        </h1>
                        <div className="max-w-m font-serif leading-loose tracking-wide text-lg text-black mb-12 format-content">
                        <Form />
                    </div>
                </div>
                </article>
            </div>
            <Link href="/" to="/">Home</Link>
            <footer className="relative bg-gray-300 pt-8 pb-6">
                <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ height: "80px", transform: "translateZ(0)"}}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            
	        </footer>
        </Layout>  
    )
}

export default Contact; 