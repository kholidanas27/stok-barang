import React, { Component } from "react";
import ReactDOM from "react-dom";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "./DataTable.css";
import data from "./data.json";
import { EditDataBarang } from "../EditDataBarang";
import { DeleteDataBarang } from "../DeleteDataBarang";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export class Table extends Component {
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
        { data: "NamaBarang" },
        { data: "JenisBarang" },
        { data: "SatuanBarang" },
        { data: "GambarBarang" },
      ],

      columnDefs: [
        { orderable: true, targets: [0], title: "No" },
        { title: "Kode Barang", targets: 1 },
        { title: "Nama Barang", targets: 2 },
        { title: "Jenis Barang", targets: 3 },
        { title: "Satuan Barang", targets: 4 },
        { title: "Gambar Barang", targets: 5 },
        { title: "Aksi", targets: 6 },
        {
          data: null,
          targets: 6,
          width: 100,
          className: "margin-button",
          createdCell: (td, cellData, rowData) =>
            ReactDOM.render(
              <>
                <EditDataBarang id={rowData.id} data={rowData} />
                <DeleteDataBarang id={rowData.id} />
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
        <table className="display" id="example" width="100%"></table>
      </div>
    );
  }
}
