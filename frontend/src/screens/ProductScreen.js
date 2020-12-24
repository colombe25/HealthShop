import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Card } from "react-bootstrap";

import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>

      <Row>
        <Col md={6}>
          <images src={product.images} alt={product.name} fluid />
        </Col>
        <Col md={3}></Col>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>{product.name}</h2>
          </ListGroup.Item>
          <ListGroup.Item>Price:{product.price}</ListGroup.Item>
          <ListGroup.Item>Description:{product.description}</ListGroup.Item>
        </ListGroup>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <strtong>{product.price}</strtong>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock " : "Out of Stock"}
                </Col>
              </Row>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disable={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
