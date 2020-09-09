import React from 'react';
import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";
import {Col, Row} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Row>
            <Col><BooksForm /></Col>
            <Col><BooksList /></Col>
        </Row>
    </div>
  );
}

export default App;
