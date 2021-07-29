import React, { useState } from "react";
import {
    Modal,
    Form,
    Col,
    Button,
    ModalFooter,
} from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import alert from "sweetalert2";
import { Formik } from "formik";
import * as Yup from "yup";

export function EditBiodata({ data }) {
    const EditBiodataSchema = Yup.object({
        NamaLengkap: Yup.string().required("Nama Lengkap tidak boleh kosong"),
        NIK: Yup.string().required("NIK tidak boleh kosong"),
        TempatLahir: Yup.string().required("Tempat Lahir tidak boleh kosong"),
        TanggalLahir: Yup.mixed()
            .nullable(false)
            .required("Tanggal Lahir tidak boleh kosong"),
        JK: Yup.string().required("Jenis Kelamin tidak boleh kosong"),
        Agama: Yup.string().required("Agama tidak boleh kosong"),
        Kewarganegaraan: Yup.string().required("Kewarganegaraan tidak boleh kosong"),
        Alamat: Yup.string().required("Alamat tidak boleh kosong"),
        StatusPerkawinan: Yup.string().required("Status Perkawinan tidak boleh kosong"),
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
            text: 'Biodata telah tersimpan.',
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
                        Edit Biodata Penduduk
                            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        validationSchema={EditBiodataSchema}
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
                                    <Form.Label>Nomor Induk Kependudukan(NIK)</Form.Label>
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
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Agama</Form.Label>
                                        <Form.Control
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            id="inlineFormCustomSelectPref"
                                            name="Agama"
                                            value={values.Agama}
                                            onChange={handleChange}
                                            placeholder="Agama"
                                            isInvalid={!!errors.Agama}
                                        >
                                            <option value="0">Pilih Agama</option>
                                            <option value="1">Islam</option>
                                            <option value="2">Kristen</option>
                                            <option value="3">Katolik</option>
                                            <option value="4">Budha</option>
                                            <option value="5">Hindu</option>
                                            <option value="6">Kong Hu Cu</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.Agama}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Status Perkawinan</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="NIK"
                                            value={values.StatusPerkawinan}
                                            onChange={handleChange}
                                            readOnly
                                            placeholder="Masukkan Status Perkawinan"
                                            isInvalid={!!errors.StatusPerkawinan}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.StatusPerkawinan}
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
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Batal</Button>
                                    <Button variant="primary" type="submit" onClick={handleClick}>
                                        Simpan</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}