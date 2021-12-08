import { Button, Container } from "react-bootstrap";

export const CTA = () => {
  return (
    <Container fluid className="d-flex container-md py-5">
      <h2 className="flex-grow-1 d-flex flex-column fw-800 m-0">
        <span className="text-dark-gray-5b5555">What are you waiting for?</span>
        <span className="text-red-e5646e">Don't let hunger bother you.</span>
      </h2>
      <div className="flex-grow-1 d-flex align-items-center justify-content-end">
        <Button size="lg" className="shadow-lg col-6 p-3 fs-6 border-0">
          Buy a Dish
        </Button>
      </div>
    </Container>
  );
};
