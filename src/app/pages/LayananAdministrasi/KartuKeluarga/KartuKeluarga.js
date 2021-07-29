import React from 'react';
import { Tabs, Tab, Modal, Form } from 'react-bootstrap';
import { Card,CardBody,CardHeader,CardHeaderToolbar,} from "../../../../_metronic/_partials/controls";

export class KartuKeluarga extends React.Component {

    render () {
        return (
            <>
                <Card>
                    <CardHeader title="Kartu Keluarga"></CardHeader>
                    <CardBody>
                        <button>tambah data</button>
                    </CardBody>
                </Card>
            </>
        )
    }
}

