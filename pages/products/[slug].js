import { useRouter } from 'next/router'; 
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/Layout'

// data
import { getAllProductsWithSlug, getProduct } from '../../lib/api';

// styles
import styles from '../../styles/Home.module.css';
import blogStyles from '../../styles/Blog.module.css';

export default function Product({ productData }) {


    // console.log(productData);
    
    const router = useRouter(); 
    if(!router.isFallback && !productData?.slug){
        return <p>Something's fucked</p>; 
    }

   
    return(

      <Layout>  
        <div className={styles.container}>
            <Head>
                <title>{productData.title}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
           <main className={styles.main}>
                <h1>{productData.name}</h1>
                FLPER
                <p>{productData.salePrice}</p> : ``} */}
                <Link href={`/cart/`}>
                    <a>Add to Cart</a>
                </Link>
                
                <Link href={`/products`}>
                    <a>Back to Product List</a>
                </Link>
                
            </main>

        </div>
      </Layout>
    );
}

