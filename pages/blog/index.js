import React, { useState, useEffect, useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import Layout from '../../components/layout';
import Post from "../../components/post";

const fetcher = url => fetch(url).then(res => res.json());
const PAGE_SIZE = 10;

export default function Blog() {
  
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    index =>
      `https://ronan-oleary.com/wp-json/wp/v2/posts?page=${index +
        1}`,
    fetcher,
  );


  // if (error) return <h1>Something went wrong!</h1>;
  // if (!data) return <h1>Loading...</h1>;



  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size


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
                                    {posts.map((post, idx) => (
                                        <Post post={post} key={idx} />
                                    ))}
     

                                </ul>
                                <br />
                                <button
                                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                                  disabled={isLoadingMore || isReachingEnd}
                                  onClick={() => setSize(size + 1)}>
                                  {isLoadingMore
                                      ? 'Loading...'
                                      : isReachingEnd
                                          ? 'No more posts'
                                          : 'Load More'}
                              </button>
                            </div>
                        </div>
                </article>
            </div>
        </Layout>
  );
}



// import { usePaginatePosts } from "../../hooks/useRequest"
// import Layout from '../../components/layout'
// import Post from "../../components/post";
// import { useState, useEffect } from 'react';

// export default function Blog() {
//   const [pageIndex, setPageIndex] = useState(0)
  
//   const {
//     posts,
//     error,
//     isLoadingMore,
//     size,
//     setSize,
//     mutate,
//     isReachingEnd,
//   } = usePaginatePosts("/posts")

//   useEffect(() => {
//      console.log(mutate);
//      console.log(isLoadingMore);
//   },[posts]);

//   if (error) return <h1>Something went wrong!</h1>
//   if (!posts) return <h1>LOADING POSTS...</h1>

//   return (
//       <Layout>

//         <div className="container mx-auto md:px-12">
//             <article className="relative z-10 w-full flex flex-wrap mb-24">
//                     <div className="w-full bg-white p-12 md:p-24 bg-white">
//                         <h1 className="text-2xl md:text-5xl font-black uppercase text-gray-800 tracking-widest leading-tight mb-12 hover:opacity-50">
//                             BLOG
//                         </h1>
//                         <div className="max-w-xl font-serif leading-loose tracking-wide text-lg text-black mb-12 format-content">
//                             <ul>
//                                 {posts.map((post, idx) => (
//                                     <Post post={post} key={idx} />
//                                 ))}

//                                 <button
//                                     disabled={isLoadingMore || isReachingEnd}
//                                     onClick={() => setSize(size + 1)}
//                                 >
//                                     {isLoadingMore
//                                     ? "LOADING..."
//                                     : isReachingEnd
//                                     ? "NO MORE POSTS"
//                                     : "LOAD MORE"}
//                                 </button>           
//                             </ul>
//                             {/* <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
//                             <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button> */}
//                         </div>
//                     </div>
//             </article>
//         </div>
//     </Layout>
   
//   )
// }
