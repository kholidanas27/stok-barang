import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import alert from "sweetalert2";

export class EditPengajuan extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      show: false,
      rowData: this.props.data
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
      text: "Perubahan telah tersimpan.",
    });
    this.setState({ show: false });
  }

  render() {
      const rowData = this.state.rowData;
    return (
      <>
        <button
          onClick={this.handleShow}
          type="button"
          className="btn btn-warning btn-sm m-3"
        >
          Ubah
        </button>
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit Surat Kematian
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" defaultValue={rowData.NamaLengkap} placeholder="Nama Lengkap" />
              </Form.Group>
              <Form.Group>
                <Form.Label>NIK</Form.Label>
                <Form.Control type="number" defaultValue={rowData.NIK} readOnly placeholder="NIK" />
              </Form.Group>
              <Form.Group>
                <Form.Label>No KK</Form.Label>
                <Form.Control type="number" defaultValue={rowData.NomorKK} readOnly placeholder="NIK" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Tempat Lahir</Form.Label>
                  <Form.Control defaultValue={rowData.TempatLahir} placeholder="Tempat Lahir" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Hari</Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                  >
                    <option value="0" hidden>
                      Hari
                    </option>
                    <option value="1">Senin</option>
                    <option value="2">Selasa</option>
                    <option value="3">Rabu</option>
                    <option value="4">Kamis</option>
                    <option value="5">Jumat</option>
                    <option value="6">Sabtu</option>
                    <option value="7">Minggu</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control type="date" defaultValue={rowData.TanggalLahir} placeholder="Tanggal Lahir" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Control
                    as="select"
                    readOnly
                    defaultValue={rowData.JK}
                    placeholder="Jenis Kelamin"
                  >
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Anak yang ke-</Form.Label>
                  <Form.Control defaultValue="" placeholder="Anak ke-" />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Jenis Kelahiran</Form.Label>
                <Form.Control type="text" placeholder="Jenis Kelahiran" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nama Lengkap Ayah</Form.Label>
                  <Form.Control
                    readOnly
                    defaultValue={rowData.['Nama Ayah']?rowData.['Nama Ayah']:'-'}
                    placeholder="Nama Lengkap Ayah"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Nomor Induk Kependudukan Ayah</Form.Label>
                  <Form.Control
                    readOnly
                    defaultValue={rowData.NIK}
                    placeholder="NIK Ayah"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Nama Lengkap Ibu</Form.Label>
                  <Form.Control
                    readOnly
                    defaultValue={rowData.['Nama Ibu']?rowData.['Nama Ibu']:'-'}
                    placeholder="Nama Lengkap Ibu"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Nomor Induk Kependudukan Ibu</Form.Label>
                  <Form.Control
                    readOnly
                    defaultValue={rowData.NIK}
                    placeholder="NIK Ibu"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Agama</Form.Label>
                  <Form.Control defaultValue={rowData.Agama} placeholder="Agama" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Kewarganegaraan</Form.Label>
                  <Form.Control defaultValue="INDONESIA" placeholder="Kewarganegaraan" />
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Label>Alamat</Form.Label>
                <Form.Control defaultValue={rowData.Alamat} as="textarea" />
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
