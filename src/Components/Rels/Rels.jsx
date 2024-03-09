import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Rels.scss";

const Rels = ({ post }) => {
  const navigate = useNavigate();

  const replase = (evt) => {
    if (evt.target.className === "rels__bottom__text rels__bottom__link") return;

    navigate("/video/" + post.id);
  };

  return (
    <li className="rels">
      <div className="rels__inner" onClick={replase}>
        <img className="rels__image" src={post.url} alt={post.title} width={250} height={150} />

        <h3 className="rels__title" title={post.title}>
          {post.title}
        </h3>

        <div className="rels__bottom">
          <div className="rels__bottom__inner">
            <span className="rels__bottom__text">80k views</span>
            <span className="rels__bottom__text">3 days ago</span>
          </div>

          <Link className="rels__bottom__text rels__bottom__link" to={"/channel/1"}>
            Dollie Blair
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Rels;
