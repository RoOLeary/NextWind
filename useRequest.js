import useSWRInfinite from "swr/infinite";

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://ronan-oleary.com/wp-json/wp/v2";

export const usePaginatePosts = path => {
  if (!path) {
    throw new Error("Path is required")
  }
 
  const url = baseUrl + path
  const PAGE_LIMIT = 10

  const { data, error, size, setSize, isValidating, mutate} = useSWRInfinite(
    (index) => `${url}?page=${index + 1}&per_page=${PAGE_LIMIT}`,
    fetcher,
    { 
      persistSize: false,
      revalidateAll: true,
      initialSize: 1
    }
  )


  const posts = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT)

  console.log(error); 
  return { posts, error, isLoadingMore, size, setSize, isReachingEnd, isValidating, mutate }
}