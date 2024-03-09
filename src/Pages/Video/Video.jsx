import React from "react";
import { useParams } from "react-router-dom";
import NextVideo from "../../Components/Vedeo/Vedeo";
import Like from "../../Components/Lib/Icons/Like";
import Dislike from "../../Components/Lib/Icons/Dislike";
import Share from "../../Components/Lib/Icons/Share";
import More from "../../Components/Lib/Icons/More";
import User from "../../Components/Lib/Icons/User";

import "./Video.scss";


const Video = () => {
  const { videoId } = useParams();

  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos?id=" + videoId);

      const data = await response.json();

      if (data) {
        setVideo(data[0]);
      }
    })();
  }, [videoId]);

  console.log();

  return (
    <section className="video">
      <div className="video__left">
        <img className="video__image" src={video.url} alt={video.title} width={1360} height={700} />

        <h2 className="video__heading">{video.title}</h2>

        <div className="video__info">
          <span className="video__info__count">123k views</span>

          <div className="video__info__inner">
            <ul className="video__info__list">
              <li className="video__info__item">
                <button className="video__info__button">
                  <Like />
                  <span className="video__info__text">123k</span>
                </button>
              </li>
              <li className="video__info__item">
                <button className="video__info__button">
                  <Dislike />
                  <span className="video__info__text">456k</span>
                </button>
              </li>
              <li className="video__info__item">
                <button className="video__info__button">
                  <Share />
                  <span className="video__info__text">Share</span>
                </button>
              </li>
            </ul>

            <button className="video__inner__button" name="more">
              <More />
            </button>
          </div>
        </div>

        <div className="video__bottom">
          <User className="video__bottom__avatar" width={80} height={80} />

          <div className="video__bottom__inner">
            <h3 className="video__bottom__heading">Dollie Blair</h3>

            <span className="video__bottom__text">Published on 14 Jun 2019</span>

            <p className="video__bottom__description">
              A successful marketing plan relies heavily on the pulling-power of advertising copy.
              Writing result-oriented ad copy is difficult, as it must appeal to, entice, and
              convince consumers to take action. There is no magic formula to write perfect ad copy;
              it is based on a number of factors, including ad placement, demographic, even the
              consumer's mood when they see your ad.
            </p>

            <button className="video__bottom__button" name="more">
              Show more
            </button>
          </div>

          
        </div>
      </div>

      <div className="video__right">
        <NextVideo />
      </div>
    </section>
  );
};

export default Video;
