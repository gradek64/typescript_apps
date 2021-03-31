import { server } from '../config/config'
import ArticleList from '../components/ArticleList'
//custom 
import { PostResponse } from '../PostResponseAPI_type';
import { articles } from '../data';

interface HomePropsI { articles: PostResponse[] }

export default function Home({ articles }: HomePropsI) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

/**
 * 
 * If you export an async function called getStaticProps from a page, 
 * Next.js will pre-render this page at build time using 
 * the props returned by getStaticProps.
 * 
 * getStaticProps has to return object with props as required property
 * 
 * return {
 *  props: {object},
 *  revalidate?: number, (An optional amount in seconds after which a page re-generation )
 *  notFound? true (An optional boolean value to allow the page to return a 404 status)
 * }
 * 
 */
interface NextStaticPropObjReturn {
  props: HomePropsI
}
export const getStaticProps = async (): Promise<NextStaticPropObjReturn> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }