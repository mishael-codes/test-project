import { PrimaryButton } from "@fluentui/react";

const Button: React.FC<{ text: string }> = ({ text }) => {
  const buttonStyles = {
    root: {
      borderRadius: "100px",
      backgroundColor: "#006B5E",
      padding: "12px",
      width: "164px",
      height: "54px"
    },
  };

  return (
    <PrimaryButton text={text} styles={buttonStyles}/>
  )
}

export default Button;