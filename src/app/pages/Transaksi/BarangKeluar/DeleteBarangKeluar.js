import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

export class DeleteBarangKeluar extends Component {
  constructor() {
    super();
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: "Success",
      type: "success",
      text: "Your work has been saved.",
    });
  }
  HandleClick1() {
    Swal.fire({
      title: "Apakah Kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal!",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          "Hapus!",
          "Barang Keluar berhasil dihapus.",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Batal",
          "Barang Keluar Anda tidak dihapus :)",
          "error"
        );
      }
    });
  }
  render() {
    return (
      <>
        <span>
          <a
            title="Hapus Barang Keluar"
            className="btn btn-icon btn-light btn-hover-danger btn-sm mx-3"
            onClick={this.HandleClick1}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG
                title="Hapus Barang Keluar"
                src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")}
              />
            </span>
          </a>
        </span>
      </>
    );
  }
}
