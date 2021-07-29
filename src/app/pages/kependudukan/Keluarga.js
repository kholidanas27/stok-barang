import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";

export function Keluarga(props) {
    return (
        <>
            <Card>
                <CardHeader title="Daftar Keluarga">
                    <CardHeaderToolbar>
                        <button
                            type="button"
                            className="btn btn-primary">
                            Ekspor
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-warning">
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
                    <Table width="100%" />
                </CardBody>
            </Card>
        </>
    )
}   
