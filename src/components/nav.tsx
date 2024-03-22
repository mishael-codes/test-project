import React from "react";
import logo from "../assets/icons/logo.png";
import {
  Stack,
  CommandBar,
  ICommandBarItemProps,
  PrimaryButton,
} from "@fluentui/react";

const Nav: React.FC = () => {
  const items: ICommandBarItemProps[] = [
    {
      key: "home",
      text: "Home",
      onClick: () => console.log("Home clicked"),
    },
    {
      key: "blog",
      text: "Blog",
      onClick: () => console.log("Blog clicked"),
    },
    {
      key: "about-us",
      text: "About Us",
      onClick: () => console.log("About Us clicked"),
    },
  ];

  const navStyles = {
    root: {
      padding: "25px 50px"
    },
  };
  const navBarStyles = {
    root: {
      minWidth: 400,
    },
  };
  const buttonStyles = {
    root: {
      borderRadius: "100px",
      backgroundColor: "#006B5E",
      padding: "12px",
      width: "164px",
      height: "54px"
    },
  };
  const commandBarStyles = {
    root: {
      padding: "12px"
    }
  }


  return (
    <Stack horizontal verticalAlign="center" horizontalAlign="space-between" styles={navStyles}>
      <img src={logo} alt="company logo" />
      <Stack horizontal verticalAlign="center" horizontalAlign="end" styles={navBarStyles}>
        <CommandBar items={items} ariaLabel="Navbar" styles={commandBarStyles} />

        <PrimaryButton text="Contact Us" styles={buttonStyles} />
      </Stack>
    </Stack>
  );
};

export default Nav;
