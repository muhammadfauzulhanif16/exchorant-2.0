import React from "react";
import { Section } from "../../../common/Section";
import { FeatureList } from "./FeatureList";

export const Feature = () => {
  return (
    <Section
      title="SERVICES"
      shortDesc="Stand by, delicious, friendly, easy & safe"
      longDesc="Enjoy our unlimited & unmatched service"
    >
      <div className="row row-cols-3 text-gray">
        {FeatureList.map(({ image, title, content }, id) => {
          return (
            <div className="mb-5 d-flex">
              <img
                src={image}
                className="me-3 shadow p-2 rounded-8"
                alt={title}
                width="50rem"
                height="50rem"
              />

              <div key={id} className="d-flex flex-column">
                <span className="mb-2 fs-5 fw-500">{title}</span>

                <span className="text-gray-766e6e">{content}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
