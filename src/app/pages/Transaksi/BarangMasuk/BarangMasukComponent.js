import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./DataTable/DataTables";
import { FormBarangMasuk } from "./FormBarangMasuk";

export class BarangMasukComponent extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader title="Daftar Barang Masuk">
            <CardHeaderToolbar>
              <FormBarangMasuk />
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
