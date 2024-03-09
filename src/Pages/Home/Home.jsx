import React from "react";
import { Link } from "react-router-dom";
import RelsList from "../../Components/RelsList/RelsList";
import Rels from "../../Components/Rels/Rels";
import User from "../../Components/Lib/Icons/User";

import "./Home.scss";

const Home = () => {
  const [relsTop, setrelsTop] = React.useState([]);
  const [relsRecommended, setrelsRecommended] = React.useState([]);
  const [relsBottom, setrelsBottom] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await response.json();

      if (data) {
        setrelsTop(data.slice(0, 8));
        setrelsRecommended(data.slice(0, 7));
        setrelsBottom(data.slice(0, 8));
      }
    })();
  }, []);

  return (
    <section className="home">
      <div className="home__top">
        <div className="home__top__inner">
          <User className="home__top__image" width={50} height={50} />

          <Link className="home__top__link" to={"/channel/1"}>
            Dollie Blair
          </Link>
        </div>

        <RelsList className={"posts"}>
          {relsTop.length > 0 && relsTop.map((post) => <Rels key={post.id} post={post} />)}
        </RelsList>
      </div>

      <div className="home__recommended">
        <div className="home__recommended">
          <h2 className="home__recommended__title">Recommended</h2>

          <RelsList className={"recommended"}>
            {relsRecommended.length > 0 &&
              relsRecommended.map((post) => <Rels key={post.id} post={post} />)}
          </RelsList>
        </div>
      </div>

      <div className="home__bottom">
        <div className="home__bottom">
          <h2 className="home__bottom__title">Food & Drink</h2>

          <RelsList className={"bottom"}>
            {relsBottom.length > 0 &&
              relsBottom.map((post) => <Rels key={post.id} post={post} />)}
          </RelsList>
        </div>
      </div>
    </section>
  );
};

export default Home;
