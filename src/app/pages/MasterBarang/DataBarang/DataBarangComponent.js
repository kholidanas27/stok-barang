import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./DataTable/DataTables";
import { FormDataBarang } from "./FormDataBarang";

export class DataBarangComponent extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader title="Daftar Data Barang">
            <CardHeaderToolbar>
              <FormDataBarang />
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
