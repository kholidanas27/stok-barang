import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import alert from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

const SuratKematianSchema = Yup.object({
  NamaLengkap: Yup.string().required("Nama Lengkap tidak boleh kosong"),
  NIK: Yup.number().required("NIK tidak boleh kosong"),
  NomorKK: Yup.number().required("Nomor KK tidak boleh kosong"),
  TempatLahir: Yup.string().required("Tempat Lahir tidak boleh kosong"),
  HariMeninggal: Yup.string().required("Hari tidak boleh kosong"),
  TanggalLahir: Yup.mixed()
    .nullable(false)
    .required("Tanggal Lahir tidak boleh kosong"),
  TanggalMeninggal: Yup.mixed()
    .nullable(false)
    .required("Tanggal Lahir tidak boleh kosong"),
  JK: Yup.string().required("Jenis Kelamin tidak boleh kosong"),
  Agama: Yup.string().required("Agama tidak boleh kosong"),
  Kewarganegaraan: Yup.string().required("Kewarganegaraan tidak boleh kosong"),
  StatusPerkawinan: Yup.string().required(
    "Status Perkawinan tidak boleh kosong"
  ),
  Pekerjaan: Yup.string().required("Pekerjaan tidak boleh kosong"),
  Propinsi: Yup.string().required("Propinsi tidak boleh kosong"),
  Kabupaten: Yup.string().required("Kabupaten / Kota tidak boleh kosong"),
  Kecamatan: Yup.string().required("Kecamatan tidak boleh kosong"),
  TempatKematian: Yup.string().required("Tempat Kematian tidak boleh kosong"),
  SebabKematian: Yup.string().required("Sebab Kematian tidak boleh kosong"),
  MenentukanKematian: Yup.string().required(
    "Yang Menentukan Kematian tidak boleh kosong"
  ),
  Visum: Yup.string().required("Keterangan Visum tidak boleh kosong"),
});

