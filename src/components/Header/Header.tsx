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
            <a href="/"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
