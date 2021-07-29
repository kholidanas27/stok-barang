import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";

export const ProdukUMKM = () => {
    return (
        <>
            <Card>
                <CardHeader title="Produk UMKM">
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