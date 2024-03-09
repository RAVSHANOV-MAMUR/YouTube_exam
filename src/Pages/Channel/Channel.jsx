import React from "react";
import { useParams } from "react-router-dom";
import UserIcon from "../../Components/Lib/Icons/User";
import "./Channel.scss";

const Channel = () => {
  const { channelId } = useParams();

  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users?id=" + channelId);
      const data = await response.json();
      if (data) {
        setUser(data[0]);
      }
    })();
  }, [channelId]);

  return (
    <section className="channel">
      <img
        className="channel__banner"
        src={"https://images.squarespace-cdn.com/content/v1/611d60fe1bdfad3944022ea3/1676998176726-3H7Z60G98QEI4O8GAML6/image3.jpg"}
        alt="Pubg rasmi"
        width={1200}
        height={280}
      />

      <div className="channel__top">
        <div className="channel__top__inner">
          <UserIcon className="channel__top__avatar" width={80} height={80} />

          <div className="channel__top__info">
            <h2 className="channel__top__heading">{user.name}</h2>

            <span className="channel__top__text">245K subscribed</span>
          </div>
        </div>
        
      </div>

    </section>
  );
};

export default Channel;
