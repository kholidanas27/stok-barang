import React, { Component } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "../../../_metronic/_partials/widgets/datatable/DataTables";
import { extend } from "jquery";
// import { ProductsFilter } from "./_metronic/app/modules/ECommerce/pages/products/products-filter/ProductsFilter";
// import { ProductsTable } from "./_metronic/app/modules/ECommerce/pages/products/products-table/ProductsTable";
// import { ProductsGrouping } from "./_metronic/app/modules/ECommerce/pages/products/products-grouping/ProductsGrouping";

export class Mading extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardHeader title="Mading">
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