import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { ContentBarangKeluar } from "./ContentBarangKeluar";

export class LaporanBarangKeluar extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader title="Laporan Barang Keluar">
            <CardHeaderToolbar></CardHeaderToolbar>
          </CardHeader>
          <CardBody>
            <ContentBarangKeluar />
          </CardBody>
        </Card>
      </>
    );
  }
}
