import React, { Component } from "react";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap"
import alert from "sweetalert2";
import data from './DataTable/data.json';
import { useState } from "react";
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { FormPengajuan1 } from "./Component/FormPengajuan1";
import { FormPengajuan2 } from "./Component/FormPengajuan2";
import { FormPengajuan3 } from "./Component/FormPengajuan3";
import { FormPengajuan4 } from "./Component/FormPengajuan4";
import { FormPengajuan5 } from "./Component/FormPengajuan5";
import { FormPengajuan6 } from "./Component/FormPengajuan6";

function step2Validator() {
  return true;
}

function step3Validator() {
  return true;
}
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
        <DropdownButton id="dropdown-basic-button" title="Tambah Data">
          <Dropdown.Item
            onClick={this.handleShow}
          >
            Pengajuan
                    </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Pembaruan</Dropdown.Item>
        </DropdownButton>
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
            <StepProgressBar
              startingStep={0}
              wrapperClass="progress-wrapper-custom"
              onSubmit={this.handleClick}
              submitBtnName="Submit"
              previousBtnName="Previous"
              nextBtnName="Next"
              steps={[
                {
                  label: 'Data Keluarga',
                  name: 'step 1',
                  content: <FormPengajuan1 />
                },
                {
                  label: 'Data Kepala Keluarga',
                  name: 'step 2',
                  content: <FormPengajuan2 />,
                  validator: step2Validator
                },
                {
                  label: 'Data Anggota Keluarga',
                  name: 'step 3',
                  content: <FormPengajuan3 />,
                  validator: step3Validator
                },
                {
                  label: 'Data Anggota Keluarga',
                  name: 'step 4',
                  content: <FormPengajuan4 />,
                },
                {
                  label: 'Data Anggota Keluarga',
                  name: 'step 4',
                  content: <FormPengajuan5 />,
                },
                {
                  label: 'Data Anggota Keluarga',
                  name: 'step 4',
                  content: <FormPengajuan6 />,
                }
              ]}
            />
          </Modal.Body>
          {/* <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Batal</Button>
                        <Button variant="primary" onClick={this.handleClick}>Simpan</Button>
                    </Modal.Footer> */}
        </Modal>
      </>
    )
  }
}   