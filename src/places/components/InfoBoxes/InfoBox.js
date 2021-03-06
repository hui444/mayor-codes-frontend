import React from "react";

import "./InfoBox.css";

const InfoBox = (props) => {
  let tut, lec, sec, lab, rec;
  if (props.information.tutSlot) tut = "Tut :";
  if (props.information.lecSlot) lec = "Lec :";
  if (props.information.secSlot) sec = "Sec :";
  if (props.information.labSlot) lab = "Lab :";
  if (props.information.recSlot) rec = "Rec :";

  const output = (word, classNo) => {
    if (!word) {
      return null;
    } else
      return (
        <React.Fragment>
          <b>{word}</b> {classNo} <br />
        </React.Fragment>
      );
  };

  const message = (message) => {
    if (message) {
      return <div className="center">{message}</div>;
    } else return null;
  };

  return (
    <div
      className={`boxColour 
      ${props.yellow && "boxColour--yellow"} 
      ${props.blue && "boxColour--blue"} 
      ${props.orange && "boxColour--orange"}
      ${props.green && "boxColour--green"}
      ${props.grey && "boxColour--grey"}
      ${props.purple && "boxColour--purple"}
      ${props.pink && "boxColour--pink"}
      ${props.brown && "boxColour--brown"}`}
    >
      <div className="modulecode">{props.modulecode}</div>
      <div className="information">
        <br />
        {output(tut, props.information.tutSlot)} {/*Tutorial*/}
        {output(lec, props.information.lecSlot)} {/*Lecture*/}
        {output(sec, props.information.secSlot)} {/*Sectional*/}
        {output(lab, props.information.labSlot)} {/*Laboratory*/}
        {output(rec, props.information.recSlot)} {/*Recitation*/}
        {message(props.information.message)}
      </div>
    </div>
  );
};

export default InfoBox;
