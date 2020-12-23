import React from 'react'; 
import Fullbody from '../../components/fullbody'
import Form from '../../components/form'
import Layout from '../../components/layout'
import Link from 'next/link'
import { useState } from 'react'

let initialState = {
	page: 1
}


function Blog({ posts }){

	const [page, setPage] = useState(initialState.page)
	console.log(posts);
	const psts = posts.map((post, i) => {
		return(
			<li className="pb-4" key={i}>
				{post.title.rendered}
			</li>
		)
	})


	const someShite = () => {
		setPage(page + 1)
		console.log('Example:', 'https://api.exampple.com/endpoint?' + page);
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
									
									{posts.map((post, i) => {
										return(
                                        <li className="pb-4" key={i}>
											<Link href={`/blog/${post.slug}`}>
												<a>
													<h3 className="text-bold pb-2 text-2xl"><strong>{post.title.rendered}</strong></h3>
												</a>
											</Link>
											<p dangerouslySetInnerHTML={{ __html:post.excerpt.rendered }} />
										</li>
										)
									})}
									</ul>
								</div>
								<a className="btn" onClick={someShite} data-page={page}>LOAD MORE</a>
							</div>
					</article>
			</div>
		</Layout>
  )
}


export const getServerSideProps = async () => {

  const res = await fetch(`http://localhost:8000/wp-json/wp/v2/posts`);
	const posts = await res.json()
	// Pass post data to the page via props
	return { 
		props: { posts }
	}

};

export default Blog
