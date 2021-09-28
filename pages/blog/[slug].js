import React from 'react'; 
import Layout from '../../components/layout'
import getConfig from 'next/config';

const Post = ({ article }) => {

    
    
    let post = article[0];
   

    return(
        <Layout>
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black text-gray-800 tracking-widest leading-tight mb-4 hover:opacity-50">
                          {post.title.rendered}
                        </h1>
                        <small><strong>By Ro</strong></small>
                        <img src="//placedog.net/1200/350" className="mx-auto mt-4" />
						<div className="max-w-m font-serif leading-loose tracking-wide text-lg text-black mt-6 mb-12 format-content" dangerouslySetInnerHTML={{ __html : post.content.rendered }} />
                    </div>
                </article>
            </div>
        </Layout>
        )
    }

    export const getServerSideProps = async ({ params: { slug } }) => {
        // params contains the post `id`.
        // If the route is like /posts/1, then params.id is 1
        const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?slug=${slug}`);
        const article = await res.json()
        
        // Pass post data to the page via props
        return { props: { article } }
      }
    

export default Post;


