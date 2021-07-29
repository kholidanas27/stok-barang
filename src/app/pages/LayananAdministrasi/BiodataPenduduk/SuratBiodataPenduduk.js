import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";
import { Table } from "./DataTable/DataTables";
import { FormBiodata } from "./FormBiodata";

export class SuratBiodataPenduduk extends Component {

    deleteRow = () => { }
    render() {
        return (
            <>
                <Card>
                    <CardHeader title="Biodata Penduduk">
                        <CardHeaderToolbar>
                            <FormBiodata />
                        </CardHeaderToolbar>
                    </CardHeader>
                    <CardBody>
                        <Table deleteRow={this.deleteRow} width="100%" />
                    </CardBody>
                </Card>
            </>
        )
    }
}   
