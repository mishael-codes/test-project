// Fleunt UI imports
import { Stack, TextField } from "@fluentui/react";
// Image imports
import heroImage1 from "../../assets/images/Rectangle 41.png";
import heroImage2 from "../../assets/images/Rectangle 42.png";
// Fluent UI Icons
import { ChromeBackMirroredIcon } from "@fluentui/react-icons-mdl2";

// Type interface for styles
interface ParagraphStyles {
  root: React.CSSProperties;
}

interface H1Styles {
  root: React.CSSProperties;
  span1: React.CSSProperties;
  span2: React.CSSProperties;
  span3: React.CSSProperties;
}

interface ImageContainerStyles {
  root: React.CSSProperties;
  img1: React.CSSProperties;
  img2: React.CSSProperties;
}

// React Functional Component
const Hero: React.FC = () => {
  const greenColor = "#006B5E"

  // container styles
  const stackContainer = {
    root: {
      marginTop: "100px",
      padding: "0 50px",
    },
  };

  const heroStyles1 = {
    //Best team and images
    root: {
      minWidth: "1190px",
      padding: "0 10px",
      marginBottom: "50px"
    },
  };

  const h1Styles: H1Styles = {
    root: {
      maxHeight: "280px",
      margin: "0",
      padding: "0",
      color: greenColor,
      fontFamily: "Montserrat-Bold, sans-serif",
    },
    span1: {
      display: "block",
      fontSize: "36px",
      lineHeight: "42px",
      letterSpacing: "0.5px",
      fontFamily: "Montserrat-Medium, sans-serif",
    },
    span2: {
      display: "block",
      fontSize: "48px",
      lineHeight: "54px",
      letterSpacing: "0.5px",
    },
    span3: {
      display: "block",
      fontSize: "168px",
      lineHeight: "168px",
      letterSpacing: "0.5px",
    },
  };

  const imageContainerStyles: ImageContainerStyles = {
    root: {
      display: "flex",
      flexDirection: "column",
      height: "314.23px",
      width: "450px",
      position: "relative",
    },
    img1: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 999,
    },
    img2: {
      position: "absolute",
      left: 0,
      bottom: 0,
    },
  };

  const paragraphStyles: ParagraphStyles = {
    root: {
      display: "block",
      color: "#191C1B",
      fontSize: "32px",
      lineHeight: "38px",
      letterSpacing: "0.5px",
      fontFamily: "Montserrat-Medium, sans-serif",
      textAlign: "center",
      marginBottom: "30px"
    },
  };

  const inputStyles = {
    fieldGroup: {
      height: "48px",
      width: "263px",
      padding: "12px 24px",
      borderRadius: "50px",
      marginRight: "15px"
    }
  }

  const iconStyles = {
      backgroundColor: greenColor,
      color: "#fff",
      borderRadius: "50%",
      fontSize: "40px",
      padding: "15px"
  }

  return (
    <Stack
      styles={stackContainer}
      horizontalAlign="center"
      verticalAlign="center"
    >
      <Stack
        horizontal
        horizontalAlign="space-between"
        verticalAlign="center"
        styles={heroStyles1}
      >
        <h1 style={h1Styles.root}>
          <span style={h1Styles.span1}>We&apos;re</span>
          <span style={h1Styles.span2}>The Best</span>
          <span style={h1Styles.span3}>Team</span>
        </h1>

        <div style={imageContainerStyles.root}>
          <img
            src={heroImage1}
            alt="hero image 1"
            style={imageContainerStyles.img1}
          />
          <img
            src={heroImage2}
            alt="hero image 2"
            style={imageContainerStyles.img2}
          />
        </div>
      </Stack>
      <Stack verticalAlign="center" horizontalAlign="center">
        <p style={paragraphStyles.root}>
          We pioneer collaborative innovation, bridging business and AI for
          success. Join us in shaping the future of impactful solutions.
        </p>
        <Stack horizontal verticalAlign="center">
          <Stack.Item>
            <TextField placeholder="Subscribe to our newsletter" styles={inputStyles} />
          </Stack.Item>
          <Stack.Item>
            <ChromeBackMirroredIcon style={iconStyles} />
          </Stack.Item>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
