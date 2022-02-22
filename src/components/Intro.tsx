import React from "react";
import"./Intro.scss";
// import { useTheme } from "next-themes";

const Intro = () => {
  // const { theme, setTheme } = useTheme();

  const light = "./lightbg.jpg";
  const dark = "./darkbg.jpg";

  return (
    <section
      // style={{ backgroundImage: `url(${theme == "dark" ? dark : light})` }}
      style={{ backgroundImage:`url(${light})`}}
      className="intro-container"
    >
      <h2>Welcome to Auth Play!</h2>
      <p className="breif">
        A small nodejs application that shows most of node powerful features
        like CRUD
      </p>
      <div className="crud">
        <p>Create</p>
        <p>Read</p>
        <p>Update</p>
        <p>Delete</p>
      </div>
    </section>
  );
};

export default Intro;
