import React, { Component } from "react";
import { Card,CardBody,CardHeader,CardHeaderToolbar,} from "../../../../_metronic/_partials/controls";
import "react-bootstrap";
import { Table } from "./DataTable/DataTables";
import { FormPengajuan } from "./FormPengajuan";

export class SuratKeteranganUsaha extends Component {
    
    render() {
        return (
            <>
                <Card>
                    <CardHeader title="Daftar Pengajuan Surat Usaha">
                        <CardHeaderToolbar>
                            <FormPengajuan />
                        </CardHeaderToolbar>
                    </CardHeader>
                    <CardBody>
                        <Table deleteRow={this.deleteRow} editRow={this.editRow}/>
                    </CardBody>
                </Card>
            </>
        )
    }
}   