import "./About.css"

export const History = () => {
    return (
      <>
        <div className="description">
          <div className="description__content">
            埼玉大学工学部情報工学科2年生
            <br />
            同大学サークルのMaximumでプログラミングに取り組んでいます
            <br />
            特にWeb開発, 競技プログラミング, CTF (Capture The Flag), アプリ開発
            <br />
            に邁進しています
            <br />
            名前はZrzrだったりzerozeroだったりします
            <br />
            ありふれにありふれてる名前なのでアイコンで判別してくれるとありがたいです
            <br />
          </div>
        </div>

        <a
          href="https://x.com/AaWlEw3pl899167"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/logo-black.png" alt="twitter" />
        </a>

        <a
          href="https://github.com/zerozero-0-0"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/github-mark.svg" alt="github" />
        </a>

        <a
          href="https://atcoder.jp/users/zerozero_00"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/AtCoder_logo.png" alt="AtCoder" />
        </a>
      </>
    );
}