export class EditSatuanBarang extends Component {
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
      text: "Perubahan telah tersimpan.",
    });
    this.setState({ show: false });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };

  render() {
    const data = this.props.data;
    return (
      <>
        <a
          title="Ubah Satuan Barang"
          className="btn btn-icon btn-light btn-hover-warning btn-sm m-3"
          onClick={this.handleShow}
        >
          <span className="svg-icon svg-icon-md svg-icon-warning">
            <SVG
              title="Ubah Satuan Barang"
              src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
            />
          </span>
        </a>
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
          <Formik
            validationSchema={SuratKematianSchema}
            onSubmit={this.handleSubmit}
            initialValues={data}
          >
            {({
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Nomor Induk Kependudukan (NIK)</Form.Label>
                    <Form.Control
                      id="NIK"
                      name="NIK"
                      type="text"
                      value={values.NIK}
                      onChange={handleChange}
                      isInvalid={!!errors.NIK}
                      placeholder="Inputkan NIK"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.NIK}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nomor Kartu Keluarga (KK)</Form.Label>
                    <Form.Control
                      id="NomorKK"
                      name="NomorKK"
                      readOnly
                      defaultValue={values.NomorKK}
                      placeholder="Nomor KK"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                      id="NamaLengkap"
                      name="NamaLengkap"
                      readOnly
                      defaultValue={values.NamaLengkap}
                      placeholder="Nama Lengkap"
                    />
                  </Form.Group>
                  <Form.Row>
                    <Col xs={12} md={6}>
                      <Form.Label>Tempat</Form.Label>
                      <Form.Control
                        id="TempatLahir"
                        name="TempatLahir"
                        className="mb-6"
                        readOnly
                        defaultValue={values.TempatLahir}
                        placeholder="Tempat"
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>Tanggal Lahir</Form.Label>
                      <Form.Control
                        id="TanggalLahir"
                        name="TanggalLahir"
                        className="mb-6"
                        readOnly
                        defaultValue={values.TanggalLahir}
                        placeholder="Tanggal Lahir"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col xs={12} md={4}>
                      <Form.Label>Jenis Kelamin</Form.Label>
                      <Form.Control
                        id="JK"
                        name="JK"
                        className="mb-6"
                        readOnly
                        defaultValue={values.JK}
                        placeholder="Jenis Kelamin"
                      ></Form.Control>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Label>Kewarganegaraan</Form.Label>
                      <Form.Control
                        id="Kewarganegaraan"
                        name="Kewarganegaraan"
                        className="mb-6"
                        readOnly
                        defaultValue={values.Kewarganegaraan}
                        placeholder="Kewarganegaraan"
                      />
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Label>Agama</Form.Label>
                      <Form.Control
                        id="Agama"
                        name="Agama"
                        className="mb-6"
                        readOnly
                        defaultValue={values.Agama}
                        placeholder="Agama"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col xs={12} md={6}>
                      <Form.Label>Status Perkawinan</Form.Label>
                      <Form.Control
                        id="StatusPerkawinan"
                        name="StatusPerkawinan"
                        className="mb-6"
                        readOnly
                        defaultValue={values.StatusPerkawinan}
                        placeholder="Status Perkawinan"
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>Pekerjaan</Form.Label>
                      <Form.Control
                        id="Pekerjaan"
                        name="Pekerjaan"
                        className="mb-6"
                        readOnly
                        defaultValue={values.Pekerjaan}
                        placeholder="Pekerjaan"
                      />
                    </Col>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      id="Alamat"
                      name="Alamat"
                      as="textarea"
                      readOnly
                      defaultValue={values.Alamat}
                      placeholder="Alamat"
                    />
                  </Form.Group>
                  <p>Telah meninggal dunia, pada : </p>
                  <Form.Row>
                    <Col xs={12} md={6}>
                      <Form.Label>Hari</Form.Label>
                      <Form.Control
                        as="select"
                        className="mb-6"
                        id="inlineFormCustomSelect"
                        custom
                        id="HariMeninggal"
                        name="HariMeninggal"
                        value={values.HariMeninggal}
                        onChange={handleChange}
                        isInvalid={!!errors.HariMeninggal}
                      >
                        <option value="0" hidden>
                          Hari
                        </option>
                        <option value="Senin">Senin</option>
                        <option value="Selasa">Selasa</option>
                        <option value="Rabu">Rabu</option>
                        <option value="Kamis">Kamis</option>
                        <option value="Jumat">Jumat</option>
                        <option value="Sabtu">Sabtu</option>
                        <option value="Minggu">Minggu</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.HariMeninggal}
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>Tanggal</Form.Label>
                      <Form.Control
                        className="mb-6"
                        type="date"
                        value={values.TanggalMeninggal}
                        onChange={handleChange}
                        isInvalid={!!errors.TanggalMeninggal}
                        id="TanggalMeninggal"
                        name="TanggalMeninggal"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.TanggalMeninggal}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>Tempat Kematian</Form.Label>
                    <Form.Control
                      id="TempatKematian"
                      name="TempatKematian"
                      value={values.TempatKematian}
                      onChange={handleChange}
                      isInvalid={!!errors.TempatKematian}
                      as="textarea"
                      placeholder="Inputkan Tempat Kematian"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.TempatKematian}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Row>
                    <Col xs={12} md={4}>
                      <Form.Label>Propinsi</Form.Label>
                      <Form.Control
                        id="Propinsi"
                        name="Propinsi"
                        value={values.Propinsi}
                        onChange={handleChange}
                        isInvalid={!!errors.Propinsi}
                        className="mb-6"
                        placeholder="Inputkan Propinsi"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.Propinsi}
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Label>Kabupaten / Kota</Form.Label>
                      <Form.Control
                        id="Kabupaten"
                        name="Kabupaten"
                        value={values.Kabupaten}
                        onChange={handleChange}
                        isInvalid={!!errors.Kabupaten}
                        className="mb-6"
                        placeholder="Inputkan Kabupaten atau Kota"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.Kabupaten}
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Label>Kecamatan</Form.Label>
                      <Form.Control
                        id="Kecamatan"
                        name="Kecamatan"
                        value={values.Kecamatan}
                        onChange={handleChange}
                        isInvalid={!!errors.Kecamatan}
                        className="mb-6"
                        placeholder="Inputkan Kecamatan"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.Kecamatan}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>Sebab Kematian</Form.Label>
                    <Form.Control
                      id="SebabKematian"
                      name="SebabKematian"
                      value={values.SebabKematian}
                      onChange={handleChange}
                      isInvalid={!!errors.SebabKematian}
                      as="textarea"
                      placeholder="Inputkan Sebab Kematian"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.SebabKematian}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Yang Menentukan</Form.Label>
                    <Form.Control
                      id="MenentukanKematian"
                      name="MenentukanKematian"
                      value={values.MenentukanKematian}
                      onChange={handleChange}
                      isInvalid={!!errors.MenentukanKematian}
                      placeholder="Inputkan Yang Menentukan"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.MenentukanKematian}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Keterangan Visum</Form.Label>
                    <Form.Control
                      id="Visum"
                      name="Visum"
                      as="textarea"
                      value={values.Visum}
                      onChange={handleChange}
                      isInvalid={!!errors.Visum}
                      placeholder="Inputkan Keterangan Visum"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Visum}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
              </Modal.Body>
            )}
          </Formik>
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
