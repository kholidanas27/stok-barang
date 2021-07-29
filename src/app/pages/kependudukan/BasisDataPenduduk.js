import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";

export function BasisDataPenduduk(props) {
    return (
        <>
            <Card>
                <CardHeader title="Data Penduduk">
                    <CardHeaderToolbar>
                        <a
                            type="button"
                            className="btn btn-primary">
                            Ekspor
                        </a>
                        &nbsp;
                        <a
                            type="button"
                            className="btn btn-primary">
                            Tambah Data
                        </a>
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
