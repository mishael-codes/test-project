import React from "react";
import logo from "../assets/icons/logo.png";
import {
  Stack,
  CommandBar,
  ICommandBarItemProps,
} from "@fluentui/react";
import Button from "./button";
// React imports
import { useState } from "react";
// component imports
import Modal from "./modal";

const Nav: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
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
      <Modal isModalOpen={isModalOpen} closeModal={toggleModal} />
      <img src={logo} alt="company logo" />
      <Stack horizontal verticalAlign="center" horizontalAlign="end" styles={navBarStyles}>
        <CommandBar items={items} ariaLabel="Navbar" styles={commandBarStyles} />

        <span onClick={toggleModal}><Button text="Contact Us" /></span>
      </Stack>
    </Stack>
  );
};

export default Nav;
