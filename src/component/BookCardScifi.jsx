import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Books from "../assets/books/scifi.json"
import { Col } from "react-bootstrap"

const BookCardScifi = function () {
  return Books.slice(0, 4).map((Element) => {
    return (
      <Col key={Element.asin} className="col-12 col-md-6 col-lg-3">
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={Element.img}
            style={{ height: "300px" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{Element.title}</Card.Title>
            <Card.Text>{Element.category}</Card.Text>
            <Card.Text>{Element.price}</Card.Text>
            <Button
              variant="primary"
              className="mt-auto justify-content-center"
            >
              Buy
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  })
}

export default BookCardScifi
