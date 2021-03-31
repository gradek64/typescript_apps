import { server } from '../../../config/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={article.title} description={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

/**
 * 
 * If you export an async function called getStaticProps from a page, 
 * Next.js will pre-render this page at build time using 
 * the props returned by getStaticProps.
 * 
 * RETURN
 * getStaticProps has to return object with props as required property
 * 
 * return {
 *  props: {object},
 *  revalidate?: number, (An optional amount in seconds after which a page re-generation )
 *  notFound? true (An optional boolean value to allow the page to return a 404 status)
 * }
 * 
 * ARGS
 * getStaticProps(context?) takes optional context object
 * 
 * {
 *  params: {id}  ( If this page uses a dynamic route, params contains the route parameters.)
 *              If the page name is [id].js , then params will look like { id: ... }
 * }
 */


interface contextI {
  params: {
    id: number
  }
}
export const getStaticProps = async (context: contextI) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article: data,
    },
  }
}


/**
 *  (Static Generation)
 * If you export an async function called getStaticPaths 
 * from a page that uses dynamic routes, 
 * Next.js will statically pre-render 
 * all the paths specified by getStaticPaths.
 * 
 * RETURN 
 * 
 * return {
      paths: [
        { params: { id: '1' } },
        { params: { id: '2' } }
      ],
      fallback: ...
    }
 */

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article