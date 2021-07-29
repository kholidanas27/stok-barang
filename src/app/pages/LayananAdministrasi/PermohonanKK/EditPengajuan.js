import React, { Component } from "react";
import { Modal, Button, Form, Col, } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import alert from "sweetalert2";

export class EditPengajuan extends Component {
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
            text: 'Your work has been saved.',
        });
        this.setState({ show: false });
    }

    render() {
        return (
            <>
                <a
                    title="Ubah Pengajuan"
                    className="btn btn-icon btn-light btn-hover-warning btn-sm m-3"
                    onClick={this.handleShow}
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
                    show={this.state.show}
                    onHide={this.handleClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Edit Surat Kematian
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
                                <Form.Control readOnly defaultValue={this.props.name} placeholder="Nomor KK" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control readOnly defaultValue="" placeholder="Nama Lengkap" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} s>
                                    <Form.Label>Tempat</Form.Label>
                                    <Form.Control readOnly defaultValue="" placeholder="Tempat" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control readOnly defaultValue="" placeholder="Tanggal Lahir" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Form.Control readOnly defaultValue="" placeholder="Jenis Kelamin" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Kewarganegaraan</Form.Label>
                                    <Form.Control readOnly defaultValue="" placeholder="Kewarganegaraan" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Control readOnly defaultValue="" placeholder="Agama" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Status Perkawinan</Form.Label>
                                    <Form.Control readOnly defaultValue="" placeholder="Status Perkawinan" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Pekerjaan</Form.Label>
                                    <Form.Control readOnly defaultValue="" placeholder="Pekerjaan" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control as="textarea" readOnly defaultValue="" placeholder="Alamat" />
                            </Form.Group>
                            <p>Telah meninggal dunia, pada : </p>
                            <Form.Row>
                                <Form.Group as={Col} s>
                                    <Form.Label>Hari</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0" hidden>Hari</option>
                                        <option value="1">Senin</option>
                                        <option value="2">Selasa</option>
                                        <option value="3">Rabu</option>
                                        <option value="4">Kamis</option>
                                        <option value="5">Jumat</option>
                                        <option value="6">Sabtu</option>
                                        <option value="7">Minggu</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Tanggal</Form.Label>
                                    <Form.Control
                                        type="date"
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Tempat Kematian</Form.Label>
                                <Form.Control as="textarea" placeholder="Inputkan Tempat Kematian" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} s>
                                    <Form.Label>Kecamatan</Form.Label>
                                    <Form.Control placeholder="Inputkan Kecamatan" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Kabupaten / Kota</Form.Label>
                                    <Form.Control placeholder="Inputkan Kabupaten atau Kota" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Propinsi</Form.Label>
                                    <Form.Control placeholder="Inputkan Propinsi" />
                                </Form.Group>
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