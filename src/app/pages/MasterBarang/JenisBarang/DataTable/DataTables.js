import React, { Component } from "react";
import ReactDOM from "react-dom";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "./DataTable.css";
import data from "./data.json";
import { EditJenisBarang } from "../EditJenisBarang";
import { DeleteJenisBarang } from "../DeleteJenisBarang";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export class Table extends Component {
  deleteRow = () => {};

  componentDidMount() {
    var table = $("#example").DataTable({
      data: data,
      responsive: true,
      language: {
        lengthMenu: " _MENU_ data per halaman",
        zeroRecords: "Tidak ada Data",
        info: "Menampilkan _START_ - _END_ dari _TOTAL_ Records",
        paginate: {
          first: "Pertama",
          last: "Terakhir",
          next: "Selanjutnya",
          previous: "Sebelumnya",
        },
      },
      scrollX: true,
      lengthMenu: [
        [5, 10, 15, -1],
        [5, 10, 15, "ALL"],
      ],
      columns: [
        { data: "No" },
        { data: "KodeBarang" },
        { data: "JenisBarang" },
      ],

      columnDefs: [
        { orderable: true, targets: [0], title: "No" },
        { title: "Kode Barang", targets: 1 },
        { title: "Jenis Barang", targets: 2 },
        { title: "Aksi", targets: 3 },
        {
          data: null,
          targets: 3,
          width: 300,
          className: "margin-button",
          createdCell: (td, cellData, rowData) =>
            ReactDOM.render(
              <>
                <EditJenisBarang id={rowData.id} data={rowData} />
                <DeleteJenisBarang id={rowData.id} />
              </>,
              td
            ),
        },
      ],
      order: [[1, "asc"]],
    });
  }

  render() {
    return (
      <div>
        <table
          className="display"
          id="example"
          width="100%"
          deleteRow={this.deleteRow}
        ></table>
      </div>
    );
  }
}
