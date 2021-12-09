import { Row, Container } from "react-bootstrap";

export const Section = ({ children, title, shortDesc, longDesc }) => {
  return (
    <Container
      className="container-md align-items-center d-flex flex-column justify-content-center py-5"
      fluid
    >
      <Row className="mb-5 text-center">
        <span className="fw-600 fs-6 text-red-e5646e">{title}</span>

        <span className="fs-2 fw-800 text-dark-gray-5b5555 mt-1 mb-3">
          {shortDesc}
        </span>

        {/*<div className="d-flex justify-content-center">*/}
        <span className="fs-4 text-gray-766e6e fw-500">{longDesc}</span>
        {/*</div>*/}
      </Row>

      {children}
    </Container>
  );
};
