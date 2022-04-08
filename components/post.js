import Link from 'next/link';

const Post = ({ post }) => {
    
    const { title, excerpt, slug } = post;
    // console.log(title);
    return (
      <li className="Card">
          <Link href={`/blog/${slug}`} as={`/blog/${slug}`}>
            <a>
                <h1 className="Card--title">
                    <strong>{title.rendered}</strong>
                </h1>
                <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            </a>
           
        </Link>
      </li>
    );
  }
  

  export default Post;