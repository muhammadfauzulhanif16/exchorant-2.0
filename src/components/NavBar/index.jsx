import { NavList } from "./NavList";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.scss";

export const NavBar = () => {
  const { Brand, Toggle, Collapse } = Navbar,
    { Link } = Nav;

  return (
    <Navbar expand="md" className="sticky-top bg-white py-3">
      <Container fluid className="container-md">
        <Brand href="#home" className="m-0 d-md-none">
          <img
            src="./icons/android/android-launchericon-512-512.png"
            alt="Exchorant's Icon"
            width="30"
            className="me-3"
          />

          <span className="fs-1 m-0 p-0 fw-600">Exchorant</span>
        </Brand>

        <Toggle
          aria-controls="basic-navbar-nav"
          className="shadow-none bg-white border-0"
        />

        <Collapse id="basic-navbar-nav" className="justify-content-between">
          <Brand href="#home" className="m-0 d-none d-md-block">
            <img
              src="./icons/android/android-launchericon-512-512.png"
              alt="Exchorant's Icon"
              width="30"
              className="me-3"
            />

            <span className="navbar-brand m-0 p-0">Exchorant</span>
          </Brand>

          <Nav>
            {NavList.map(({ title, to, isTrue }, id) => {
              return (
                <Link
                  key={id <= 4}
                  href={`#${id <= 4 ? to : ""}`}
                  className={`fw-500 ${
                    id <= 4
                      ? isTrue
                        ? "btn btn-primary text-white"
                        : ""
                      : "d-none"
                  }`}
                >
                  {id <= 4 ? title : ""}
                </Link>
              );
            })}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
