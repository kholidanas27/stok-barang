// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import alert from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

export function EditDataBarang({ data }) {
  const SuratKelahiranSchema = Yup.object({
    NamaLengkap: Yup.string().required("Nama Lengkap tidak boleh kosong"),
    NIK: Yup.string().required("NIK tidak boleh kosong"),
    NomorKK: Yup.string().required("Nomor KK tidak boleh kosong"),
    TempatLahir: Yup.string().required("Tempat Lahir tidak boleh kosong"),
    Hari: Yup.string().required("Hari tidak boleh kosong"),
    TanggalLahir: Yup.mixed()
      .nullable(false)
      .required("Tanggal Lahir tidak boleh kosong"),
    JK: Yup.string().required("Jenis Kelamin tidak boleh kosong"),
    JenisKelahiran: Yup.string().required("Jenis Kelahiran tidak boleh kosong"),
    'Nama Ayah': Yup.string().required("Nama Ayah tidak boleh kosong"),
    'Nama Ibu': Yup.string().required("Nama Ibu tidak boleh kosong"),
    Agama: Yup.string().required("Agama tidak boleh kosong"),
    Kewarganegaraan: Yup.string().required("Kewarganegaraan tidak boleh kosong"),
    Alamat: Yup.string().required("Alamat tidak boleh kosong"),
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
        title="Ubah Data Barang"
        className="btn btn-icon btn-light btn-hover-warning btn-sm m-3"
        onClick={handleShow}
      >
        <span className="svg-icon svg-icon-md svg-icon-warning">
          <SVG
            title="Ubah Data Barang"
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
                <Form.Group>
                  <Form.Label>Nama Lengkap</Form.Label>
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
                <Form.Group>
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
                <Form.Group>
                  <Form.Label>No KK</Form.Label>
                  <Form.Control
                    type="text"
                    name="NomorKK"
                    value={values.NomorKK}
                    onChange={handleChange}
                    readOnly
                    placeholder="Nomor Kartu keluarga"
                    isInvalid={!!errors.NomorKK}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.NomorKK}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Tempat Lahir</Form.Label>
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
                    <Form.Group as={Col}>
                      <Form.Label>Hari</Form.Label>
                      <Form.Control
                        as="select"
                        className="mr-2"
                        value={values.Hari}
                        onChange={handleChange}
                        custom
                      >
                        <option hidden>
                          Hari
                        </option>
                        <option value="0">Minggu</option>
                        <option value="1">Senin</option>
                        <option value="2">Selasa</option>
                        <option value="3">Rabu</option>
                        <option value="4">Kamis</option>
                        <option value="5">Jumat</option>
                        <option value="6">Sabtu</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.Hari}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
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
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Jenis Kelamin</Form.Label>
                      <Form.Control
                        as="select"
                        name="JK"
                        value={values.JK}
                        onChange={handleChange}
                        placeholder="Jenis Kelamin"
                      >
                        <option value="L">Laki-laki</option>
                        <option value="P">Perempuan</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.JK}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Anak yang ke-</Form.Label>
                      <Form.Control
                        type="number"
                        name="AnakKe"
                        value=""
                        onChange={handleChange}
                        readOnly
                        placeholder="Anak ke:"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>Jenis Kelahiran</Form.Label>
                    <Form.Control
                      type="text"
                      name="JenisKelahiran"
                      // value={values.JenisKelahiran}
                      onChange={handleChange}
                      placeholder="Jenis Kelahiran"
                      isInvalid={!!errors.JenisKelahiran}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.JenisKelahiran}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Nama Lengkap Ayah</Form.Label>
                      <Form.Control
                        type="text"
                        name="Nama Ayah"
                        value={values.['Nama Ayah']}
                        onChange={handleChange}
                        readOnly
                        placeholder="Nama Lengkap Ayah"
                        isInvalid={!!errors.['Nama Ayah']}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.['Nama Ayah']}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Nomor Induk Kependudukan Ayah</Form.Label>
                      <Form.Control
                        type="text"
                        name="NIK"
                        value={values.NIK}
                        onChange={handleChange}
                        readOnly
                        placeholder="Nomor Induk Kependudukan Ayah"
                        isInvalid={!!errors.NIK}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.NIK}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Nama Lengkap Ibu</Form.Label>
                      <Form.Control
                        type="text"
                        name="NamaIbu"
                        value={values.['Nama Ibu']}
                        onChange={handleChange}
                        readOnly
                        placeholder="Nama Lengkap Ibu"
                        isInvalid={!!errors.['Nama Ibu']}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.['Nama Ibu']}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Nomor Induk Kependudukan Ibu</Form.Label>
                      <Form.Control
                        type="text"
                        name="NIK"
                        value={values.NIK}
                        onChange={handleChange}
                        readOnly
                        placeholder="Nomor Induk Kependudukan Ayah"
                        isInvalid={!!errors.NIK}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Agama</Form.Label>
                      <Form.Control
                        type="text"
                        name="Agama"
                        value={values.Agama}
                        onChange={handleChange}
                        placeholder="Agama"
                        isInvalid={!!errors.Agama}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.Agama}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Kewarganegaraan</Form.Label>
                      <Form.Control
                        type="text"
                        name="Kewarganegaraan"
                        // value={values.Kewarganegaraan}
                        onChange={handleChange}
                        placeholder="Kewarganegaraan"
                        isInvalid={!!errors.Kewarganegaraan}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.Kewarganegaraan}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      value={values.Alamat}
                      name="Alamat"
                      onChange={handleChange}
                      placeholder="Alamat"
                      isInvalid={!!errors.Alamat}
                      as="textarea"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.Alamat}
                    </Form.Control.Feedback>
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
