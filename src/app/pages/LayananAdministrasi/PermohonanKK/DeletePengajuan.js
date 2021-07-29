import React, { Component } from "react";
import Swal from 'sweetalert2';
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export class DeletePengajuan extends Component {
  constructor() {
    super();
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'Your work has been saved.',
    });
  }
  HandleClick1() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  render() {
    return (
      <>
        <a
          title="Hapus Pengajuan"
          className="btn btn-icon btn-light btn-hover-danger btn-sm mx-3"
          onClick={this.HandleClick1}
        >
          <span className="svg-icon svg-icon-md svg-icon-danger">
            <SVG
              title="Hapus Pengajuan"
              src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")}
            />
          </span>
        </a>
      </>
    );
  }
}