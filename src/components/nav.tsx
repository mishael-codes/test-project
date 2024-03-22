import React from "react";
import logo from "../assets/icons/logo.png";
import {
  Stack,
  CommandBar,
  ICommandBarItemProps,
} from "@fluentui/react";
import Button from "./button";

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

        <Button text="Contact Us" />
      </Stack>
    </Stack>
  );
};

export default Nav;
