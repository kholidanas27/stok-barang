import React, { Component } from "react";
import Swal from 'sweetalert2';

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
            title: 'Apakah Kamu yakin?',
            text: "Anda tidak akan dapat mengembalikan ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                  'Hapus!',
                  'Pengajuan Anda berhasil dihapus.',
                  'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Batal',
                  'Pengajuan Anda tidak dihapus :)',
                  'error'
                )
            }
        })
    }    
    render() {  
        return (  
            <>    
            <span>
                <button class="btn btn-danger btn-sm" onClick={this.HandleClick1}>Hapus</button>
            </span>    
            </>
        );  
      }  
}