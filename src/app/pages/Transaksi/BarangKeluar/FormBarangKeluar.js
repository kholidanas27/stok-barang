import React, { Component } from "react";
import {
  Modal,
  Button,
  Form,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import alert from "sweetalert2";

export class FormBarangKeluar extends Component {
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
      text: "Barang Keluar Berhasil Disimpan.",
    });
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        &nbsp;
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
              Tambah Barang Keluar
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>ID Transaksi</Form.Label>
                <Form.Control placeholder="Masukkan ID Transaksi"></Form.Control>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Tanggal Transaksi</Form.Label>
                  <Form.Control type="date" placeholder="Tanggal Transaksi" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Kode Barang</Form.Label>
                  <Form.Control
                    defaultValue=""
                    placeholder="Masukkan Kode Barang"
                  ></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nama Barang</Form.Label>
                  <Form.Control placeholder="Masukkan Nama Barang" />
                </Form.Group>
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
              <Form.Row>
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
                <Form.Group as={Col} controlId="formFile" className="mb-3">
                  <Form.Label>Gambar Barang</Form.Label>
                  <Form.Control type="file" accept="image/*" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Harga Jual</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Rp.</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="number"
                      placeholder="Masukkan Harga Jual"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formFile" className="mb-3">
                  <Form.Label>Stok</Form.Label>
                  <Form.Control
                    defaultValue=""
                    type="number"
                    placeholder="Masukkan Stok"
                  ></Form.Control>
                </Form.Group>
              </Form.Row>
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
