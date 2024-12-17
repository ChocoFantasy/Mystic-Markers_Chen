import React from "react";
import "../style.scss";

// ArticleList 組件
const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <article className="article-card" key={index}>
          <a></a>
          <div className="article-content">
            {/* 作者區塊 + 更多選項 */}
            <div className="article-header">
              <div className="author-info">
                <img
                  src={article.authorAvatar}
                  alt="Author Avatar"
                  className="author-avatar"
                />
                <span className="author-name">{article.authorName}</span>
              </div>
              <button type="button" aria-label="更多選項">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="$primary-purple"
                >
                  <path d="M6 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
              </button>
            </div>
            {/* 文章內容 */}
            <div className="article-Graphics-text">
              <a href="#">
                <div className="left">
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-preview">{article.preview}</p>
                  {/* Icon 列表 */}
                  <div className="interaction-bar">
                    {article.interactions.map((interaction, idx) => (
                      <div className="interaction-item" key={idx}>
                        <a href="#">
                          <img
                            src={interaction.icon}
                            alt={interaction.altText}
                          />
                        </a>
                        <span>{interaction.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </a>

              <div className="right">
                <img
                  src={article.articleImage}
                  alt="Article"
                  className="article-image"
                />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
