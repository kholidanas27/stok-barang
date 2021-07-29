import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";

export function MutasiPindahKeluar(props) {
    return (
        <>
            <Card>
                <CardHeader title="Daftar Keluarga">
                    <CardHeaderToolbar>
                        <a
                            href=""
                            className="btn btn-primary">
                            Ekspor
                        </a>
                        &nbsp;
                        <a
                            href =""
                            className="btn btn-warning">
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
                    <Table />
                </CardBody>
            </Card>
        </>
    )
}   
