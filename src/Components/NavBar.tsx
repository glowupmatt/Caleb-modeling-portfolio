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
      listOptions: [
        {
          name: "AD WORK",
          link: "adWork/",
        },
        {
          name: "PROFILE PHOTOS",
          link: "profilePhotos/",
        },
        {
          name: "PORTRAITS",
          link: "portraitPhotos/",
        },
      ],
    },
    {
      id: 1,
      keyName: "VIDEO",
      listOptions: [
        {
          name: "MUSIC VIDEOS",
          link: "videos/",
        },
        {
          name: "AD WORK",
          link: "videos/",
        },
      ],
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
                {option.listOptions.length < 1 ? (
                  <Link
                    to={option.keyName}
                    onClick={optionsClickHandler}
                    className="sub-nav-list"
                  >
                    {option.keyName}
                  </Link>
                ) : (
                  <li onClick={optionsClickHandler} className="sub-nav-list">
                    {option.keyName}
                  </li>
                )}
                <div className="nav-list">
                  {option.listOptions.map((item) => {
                    if (option.id === index) {
                      return (
                        <Link
                          to={item.link}
                          key={item.name}
                          className={
                            optionsOpened === index ? "list-open" : "list-close"
                          }
                        >
                          {item.name}
                        </Link>
                      );
                    } else {
                      <li>{item.name}</li>;
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
            <Link to="about/">ABOUT</Link>
            <Link to="contact/">CONTACT</Link>
          </ul>
        </motion.div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default NavBar;
