import React from "react";
import { Context } from "../Context/REact";

const useHok = () => {
  const ctx = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useHok;
