import React, { Component } from "react";
import ReactDOM from "react-dom";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "./DataTable.css";
import data from "./data.json";
import { EditBarangKeluar } from "../EditBarangKeluar";
import { DeleteBarangKeluar } from "../DeleteBarangKeluar";

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
        { data: "IdTransaksi" },
        { data: "Tanggal" },
        { data: "KodeBarang" },
        { data: "NamaBarang" },
        { data: "JenisBarang" },
        { data: "SatuanBarang" },
        { data: "GambarBarang" },
        { data: "HargaJual" },
        { data: "Stok" },
      ],

      columnDefs: [
        { orderable: true, targets: [0], title: "No" },
        { title: "ID Transaksi", targets: 1 },
        { title: "Tanggal", targets: 2 },
        { title: "Kode Barang", targets: 3 },
        { title: "Nama Barang", targets: 4 },
        { title: "Jenis Barang", targets: 5 },
        { title: "Satuan Barang", targets: 6 },
        { title: "Gambar Barang", targets: 7 },
        { title: "Harga Jual", targets: 8 },
        { title: "Stok", targets: 9 },
        { title: "Action", targets: 10 },
        {
          data: null,
          targets: 10,
          width: 20,
          className: "margin-button",
          createdCell: (td, cellData, rowData) =>
            ReactDOM.render(
              <>
                <EditBarangKeluar id={rowData.id} data={rowData} />
                <DeleteBarangKeluar id={rowData.id} />
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
