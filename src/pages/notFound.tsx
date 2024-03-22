import Button from "../components/button";
import rectangle from "../assets/icons/Rectangles.svg";
import topEclipse from "../assets/icons/top-eclipse.svg";
import bottomEclipse from "../assets/icons/bottom-eclipse.svg";
import Nav from "../components/nav";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const containerStyles: React.CSSProperties = {
    width: "100vw",
    height: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    textAlign: "center",
  };

  const styles404: React.CSSProperties = {
    fontSize: "124px",
    color: "#006B5E",
    textShadow: "0px 8px 12px rgba(0, 0, 0, 0.25)",
    fontFamily: "Montserrat-ExtraBold, sans-serif",
  };

  const paragraphStyles: React.CSSProperties = {
    fontFamily: "Montserrat-Light, sans-serif",
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "40px",
  };

  const basicItemStyles: React.CSSProperties = {
    position: "absolute",
  };

  return (
    <>
      <Nav />
      <div style={containerStyles}>
        <img src={rectangle} style={basicItemStyles} className="top-rect" />
        <img src={rectangle} style={basicItemStyles} className="bottom-rect" />
        <img src={topEclipse} style={basicItemStyles} className="top-eclip" />
        <img
          src={bottomEclipse}
          style={basicItemStyles}
          className="bottom-eclip"
        />
        <div>
          <p style={styles404}>404</p>
          <p style={paragraphStyles}>
            Sorry, the page your looking for is unavailble. We suggest you go
            back.
          </p>
        </div>
        <Link to="/">
          <Button text="Back" />
        </Link>
      </div>
    </>
  );
};

export default NotFound;
