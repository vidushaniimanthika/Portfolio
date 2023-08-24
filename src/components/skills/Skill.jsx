import React from "react";
import "./skill.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Design from "./Design";
import Other from "./Other";

const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">MY Skills</h2>
      <span className="section__subtitle">Technical Skills</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Other />

      </div>
    </section>
  );
};

export default Skill;
