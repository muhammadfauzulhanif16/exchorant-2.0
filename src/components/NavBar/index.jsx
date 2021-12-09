import { NavList } from "./NavList";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.scss";

export const NavBar = () => {
  const { Brand, Toggle, Collapse } = Navbar,
    { Link } = Nav;

  return (
    <Navbar expand="md" className="sticky-top bg-white py-3">
      <Container fluid className="container-md">
        <Brand href="/" className="d-md-none">
          <img
            src="./icons/android/android-launchericon-512-512.png"
            alt="Exchorant's Icon"
            width="30"
            className="me-3"
          />

          <span className="fs-1 fw-600">Exchorant</span>
        </Brand>

        <Toggle
          aria-controls="basic-navbar-nav"
          className="shadow-none bg-white border-0"
        />

        <Collapse
          id="basic-navbar-nav"
          className="justify-content-between text-center"
        >
          <Brand href="/" className="d-none d-md-block">
            <img
              src="./icons/android/android-launchericon-512-512.png"
              alt="Exchorant's Icon"
              width="30"
              className="me-3"
            />

            <span className="navbar-brand">Exchorant</span>
          </Brand>

          <Nav>
            {NavList.map(({ title, to }, id) => {
              return (
                <Link key={id} href={`#${to}`} className={`fw-500`}>
                  {title}
                </Link>
              );
            })}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
