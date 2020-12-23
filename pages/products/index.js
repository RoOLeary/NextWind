import { useEffect } from 'react'
import Head from 'next/head';
import Link from 'next/link';

// data
// import { getAllProducts } from '../../lib/api';


const Products = (props) => (




  <div>
    <Head>
      <title>Products</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1>Latest Products</h1>
       <Link href={`/`}>
            <a>Home</a>
        </Link>
      <hr />
      <section>
        Products
      </section>
    </main>
  </div>

);




export default Products