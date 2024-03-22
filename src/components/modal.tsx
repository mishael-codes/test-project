// Fluent UI Icons: https://developer.microsoft.com/en-us/fluentui#/styles/web/icons
import { PhoneIcon } from "@fluentui/react-icons-mdl2";
import { MailIcon } from "@fluentui/react-icons-mdl2";
import { POIIcon } from "@fluentui/react-icons-mdl2";
// Fluent UI Imports
import { Stack, TextField } from "@fluentui/react";
import { ChromeBackMirroredIcon } from "@fluentui/react-icons-mdl2";
// React Imports
import { useState } from "react";
// Image Imports
import Cancel from "../assets/icons/Icon_cancel.png";
import Icon_X from "../assets/icons/Icon_X.png";
import Icon_Instagram from "../assets/icons/Icon_Instagram.png";
import Icon_Facebook from "../assets/icons/Icon_Facebook.png";


interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
const Modal: React.FC<ModalProps> = ({isModalOpen, closeModal}) => {
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
    width: "70%",
    height: "90%",
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
  };

  const formContainer: React.CSSProperties = {
    position: "relative",
    width: "65%",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0 0 0 70px",
    fontFamily: "Montserrat-Regular, sans-serif",
  };

  const formStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexWrap: "wrap",
    marginTop: "30px",
  };

  const textFieldStyles = {
    fieldGroup: {
      borderRadius: "5px",
      height: "50px",
    },
  };
  const messageStyles = {
    fieldGroup: {
      borderRadius: "5px",
      width: "380px",
    },
  };

  const formIconStyles = {
    backgroundColor: "#006b5e",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "45px",
    padding: "15px",
  };

  return isModalOpen ? (
    <div style={modalBox}>
      <div style={promoStyles}>
        <p>Promo content here</p>
        <div
          style={{
            alignSelf: "start",
            marginLeft: "30px",
            position: "absolute",
            bottom: "30px",
          }}
        >
          <div>
            <MailIcon style={iconStyles} onClick={displayEmail} />
            <PhoneIcon style={iconStyles} onClick={displayPhone} />
            <POIIcon style={iconStyles} onClick={displayAddress} />
          </div>
          <div>
            <p style={textStyles}>
              {text === "info@team.com" ? (
                <MailIcon style={{ marginRight: "5px" }} />
              ) : text === "Contact Number" ? (
                <PhoneIcon style={{ marginRight: "5px" }} />
              ) : (
                <POIIcon style={{ marginRight: "5px" }} />
              )}{" "}
              {text}
            </p>
          </div>
        </div>
      </div>
      <div style={formContainer}>
        <img
          src={Cancel}
          alt="cancel"
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            cursor: "pointer",
          }}
        />
        <div style={{ width: "35%" }}>
          <p style={{ marginBottom: "30px", fontSize: "36px" }}>Contact Us</p>
          <p style={{ fontSize: "18px" }}>
            Any question? We would be happy to help you!
          </p>
        </div>
        <form style={formStyles}>
          <TextField
            id="fullName"
            type="text"
            label="Full Name"
            className="nameInput"
            styles={textFieldStyles}
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            styles={textFieldStyles}
          />
          <TextField
            label="Message"
            styles={messageStyles}
            multiline
            rows={7}
            resizable={false}
          />
          <Stack
            horizontal
            verticalAlign="center"
            horizontalAlign="space-between"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "70px",
              width: "380px",
            }}
          >
            <ChromeBackMirroredIcon style={formIconStyles} />
            <Stack
              horizontal
              horizontalAlign="space-evenly"
              style={{ width: "50%" }}
            >
              <img src={Icon_X} alt="X logo" />
              <img src={Icon_Instagram} alt="Instagram Logo" />
              <img src={Icon_Facebook} alt="Facebook Logo" />
            </Stack>
          </Stack>
        </form>
      </div>
    </div>
  ) : "";
};

export default Modal;
