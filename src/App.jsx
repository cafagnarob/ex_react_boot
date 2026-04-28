import BookCard from "./component/BookCard"
import BookCardHist from "./component/BookCardHist"
import BookCardHorror from "./component/BookCardHorror"
import BookCardRomance from "./component/BookCardRomance"
import BookCardScifi from "./component/BookCardScifi"
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
      <footer></footer>
    </>
  )
}

export default App
