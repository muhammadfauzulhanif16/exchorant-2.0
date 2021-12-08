import { Container, Navbar } from "react-bootstrap";

export const Footer = () => {
  const { Brand } = Navbar;

  return (
    <Container fluid className="d-flex container-md py-5">
      <div className="col-4">
        <div className="d-flex align-items-center mb-4">
          <img
            src="./icons/android/android-launchericon-512-512.png"
            alt="Exchorant's Icon"
            width="50"
            className="me-3"
          />

          <span className="fs-3 m-0 p-0 fw-600 text-dark-gray-5b5555">
            Exchorant
          </span>
        </div>

        <p className="fw-500 text-gray-766e6e">
          Make it easy for people who are experiencing hunger quickly, provide a
          variety of dishes with secure payments.
        </p>
      </div>

      <div className="col-8 bg-success">2</div>
    </Container>
  );
};
