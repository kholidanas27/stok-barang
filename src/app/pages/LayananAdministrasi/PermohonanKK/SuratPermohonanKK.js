import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardHeaderToolbar, } from "../../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./DataTable/DataTables";
import { FormPengajuan } from "./FormPengajuan";

export class SuratPermohonanKK extends Component {

    render() {
        return (
            <>
                <Card>
                    <CardHeader title="Daftar Permohonan Kartu Keluarga ">
                        <CardHeaderToolbar>
                            <FormPengajuan />
                        </CardHeaderToolbar>
                    </CardHeader>
                    <CardBody>
                        <Table />
                    </CardBody>
                </Card>
            </>
        )
    }
}   