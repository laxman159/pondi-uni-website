import React from "react";
import { useHistory } from "react-router-dom";
import FAQ from "../component/FAQ";

import Header from "../component/Header";

export default function Cn() {
  const history = useHistory().location.pathname;
  console.log(history);
  return (
    <div>
      <Header />
      <FAQ />
    </div>
  );
}
