import React, { Component } from 'react'
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import './DataTable.css';
import data from './data.json';

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class Table extends Component {

    componentDidMount() {
        var table = $('#example').DataTable({
            data: data,
            responsive: true,
            scrollX: true,
            "language": {
                "lengthMenu": " _MENU_ records per halaman",
                "zeroRecords": "Tidak ada Data",
                "info": "Menampilakn _START_ - _END_ dari _TOTAL_ Records",
                "paginate": {
                    "first":      "Pertama",
                    "last":       "Terakhir",
                    "next":       "Selanjutnya",
                    "previous":   "Sebelumnya"
                },
            },
            "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "ALL"]],
            columns: [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "NIK" },
                { "data": "Nama" },
                { "data": "Nomor KK" },
            ],
            "columnDefs": [
                { "orderable": false, "targets": [0, 2, 3, 4] },
                { "title": "NIK", "targets": 1 },
                { "title": "Nama", "targets": 2 },
                { "title": "No KK", "targets": 3 },
                { "title": "Aksi", "targets": 4 },
                {
                    "data": null,
                    "defaultContent": '<a href="" class="btn btn-warning btn-sm mr-3" type="button">Edit</a>'
                    + '<a href="" class="btn btn-danger btn-sm"  type="button">Delete</a>',
                    "targets": 4
                  }
            ],
            
            "order": [[1, 'asc']]
        });
        function format(data) {
            // `d` is the original data object for the row
            return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
                '<tr>' +
                '<td>Full name:</td>' +
                '<td>' + data.Nama + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extension number:</td>' +
                '<td>' + data.Pendidikan + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Extra info:</td>' +
                '<td>'+ data.JK + data.Alamat +'</td>' +
                '</tr>' +
                '</table>';
        }
        
        // Add event listener for opening and closing details
        $('#example tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
            }
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <table className="display" id="example" width="100%">

                </table>
            </div>
        );
    }
}
