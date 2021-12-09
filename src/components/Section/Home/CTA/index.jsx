import { Button, Container } from "react-bootstrap";

export const CTA = () => {
  return (
    <Container fluid className="d-md-flex container-md py-5">
      <h2 className="flex-grow-1 d-flex flex-column fw-800 m-0 mb-5 mb-md-0 text-sm-center text-md-start">
        <span className="text-dark-gray-5b5555">What are you waiting for?</span>
        <span className="text-red-e5646e">Don't let hunger bother you.</span>
      </h2>

      <div className="flex-grow-1 d-flex align-items-center justify-content-lg-end justify-content-sm-center">
        <Button
          size="lg"
          className="shadow-lg col-6 col-md-12  py-3 fs-6 border-0"
        >
          Buy a Dish
        </Button>
      </div>
    </Container>
  );
};
