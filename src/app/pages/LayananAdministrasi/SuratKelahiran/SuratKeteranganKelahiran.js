import React, { Component } from "react";
import { Card,CardBody,CardHeader,CardHeaderToolbar,} from "../../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./DataTable/DataTables";
import { FormPengajuan } from "./FormPengajuan";

export class SuratKeteranganKelahiran extends Component {
    
    render() {
        return (
            <>
                <Card>
                    <CardHeader title="Daftar Pengajuan Surat Kelahiran">
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