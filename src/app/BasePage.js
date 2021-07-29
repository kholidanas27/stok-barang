import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
// Kesekertariatan
import { Agenda } from "./pages/Kesekretariatan/Agenda";
import { BukuTamu } from "./pages/Kesekretariatan/BukuTamu";
import { Pengumuman } from "./pages/Kesekretariatan/Pengumuman";
import { ProdukHukum } from "./pages/Kesekretariatan/ProdukHukum";
import { SuratKeluar } from "./pages/Kesekretariatan/SuratKeluar";
import { SuratMasuk } from "./pages/Kesekretariatan/SuratMasuk";
import { Transparansi } from "./pages/Kesekretariatan/Transparansi";
import { PengaturanNomorSurat } from "./pages/Kesekretariatan/PengaturanNomorSurat";
// bumdes, mading, report
import { BasisDataBudaya } from "./pages/budaya/BasisDataBudaya";
import { BasisDataUMKM } from "./pages/bumdes/BasisDataUMKM";
import { ProdukBumdes } from "./pages/bumdes/ProdukBumdes";
import { ProdukUMKM } from "./pages/bumdes/ProdukUMKM";
import { Mading } from "./pages/mading/Mading";
import { PeringatanDini } from "./pages/report/PeringatanDini";
import { Laporan } from "./pages/report/Laporan";

