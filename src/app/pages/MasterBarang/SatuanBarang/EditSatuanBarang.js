import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import alert from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

export function EditSatuanBarang({ data }) {
  const EditJenisBarangSchema = Yup.object({
    KodeBarang: Yup.string().required("Kode Barang tidak boleh kosong"),
    SatuanBarang: Yup.string().required("Satuan Barang tidak boleh kosong"),
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
        title="Ubah Satuan Barang"
        className="btn btn-icon btn-light btn-hover-warning btn-sm m-3"
        onClick={handleShow}
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
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit Satuan Barang
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
                    <Form.Label>Jenis Satuan</Form.Label>
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      placeholder="Masukkan Jenis Barang"
                      value={values.SatuanBarang}
                      onChange={handleChange}
                      isInvalid={!!errors.SatuanBarang}
                    >
                      <option value="">Pilih Jenis Satuan</option>
                      <option value="1">Meter</option>
                      <option value="2">Kilogram</option>
                      <option value="3">Gram</option>
                      <option value="4">Lembar</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.SatuanBarang}
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
