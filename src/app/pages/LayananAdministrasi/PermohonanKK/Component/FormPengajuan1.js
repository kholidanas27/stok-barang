import React, { Component } from "react";
import { Modal, Button, Form, Col, } from "react-bootstrap"
import alert from "sweetalert2";
import data from '../DataTable/data.json';
import { useState } from "react";


export class FormPengajuan1 extends Component {

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
                            <Form.Label>Kepala Keluarga</Form.Label>
                            <Form.Control placeholder="Inputkan Kepala Keluarga" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nama Dusun/Dukuh/Kampung</Form.Label>
                            <Form.Control placeholder="Inputkan Nama Dusun/Dukuh/Kampung" />
                        </Form.Group>
                        <Form.Row>
                            <Col xs={12} md={4}>
                                <Form.Label>RT</Form.Label>
                                <Form.Control className="mb-6" placeholder="Inputkan RT" />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label>RW</Form.Label>
                                <Form.Control className="mb-6" placeholder="Inputkan RW" />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label>Kode Pos</Form.Label>
                                <Form.Control className="mb-6" placeholder="Inputkan Kode Pos" />
                            </Col>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Jumlah Anggota Keluarga</Form.Label>
                            <Form.Control placeholder="Inputkan Jumlah Anggota Keluarga" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </>
        )
    }
}   