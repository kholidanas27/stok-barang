import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import alert from "sweetalert2";

export class FormDataBarang extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleClick() {
    alert.fire({
      title: "Success",
      icon: "success",
      text: "Data Barang Berhasil Disimpan.",
    });
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleShow}
          type="button"
          className="btn btn-primary"
        >
          Tambah Data
        </button>
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Tambah Data Barang
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Kode Barang</Form.Label>
                  <Form.Control
                    defaultValue=""
                    placeholder="Masukkan Kode Barang"
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Nama Barang</Form.Label>
                  <Form.Control placeholder="Masukkan Nama Barang" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Jenis Barang</Form.Label>
                  <Form.Control as="select" placeholder="Masukkan Jenis Barang">
                    <option value="">Pilih Jenis Barang</option>
                    <option value="1">Peralatan Sekolah</option>
                    <option value="2">Alat Masak</option>
                    <option value="3">P3K</option>
                    <option value="4">Alat Mandi</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Jenis Satuan</Form.Label>
                  <Form.Control as="select" placeholder="Masukkan Jenis Barang">
                    <option value="">Pilih Jenis Satuan</option>
                    <option value="1">Meter</option>
                    <option value="2">Kilogram</option>
                    <option value="3">Gram</option>
                    <option value="4">Lembar</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Gambar Barang</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Batal
            </Button>
            <Button variant="primary" onClick={this.handleClick}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
