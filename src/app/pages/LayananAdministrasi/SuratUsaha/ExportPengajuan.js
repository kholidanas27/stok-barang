import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export class ExportPengajuan extends Component {
    render() {
        return (
            <>    
                 <a
                    title="Export Pengajuan"
                    className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    onClick={this.handleShow}
                >
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                    <SVG
                        title="Export Pengajuan"
                        src={toAbsoluteUrl("/media/svg/icons/Files/File.svg")}
                    />
                    </span>
                </a>
            </>
        )
    }
}   