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
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" },
            ]
        })
    }

    componentWillUnmount() {
        this.$sel.DataTable.destroy(true)
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