import React from 'react'; 
import Fullbody from '../../components/fullbody'
import Form from '../../components/form'
import Layout from '../../components/layout'
import Link from 'next/link'
import { useState } from 'react'


function Blog({ allPosts }){

    const psts = allPosts;
    console.log(psts);
    let [page, setPage] = useState(20)
    const [posts, setPosts] = useState(psts)
	
	const morePosts = async (e) => {
        e.preventDefault();
        console.log(page + 10);
        setPage(page + 10);
        // console.log(page);
        const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?per_page=${page}`);
        const newPosts = await res.json();
        setPosts([...newPosts]);
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
                        <a className="btn" onClick={morePosts} data-page={page}>LOAD MORE</a>
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
