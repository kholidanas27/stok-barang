import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardHeaderToolbar, } from "../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./PermohonanKK/DataTable/DataTables";
import { FormPengajuan } from "./PermohonanKK/FormPengajuan";

export class SuratKematian extends Component {

    render() {
        return (
            <>
                <Card>
                    <CardHeader title="Daftar Pengajuan Surat Kematian">
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