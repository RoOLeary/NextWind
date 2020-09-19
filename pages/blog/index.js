import React from 'react'; 
import Fullbody from '../../components/fullbody'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Form from '../../components/form'
import Link from 'next/link'

function Blog({ posts }){
	
	
  return (
    <>
    <Nav />
    
    <div className="container mx-auto md:px-12">
		<article className="relative z-10 w-full flex flex-wrap mb-24">
			<div className="w-full bg-white p-12 md:p-24 bg-white">
			<h1 className="text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-12 hover:opacity-50">
				BLOG
			</h1>
			<div className="max-w-xl font-serif leading-loose tracking-wide text-lg text-black mb-12 format-content">
				<ul>
				{posts.map((post, i) => (
					<li className="pb-4" key={i}>
						<Link href={`/blog/${post.slug}`}>
							<a>
								<h3 className="text-bold pb-2 text-2xl"><strong>{post.title}</strong></h3>
							</a>
						</Link>
						<small>By {post.created_by.firstname} on {new Date(post.created_at).toLocaleString()}</small>
						<p>{post.excerpt}</p>
					</li>
				))}
				</ul>
			</div>
			</div>
		</article>
	</div>
	
	<Footer />
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:1337/articles')
  const posts = await res.json()
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


// export async function getStaticPaths() {
// 	let paths = await fetch('http://localhost:1337/products')
// 	paths = paths.map(post => ({
// 	  params: { slug:post.id }
// 	}));
// 	return {
// 	  paths: paths,
// 	  fallback: false
// 	}
//   }


export default Blog
