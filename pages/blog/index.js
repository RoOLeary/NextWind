import React from 'react'; 
import Fullbody from '../../components/fullbody'
import Form from '../../components/form'
import Layout from '../../components/layout'
import Link from 'next/link'
import { useState } from 'react'


function Blog({ allPosts }){

    let [pageIndex, setPageIndex] = useState(2)
    const [posts, setPosts] = useState(allPosts)

   
	
	const morePosts = async (e) => {
        e.preventDefault();
        console.log(pageIndex + 1);
        setPageIndex(pageIndex + 1);
        
        const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?page=${pageIndex}`);
        const newPosts = await res.json();
        setPosts([...posts, ...newPosts]);
	}
	
  return (
    <Layout>
        <div className="container mx-auto md:px-12">
            <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-12 hover:opacity-50">
                            BLOG
                        </h1>
                        <div className="max-w-xl font-serif leading-loose tracking-wide text-lg text-black mb-12 format-content">
                            <ul>
                            
                                {posts.map((post, idx) => {
                                    return (
                                    <li key={idx}>
                                        <Link href={`/blog/${post.slug}`}>
                                            <a>{post.title.rendered}</a>
                                        </Link>
                                    </li>);
                                })}
                               
                            </ul>
                        </div>
                        <a className="btn" onClick={morePosts} data-page={pageIndex}>LOAD MORE</a>
                    </div>
            </article>
        </div>
    </Layout>
  )
}


export async function getStaticProps(){

    const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts`);
	const allPosts = await res.json()
    // Pass post data to the page via props
	return { 
		props: { allPosts }
	}

};

export default Blog
