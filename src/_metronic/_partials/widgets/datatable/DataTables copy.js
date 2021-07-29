import React, { Component } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class Table extends Component {

    componentDidMount() {
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns: [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { title: this.props.title },
                { title: this.props.alamat },
                { title: this.props.nama },
                { title: this.props.action },
            ]
        })
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <table className="display" ref={el => this.el = el}>

                </table>
            </div>
        );
    }
}