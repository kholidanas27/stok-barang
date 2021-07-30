import React, { useState } from "react";
import { Modal, Form, Col, Button, ModalFooter } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import alert from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

export function EditJenisBarang({ data }) {
  const EditJenisBarangSchema = Yup.object({
    KodeBarang: Yup.string().required("Kode Barang tidak boleh kosong"),
    JenisBarang: Yup.string().required("Jenis Barang tidak boleh kosong"),
  });

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };
  const handleClick = () => {
    alert.fire({
      title: "Success",
      icon: "success",
      text: "Perubahan telah tersimpan.",
    });
    setShow(false);
  };
  return (
    <>
      <a
        title="Ubah Jenis Barang"
        className="btn btn-icon btn-light btn-hover-warning btn-sm m-3"
        onClick={handleShow}
      >
        <span className="svg-icon svg-icon-md svg-icon-warning">
          <SVG
            title="Ubah Jenis Barang"
            src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
          />
        </span>
      </a>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit Jenis Barang
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={EditJenisBarangSchema}
            onSubmit={handleSubmit}
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
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Kode Barang</Form.Label>
                    <Form.Control
                      defaultValue=""
                      placeholder="Masukkan Kode Barang"
                      value={values.KodeBarang}
                      onChange={handleChange}
                      isInvalid={!!errors.KodeBarang}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.KodeBarang}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Jenis Barang</Form.Label>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      placeholder="Masukkan Jenis Barang"
                      value={values.JenisBarang}
                      onChange={handleChange}
                      isInvalid={!!errors.JenisBarang}
                    >
                      <option value="">Pilih Jenis Barang</option>
                      <option value="1">Peralatan Sekolah</option>
                      <option value="2">Alat Masak</option>
                      <option value="3">P3K</option>
                      <option value="4">Alat Mandi</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.JenisBarang}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
              </Form>
            )}
          </Formik>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
