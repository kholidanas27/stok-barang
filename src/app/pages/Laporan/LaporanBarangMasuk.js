import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import "react-bootstrap";

export class LaporanBarangMasuk extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader title="Laporan Barang Masuk">
            <CardHeaderToolbar></CardHeaderToolbar>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </>
    );
  }
}
