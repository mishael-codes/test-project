import { PhoneIcon } from "@fluentui/react-icons-mdl2";
import { MailIcon } from "@fluentui/react-icons-mdl2";
import { POIIcon } from "@fluentui/react-icons-mdl2";
// import { TextField } from "@fluentui/react";

import { useState } from "react";
const Modal = () => {
  const [text, setText] = useState("info@team.com");

  const displayEmail = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = "#CDE8E1";
    target.style.borderColor = "#006B5E";
    target.style.color = "#006B5E";

    const silbings = target.parentElement?.children;
    const targetSiblings = target.parentElement
      ?.children as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < silbings!.length; i++) {
      if (targetSiblings![i] !== target) {
        targetSiblings![i].style.backgroundColor = "#D9D9D9";
        targetSiblings![i].style.borderColor = "#000";
        targetSiblings![i].style.color = "#000";
      }
    }
    setText("info@team.com");
  };
  const displayPhone = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = "#CDE8E1";
    target.style.borderColor = "#006B5E";
    target.style.color = "#006B5E";

    const silbings = target.parentElement?.children;
    const targetSiblings = target.parentElement
      ?.children as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < silbings!.length; i++) {
      if (targetSiblings![i] !== target) {
        targetSiblings![i].style.backgroundColor = "#D9D9D9";
        targetSiblings![i].style.borderColor = "#000";
        targetSiblings![i].style.color = "#000";
      }
    }
    setText("Contact Number");
  };
  const displayAddress = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    target.style.backgroundColor = "#CDE8E1";
    target.style.borderColor = "#006B5E";
    target.style.color = "#006B5E";

    const silbings = target.parentElement?.children;
    const targetSiblings = target.parentElement
      ?.children as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < silbings!.length; i++) {
      if (targetSiblings![i] !== target) {
        targetSiblings![i].style.backgroundColor = "#D9D9D9";
        targetSiblings![i].style.borderColor = "#000";
        targetSiblings![i].style.color = "#000";
      }
    }
    setText("Contact Address");
  };

  const modalBox: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    zIndex: 1000,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "24px",
  };

  const promoStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    height: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: "24px 0 0 24px",
  };

  const iconStyles: React.CSSProperties = {
    fontSize: "35px",
    margin: "12px 8px",
    padding: "9px",
    border: "1px solid #000",
    borderRadius: "50%",
  };

  const textStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "#f4f4f4",
    padding: "12px",
    width: "130%",
    borderRadius: "8px",
  }

  const formStyles: React.CSSProperties = {
    width: "65%",
    alignContent: "start"
  } 

  return (
    <div style={modalBox}>
      <div style={promoStyles}>
        <p>Promo content here</p>
        <div style={{alignSelf: "start", marginLeft: "30px", position: "absolute", bottom: "30px"}}>
          <div>
            <MailIcon style={iconStyles} onClick={displayEmail} />
            <PhoneIcon style={iconStyles} onClick={displayPhone} />
            <POIIcon style={iconStyles} onClick={displayAddress} />
          </div>
          <div>
            <p style={textStyles}>
              {text === "info@team.com" ? (
                <MailIcon style={{marginRight: "5px"}} />
              ) : text === "Contact Number" ? (
                <PhoneIcon style={{marginRight: "5px"}} />
              ) : (
                <POIIcon style={{marginRight: "5px"}} />
              )}{" "}
              {text}
            </p>
          </div>
        </div>
      </div>
      <div style={formStyles}>
        <h1>Contact Us</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Modal;
