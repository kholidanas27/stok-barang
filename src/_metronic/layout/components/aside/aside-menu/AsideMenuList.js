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

        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/layanan-administrasi",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/master-barang">
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
                className={`menu-item ${getMenuItemActive("/data-barang")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/data-barang">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Data Barang</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/jenis-barang")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/jenis-barang">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Jenis Barang</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/satuan-barang")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/satuan-barang">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Satuan Barang</span>
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
          <NavLink className="menu-link menu-toggle" to="/transaksi">
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
                className={`menu-item ${getMenuItemActive("/barang-masuk")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/barang-masuk">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Barang Masuk</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/barang-keluar")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/barang-keluar">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Barang Keluar</span>
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
          <NavLink className="menu-link menu-toggle" to="/laporan">
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
                  "/laporan-stokbarang"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/laporan-stokbarang">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Stok Barang</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/laporan-barangmasuk"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/laporan-barangmasuk">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Barang Masuk</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/laporan-barangkeluar"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/laporan-barangkeluar">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Barang Keluar</span>
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
