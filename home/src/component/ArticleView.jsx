import React from "react";
import { useParams } from "react-router-dom";
import articlesData from "../js/articlesData";

const ArticleView = () => {
  const { articleId } = useParams(); // 獲取 URL 中的 articleId
  const article = articlesData.find((item) => item.id === parseInt(articleId)); // 找到對應文章

  if (!article) {
    return <p>文章不存在！</p>;
  }

  return (
    <div className="article-view">
      <div className="article-header">
        <img src={article.authorAvatar} alt="Author Avatar" className="author-avatar" />
        <h1 className="article-title">{article.title}</h1>
        <p className="article-category">分類：{article.category}</p>
        <p className="article-author">作者：{article.authorName}</p>
      </div>
      <div className="article-content">
        <img src={article.articleImage} alt="文章圖片" className="article-image" />
        <p>{article.preview}</p>
      </div>
      <div className="interaction-bar">
        {article.interactions.map((interaction, idx) => (
          <div key={idx} className="interaction-item">
            <img src={interaction.icon} alt={interaction.altText} />
            <span>{interaction.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleView;

