import React, { Component } from "react";
import { Modal, Button, Form, Col, } from "react-bootstrap"
import alert from "sweetalert2";
import data from '../DataTable/data.json';
import { useState } from "react";


export class FormPengajuan4 extends Component {

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
                <Modal.Body className="mt-10">
                    <Form>
                        <Form.Group>
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control placeholder="Nama Lengkap" />
                        </Form.Group>
                        <Form.Row>
                            <Col xs={12} md={6}>
                                <Form.Label>Agama</Form.Label>
                                <Form.Control className="mb-6" placeholder="Agama" />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label>Jenis Kelamin</Form.Label>
                                <Form.Control className="mb-6" placeholder="Jenis Kelamin" />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col xs={12} md={4}>
                                <Form.Label>Tempat</Form.Label>
                                <Form.Control className="mb-6" placeholder="Tempat" />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label>Tanggal Lahir</Form.Label>
                                <Form.Control className="mb-6" placeholder="Tanggal Lahir" />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label>Umur</Form.Label>
                                <Form.Control className="mb-6" placeholder="Umur" />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col xs={12} md={6}>
                                <Form.Label>Golongan Darah</Form.Label>
                                <Form.Control className="mb-6" placeholder="Status Perkawinan" />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label>Cacat</Form.Label>
                                <Form.Control className="mb-6" placeholder="Cacat" />
                            </Col>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control as="textarea" placeholder="Alamat" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status Perkawinan</Form.Label>
                            <Form.Control />
                        </Form.Group>
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
            </>
        )
    }
}   