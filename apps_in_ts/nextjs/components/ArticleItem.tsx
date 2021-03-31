import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

//custom 
import { PostResponse } from '../PostResponseAPI_type';
interface ArticleItemI { article: PostResponse }

const ArticleItem = ({ article }: ArticleItemI) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem