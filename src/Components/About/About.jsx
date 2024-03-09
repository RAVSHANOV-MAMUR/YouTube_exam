import React from "react";
import { Link, NavLink } from "react-router-dom";
import useHok from "../../Hooks/useHok";
import HomeIcon from "../Lib/Icons/Home";
import Subscription from "../Lib/Icons/Subscriptions";
import Trending from "../Lib/Icons/Trending";
import Library from "../Lib/Icons/Library";
import History from "../Lib/Icons/History";
import Watch from "../Lib/Icons/Watch";
import Favourites from "../Lib/Icons/Favourites";
import Likes from "../Lib/Icons/Likes";
import Music from "../Lib/Icons/Music";
import Games from "../Lib/Icons/Games";
import ArrowDown from "../Lib/Icons/ArrowDown";
import Settings from "../Lib/Icons/Settings";
import UserIcon from "../Lib/Icons/User";
// import { Language } from "../../Hooks/Localization";
// import { Context as LocalizationContext } from "../../Context/Theme";


import "./About.scss";

const About = () => {
  const [isOpen] = useHok();
  const [users, setUsers] = React.useState([]);
  // const [lang] = React.useContext(LocalizationContext)


  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await response.json();

      if (data) {
        setUsers(data.slice(0, 6));
      }
    })();
  }, []);

  return (
    <nav className={`about ${isOpen ? "about--open" : ""}`}>
      <ul className="about__list">
        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/"}>
            <HomeIcon />

            <span className="about__item__text">Home</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/trending"}
          >
            <Trending />

            <span className="about__item__text">Trending</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/subscriptions"}
          >
            <Subscription />

            <span className="about__item__text">Subscription</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/library"}
          >
            <Library />

            <span className="about__item__text">Library</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/history"}
          >
            <History />

            <span className="about__item__text">History</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/watch-later"}
          >
            <Watch />

            <span className="about__item__text">Watch later</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/favourites"}
          >
            <Favourites />

            <span className="about__item__text">Favourites</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/liked-videos"}
          >
            <Likes />

            <span className="about__item__text">Liked videos</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/music"}
          >
            <Music />

            <span className="about__item__text">Music</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/games"}
          >
            <Games />

            <span className="about__item__text">Games</span>
          </NavLink>
        </li>

        <li className="about__item">
          <NavLink
            className={({ isActive }) => `about__link ${isActive ? "about__link--active" : ""}`}
            to={"/more"}
          >
            <ArrowDown />

            <span className="about__item__text">Show more</span>
          </NavLink>
        </li>
      </ul>

      <div className="about__subscriptions">
        <h3 className="subscriptions__heading">Subscriptions</h3>

        <ul className="subscriptions__list">
          {users.length > 0 &&
            users.map((user) => (
              <li key={user.id} className="subscription">
                <Link className="subscription__link" to={"/channel/" + user.id}>
                  <UserIcon className="subscription__avatar" width={26} height={26} />
                  {user.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <button
        className="about__bottom__button nav__link">
        <Settings />
        <span className="about__button__text">Settings</span>
      </button>
    </nav>
  );
};

export default About;
