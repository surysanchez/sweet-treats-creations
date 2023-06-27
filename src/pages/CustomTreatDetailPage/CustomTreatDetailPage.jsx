import React from "react";
import { useParams } from "react-router-dom";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";

export default function CustomTreatDetailPage(props) {
  let customtreat = props;

  let { customName } = useParams();
  let custom = customtreat.find((c) => c.name === customName);
  return (
    <>
      <Container>
        <Card
          style={{ width: "15rem", height: "14rem" }}
          className="treat-card"
        >
          <Card.Img
            style={{
              width: "rem",
              background: "no-repeat center",
              WebkitBackgroundSize: "cover",
            }}
            className="img"
            alt=""
            src={custom.picture}
          />
          <Figure.Caption>{custom.name.toUpperCase()}</Figure.Caption>
          {/* <Figure>
       {treat.description}
      </Figure> */}
          <Figure>${custom.price}</Figure>
          <br />
          <Button variant="outline-success">Add To Cart</Button>
          {/* <button onClick={() => onAdd(treat)}>Add To Cart </button> */}
        </Card>
      </Container>

      {/* <h1>Reviews</h1>
    <PostForm /> */}
    </>
  );
}
