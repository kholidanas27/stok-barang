import React, { Component } from "react";
import {
    Modal,
    Form,
    Col,
    ModalFooter,
} from "react-bootstrap";
import alert from "sweetalert2";
import data from './DataTable/data.json';
import { useState } from "react";

export class FormBiodata extends Component {
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
            title: 'Success',
            icon: 'success',
            text: 'Biodata telah tersimpan.',
        });
        this.setState({ show: false });
    }
    render() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary">
                    Ekspor
                        </button>
                        &nbsp;
                <button
                    onClick={this.handleShow}
                    type="button"
                    className="btn btn-primary">
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
                            Tambah Data Penduduk
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGridNIK">
                                <Form.Label>Nomor Induk Kependudukan(NIK)</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan NIK" />
                            </Form.Group>

                            <Form.Group controlId="formGridNama">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control type="text" placeholder="Masukkan Nama Lengkap" />
                            </Form.Group>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTempat">
                                    <Form.Label>Tempat Lahir</Form.Label>
                                    <Form.Control placeholder="Masukkan Tempat Lahir" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridTanggal">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control type="date" placeholder="Masukkan Tanggal Lahir" />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridJenKel">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Form.Control as="select" placeholder="Pilih Jenis Kelamin" >
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>

                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridWarga">
                                    <Form.Label>Kewarganegaraan</Form.Label>
                                    <Form.Control placeholder="Masukkan Kewarganegaraan" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref"
                                    >
                                        <option value="0">Pilih Agama</option>
                                        <option value="1">Islam</option>
                                        <option value="2">Kristen</option>
                                        <option value="3">Katolik</option>
                                        <option value="4">Budha</option>
                                        <option value="5">Hindu</option>
                                        <option value="6">Kong Hu Cu</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Status Perkawinan</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref"
                                        custom
                                    >
                                        <option value="0">Masukkan Status Perkawinan</option>
                                        <option value="1">Menikah</option>
                                        <option value="2">Belum Menikah</option>
                                        <option value="3">Cerai</option>
                                        <option value="4">Cerai Mati</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAlamat">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Masukkan Alamat Lengkap" />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <ModalFooter>
                        <button
                            className="btn btn-secondary"
                            onClick={this.handleClose}>
                            Close
                                </button>
                        <button
                            onClick={this.handleClick}
                            className="btn btn-primary"
                        >
                            Simpan
                                </button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}