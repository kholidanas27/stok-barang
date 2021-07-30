import React, { Component } from "react";
import { Form, Col, Container, Button } from "react-bootstrap";

export class ContentBarangKeluar extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Tanggal Barang Masuk</Form.Label>
              <Form.Control
                defaultValue=""
                type="date"
                placeholder="Masukkan Kode Barang"
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Tanggal Barang Keluar</Form.Label>
              <Form.Control placeholder="Masukkan Nama Barang" type="date" />
            </Form.Group>
          </Form.Row>
        </Form>
        <Button variant="secondary">Cetak</Button>
      </Container>
    );
  }
}
