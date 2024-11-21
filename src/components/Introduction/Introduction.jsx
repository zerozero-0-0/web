import React from "react";

// css
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="Header">
        <div className="frontfont">自己紹介</div>
        <div className="backfont"> Self-Introduction</div>
      </div>
      <br />
      <div className="textBox">
        私は
        <a
          href="https://www.saitama-u.ac.jp/engineering/"
          target="_blank"
          rel="noopener noreferrer"
          className="su"
        >
          埼玉大学工学部情報工学科
        </a>
        に所属しているぜろぜろ(Zerozero)です.
        <br />
        同大学プログラミングサークル
        <a
          href="https://maximum.vc/"
          target="_blank"
          rel="noopener noreferrer"
          className="atcoder"
        >
          maximum
        </a>
        で活動をしています.
        <br />
      </div>
      <br />
      <ul>
        現在は,
        <li>AtCoderで入緑(レーティング800以上)</li>
        <li>TOEIC スコア730</li>
        <li>様々なプログラミング言語の習得</li>
        <li>共同開発</li>
        <br />
        などを目指して活動を行っています．
      </ul>
      <br />
      <div className="languages">
        <div className="column">
          <div className="container html">
            <div className="languageName">HTML</div>
            <div className="languageContent">
              前サイト
              <a href="https://zerozero-0-0.github.io">
                https://zerozero-0-0.github.io
              </a>
              で使用しました．
            </div>
          </div>
          <div className="container css">
            <div className="languageName">CSS</div>
            <div className="languageContent">
              前サイト, 今サイトで使用しています．
            </div>
          </div>
        </div>
        <div className="column">
          <div className="container javascript">
            <div className="languageName">JavaScript</div>
            <div className="languageContent">
              ReactやNext.jsで使用しています
            </div>
          </div>
          <div className="container cpp">
            <div className="languageName">C++</div>
            <div className="languageContent">
              競技プログラミングで使用しています．
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;