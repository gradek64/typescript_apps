import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'
//custom 
import { PostResponse } from '../PostResponseAPI_type';
interface ArticleListI { articles: PostResponse[] }

const ArticleList = ({ articles }: ArticleListI) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList