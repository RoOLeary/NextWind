import Link from 'next/link';

export default function Post({ post }) {
    const { title, excerpt, slug } = post;
    
    return (
      <li className="Card">
          <Link href={`/blog/${slug}`}>
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
  