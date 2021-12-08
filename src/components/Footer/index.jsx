import { Container } from "react-bootstrap";
import { NavList } from "./NavList";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="container-md py-5 ">
      <div className="row">
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
            Make it easy for people who are experiencing hunger quickly, provide
            a variety of dishes with secure payments.
          </p>
        </div>

        <div className="col-8 row">
          {NavList.map(({ title, subLink }, id) => {
            return (
              <div
                className="col d-flex flex-column fs-5 text-dark-gray-5b5555"
                key={id}
              >
                <span className="fw-600">{title}</span>

                {subLink.map(({ title, link }, id) => {
                  return (
                    <a
                      className="fw-500 fs-6 text-gray-766e6e"
                      target="_blank"
                      href={link}
                      key={id}
                      rel="noreferrer"
                    >
                      {title}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-5 fw-500 text-center text-dark-gray-5b5555">
        © {year} Exchorant 2.0 • All rights reserved
      </p>
    </Container>
  );
};
