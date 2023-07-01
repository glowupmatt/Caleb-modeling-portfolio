import React from "react";
import "./About.scss";
import { AboutPageImages } from "../calebData/AboutPageData";

export const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <section className="about-section-container">
        <div className="about-left-section">
          <img alt="" src={AboutPageImages.imgOne} />
          <p>
            In a feugiat est. Proin tincidunt nisl ac orci semper, id congue
            dolor fringilla. Nunc at erat sed massa tincidunt varius eget sit
            amet odio. Suspendisse mollis nunc neque, quis eleifend eros
            sollicitudin quis. Nunc elementum tincidunt urna, id ultricies purus
            pharetra ac. Ut sed eros massa. Donec vestibulum magna nec est
            posuere, at ultricies magna bibendum. Vestibulum quis dolor
            tincidunt, fermentum urna non, gravida orci. Cras sit amet nunc sit
            amet sapien hendrerit efficitur ac quis felis. In a feugiat est.
            Proin tincidunt nisl ac orci semper, id congue dolor fringilla. Nunc
            at erat sed massa tincidunt varius eget sit amet odio. Suspendisse
            mollis nunc neque, quis eleifend eros sollicitudin quis.
          </p>
        </div>
        <div className="about-right-section">
          <p>
            "The desire to create is one of the deepest yearnings of the human
            soul." – Dieter F. Uchtdorf
          </p>
          <img alt="" src={AboutPageImages.imgTwo} />
          <p>
            Nunc elementum tincidunt urna, id ultricies purus pharetra ac. Ut
            sed eros massa. Donec vestibulum magna nec est posuere, at ultricies
            magna bibendum. Vestibulum quis dolor tincidunt, fermentum urna non,
            gravida orci. Cras sit amet nunc sit amet sapien hendrerit efficitur
            ac quis felis.
          </p>
        </div>
      </section>
    </div>
  );
};
