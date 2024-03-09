import { Link } from "react-router-dom";
import Hamburger from "../Lib/Icons/Hamburger";
import Logo from "../Lib/Icons/Logo";
import Search from "../Lib/Icons/Search";
import Camera from "../Lib/Icons/Camera";
import User from "../Lib/Icons/User";
import Bell from "../Lib/Icons/Bell";
import React from "react";
import useTheme from "../../Hooks/useTheme";
import useHok from "../../Hooks/useHok";
// import { Language } from "../../Hooks/Localization";
// import { Context as LocalizationContext} from "../../Context/Localization";

import "./Header.scss";

const Header = () => {
  const [state, setState] = useHok();
  const [theme, setTheme] = useTheme();
  // const [lang, setLang] = React.useContext(LocalizationContext)
  
  return (
    <header className="header">
      <div className="container">
        <button className="header__button" name="hamburger" onClick={() => setState(!state)}>
          <Hamburger />
        </button>

        <Link className="header__link" to={"/"}>
          <Logo />
        </Link>

        <form className="header__form">
          <input className="header__form__input" type="text" placeholder="Search"/>

          <button className="header__form__button">
            <Search />
          </button>
        </form>

        <ul className="header__buttons">
          <li className="header__item">
            <button className="header__button">
              <Camera />
            </button>
          </li>

          <li className="header__item">
          {/* value={lang} onChange={(evt) => setLang(evt.target.value)} */}
          <select >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          </li>

          <li className="header__item">
            <button className="header__button">
              <Bell />
            </button>
          </li>
           
              <select className="select" >
                <option value="qora" onClick={() => (theme === "dark" ? setTheme("oq") : setTheme("dark"))}></option>
                <option value="oq" onClick={() => (theme === "dark" ? setTheme("oq") : setTheme("dark"))}></option>
              </select>        
        </ul>
        <button className="header__profile">
          <User width={40} height={40} />
        </button>
      </div>
    </header>
  );
};

export default Header;
