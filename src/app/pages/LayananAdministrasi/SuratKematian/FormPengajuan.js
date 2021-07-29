import React, { Component } from "react";
import { Modal, Button, Form, Col, } from "react-bootstrap"
import alert from "sweetalert2";
import data from './DataTable/data.json';
import { useState } from "react";

export class FormPengajuan extends Component {
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
            text: 'Pengajuan telah tersimpan.',
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
                <button onClick={this.handleShow}
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
                            Pengajuan Surat Kematian
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nomor Induk Kependudukan (NIK)</Form.Label>
                                <Form.Control type="text" placeholder="Inputkan NIK" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nomor Kartu Keluarga (KK)</Form.Label>
                                <Form.Control readOnly defaultValue={data.NomorKK} placeholder="Nomor KK" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control readOnly defaultValue="" placeholder="Nama Lengkap" />
                            </Form.Group>
                            <Form.Row>
                                <Col xs={12} md={6}>
                                    <Form.Label>Tempat</Form.Label>
                                    <Form.Control className="mb-6" readOnly defaultValue="" placeholder="Tempat" />
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control className="mb-6" readOnly defaultValue="" placeholder="Tanggal Lahir" />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col xs={12} md={4}>
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Form.Control className="mb-6" readOnly defaultValue="" placeholder="Jenis Kelamin" />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Label>Kewarganegaraan</Form.Label>
                                    <Form.Control className="mb-6" readOnly defaultValue="" placeholder="Kewarganegaraan" />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Control className="mb-6" readOnly defaultValue="" placeholder="Agama" />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col xs={12} md={6}>
                                    <Form.Label>Status Perkawinan</Form.Label>
                                    <Form.Control className="mb-6" readOnly defaultValue="" placeholder="Status Perkawinan" />
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label>Pekerjaan</Form.Label>
                                    <Form.Control className="mb-6" readOnly defaultValue="" placeholder="Pekerjaan" />
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control as="textarea" readOnly defaultValue="" placeholder="Alamat" />
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
                                    >
                                        <option value="0" hidden>Hari</option>
                                        <option value="Senin">Senin</option>
                                        <option value="Selasa">Selasa</option>
                                        <option value="Rabu">Rabu</option>
                                        <option value="Kamis">Kamis</option>
                                        <option value="Jumat">Jumat</option>
                                        <option value="Sabtu">Sabtu</option>
                                        <option value="Minggu">Minggu</option>
                                    </Form.Control>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Label>Tanggal</Form.Label>
                                    <Form.Control className="mb-6"
                                        type="date"
                                    />
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Tempat Kematian</Form.Label>
                                <Form.Control as="textarea" placeholder="Inputkan Tempat Kematian" />
                            </Form.Group>
                            <Form.Row>
                                <Col xs={12} md={4}>
                                    <Form.Label>Propinsi</Form.Label>
                                    <Form.Control className="mb-6" placeholder="Inputkan Propinsi" />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Label>Kabupaten / Kota</Form.Label>
                                    <Form.Control className="mb-6" placeholder="Inputkan Kabupaten atau Kota" />
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Label>Kecamatan</Form.Label>
                                    <Form.Control className="mb-6" placeholder="Inputkan Kecamatan" />
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Sebab Kematian</Form.Label>
                                <Form.Control as="textarea" placeholder="Inputkan Sebab Kematian" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Yang Menentukan</Form.Label>
                                <Form.Control placeholder="Inputkan Yang Menentukan" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Keterangan Visum</Form.Label>
                                <Form.Control as="textarea" placeholder="Inputkan Keterangan Visum" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Batal</Button>
                        <Button variant="primary" onClick={this.handleClick}>Simpan</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}   