import { Link } from "react-router";
import "./LinkCard.css";
import { LinkType } from "../../types/LinkType/LinkType";

export const LinkCard = (OneLink: LinkType) => {
  return (
    <div className="linkcard">
      <div className="linkcard__title">{OneLink.Title}</div>
      <div className="linkcard__content">{OneLink.Description}</div>
      <Link to={OneLink.Url}>
        <img src={OneLink.Image} alt={OneLink.Title} />
      </Link>
    </div>
  );
};
