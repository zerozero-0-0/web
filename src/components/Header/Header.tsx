import { Link } from "react-router";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <ul className="header__contents">
          <li>
            <Link to="/">
              <span>ホーム</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>開発録</span>
            </Link>
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
