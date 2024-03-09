import React from "react";

import Rels from "../Rels/Rels";

import "./Vedeo.scss";

const Vedeo = () => {
  const [aVedeoo, setVedeo] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await response.json();

      if (data) {
        setVedeo(data.slice(0, 7));
      }
    })();
  }, []);

  return (
   
      <ul className="aVedeoo__list">
        {aVedeoo.length > 0 && aVedeoo.map((post) => <Rels key={post.id} post={post} />)}
      </ul>
    
  );
};

export default Vedeo;
