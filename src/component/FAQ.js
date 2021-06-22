import gsap from "gsap";
import React, { useEffect, useState } from "react";

export default function FAQ() {
  const [open, setopen] = useState(true);
  function handleClick() {
    setopen(!open);
  }

  const openAnim = gsap.fromTo(".anim", { height: 0 }, { height: "100%" });
  const closeAnim = gsap.fromTo(".anim", { height: "100%" }, { height: 0 });

  return (
    <div className="container">
      <div className="question">
        <h5>How does it work ?</h5>
        <button onClick={handleClick}>Open</button>
      </div>
      <div className="anim">
        {open && <div className="answer">It works something like this.</div>}
      </div>
    </div>
  );
}
