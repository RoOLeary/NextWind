import React from 'react'; 
import Fullbody from '../../components/fullbody'
import Form from '../../components/form'
import Layout from '../../components/layout'
import Post from '../../components/post'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useSWR, { useSWRInfinite } from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Blog({ allPosts }){
    const [page, setPage] = useState(1)
    const { data } = useSWR(`?page=${page}`, fetcher)
    const [posts, setPosts] = useState(allPosts)
    const [loading, setLoading] = useState(false)


    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };	
    
    
    
    
    useEffect(() => {
        (async () => {
            if(page > 1){
                setLoading(true);
                const response = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?page=${page}`);
                const newArticles = await response.json()
                setPosts([...posts, ...newArticles]);
                console.log(newArticles);
                setLoading(false);
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
                                {posts.map((post, idx) => {
                                    return (
                                    <Post post={post} key={idx} />
                                    );
                                })}
                               
                            </ul>
                        </div>
                        <button className="btn" onClick={handleLoadMore} data-page={page}>{loading ? 'LOADING...' : 'LOAD MORE'}</button>
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
