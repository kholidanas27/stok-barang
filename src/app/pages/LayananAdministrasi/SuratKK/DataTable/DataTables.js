import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import './DataTable.css';
import data from './data.json';
import coba from './coba.json';
import { EditPengajuan } from '../EditPengajuan';
import { DeletePengajuan } from '../DeletePengajuan';
import { ExportPengajuan } from '../ExportPengajuan';

const $ = require('jquery')
$.DataTable = require('datatables.net')

// const rendertabel = (coba, index) => {
//     return(
//         <tr key={index}>
//             <td class="details-control"></td>
//             <td>{coba.id}</td>
//             <td>{coba.name}</td>
//             <td>{coba.extn}</td>
//             <td>
//                 <EditPengajuan />
//                 &nbsp;
//                 <ExportPengajuan />
//                 &nbsp;
//                 <DeletePengajuan />
//             </td>
//         </tr>
//     )
// }
export class Table extends Component {

    deleteRow = () => {}

    componentDidMount() {
        var table = $('#example').DataTable({
            data: data,
            responsive: true,
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
            scrollX: true,
            "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "ALL"]],
            columns: [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                { "data": "NomorKK" },
                { "data": "NamaLengkap" },
                { "data": "NIK" },
            ],
            "columnDefs": [
                { "orderable": false, "targets": [0, 2, 3, 4] },
                { "title": "No", "targets": 1 },
                { "title": "Nama Lengkap", "targets": 2 },
                { "title": "NIK", "targets": 3 },
                { "title": "Aksi", "targets": 4},
                {
                    data: null,
                    targets: 4,
                    width: 200,
                    className: "margin-button",
                    createdCell: (td, cellData, rowData) =>
                    ReactDOM.render(
                        <>
                        <EditPengajuan
                           id={rowData.id}
                           onClick={() => {
                           this.props.deleteRow(rowData.NIK);
                            }}     
                        />
                        <ExportPengajuan/>
                        <DeletePengajuan
                           id={rowData.id}
                           onClick={() => {
                           this.props.deleteRow(rowData.NIK);
                           }}
                        />                        
                        </>, 
                    td), 
                }
              ],
            "order": [[1, 'asc']]
        });

        function format(data) {
            // `d` is the original data object for the row
            return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
                '<tr>' +
                '<td>Nomor Kartu Keluarga:</td>' +
                '<td>' + data.NomorKK + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Tempat:</td>' +
                '<td>' + data.TempatLahir + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Tanggal Lahir:</td>' +
                '<td>'+ data.TanggalLahir +'</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Jenis Kelamin:</td>' +
                '<td>'+ data.JK +'</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Kewarganegaraan:</td>' +
                '<td>' + data.Dusun + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Agama:</td>' +
                '<td>' + data.Agama + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Status Perkawinan:</td>' +
                '<td>'+ data.StatusPerkawinan +'</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Pejerjaan:</td>' +
                '<td>' + data.Pekerjaan + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Alamat:</td>' +
                '<td>' + data.Alamat + '</td>' +
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
                <table className="display" id="example" width="100%" deleteRow={this.deleteRow}>
                    {/* <thead>
                        <tr>
                            <th class="details-control sorting_disabled" disabled></th>
                            <th>No Surat</th>
                            <th>Nama Lengkap</th>
                            <th>NIK</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coba.map(rendertabel)}
                    </tbody> */}

                </table>
            </div>
        );
    }
}
