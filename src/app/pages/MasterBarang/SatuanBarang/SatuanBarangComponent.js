import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./DataTable/DataTables";
import { FormSatuanBarang } from "./FormSatuanBarang";

export class SatuanBarangComponent extends Component {
  deleteRow = () => {};
  render() {
    return (
      <>
        <Card>
          <CardHeader title="Daftar Satuan Barang">
            <CardHeaderToolbar>
              <FormSatuanBarang />
            </CardHeaderToolbar>
          </CardHeader>
          <CardBody>
            <Table deleteRow={this.deleteRow} />
          </CardBody>
        </Card>
      </>
    );
  }
}
