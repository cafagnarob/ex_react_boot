import BookAlert from "./component/BookAlert"
import BookCard from "./component/BookCard"
import BookCardHist from "./component/BookCardHist"
import BookCardHorror from "./component/BookCardHorror"
import BookCardRomance from "./component/BookCardRomance"
import BookCardScifi from "./component/BookCardScifi"
import BookFooter from "./component/BookFooter"
import BookNavbar from "./component/BookNavbar"
import { Container, Row } from "react-bootstrap"

function App() {
  return (
    <>
      <header className="d-flex flex-column justify-content-center">
        <BookNavbar />
        <BookAlert />
      </header>
      <main>
        <Container className="mt-3">
          <Row className="g-3">
            <h1> Fantasy Book</h1>
            <BookCard />
            <h1> History Book</h1>
            <BookCardHist />
            <h1> Horror Book</h1>
            <BookCardHorror />
            <h1> Romance Book</h1>
            <BookCardRomance />
            <h1> Scifi Book</h1>
            <BookCardScifi />
          </Row>
        </Container>
      </main>
      <footer className="bg-dark mt-3">
        <BookFooter />
      </footer>
    </>
  )
}

export default App
