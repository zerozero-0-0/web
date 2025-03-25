import { Link } from "react-router";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <ul className="header__contents">
          <li>
            <a href="/">
              <span>ホーム</span>
            </a>
          </li>
          <li>
            <a href="/develop">
              <span>開発録</span>
            </a>
          </li>
          <li>
            <Link to="/comp_prog">
              <span>競プロ</span>
            </Link>
          </li>
          <li>
            <Link to="/access">
              <span>アクセス</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
