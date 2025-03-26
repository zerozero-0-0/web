import { Routes, Route } from "react-router";
import { LinkType } from "../../../types/LinkType/LinkType";

export const LinksProvider = (Links: LinkType[]) => {
  return (
    <Routes>
      {Links.map(({ URL, ELEMENT }, index) => (
        <Route key={index} path={URL} element={ELEMENT} />
      ))}
    </Routes>
  );
};
