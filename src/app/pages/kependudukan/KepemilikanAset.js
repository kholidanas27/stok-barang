import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";

function KepemilikanAset(props) {
  return (
    <div>
      <Card>
        <CardHeader title="Products list">
          <CardHeaderToolbar>
            <button type="button" className="btn btn-primary">
              Ekspor
            </button>
            &nbsp;
            <button type="button" className="btn btn-primary">
              Tambah Data
            </button>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          <Table />
        </CardBody>
      </Card>
    </div>
  );
}

export default KepemilikanAset;
