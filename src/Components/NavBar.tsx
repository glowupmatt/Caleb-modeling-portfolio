import React, { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import "./NavBar.scss";
interface propsType {
  navBarOpen: boolean;
  setNavBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<propsType> = ({
  navBarOpen,
  setNavBarOpen,
}): JSX.Element => {
  const handleNav = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNavBarOpen((prev) => !prev);
  };
  return (
    <nav className="nav-container">
      <div className="logo-hamburger">
        <h2>
          Caleb
          <br /> Moore
        </h2>
        <div className="mobile-container">
          <button onClick={handleNav}>
            {navBarOpen ? (
              <img alt="" src="/xmark-solid (1).svg" />
            ) : (
              <img alt="" src="/icon-hamburger.svg" />
            )}
          </button>
        </div>
      </div>
      {navBarOpen ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          className="mobile-nav-container"
        >
          <ul className="mobile-nav">
            <a href="#">PORTFOLIO</a>
            <a href="#">VIDEO</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
          </ul>
        </motion.div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default NavBar;
