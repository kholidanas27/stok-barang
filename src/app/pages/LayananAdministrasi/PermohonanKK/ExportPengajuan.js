import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Modal, Button } from "react-bootstrap";
// import alert from "sweetalert2";

export class ExportPengajuan extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

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
    render() {
        return (
            <>
                <a
                    title="Export Biodata"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    onClick={this.handleShow}
                >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                        <SVG
                            title="Export Biodata"
                            src={toAbsoluteUrl("/media/svg/icons/Files/File.svg")}
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
                            Export Surat Kematian
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <center>
                                <h4>PEMERINTAH KABUPATEN BOJONEGORO</h4>
                                <h4>KECAMATAN SUMBERREJO</h4>
                                <h4>DESA PRAYUNGAN</h4>
                            </center>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Batal</Button>
                        <Button variant="primary" onClick={this.handleClose}>Simpan</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}   