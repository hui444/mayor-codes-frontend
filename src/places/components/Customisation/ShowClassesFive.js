import React from "react";

import "./ShowClasses.css";
import ShowClasses from "./ShowClasses";

const ShowClassesFive = (props) => {
  return (
    <div className="Customisation-row">
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module1}
          information={props.information1}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module2}
          information={props.information2}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module3}
          information={props.information3}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module4}
          information={props.information4}
        />
      </div>
      <div className="Customisation-col">
        <ShowClasses
          modulecode={props.module5}
          information={props.information5}
        />
      </div>
    </div>
  );
};

export default ShowClassesFive;
