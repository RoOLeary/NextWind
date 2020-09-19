import React from 'react'; 
import Nav from '../../components/nav'
import Footer from '../../components/footer'

const Post = (props) => {

    //  console.log(props.post[0].title);

    return(
        <>
            <Nav />
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-4 hover:opacity-50">
                           {props.post[0].title}
                        </h1>
                        <small><strong>By {props.post[0].created_by.firstname}, {new Date(props.post[0].created_at).toLocaleString()}</strong></small>
                        <img src="//placedog.net/1200/350" className="mx-auto mt-4" />
						<div className="max-w-m font-serif leading-loose tracking-wide text-lg text-black mt-6 mb-12 format-content">
                        {props.post[0].body}
                    </div>
                </div>
                </article>
            </div>
            <Footer />
        </>
    )
}


// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:1337/articles')
    const posts = await res.json()
    console.log('liad');
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:1337/articles?slug=` + params.slug)
    const post = await res.json()
    console.log(post);
    // Pass post data to the page via props
    return { props: { post } }
  }
  

export default Post;


