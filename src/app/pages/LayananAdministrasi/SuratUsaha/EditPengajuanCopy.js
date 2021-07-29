// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Formik } from "formik";
import * as Yup from "yup";
import alert from "sweetalert2";

export function EditPengajuan({ data }) {
  const SuratKelahiranSchema = Yup.object({
    NamaLengkap: Yup.string().required("Nama Lengkap tidak boleh kosong"),
    NIK: Yup.string().required("NIK tidak boleh kosong"),
    TempatLahir: Yup.string().required("Tempat Lahir tidak boleh kosong"),
    TanggalLahir: Yup.mixed()
      .nullable(false)
      .required("Tanggal Lahir tidak boleh kosong"),
    JK: Yup.string().required("Jenis Kelamin tidak boleh kosong"),
    StatusPerkawinan: Yup.string().required("Status Perkawinan tidak boleh kosong"),
    Pekerjaan: Yup.string().required("Pekerjaan tidak boleh kosong"),
    Agama: Yup.string().required("Agama tidak boleh kosong"),
    Kewarganegaraan: Yup.string().required("Kewarganegaraan tidak boleh kosong"),
    Alamat: Yup.string().required("Alamat tidak boleh kosong"),
    Keterangan: Yup.string().required("Keterangan tidak boleh kosong"),
    Keperluan: Yup.string().required("Keperluan tidak boleh kosong"),
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
      title: 'Success',
      icon: 'success',
      text: 'Perubahan telah tersimpan.',
    });
    setShow(false);
  };

  return (
    <>
      <a
        title="Ubah Pengajuan"
        className="btn btn-icon btn-light btn-hover-warning btn-sm m-3"
        onClick={handleShow}
      >
        <span className="svg-icon svg-icon-md svg-icon-warning">
          <SVG
            title="Ubah Pengajuan"
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
            Edit Surat Kematian
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={SuratKelahiranSchema}
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
                              <Form.Group controlId="formBasicEmail">
                                    <Form.Label>NIK</Form.Label>
                                    <Form.Control
                                       type="number"
                                       name="NIK"
                                       readOnly
                                       value={values.NIK}
                                       onChange={handleChange}
                                       placeholder="Nomor Induk Kependudukan"
                                       isInvalid={!!errors.NIK}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.NIK}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control  
                                     type="text"
                                     name="NamaLengkap"
                                     value={values.NamaLengkap}
                                     onChange={handleChange}
                                     isInvalid={!!errors.NamaLengkap}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.NamaLengkap}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Tempat</Form.Label>
                                        <Form.Control
                                          type="text"
                                          name="TempatLahir"
                                          value={values.TempatLahir}
                                          onChange={handleChange}
                                          placeholder="Tempat Lahir"
                                          isInvalid={!!errors.TempatLahir}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          {errors.TempatLahir}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Tanggal Lahir</Form.Label>
                                        <Form.Control 
                                          type="date"
                                          name="TanggalLahir"
                                          value={values.TanggalLahir}
                                          onChange={handleChange}
                                          readOnly
                                          placeholder="Tanggal Lahir"
                                          isInvalid={!!errors.TanggalLahir}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                          {errors.TanggalLahir}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="exampleForm">
                                        <Form.Label>Jenis Kelamin</Form.Label>
                                        <Form.Control
                                        as="select"
                                        name="JK"
                                        value={values.JK}
                                        onChange={handleChange}
                                        placeholder="Jenis Kelamin">                        
                                            <option value="L">Laki-laki</option>
                                            <option value="P">Perempuan</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                          {errors.JK}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Kewarganegaraan</Form.Label>
                                    <Form.Control type="text" placeholder="Kewarganegaraan" readOnly />
                                </Form.Group>
                                <Form.Group controlId="exampleForm">
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Control 
                                    as="select"
                                    type="text"
                                    name="Agama"
                                    value={values.Agama}
                                    onChange={handleChange}
                                    placeholder="Agama"
                                    isInvalid={!!errors.Agama}
                                    >
                                            <option>Islam</option>
                                            <option>Kristen</option>
                                            <option>Katholik</option>
                                            <option>Hindu</option>
                                            <option>Buddha</option>
                                            <option>KongHuCu</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                    {errors.Agama}
                                  </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="exampleForm">
                                    <Form.Label>Status Pernikahan</Form.Label>
                                    <Form.Control 
                                    as="select" 
                                    type="text"
                                    name="StatusPerkawinan"
                                    value={values.StatusPerkawinan}
                                    onChange={handleChange}
                                    placeholder="Agama"
                                    isInvalid={!!errors.StatusPerkawinan}
                                    >
                                            <option>Menikah</option>
                                            <option>Belum Menikah</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                      {errors.StatusPerkawinan}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Pekerjaan</Form.Label>
                                    <Form.Control
                                     type="text" 
                                     placeholder="Pekerjaan"
                                     value={values.Pekerjaan}
                                    name="Pekerjaan"
                                    onChange={handleChange}
                                    isInvalid={!!errors.Pekerjaan}
                                     />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.Pekerjaan}
                                      </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    value={values.Alamat}
                                    name="Alamat"
                                    onChange={handleChange}
                                    placeholder="Alamat"
                                    isInvalid={!!errors.Alamat}
                                    />
                                     <Form.Control.Feedback type="invalid">
                                        {errors.Alamat}
                                      </Form.Control.Feedback>
                            </Form.Group>
                            <br/>
                            <h2>Masukan Keperluan</h2>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Keterangan</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Keperluan</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Batal
                  </Button>
                  <Button variant="primary" onClick={handleClick}>
                    Simpan
                  </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
