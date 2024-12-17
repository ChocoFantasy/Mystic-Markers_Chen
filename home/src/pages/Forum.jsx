import React from "react";
import Navbar from "../component/Navbar";
import "../style.scss";
import ArticleList from "../component/ArticleList"; // 引入 ArticleList 組件
import articles from "../js/articlesData";

function Forum() {
  return (
    <>
      <section id="banner">
        <Navbar />
      </section>
      {/* 分類欄位 + 文章欄位 */}
      <div className="forum-container">
        {/* 外框架 */}
        <div className="forum-layout">
          {/* 分類欄位 */}
          <aside className="sidebar">
            <div className="sidebar-content">
              <nav className="category-board">
                <ul className="category-list" role="list">
                  <li className="category-item active" role="listitem">
                    <div className="list-item">
                      <div>
                        <img
                          src="../public/images/Forum/Forum_list-box.svg"
                          alt="AllList"
                        />
                      </div>
                      <p>所有看板</p>
                    </div>
                  </li>
                  <li className="category-item" role="listitem">
                    <div>
                      <img
                        src="../public/images/Forum/Forum-symbols-book-5.svg"
                        alt="AllList"
                      />
                    </div>
                    <p>都市傳說</p>
                  </li>
                  <li className="category-item" role="listitem">
                    <div>
                      <img
                        src="../public/images/Forum/Forum_building.svg"
                        alt="AllList"
                      />
                    </div>
                    <p>廢墟探險</p>
                  </li>
                  <li className="category-item" role="listitem">
                    <div>
                      <img
                        src="../public/images/Forum/Forum_movie.svg"
                        alt="AllList"
                      />
                    </div>
                    <p>恐怖獵奇</p>
                  </li>
                  <li className="category-item" role="listitem">
                    <div>
                      <img
                        src="../public/images/Forum/Forum_ghost-2.svg"
                        alt="AllList"
                      />
                    </div>
                    <p>恐怖作品</p>
                  </li>
                  <li className="category-item" role="listitem">
                    <div>
                      <img
                        src="../public/images/Forum/Forum_temple.svg"
                        alt="AllList"
                      />
                    </div>
                    <p>驅邪收驚</p>
                  </li>
                  <li className="category-item" role="listitem">
                    <div>
                      <img
                        src="../public/images/Forum/Forum_building.svg"
                        alt="AllList"
                      />
                    </div>
                    <p>我的收藏</p>
                  </li>
                </ul>
              </nav>
              <div
                className="ad-section"
                role="complementary"
                aria-label="廣告區域"
              >
                <img
                  className="ad-text"
                  src="../public/images/Forum/HORRO.svg"
                  alt="廣告"
                />
              </div>
            </div>
          </aside>
          {/* 發文欄位 */}
          <main className="main-content">
            <div className="top-bar">
              <div className="nav-buttons">
                <div>
                  <img src="../public/images/LOGO.png" alt="HIT" className="" />
                  <button className="nav-button" type="button">
                    熱門
                  </button>
                </div>
                <div>
                  <img
                    src="../public/images/LOGO.png"
                    alt="NEWS"
                    className=""
                  />
                  <button className="nav-button" type="button">
                    最新
                  </button>
                </div>
                <div>
                  <img
                    src="../public/images/LOGO.png"
                    alt="RULE"
                    className=""
                  />{" "}
                  <button className="nav-button" type="button">
                    發文規則
                  </button>
                </div>
              </div>
              <div className="search-bar" role="search">
                <input
                  type="search"
                  className="search-input"
                  placeholder="搜尋 民雄鬼屋"
                  aria-label="搜尋文章"
                />
                <button type="button" aria-label="搜尋">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="var(--Primary-Green)"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <ArticleList articles={articles} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Forum;
