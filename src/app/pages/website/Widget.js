import React from "react";
import "react-bootstrap";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";

export function Widget(props) {
    return (
        <>
            <Card>
                <CardHeader title="Widget list">
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
                    <Table title="Produk" alamat="Alamat" nama="Deskripsi" action="Aksi" id="example" class=" display" width="100%" />
                </CardBody>
            </Card>
        </>
    )
}
