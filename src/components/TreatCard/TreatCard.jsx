import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function TreatCard(props) {
  return (
    <>
      <Container fluid>
        <Link to={`/treats/${props.treat.name}`}>
          <Card className="treat-card">
            <Card.Img
              style={{
                background: "no-repeat center",
                WebkitBackgroundSize: "cover",
              }}
              className="img"
              variant="top"
              src={props.treat.picture}
            />
            <Card.Body>
              <Card.Title>{props.treat.name}</Card.Title>
              {/* <Card.Text>
         some text
        </Card.Text> */}
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </>
  );
}
