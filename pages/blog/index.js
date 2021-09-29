import React from 'react'; 
import Fullbody from '../../components/fullbody'
import Form from '../../components/form'
import Layout from '../../components/layout'
import Link from 'next/link'
import { useState, useEffect } from 'react'


function Blog({ allPosts }){

    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState(allPosts)
    const [loading, setLoading] = useState(false)

    const handleLoadMore = () => {
        setPage(page => page + 1);
        // console.log(`page has updated. Count is now: ${page}`)
    };	

    useEffect(() => {
        (async () => {
            if(page > 1){
                const response = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?page=${page}`);
                const newArticles = await response.json()
                setPosts((posts) => [...posts, ...newArticles]);
            }
        })()
    }, [page])
	
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
                                {loading ? 'Loading' : ''}
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
                        <button className="btn" onClick={handleLoadMore} data-page={page}>LOAD MORE</button>
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
