import React, { Component } from "react";
import { Modal, Button, Form, Col, } from "react-bootstrap";
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
          text: 'Perubahan telah tersimpan.',  
        });
        this.setState({ show: false });  
    }

    render() {
        return (
            <>    
                <button onClick={this.handleShow}
                        type="button"
                        className="btn btn-warning btn-sm">
                        Ubah
                </button>
                <Modal
                    size="lg"
                    show={this.state.show} 
                    onHide={this.handleClose}
                    aria-labelledby="example-modal-sizes-title-lg"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Edit Surat Usaha
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>NIK</Form.Label>
                                    <Form.Control type="text" placeholder="Masukan NIK" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control type="text" placeholder="nama" readOnly />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Tempat</Form.Label>
                                        <Form.Control type="text" placeholder="Tempat lahir" readOnly/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Tanggal Lahir</Form.Label>
                                        <Form.Control type="date" placeholder="Tanggal lahir" readOnly/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="exampleForm">
                                        <Form.Label>Agama</Form.Label>
                                        <Form.Control as="select" disabled >
                                                <option>Laki-Laki</option>
                                                <option>Perempuan</option>
                                                <option>Kepo</option>
                                        </Form.Control>
                                    </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Kewarganegaraan</Form.Label>
                                    <Form.Control type="text" placeholder="Kewarganegaraan" readOnly />
                                </Form.Group>
                                <Form.Group controlId="exampleForm">
                                    <Form.Label>Agama</Form.Label>
                                    <Form.Control as="select" disabled >
                                            <option>Islam</option>
                                            <option>Kristen</option>
                                            <option>Katholik</option>
                                            <option>Hindu</option>
                                            <option>Buddha</option>
                                            <option>KongHuCu</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm">
                                    <Form.Label>Status Pernikahan</Form.Label>
                                    <Form.Control as="select" disabled >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Pekerjaan</Form.Label>
                                    <Form.Control type="text" placeholder="Pekerjaan" readOnly />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control type="text" placeholder="Alamat" readOnly />
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