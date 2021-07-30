import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./DataTable/DataTables";
import { FormBarangKeluar } from "./FormBarangKeluar";

export class BarangKeluarComponent extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader title="Daftar Data Barang">
            <CardHeaderToolbar>
              <FormBarangKeluar />
            </CardHeaderToolbar>
          </CardHeader>
          <CardBody>
            <Table />
          </CardBody>
        </Card>
      </>
    );
  }
}
