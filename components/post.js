import Link from 'next/link';

export default function Post({ post }) {
    const { title, content, slug } = post;
    return (
      <li className="Card">
          <Link href={`/blog/${slug}`}>
            <a>
                <h1 className="Card--title">
                {title.rendered}
                </h1>
            </a>
        </Link>
      </li>
    );
  }
  