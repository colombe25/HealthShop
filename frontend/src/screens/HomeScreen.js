import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
//import products from '../products'

const HomeScreen = () => {
  const [products, setProducts] = useState();
  return (
    <>
      <h1>products</h1>
      <row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </row>
    </>
  );
};

export default HomeScreen;
