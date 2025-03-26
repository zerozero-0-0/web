import { AtCoderMemoExpansion } from "./Atcoder_memo_expansion/AtCoderMemoExpansion";
import { LinkType } from "../../types/LinkType/LinkType";
import { LinksProvider } from "../../utils/Provider/LinkProvider/LinkProvider";
import "./Projects.css";

const links: LinkType[] = [
  {
    TITLE: "AtCoder Memo Expansion",
    DESCRIPTION: "AtCoderのメモを拡張するツール",
    ELEMENT: <AtCoderMemoExpansion />,
    URL: "atcoder-memo-expansion",
    IMAGE: "/demo.png",
  },
];

export const Projects = () => {
  return (
    <div className="projects">
      {LinksProvider(links)}
      <div className="projects__intro">
        <div className="projects__intro__content">
          <p>ぜろぜろのプロジェクト</p>
          私が開発してきたものを紹介していきます。
        </div>
      </div>

      <div className="projects__links">

      </div>
    </div>
  );
};
