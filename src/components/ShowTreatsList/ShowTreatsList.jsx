import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./ShowTreatsList.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default function ShowTreatsList({
  user,
  setTreats,
  treat,
  treatId,
  treatOne,
  treats,
  handleDelete,
}) {
  console.log(treatId);
  return (
    <>
      <Container fluid className="container">
        <Card
          style={{ width: "20rem", height: "18rem" }}
          className="create-card"
        >
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Badge bg="info">Ocassion/Celebration:</Badge> <br />
              {treat.Ocassion}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Badge bg="info"> Cake Size:</Badge> <br /> {treat.size}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Badge bg="info"> Cake Flavour: </Badge> <br />
              {treat.flavour}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Badge bg="info"> Cake Filling: </Badge> <br /> {treat.filling}
            </ListGroup.Item>
            <ListGroup.Item>  <Badge bg="info"> Comments: </Badge> <br /> {treat.comments}</ListGroup.Item>
          </ListGroup>
          <Button variant="warning">
            {" "}
            <Link to={`/update/${treatId}`} setTreats={setTreats}>
              {" "}
              Edit
            </Link>
          </Button>
          <Button variant="danger" onClick={() => handleDelete(treat._id)}>
            Delete{" "}
          </Button>
        </Card>
      </Container>
    </>
  );
}
