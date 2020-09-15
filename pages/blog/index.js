import React from 'react'; 
import Fullbody from './../../components/fullbody'
import Nav from './../../components/nav'

function Blog({ posts }){
  return (
    <>
    <Nav />
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.Title} - {post.Description}</li>
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
  const res = await fetch('http://localhost:1337/products')
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
