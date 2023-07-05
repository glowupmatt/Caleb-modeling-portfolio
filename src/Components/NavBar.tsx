import React, { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import "./NavBar.scss";
import { Link } from "react-router-dom";

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

  const [optionsOpened, setOptionsOpened] = useState(-1);

  console.log(optionsOpened);

  const navOptions = [
    {
      id: 0,
      keyName: "PORTFOLIO",
      listOptions: ["PORTRAIT", "FASHION", "AD WORK"],
    },
    {
      id: 1,
      keyName: "VIDEO",
      listOptions: ["MUSIC VIDEO", "AD WORK"],
    },
    {
      id: 2,
      keyName: "ABOUT",
      listOptions: [],
    },
    {
      id: 3,
      keyName: "CONTACT",
      listOptions: [],
    },
  ];

  return (
    <nav className="nav-container">
      <div className="logo-hamburger">
        <Link to="/" className="link-styles">
          <h2>
            Caleb
            <br /> Moore
          </h2>
        </Link>
        <div className="mobile-container">
          <button onClick={handleNav}>
            {navBarOpen ? (
              <img alt="" src="/xmark-solid (1).svg" />
            ) : (
              <img alt="" src="/icon-hamburger.svg" />
            )}
          </button>
        </div>
        <ul className="nav-desktop">
          {navOptions.map((option, index) => {
            const optionsClickHandler = () => {
              if (optionsOpened === option.id) {
                setOptionsOpened(-1);
              } else setOptionsOpened(option.id);
            };
            return (
              <div className="nav-list" key={index}>
                <li onClick={optionsClickHandler} className="sub-nav-list">
                  {option.keyName}
                </li>
                <div className="nav-list">
                  {option.listOptions.map((item) => {
                    if (option.id === index) {
                      return (
                        <li
                          key={item}
                          className={
                            optionsOpened === index ? "list-open" : "list-close"
                          }
                        >
                          {item}
                        </li>
                      );
                    } else {
                      <li>{item}</li>;
                    }
                  })}
                </div>
              </div>
            );
          })}
        </ul>
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
          <ul className="mobile-nav" onClick={() => setNavBarOpen(false)}>
            <Link to="portfolio/">PORTFOLIO</Link>
            <Link to="videos/">VIDEO</Link>
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
