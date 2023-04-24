import React from "react";
import Navbar from "../components/Navbar";
import presentationText from "../assets/text/presentation";

const Presentation = () => {
  return (
    <>
      <Navbar />
      <section>
        <h1>{presentationText.headSection.title}</h1>
        <p>{presentationText.headSection.description}</p>
        <ul>
          {presentationText.headSection.objectives.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
        {presentationText.headSection.stats.map((item, key) => (
          <div key={key}>
            <h2>{item.number}</h2>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section>
        <h1>{presentationText.thrombinoscopeSection.title}</h1>
      </section>
    </>
  );
};

export default Presentation;
