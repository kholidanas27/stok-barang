/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Components */}

        {/* Material-UI */}
        {/*begin::1 Level*/}

        {/* Administrasi */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/layanan-administrasi",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/layanan-administrasi">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Clipboard-list.svg"
                )}
              />
            </span>
            <span className="menu-text">Master Barang</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Error Pages</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/surat-kelahiran")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/surat-kelahiran">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Surat Keterangan Kelahiran</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/surat-kematian")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/surat-kematian">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Surat Kematian</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/surat-permohonanKK"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/surat-permohonanKK">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    Surat Permohonan Kartu Keluarga
                  </span>
                </NavLink>
              </li>

              <li
                className={`menu-item ${getMenuItemActive(
                  "/surat-keterangan-usaha"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/surat-keterangan-usaha">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Surat Keterangan Usaha</span>
                </NavLink>
              </li>

              <li
                className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/surat/pengantar-KIP">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Surat Pengantar KTP</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/surat/meninggal-dunia">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">
                    Surat Keterangan Meninggal Dunia
                  </span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/surat/biodata-penduduk">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Surat Biodata Penduduk</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Aduan */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/error",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/aduan">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Clipboard-list.svg"
                )}
              />
            </span>
            <span className="menu-text">Transaksi</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Error Pages</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/aduan/KinerjaPerangkatDesa"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/aduan/KinerjaPerangkatDesa">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Kinerja Perangkat Desa</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/aduan/PelayananAdministrasi"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/aduan/PelayananAdministrasi"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Pelayanan Administrasi</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/aduan/KritikSaran"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/aduan/KritikSaran">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Kritik dan Saran</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Bumdes & Umkm */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/bumdes",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/bumdes">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Clipboard-list.svg"
                )}
              />
            </span>
            <span className="menu-text">Laporan</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Error Pages</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/bumdes/basis-data-umkm"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/bumdes/basis-data-umkm">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Basis Data UMKM</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/bumdes/produk-umkm"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/bumdes/produk-umkm">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Produk UMKM</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/bumdes/produk-bumdes"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/bumdes/produk-bumdes">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Produk BUMDES</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
