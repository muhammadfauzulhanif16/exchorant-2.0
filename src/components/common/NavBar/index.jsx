import React from "react";
import { NavList } from "./NavList";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkStyled } from "./Styled";
import styled from "styled-components";

export const NavBar = () => {
  const { Brand, Toggle, Collapse } = Navbar,
    NavbarStyled = styled(Navbar)`
      background-color: #f7fafc;
      color: #171923;
    `;

  return (
    <NavbarStyled expand="lg" className="border-bottom w-100 sticky-top">
      <Container>
        <Brand href="/" className="align-items-center d-flex me-0">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/4689/4689666.png"
            width="30"
            height="30"
            className="me-3"
          />

          <span className="m-0 fw-bold align-items-center d-flex">
            Exchorant
          </span>
        </Brand>

        <Toggle className="shadow-none" aria-controls="responsive-navbar-nav" />

        <Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {NavList.map(({ title, to }) => {
              return <LinkStyled href={`#${to}`}>{title}</LinkStyled>;
            })}
          </Nav>
        </Collapse>
      </Container>
    </NavbarStyled>
  );
};
