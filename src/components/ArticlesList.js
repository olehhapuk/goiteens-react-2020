function ArticlesList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.objectID}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ArticlesList;
