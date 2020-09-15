import React from 'react'; 
import Fullbody from './../../components/fullbody'
import Nav from './../../components/nav'

function Blog({ posts }){
  return (
    <>
    <Nav />
    <ul className="p-12">
      {posts.map((post, i) => (
        <li className="pb-4" key={i}>
            <h3 className="text-bold pb-2 text-2xl"><strong>{post.title}</strong></h3>
            <p>{post.article_content}</p>
        </li>
      ))}
    </ul>
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
  console.log(posts);
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
