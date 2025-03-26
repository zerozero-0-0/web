import "./Access.css"

export const Access = () => {
  return (
    <div className="access">
      <div className="access__intro">
        <div className="access__intro__content">
          <p>ぜろぜろのアカウントへのリンク先</p>
        </div>
      </div>
      <div className="access_links">
        <ul>
          <li>
            <a
              href="https://x.com/AaWlEw3pl899167"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/logo-black.png" alt="twitter" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/zerozero-0-0"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/github-mark.svg" alt="github" />
            </a>
          </li>

          <li>
            <a
              href="https://atcoder.jp/users/zerozero_00"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/logo_transparent.png" alt="AtCoder" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