import { SuratKeteranganKelahiran } from "./pages/LayananAdministrasi/SuratKelahiran/SuratKeteranganKelahiran";
import { SuratKematian } from "./pages/LayananAdministrasi/SuratKematian";
import { SuratIzinKeramaian } from "./pages/LayananAdministrasi/SuratIzinKeramaian";
import { SuratBelumMenikah } from "./pages/LayananAdministrasi/SuratBelumMenikah";
import { SuratTidakMampu } from "./pages/LayananAdministrasi/SuratTidakMampu";
import { SuratKeteranganUsaha, SuratUsaha } from "./pages/LayananAdministrasi/SuratUsaha/SuratKeteranganUsaha";
import { SuratDomisiliUsaha } from "./pages/LayananAdministrasi/SuratDomisiliUsaha";
import { SuratDomisili } from "./pages/LayananAdministrasi/SuratDomisili";
import { ktpDalamProses } from "./pages/LayananAdministrasi/SKKtpDalamProses";
import { SuratKeteranganBerpergian } from "./pages/LayananAdministrasi/SKBerpergian";
import { SKBedaIdentitas } from "./pages/LayananAdministrasi/SKBedaIdentitas";
import { SKLaporanKehilangan } from "./pages/LayananAdministrasi/SKLaporanKehilangan";
import { SKJamkesos } from "./pages/LayananAdministrasi/SKJamkesos";
import { SPAktaLahir } from "./pages/LayananAdministrasi/SPAktaLahir";
import { SPBelumMemilikiAktaLahir } from "./pages/LayananAdministrasi/SPBelumMemilikiAktaLahir";
import { SuratBiodataPenduduk } from "./pages/LayananAdministrasi/BiodataPenduduk/SuratBiodataPenduduk";
import { SuratKeteranganAhliWaris } from "./pages/LayananAdministrasi/SuratKeteranganAhliWaris";
import { SuratKeteranganCatatanKepolisian } from "./pages/LayananAdministrasi/SuratKeteranganCatatanKepolisian";
import { SuratKeteranganKeluar } from "./pages/LayananAdministrasi/SuratKeteranganKeluar";
import { SuratKeteranganMasuk } from "./pages/LayananAdministrasi/SuratKeteranganMasuk";
import { SuratKeteranganMeninggalDunia } from "./pages/LayananAdministrasi/SuratKematian/SuratKeteranganMeninggalDunia";
import { SuratKeteranganNikah } from "./pages/LayananAdministrasi/SuratKeteranganNikah";
import { SuratPengantarKIP } from "./pages/LayananAdministrasi/SuratPengantarKIP";
import { SuratPermohonanKK } from "./pages/LayananAdministrasi/PermohonanKK/SuratPermohonanKK";
import { Kelahiran } from "./pages/kependudukan/Kelahiran";
import { Keluarga } from "./pages/kependudukan/Keluarga";
import { BasisDataPenduduk } from "./pages/kependudukan/BasisDataPenduduk";
import { MutasiPindahKeluar } from "./pages/kependudukan/MutasiPindahKeluar";
import { MutasiPindahDatang } from "./pages/kependudukan/MutasiPindahDatang";
import { PecahKKBaru } from "./pages/kependudukan/PecahKKBaru";
import { PecahKKPindah } from "./pages/kependudukan/PecahKKPindah";
import Kematian from "./pages/kependudukan/Kematian";
import RumahTangga from "./pages/kependudukan/RumahTangga";
import KepemilikanAset from "./pages/kependudukan/KepemilikanAset";
import Kesehatan from "./pages/kependudukan/Kesehatan";
import Pendidikan from "./pages/kependudukan/Pendidikan";
import Perumahan from "./pages/kependudukan/Pendidikan";
import Sanitasi from "./pages/kependudukan/Sanitasi";
// website
import { ArtikelBerita } from "./pages/website/Berita";
import { Galeri } from "./pages/website/Galeri";
import { Menu } from "./pages/website/Menu";
import { PotensiDesa } from "./pages/website/Potensi";
import { Slider } from "./pages/website/Slider";
import { Widget } from "./pages/website/Widget";
import { Themes } from "./pages/website/Themes";
// // aduan
import { KinerjaPerangkatDesa } from "./pages/aduan/KinerjaPerangkatDesa";
import { PelayananAdministrasi } from "./pages/aduan/PelayananAdministrasi";
import { KritikSaran } from "./pages/aduan/KritikSaran";


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
        {/* Kesekertariatan */}
        <ContentRoute path="/kesekretariatan/agenda" component={Agenda} />
        <ContentRoute path="/kesekretariatan/bukutamu" component={BukuTamu} />
        <ContentRoute path="/kesekretariatan/pengumuman" component={Pengumuman} />
        <ContentRoute path="/kesekretariatan/produkhukum" component={ProdukHukum} />
        <ContentRoute path="/kesekretariatan/suratkeluar" component={SuratKeluar} />
        <ContentRoute path="/kesekretariatan/suratmasuk" component={SuratMasuk} />
        <ContentRoute path="/kesekretariatan/transparansi" component={Transparansi} />
        <ContentRoute path="/kesekretariatan/pengaturannomorsurat" component={PengaturanNomorSurat} />
        <ContentRoute path="/surat-kelahiran" component={SuratKeteranganKelahiran} />
        <ContentRoute path="/surat-kematian" component={SuratKematian} />
        <ContentRoute path="/surat-permohonanKK" component={SuratPermohonanKK} />
        <ContentRoute path="/surat-izin-keramaian" component={SuratIzinKeramaian} />
        <ContentRoute path="/surat-belum-menikah" component={SuratBelumMenikah} />
        <ContentRoute path="/surat-tidak-mampu" component={SuratTidakMampu} />
        <ContentRoute path="/surat-keterangan-usaha" component={SuratKeteranganUsaha} />
        <ContentRoute path="/surat-domisili-usaha" component={SuratDomisiliUsaha} />
        <ContentRoute path="/surat-keterangan-domisili" component={SuratDomisili} />
        {/* kependudukan */}
        <ContentRoute path="/kependudukan/basis-data-penduduk" component={BasisDataPenduduk} />
        <ContentRoute path="/kependudukan/keluarga" component={Keluarga} />
        <ContentRoute path="/kependudukan/mutasi-pindah-keluar" component={MutasiPindahKeluar} />
        <ContentRoute path="/kependudukan/mutasi-pindah-datang" component={MutasiPindahDatang} />
        <ContentRoute path="/kependudukan/pecah-kk-baru" component={PecahKKBaru} />
        <ContentRoute path="/kependudukan/pecah-kk-pindah" component={PecahKKPindah} />
        <ContentRoute path="/kependudukan/kelahiran" component={Kelahiran} />
        <ContentRoute path="/kependudukan/kematian" component={Kematian} />
        <ContentRoute path="/kependudukan/rumah-tangga" component={RumahTangga} />
        <ContentRoute path="/kependudukan/kepemilikan-aset" component={KepemilikanAset} />
        <ContentRoute path="/kependudukan/kesehatan" component={Kesehatan} />
        <ContentRoute path="/kependudukan/pendidikan" component={Pendidikan} />
        <ContentRoute path="/kependudukan/perumahan" component={Perumahan} />
        <ContentRoute path="/kependudukan/sanitasi" component={Sanitasi} />

        {/* budaya, bumdes  */}
        <ContentRoute path="/budaya/basis-data-budaya" component={BasisDataBudaya} />
        <ContentRoute path="/bumdes/basis-data-umkm" component={BasisDataUMKM} />
        <ContentRoute path="/bumdes/produk-bumdes" component={ProdukBumdes} />
        <ContentRoute path="/bumdes/produk-umkm" component={ProdukUMKM} />
        {/* website */}
        <ContentRoute path="/website/artikel-berita" component={ArtikelBerita} />
        <ContentRoute path="/website/galeri" component={Galeri} />
        <ContentRoute path="/website/menu" component={Menu} />
        <ContentRoute path="/website/potensi-desa" component={PotensiDesa} />
        <ContentRoute path="/website/slider" component={Slider} />
        <ContentRoute path="/website/widget" component={Widget} />
        <ContentRoute path="/website/themes" component={Themes} />
        {/* mading, report, aduan */}
        <ContentRoute path="/mading" component={Mading} />
        <ContentRoute path="/report/peringatan-dini" component={PeringatanDini} />
        <ContentRoute path="/report/laporan" component={Laporan} />
        <ContentRoute path="/aduan/KinerjaPerangkatDesa" component={KinerjaPerangkatDesa} />
        <ContentRoute path="/aduan/PelayananAdministrasi" component={PelayananAdministrasi} />
        <ContentRoute path="/aduan/KritikSaran" component={KritikSaran} />
        {/* administrasi */}
        <ContentRoute path="/layanan-administrasi/surat-keterangan-ktp-dalam-proses" component={ktpDalamProses} />
        <ContentRoute path="/layanan-administrasi/surat-keterangan-bepergian" component={SuratKeteranganBerpergian} />
        <ContentRoute path="/layanan-administrasi/surat-keterangan-beda-identitas" component={SKBedaIdentitas} />
        <ContentRoute path="/layanan-administrasi/surat-keterangan-laporan-kehilangan" component={SKLaporanKehilangan} />
        <ContentRoute path="/layanan-administrasi/surat-keterangan-jamkesos" component={SKJamkesos} />
        <ContentRoute path="/layanan-administrasi/surat-permohonan-akta-lahir" component={SPAktaLahir} />
        <ContentRoute path="/layanan-administrasi/surat-permohonan-belum-memiliki-akta-lahir" component={SPBelumMemilikiAktaLahir} />
        {/* surat */}
        <ContentRoute path="/surat/biodata-penduduk" component={SuratBiodataPenduduk} />
        <ContentRoute path="/surat/ahli-waris" component={SuratKeteranganAhliWaris} />
        <ContentRoute path="/surat/catatan-kepolisian" component={SuratKeteranganCatatanKepolisian} />
        <ContentRoute path="/surat/keterangan-keluar" component={SuratKeteranganKeluar} />
        <ContentRoute path="/surat/keterangan-masuk" component={SuratKeteranganMasuk} />
        <ContentRoute path="/surat/meninggal-dunia" component={SuratKeteranganMeninggalDunia} />
        <ContentRoute path="/surat/keterangan-nikah" component={SuratKeteranganNikah} />
        <ContentRoute path="/surat/pengantar-KIP" component={SuratPengantarKIP} />

        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
