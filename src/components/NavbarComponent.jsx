/* eslint-disable react/prop-types */
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";


import Image from "react-bootstrap/Image";

const NavbarComponent = ({linkParam}) => {

  const [activeLink, setActiveLink] = useState("/");

  const [name,setName] = useState('Someone');

  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setName(localStorage.getItem('userName'))
    }
    if (linkParam) {
      setActiveLink(linkParam)
    }
  }, [linkParam]); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const formatName = (name) => {
    const maxLength = 10; // Maximum length for the name
    const words = name.trim().split(' '); // Split the input by spaces
    let firstWord = words[0].slice(0, maxLength); // Take the first word and limit to maxLength
    if (firstWord.length > 0) {
      firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1); // Capitalize first letter
    }
    return firstWord;
  };

  return (
    <div className="navbar-custom">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <h4 className="d-flex align-items-center"><Image src="src\assets\logo-asset.png"></Image><b>Hi, {formatName(name)}!</b></h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="gap-3 navlink-custom">
              <div className={activeLink === '/' ? "navlink-active d-flex align-items-center " : "d-flex align-items-center"}>
                <NavLink to="/" onClick={() => handleLinkClick("/")}>Home</NavLink>
              </div>
              <div className={activeLink === '/about' ? "navlink-active d-flex align-items-center" : "d-flex align-items-center"}>
                <NavLink to="/about" onClick={() => handleLinkClick("/about")}>About</NavLink>
              </div>
              <div className={activeLink === '/work' ? "navlink-active d-flex align-items-center" : "d-flex align-items-center"}>
                <NavLink to="/work" onClick={() => handleLinkClick("/work")}>Work</NavLink>
              </div>
              <div className={activeLink === '/project' ? "navlink-active d-flex align-items-center" : "d-flex align-items-center"}>
                <NavLink to="/project" onClick={() => handleLinkClick("/project")}>Project</NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
