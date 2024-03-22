import { Stack } from "@fluentui/react";
import Logo from "../../assets/icons/logo.png";

const Footer: React.FC = () => {
  const listItems = [
    {name: "Company", content: ["Meet The Team", "Newsletter", "FAQs", "Jobs"]},
    {name: "Blog", content: ["Podcasts", "Stories", "News", "Posts"]},
    {name: "Legal", content: ["Privacy", "Claims", "Terms"]},
    {name: "About", content: ["Who we are", "Our mission", "Our values"]},
  ]

  // Styles
  const footerStyles = {
    root: {
      height: "520px",
      padding: "50px",
    },

    h5: {
      fontFamily: "Montserrat-Bold",
      marginBottom: "20px"
    },

    newsBlock: {
      color: "#FFF",
      width: "395px",
      height: "229px",
      padding: "30px",
      borderRadius: "12px",
      backgroundColor: "#006B5E",
    },

    newsBlockChild: {
      padding: "12px 0 12px 12px",
      borderBottom: "2px solid #FFF"
    },
  };

  const copyrightContainer = {
    root: {
      width: "80%",
      color: "#006B5E",
      padding: "30px 0",
      borderTop: "2px solid #006B5E",
      fontFamily: "Montserrat-Light, sans-serif",
    },
  };

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#CDE8E1",}}>
      <Stack horizontal verticalAlign="center" horizontalAlign="space-evenly" styles={footerStyles} style={{position: "relative", width: "100%"}}>
        <Stack.Item>
          <h5 style={{ position: "absolute", top: "120px", right: "130px",fontFamily:"Montserrat-Bold"}}>Latest</h5>
        </Stack.Item>
        <Stack.Item style={{ display: "flex", flexWrap: "wrap" }}>
          {listItems.map((item, index) => (
            <Stack key={index} style={{paddingRight: "70px"}}>
              <h5 style={footerStyles.h5}>{item.name}</h5>
              <ul style={{ listStyle: "none" }}>
                {item.content.map((content, index) => (
                  <li key={index} style={{margin: "15px 0"}}>
                    <p>{content}</p>
                  </li>
                ))}
              </ul>
            </Stack>
          ))}
        </Stack.Item>
        
        <Stack style={footerStyles.newsBlock}>
          <Stack.Item align="start">
          <h5 style={footerStyles.h5}>News</h5>
          </Stack.Item>
          <Stack.Item align="end" style={footerStyles.newsBlockChild}>
            <p style={{ fontFamily: "Montserrat-Bold", marginTop:"50px" }}>New from tech savvy: <br />The hundrades power supply</p>
          </Stack.Item>
        </Stack>
      </Stack>
      <Stack horizontal verticalAlign="center" horizontalAlign="space-between" styles={copyrightContainer}>
        <p>Copyright 2024, All Rights Reserved</p>
        <img src={Logo} alt="" />
      </Stack>
    </div>
  );
};

export default Footer;
