import BookCard from "./component/BookCard"
import BookNavbar from "./component/BookNavbar"
import { Container, Row } from "react-bootstrap"

function App() {
  return (
    <>
      <header>
        <BookNavbar />
      </header>
      <main>
        <Container className="mt-3">
          <Row className="g-3">
            <BookCard />
          </Row>
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

export default App
