import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

// Data Barang
import { DataBarangComponent } from "./pages/MasterBarang/DataBarang/DataBarangComponent";
import { JenisBarangComponent } from "./pages/MasterBarang/JenisBarang/JenisBarangComponent";
import { SatuanBarangComponent } from "./pages/MasterBarang/SatuanBarang/SatuanBarangComponent";

// Transaksi
import { BarangMasukComponent } from "./pages/Transaksi/BarangMasuk/BarangMasukComponent";
import { BarangKeluarComponent } from "./pages/Transaksi/BarangKeluar/BarangKeluarComponent";

// Laporan
import { LaporanStok } from "./pages/Laporan/LaporanStok";
import { LaporanBarangMasuk } from "./pages/Laporan/LaporanBarangMasuk";
import { LaporanBarangKeluar } from "./pages/Laporan/LaporanBarangKeluar";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/my-page" component={MyPage} />

        {/* Data Barang */}
        <ContentRoute path="/data-barang" component={DataBarangComponent} />
        <ContentRoute path="/jenis-barang" component={JenisBarangComponent} />
        <ContentRoute path="/satuan-barang" component={SatuanBarangComponent} />

        {/* Transaksi */}
        <ContentRoute path="/barang-masuk" component={BarangMasukComponent} />
        <ContentRoute path="/barang-keluar" component={BarangKeluarComponent} />

        {/* Laporan */}
        <ContentRoute path="/laporan-stokbarang" component={LaporanStok} />
        <ContentRoute
          path="/laporan-barangmasuk"
          component={LaporanBarangMasuk}
        />
        <ContentRoute
          path="/laporan-barangkeluar"
          component={LaporanBarangMasuk}
        />

        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
