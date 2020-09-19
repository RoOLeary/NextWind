import React, { useState, useContext } from 'react'; 
import Nav from './../../components/nav';
import Footer from './../../components/footer';
import Modal from './../../components/modal';
import WorkItem from './../../components/workItem';
import { ModalContext } from './../../contexts/modalContext';
import { ModalContextProvider } from './../../contexts/modalContext';






const Work = () => {

    const ctx = useContext(ModalContext);

    let workItems = [
        {
            "title": 'Project 1 Name',
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Project 2 Name',
            "description": 'I started there as an puss and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Project 3 Name',
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Project 4 Name',
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Project 5 Name',
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Project 6 Name',
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        }
    ]


    let work = workItems.map((item, index) => {
        return(
            <WorkItem item={item} key={index} />
            )
        });

    return(
        <>
            <Nav />
            <div className="container mx-auto md:px-12">
                
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-12 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-12 hover:opacity-50">
                            Work
                        </h1>
                        <div className="font-serif leading-loose tracking-wide text-base md:text-lg text-black opacity-50 max-w-lg md:ml-64 mb-8"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel venenatis velit. Donec placerat, quam eu fermentum vestibulum, justo felis accumsan metus, eget mollis est nibh in sapien. </p></div>
                        <div className="font-serif leading-loose tracking-wide text-base md:text-lg text-black opacity-50 max-w-lg md:ml-64 mb-8"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel venenatis velit. Donec placerat, quam eu fermentum vestibulum, justo felis accumsan metus, eget mollis est nibh in sapien. </p></div>
                        
                        <div className="flex flex-wrap -mx-4 text-left">
                            {work ? work : 'Nothing here. '}
                        </div>
                       
                    </div>
                </article>
            </div>
            <Modal />
            <Footer />
        </>
    );
}

export default Work; 