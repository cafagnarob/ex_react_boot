import { useState } from "react"
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"

function BookAlert() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Pietro Pacciani</Alert.Heading>
        <p>
          “Se ni’ mondo esistesse un po’ di bene e ognun si honsiderasse suo
          fratello ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe
          assai più bello”
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Aiuta Pietro Pacciani
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button variant="success" onClick={() => setShow(true)}>
          Fatti un po' di cultura{" "}
        </Button>
      )}
    </>
  )
}

export default BookAlert
