import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import { Table } from "./DataTable/DataTables";
import { FormJenisBarang } from "./FormJenisBarang";

export class JenisBarangComponent extends Component {
  deleteRow = () => {};
  render() {
    return (
      <>
        <Card>
          <CardHeader title="Daftar Jenis Barang">
            <CardHeaderToolbar>
              <FormJenisBarang />
            </CardHeaderToolbar>
          </CardHeader>
          <CardBody>
            <Table deleteRow={this.deleteRow} width="100%" />
          </CardBody>
        </Card>
      </>
    );
  }
}
