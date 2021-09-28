import React from 'react'; 
import Layout from '../../components/layout'
import getConfig from 'next/config';

const Post = ({ article }) => {

    
    
    console.log(article);
   

    return(
        <Layout>
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-4 hover:opacity-50">
                          Article Title
                        </h1>
                        <small><strong>By Ro</strong></small>
                        <img src="//placedog.net/1200/350" className="mx-auto mt-4" />
						<div className="max-w-m font-serif leading-loose tracking-wide text-lg text-black mt-6 mb-12 format-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum neque vitae semper blandit. Praesent sodales at dui id viverra. Nulla erat felis, suscipit non mauris in, aliquam venenatis lorem. Nam quis fringilla lorem. Donec nisl erat, mollis a nunc vel, venenatis fringilla urna. Vivamus auctor aliquam ex. Nulla porttitor magna ligula, eget varius lectus imperdiet eu. In semper nibh est, sed fermentum sapien auctor in. Aenean orci quam, pellentesque vel sem ac, faucibus consectetur mauris. Aenean sit amet consectetur lorem, mollis hendrerit odio. Vestibulum nec fringilla neque, et convallis erat. Sed vestibulum purus at odio interdum, eget bibendum nisi imperdiet. Duis vel laoreet dui. Phasellus varius pharetra dolor vel vehicula. Donec et malesuada ante, ut posuere lorem. Vestibulum et tellus vulputate neque elementum mattis.


                        </div>
                    </div>
                </article>
            </div>
        </Layout>
        )
    }




export default Post;


