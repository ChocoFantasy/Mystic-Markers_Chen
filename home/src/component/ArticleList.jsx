import React, { useState } from "react";
import "../style.scss";

// ArticleList 組件
const ArticleList = ({ articles }) => {
  // 追蹤每個 interaction 的狀態
  const [interactions, setInteractions] = useState(
    articles.map((article) =>
      article.interactions.map((interaction) => ({
        ...interaction,
        isLiked: false, // 初始狀態為未按讚
      }))
    )
  );

  const handleInteractionClick = (articleIndex, interactionIndex) => {
    setInteractions((prevInteractions) =>
      prevInteractions.map((articleInteractions, idx) =>
        idx === articleIndex
          ? articleInteractions.map((interaction, i) =>
              i === interactionIndex
                ? {
                    ...interaction,
                    isLiked: !interaction.isLiked, // 切換按讚狀態
                    count: interaction.isLiked
                      ? interaction.count - 1 // 若已按讚，數字減 1
                      : interaction.count + 1, // 若未按讚，數字加 1
                  }
                : interaction
            )
          : articleInteractions
      )
    );
  };

  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <article className="article-card" key={index}>
        
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
                        
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); // 防止頁面跳轉
                            handleInteractionClick(index, idx);
                          }}
                        >
                          <img
                            src={
                              interactions[index][idx].isLiked
                                ? interaction.filledIcon // 按讚後的圖案
                                : interaction.icon // 初始未按讚的圖案
                            }
                            alt={interaction.altText}
                          />
                        </a>
                        <span>{interactions[index][idx].count}</span>
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
