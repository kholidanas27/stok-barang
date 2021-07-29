import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";

export class BasisDataBudaya extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardHeader title="Basis Data Budaya">
                        <CardHeaderToolbar>
                            <button
                                type="button"
                                className="btn btn-primary">
                                Ekspor
                        </button>
                        &nbsp;
                        <button
                                type="button"
                                className="btn btn-primary">
                                Tambah Data
                        </button>
                        </CardHeaderToolbar>
                    </CardHeader>
                    <CardBody>
                        {/* <ProductsFilter /> */}

                        <>
                            {/* <ProductsGrouping /> */}
                        </>

                        {/* <ProductsTable /> */}
                        <Table title="Judul" alamat="Tanggal" nama="Deskripsi" action="Aksi" id="example" class=" display" width="100%" />
                    </CardBody>
                </Card>
            </>
        )
    }
}   