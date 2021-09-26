import React, { useState, useContext } from 'react'; 
import Layout from './../../components/layout';
import Modal from './../../components/modal';
import WorkItem from './../../components/workItem';
import { ModalContext } from './../../contexts/modalContext';
import { ModalContextProvider } from './../../contexts/modalContext';

const Work = () => {

    const ctx = useContext(ModalContext);

    let workItems = [
        {
            "title": 'The Next Web',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'TNW Conference',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an puss and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Web Summit',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Algarve Music Series',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director and fluffer.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Isabel Vaz',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Ronan O\'Leary',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Trigger Media',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Bubbles and Bricks',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
            "description": 'I started there as an Assistant and finally got a promotion to the Marketing Director.',
            "image": 'https://source.unsplash.com/1600x900/?band,music',
        },
        {
            "title": 'Ronan O\'Leary',
            "excpert": "Lol, this is the excerpt where I will put some dummy text for the moment. Hurrah",
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
        <Layout>
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-12 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black text-gray-800 tracking-widest leading-tight mb-12 hover:opacity-50">
                            Work
                        </h1>

                        <div className="flex flex-wrap -mx-4 text-left">
                            {work ? work : 'Nothing here. '}
                        </div>
                        
                
                    </div>
                </article>
            </div>
            <Modal />
        </Layout>
    );
}

export default Work; 