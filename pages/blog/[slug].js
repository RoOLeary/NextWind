import React from 'react'; 
import Layout from '../../components/layout'

const Post = ({ post }) => {

    
    
    // let post = article;

    // console.log(post[0].title.rendered);
   

    return(
        <Layout>
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black text-gray-800 tracking-widest leading-tight mb-4 hover:opacity-50">
                          {post[0].title.rendered}
                        </h1>
                        <small><strong>By Ro</strong></small>
                        <img src="//placedog.net/1200/350" className="mx-auto mt-4" />
						<div className="max-w-m font-serif leading-loose tracking-wide text-lg text-black mt-6 mb-12 format-content" dangerouslySetInnerHTML={{ __html : post[0].content.rendered }} />
                    </div>
                </article>
            </div>
        </Layout>
        )
    }
      

    // This function gets called at build time
    export async function getStaticPaths() {
    
        const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts`)
        const posts = await res.json();
        // Get the paths we want to pre-render based on posts
        const paths = posts.map((post) => ({
        params: { slug: post.slug.toString() },
        }));
        // We'll pre-render only these paths at build time.
        return { paths, fallback: false };
    }

    // This also gets called at build time
    export async function getStaticProps({ params }) {
        const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?slug=${params.slug}`);
        const post = await res.json();
      
        return {
            props: { 
               post
            },
        };
    }

      
export default Post;


