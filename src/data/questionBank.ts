import type { LearningQuestion, StudyPackage } from "@/types/learning";

const sourceRef = {
  title: "PBB P-2",
  url: "#",
  note: "Materi diklat PBB-P2 BDK Medan"
};

const packageSeeds: { id: string; name: string; label: string; questions: Omit<LearningQuestion, "id" | "source" | "answer">[] }[] = [
  {
    id: "pbb-p2-paket-a",
    name: "Paket A",
    label: "A",
    questions: [
      {
        topic: "PBB-P2",
        question: "Salah satu permasalahan yang kerap muncul dalam pengelolaan Pajak Daerah dan Retribusi Daerah (PDRD) adalah...",
        options: [
          "Terlalu banyaknya tenaga ahli penilaian dan pemeriksaan pajak",
          "Perencanaan penerimaan pajak yang belum optimal",
          "Kepatuhan Wajib Pajak yang secara umum sudah sangat tinggi",
          "Basis data pajak daerah yang telah terintegrasi secara nasional",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Perencanaan penerimaan pajak yang belum optimal merupakan salah satu dari enam permasalahan utama dalam tatakelola Pajak Daerah dan Retribusi Daerah (PDRD), selain persoalan database yang belum terintegrasi dan rendahnya kepatuhan wajib pajak."
      },
      {
        topic: "PBB-P2",
        question: "Terdapat empat alternatif pendataan objek dan subjek Pajak Bumi dan Bangunan (PBB). Alternatif pendataan yang hanya dapat dilaksanakan pada daerah atau wilayah yang pada umumnya belum mempunyai peta adalah...",
        options: [
          "Pendataan dengan pengukuran bidang objek pajak",
          "Pendataan dengan verifikasi data objek pajak",
          "Pendataan dengan identifikasi objek pajak",
          "Pendataan dengan penyampaian dan pemantauan pengembalian SPOP",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Pendataan dengan cara penyampaian dan pemantauan pengembalian SPOP merupakan alternatif yang khusus dilaksanakan pada daerah atau wilayah yang umumnya belum mempunyai peta, daerah terpencil, atau memiliki potensi PBB yang relatif kecil."
      },
      {
        topic: "PBB-P2",
        question: "Kegiatan pendaftaran Objek Pajak PBB-P2 dilakukan oleh subjek pajak dengan cara mengambil, mengisi, dan mengembalikan Surat Pemberitahuan Objek Pajak (SPOP). Proses pendaftaran ini dapat dilakukan di...",
        options: [
          "Kantor Badan Pendapatan Daerah setempat",
          "Kantor Pelayanan Pajak Pratama",
          "Balai Desa atau Kantor Kecamatan di seluruh wilayah",
          "Kantor Pertanahan atau BPN tingkat kabupaten/kota",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Pendaftaran Objek Pajak PBB-P2 dilakukan secara langsung di Kantor Badan Pendapatan Daerah setempat atau tempat-tempat lain yang telah ditunjuk secara resmi untuk proses pengambilan dan pengembalian formulir SPOP."
      },
      {
        topic: "PBB-P2",
        question: "Dalam pembentukan atau penyempurnaan Zona Nilai Tanah (ZNT), terdapat faktor-faktor yang melatarbelakangi kegiatan tersebut. Salah satu faktor eksternal yang memengaruhi adalah...",
        options: [
          "Belum adanya analisis NJOP bumi untuk wilayah non-SISMIOP",
          "Peningkatan kualitas NJOP yang didukung oleh data dan analisis yang benar",
          "Tuntutan masyarakat untuk transparansi dan akuntabilitas dalam penentuan NJOP",
          "Peningkatan transparansi secara internal di dalam pemerintahan",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Tuntutan dari masyarakat mengenai transparansi dan akuntabilitas dalam penentuan NJOP, serta langkah antisipasi pemanfaatan NJOP untuk berbagai kepentingan lain, digolongkan sebagai faktor eksternal yang melatarbelakangi pembentukan ZNT/NIR."
      },
      {
        topic: "PBB-P2",
        question: "Apabila suatu kawasan Zona Nilai Tanah (ZNT) tidak memiliki data pasar properti sama sekali, maka penentuan Nilai Indikasi Rata-rata (NIR) dapat dilakukan dengan mengacu pada rata-rata hasil analisis NIR dari ZNT lain yang terdekat. Metode ini disebut sebagai...",
        options: [
          "Alternatif 1",
          "Alternatif 2",
          "Alternatif 3A",
          "Alternatif 3B",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Alternatif 3B digunakan khusus untuk kawasan ZNT yang tidak memiliki data pasar sama sekali. Pada kondisi ini, proses analisis mengacu pada nilai rata-rata dari hasil analisis NIR milik ZNT lain yang saling berdekatan posisinya."
      },
      {
        topic: "PBB-P2",
        question: "Dalam perhitungan Assessment Sales Ratio (ASR), apabila rasio antara Nilai Jual Objek Pajak (NJOP) terhadap Harga Pasar memiliki ukuran tendensi sentral (mean/median) di bawah 0,95, maka kondisi tersebut diistilahkan sebagai...",
        options: [
          "Over assessment",
          "Under assessment",
          "Regresifitas",
          "Progresifitas",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Under assessment adalah kondisi ketidakseimbangan di mana pengujian ASR (rasio NJOP berbanding harga pasar) menghasilkan rata-rata nilai baik mean maupun median kurang dari angka 0,95."
      },
      {
        topic: "PBB-P2",
        question: "Pelaksanaan kajian Assessment Sales Ratio (ASR) sangat dianjurkan pada wilayah-wilayah yang memiliki karakteristik tertentu. Berikut ini yang BUKAN merupakan karakteristik wilayah prioritas pelaksanaan ASR adalah...",
        options: [
          "Wilayah perbatasan",
          "Wilayah dengan tingkat pembangunan dan pertumbuhan yang tinggi",
          "Wilayah yang baru saja dilakukan revaluasi kurang dari satu tahun yang lalu",
          "Wilayah yang memiliki data pasar yang mencukupi untuk dianalisis",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Wilayah yang dianjurkan untuk dikaji menggunakan ASR adalah wilayah yang mengalami pertumbuhan tinggi, area perbatasan, wilayah dengan data pasar yang memadai, dan wilayah yang sudah 3 tahun atau lebih belum dilakukan proses revaluasi."
      },
      {
        topic: "PBB-P2",
        question: "Sebuah bangunan dapat diklasifikasikan ke dalam kriteria bangunan standar apabila memenuhi batasan fisik tertentu. Ketentuan luas yang paling tepat untuk kriteria bangunan standar adalah...",
        options: [
          "Luas tanah lebih dari 10.000 m2",
          "Jumlah lantai yang lebih dari 4 lantai",
          "Memiliki konstruksi khusus seperti dermaga atau jalan tol",
          "Luas bangunan kurang dari 1.000 m2",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Kriteria fisik suatu bangunan standar meliputi luas tanah yang kurang dari 10.000 m2, luas bangunan yang kurang dari 1.000 m2, serta memiliki jumlah lantai kurang dari 4 lantai."
      },
      {
        topic: "PBB-P2",
        question: "Ketika menghitung nilai penyusutan pada bangunan secara umum, rumus yang harus digunakan untuk mencari nilai umur efektif bangunan apabila bangunan tersebut pernah direnovasi adalah...",
        options: [
          "Tahun pajak dikurangi tahun dibangunnya properti",
          "Tahun pajak dikurangi tahun direnovasi",
          "(Tahun pajak dikurangi tahun dibangun) ditambah dua",
          "Rata-rata dari tahun dibangun dan tahun direnovasi",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Pada kondisi bangunan secara umum yang pernah mengalami kegiatan renovasi, maka umur efektif bangunan dihitung dengan cara mengurangkan tahun pajak dengan tahun direnovasi bangunan tersebut."
      },
      {
        topic: "PBB-P2",
        question: "Objek pajak seperti pelabuhan laut, pelabuhan udara, jalan tol, dan pompa bensin memiliki konstruksi khusus yang nilainya tidak dapat diestimasi hanya dengan menggunakan DBKB. Metode yang paling tepat digunakan untuk menghitung nilai bangunan tersebut adalah...",
        options: [
          "Metode Computer Assisted Valuation (CAV)",
          "Kajian Assessment Sales Ratio (ASR)",
          "Metode survei kuantitas (quantity survey) dengan analisis Rencana Anggaran Biaya",
          "Pengukuran bidang objek pajak secara langsung melalui foto udara",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Bangunan khusus dengan karakteristik material yang tidak umum dinilai menggunakan metode survei kuantitas (quantity survey). Metode ini dilakukan secara manual dengan mengacu dan menganalisis Rencana Anggaran Biaya (RAB) yang terdapat dalam dokumen perjanjian kerja."
      },
    ]
  },
  {
    id: "pbb-p2-paket-b",
    name: "Paket B",
    label: "B",
    questions: [
      {
        topic: "PBB-P2",
        question: "Bangunan yang secara fungsional diperuntukkan sebagai area komersial dan penginapan seperti hotel, restoran, maupun wisma dikelompokkan ke dalam Jenis Penggunaan Bangunan (JPB) nomor...",
        options: [
          "JPB 4",
          "JPB 5",
          "JPB 7",
          "JPB 9",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Dalam sistem pengelompokkan jenis penggunaan bangunan (JPB) berdasarkan tipe konstruksinya, bangunan yang difungsikan untuk kegiatan akomodasi dan pariwisata seperti hotel, restoran, dan wisma secara spesifik diklasifikasikan ke dalam kategori JPB 7."
      },
      {
        topic: "PBB-P2",
        question: "Dalam pembentukan maupun penyempurnaan Zona Nilai Tanah (ZNT), tata cara penganalisisan dibagi ke dalam beberapa metode alternatif berdasarkan ketersediaan data. Alternatif 2 secara khusus digunakan untuk kawasan ZNT yang memiliki karakteristik ketersediaan data berupa...",
        options: [
          "Kurang dari 3 (tiga) data harga jual pasar properti",
          "Sama sekali tidak memiliki data harga jual pasar properti",
          "Memiliki lebih dari 5 (lima) data pembanding dari zona lain",
          "Tepat memiliki 3 (tiga) data harga jual pasar properti",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Penggunaan metode Alternatif 2 diterapkan pada kawasan ZNT yang kekurangan data pembanding, di mana kawasan tersebut hanya memiliki kurang dari 3 (tiga) data harga jual properti untuk dilakukan proses analisis."
      },
      {
        topic: "PBB-P2",
        question: "The International Association of Assessing Officers (IAAO) menetapkan standar rasio penilaian yang ideal guna menjamin keadilan pemajakan. Menurut standar tersebut, tingkat Assessment Sales Ratio (ASR) yang direkomendasikan adalah...",
        options: [
          "Antara 80% sampai 120%",
          "Antara 85% sampai 115%",
          "Antara 95% sampai 105%",
          "Antara 90% sampai 110%",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Berdasarkan standar baku ukuran pemajakan internasional dari IAAO, sebuah nilai penetapan pajak dianggap adil apabila tingkat Assessment Sales Ratio (ASR) berada dalam batas toleransi 10% dari rasio ideal, yakni pada rentang antara 90% hingga 110%."
      },
      {
        topic: "PBB-P2",
        question: "Kegiatan pemeliharaan basis data SISMIOP PBB dapat dilakukan secara pasif maupun aktif. Pelaksanaan pemeliharaan basis data secara aktif dilakukan dengan cara...",
        options: [
          "Menerima dan memproses laporan langsung dari wajib pajak di meja Pelayanan Satu Tempat (PST)",
          "Petugas turun ke lapangan untuk mencocokkan dan menyesuaikan data objek pajak serta subjek pajak dengan keadaan sebenarnya",
          "Memindahkan basis data peta secara otomatis dari sistem instansi pemerintah yang terkait ke dalam server PBB",
          "Menganalisis laporan tahunan penerimaan daerah tanpa perlu mengecek posisi koordinat geografis objek",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Pemeliharaan basis data yang bersifat aktif mengamanatkan petugas pelayanan pajak untuk melakukan validasi visual langsung ke lapangan guna mencocokkan data objek, subjek, serta menyesuaikan nilai jual dengan rata-rata nilai pasar yang sedang berlaku."
      },
      {
        topic: "PBB-P2",
        question: "Dalam melakukan penilaian fasilitas bangunan berupa perkerasan halaman, penilai harus memperhatikan ketebalan dan material yang digunakan. Fasilitas perkerasan halaman dengan tipe konstruksi sedang pada umumnya didefinisikan sebagai...",
        options: [
          "Menggunakan tanah yang dipadatkan dengan ketebalan rata-rata 6 cm",
          "Menggunakan beton bertulang (hot mix) dengan ketebalan lebih dari 10 cm",
          "Menggunakan material paving block dengan ketebalan rata-rata 8 cm",
          "Menggunakan beton ringan atau aspal ringan dengan ketebalan rata-rata 10 cm",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Perkerasan halaman dikategorikan sebagai tipe konstruksi sedang apabila pembuatannya memanfaatkan material berupa beton ringan atau aspal ringan, yang secara fisik dibangun dengan ketebalan rata-rata 10 sentimeter."
      },
      {
        topic: "PBB-P2",
        question: "Tidak seluruh bangunan dapat dihitung menggunakan tabel DBKB Standar. Manakah dari kriteria fisik di bawah ini yang akan langsung mengklasifikasikan suatu properti sebagai Bangunan Non-Standar?",
        options: [
          "Bangunan yang memiliki jumlah lantai lebih dari 4 (empat) lantai",
          "Luas total bangunan kurang dari 500 meter persegi",
          "Memiliki area luas tanah di bawah 1.000 meter persegi",
          "Bangunan yang sepenuhnya digunakan untuk tujuan perumahan",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Kriteria fisik yang menjadikan sebuah bangunan wajib dinilai sebagai bangunan non-standar mencakup tiga kemungkinan: memiliki jumlah lantai lebih dari 4 lantai, memiliki luas tanah melebihi 10.000 meter persegi, atau memiliki luas bangunan melebihi 1.000 meter persegi."
      },
      {
        topic: "PBB-P2",
        question: "Terdapat metode dalam pendataan subjek dan objek PBB yang sangat bergantung pada kelengkapan infrastruktur administrasi dan geografis suatu wilayah. Alternatif pendataan dengan Verifikasi Data Objek Pajak paling tepat dilakukan pada wilayah yang...",
        options: [
          "Memiliki cakupan wilayah luas namun tanpa titik koordinat yang presisi",
          "Merupakan kawasan terpencil yang baru pertama kali akan dipetakan",
          "Sudah mempunyai peta garis/peta foto dan data administrasi hasil pendataan tiga tahun terakhir secara lengkap",
          "Mengharuskan petugas untuk mengukur luas bidang bumi menggunakan pita ukur secara manual akibat tidak adanya dokumen terdahulu",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Pendataan melalui teknik Verifikasi Data diperuntukkan bagi daerah yang infrastrukturnya sudah terkelola dengan baik, yakni telah tersedianya peta yang akurat (peta garis/peta foto) serta ditunjang oleh data administrasi pembukuan yang berkesinambungan dan lengkap minimal dari tiga tahun terakhir."
      },
      {
        topic: "PBB-P2",
        question: "Pada perhitungan nilai fasilitas mekanikal dan elektrikal suatu bangunan, keberadaan sistem jaringan televisi penerima gambar di dalam area suatu gedung (biasanya gedung perkantoran atau apartemen) diistilahkan sebagai fasilitas...",
        options: [
          "PABX",
          "MATV",
          "CCTV",
          "Sistem Video Intercom",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Sistem jaringan penyiaran internal yang berfungsi mendistribusikan tangkapan sinyal televisi ke seluruh jaringan dalam suatu bangunan gedung disebut dengan fasilitas MATV (Master Antenna Television). Ini berbeda dengan CCTV yang dikhususkan untuk jaringan sistem keamanan (security system)."
      },
      {
        topic: "PBB-P2",
        question: "Pemeriksaan keadilan pemajakan antar-objek dapat dilakukan menggunakan analisis statistik. Kondisi ketidakadilan dimana nilai mean atau weighted mean ASR memunculkan rasio di atas angka 1,1 disebut dengan istilah...",
        options: [
          "Regresifitas",
          "Under assessment",
          "Variabilitas",
          "Over assessment",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Fenomena regresifitas dalam kajian pajak proporsional merujuk pada situasi ketidakwajaran distribusi, di mana hasil perhitungan tendensi sentral, khususnya mean maupun weighted mean, memperoleh angka indeks yang melebih 1,1."
      },
      {
        topic: "PBB-P2",
        question: "Penentuan Nilai Indikasi Rata-rata (NIR) dipermudah dengan penggunaan formulir dan kategori metode analisis yang baku. Suatu kawasan ZNT akan dieksekusi perhitungannya menggunakan rumusan Alternatif 1 apabila kawasan tersebut...",
        options: [
          "Kekurangan data historis terkait transaksi lima tahun sebelumnya",
          "Sama sekali tidak memiliki rekaman data harga pasar pada zona tersebut",
          "Memiliki kuantitas tepat 3 (tiga) data harga jual properti",
          "Wajib mendatangkan penilai pihak ketiga independen guna menentukan NIR",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Pendekatan menggunakan metode penganalisisan Alternatif 1 diwajibkan khusus pada situasi di mana sebuah kawasan ZNT memiliki kecukupan data yang eksak, yakni terkumpul tepat tiga buah data harga jual pasar."
      },
    ]
  },
  {
    id: "pbb-p2-paket-c",
    name: "Paket C",
    label: "C",
    questions: [
      {
        topic: "PBB-P2",
        question: "Alternatif pendataan dengan cara \"Pengukuran Bidang Objek Pajak\" paling tepat diaplikasikan pada suatu daerah apabila daerah tersebut berada dalam kondisi...",
        options: [
          "Memiliki basis data yang sepenuhnya telah berstruktur SISMIOP secara terkomputerisasi",
          "Hanya memiliki sket peta desa dan letak relatif objek pajaknya belum dapat ditentukan dengan pasti",
          "Baru saja menyelesaikan proses penyusunan Rencana Anggaran Biaya (RAB) tahun berjalan",
          "Memiliki data administrasi pembukuan pajak yang lengkap dan berkesinambungan selama tiga tahun terakhir",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Pendataan melalui pengukuran bidang wajib dilakukan dengan survei terjun langsung ke lapangan pada kawasan yang infrastruktur pemetaannya minim, misalnya hanya memiliki sebatas sket peta desa sehingga petugas tidak dapat menentukan letak koordinat posisi relatif objek secara akurat."
      },
      {
        topic: "PBB-P2",
        question: "Pemeliharaan basis data pajak dapat dilaksanakan secara pasif. Mekanisme pelaksanaan pemeliharaan pasif dilakukan melalui cara...",
        options: [
          "Inspeksi mendadak ke lokasi objek pajak di setiap akhir tahun pajak",
          "Pembuatan peta garis dan peta foto beresolusi tinggi di setiap kecamatan",
          "Pemrosesan laporan dari wajib pajak atau pejabat terkait melalui meja Pelayanan Satu Tempat (PST)",
          "Pencocokan fisik material bangunan oleh petugas juru sita secara langsung di lapangan",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Berbeda dengan pemeliharaan aktif yang mengharuskan petugas turun ke lapangan, pemeliharaan basis data secara pasif hanya mengandalkan pergerakan administrasi dari balik meja berdasarkan laporan mutasi data yang diajukan oleh wajib pajak di loket Pelayanan Satu Tempat (PST)."
      },
      {
        topic: "PBB-P2",
        question: "Dalam menganalisis Nilai Indikasi Rata-rata (NIR), suatu kawasan Zona Nilai Tanah (ZNT) harus dieksekusi perhitungannya menggunakan skema \"Alternatif 3A\" apabila kawasan tersebut...",
        options: [
          "Memiliki lebih dari lima data pembanding yang letaknya saling berdekatan",
          "Berada di area komersial yang mengalami fluktuasi harga pasar secara drastis",
          "Tepat memiliki kuantitas satu buah data penawaran harga jual pasar properti",
          "Sama sekali tidak memiliki data harga jual pasar, sehingga mengacu pada rata-rata data objek acuan yang diciptakan",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Penerapan skema perhitungan Alternatif 3A digunakan sebagai jalan keluar bagi zona (ZNT) yang sangat minim referensi transaksional atau sama sekali tidak ada data harga jual. Metode ini menganalisis dengan cara merekayasa dan menciptakan objek acuan sebagai alat bantu pembanding."
      },
      {
        topic: "PBB-P2",
        question: "Berdasarkan ketentuan peraturan yang berlaku, definisi yang sah untuk mendeskripsikan pengertian \"Bangunan\" sebagai objek PBB adalah...",
        options: [
          "Seluruh aset fisik penunjang yang dapat dipindah-tangankan posisinya tanpa merusak struktur dasarnya",
          "Area lahan terbangun, rawa, serta perairan pedalaman yang telah dibatasi oleh sekat buatan manusia",
          "Konstruksi teknik yang ditanam atau dilekatkan secara tetap pada tanah dan/atau perairan",
          "Permukaan tubuh bumi yang di atasnya terdapat aktivitas niaga, industri, maupun perumahan komersial",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Secara definisi hukum pemajakan, konstruksi yang berdiri di atas lahan dikenakan asas pelekatan. Artinya, bangunan adalah segala bentuk wujud rancang bangun teknis yang sifat posisinya menetap (ditanam/dilekatkan) di suatu area, baik area darat maupun area perairan."
      },
      {
        topic: "PBB-P2",
        question: "Saat menyusun peta taburan data harga jual, analis akan membuat batas-batas imajiner untuk mendefinisikan Zona Nilai Tanah (ZNT). Apa yang bisa dilakukan analis apabila ada batas imajiner yang membatasi dua zona, namun ternyata kedua zona tersebut memiliki nilai NIR (NJOP) yang sama persis?",
        options: [
          "Batas imajiner tersebut harus dipertebal dan diberikan kode alfanumerik ganda",
          "Batas imajiner tersebut dapat langsung dihilangkan sehingga kedua zona disatukan",
          "Batas imajiner tersebut harus diubah warnanya untuk membedakan letak rukun tetangga",
          "Batas imajiner tersebut diturunkan statusnya menjadi zona alternatif non-standar",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Pembuatan batas imajiner bertujuan mengisolasi satu area yang memiliki kesamaan nilai ekonomi. Apabila dua area yang berdampingan secara perhitungan analitis terbukti memiliki indikasi nilai (NIR) yang setara, maka batas pemisah tersebut tidak lagi memiliki fungsi fiksasi dan dapat segera dihapus atau disatukan menjadi sebuah zona yang lebih luas."
      },
      {
        topic: "PBB-P2",
        question: "Sebuah bangunan di pusat kota yang seluruh bangunannya difungsikan secara khusus sebagai sentra perdagangan seperti toko, apotek, pasar, maupun ruko (rumah toko), akan dikelompokkan ke dalam Jenis Penggunaan Bangunan (JPB) nomor...",
        options: [
          "JPB 2",
          "JPB 4",
          "JPB 6",
          "JPB 8",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Kategorisasi JPB berdasarkan tipe konstruksi fungsional merinci area komersial skala ritel seperti bangunan ruko, sentra pasar, unit apotek, maupun jejeran toko secara spesifik ke dalam pengklasifikasian bernomor JPB 4."
      },
      {
        topic: "PBB-P2",
        question: "Tingkat keseragaman (variability) penilaian suatu wilayah merupakan salah satu dimensi keadilan pemajakan yang selalu dievaluasi dalam kajian ASR. Besaran angka deviasi ini diukur menggunakan Coefficient of Dispersion (COD). Batasan nilai maksimal yang dapat ditoleransi untuk indeks COD adalah...",
        options: [
          "5%",
          "10%",
          "15%",
          "25%",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Untuk menjamin tidak terjadinya simpangan keseragaman pengenaan pajak yang kelewat batas, perhitungan statistik Coefficient of Dispersion (COD) menetapkan batas atas kelayakan pada persentase angka 15%. Apabila COD melampaui angka tersebut, kualitas keseragaman wilayah dinyatakan buruk."
      },
      {
        topic: "PBB-P2",
        question: "Dalam pendekatan penilaian secara massal maupun individual menggunakan aplikasi Computer Assisted Valuation (CAV), nilai besaran akhir suatu bangunan (Nilai Bangunan) diformulasikan secara matematis melalui perhitungan...",
        options: [
          "Nilai transaksi rata-rata properti terdekat dikurangi nilai bumi",
          "Estimasi biaya ganti rugi asuransi yang dikalikan dengan koefisien luas lantai",
          "Biaya konstruksi komponen utama bangunan ditambah perabotan dalam ruangan",
          "Total biaya pembuatan bangunan baru (akumulasi bahan dan upah) dikurangi total nilai penyusutan",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Logika dasar sistem terkomputerisasi CAV mencari besaran nilai murni konstruksi. Pendekatan ini terlebih dahulu mengakumulasi taksiran harga penyusunan saat kondisi baru (kalkulasi material ditambah dengan upah pekerja), untuk selanjutnya diakumulasikan pengurangannya akibat faktor usia, kemunduran fungsi, maupun keusangan fisik (penyusutan/depresiasi)."
      },
      {
        topic: "PBB-P2",
        question: "Ketika menilai objek pajak berupa pekarangan yang memiliki perkerasan halaman, petugas menemui bahwa perkerasan tersebut hanya berupa tanah padat dan susunan batako (paving block) dengan tebal rata-rata sekitar 6 cm. Berdasarkan spesifikasi tersebut, perkerasan halaman ini termasuk ke dalam kriteria...",
        options: [
          "Tipe konstruksi ringan",
          "Tipe konstruksi sedang",
          "Tipe konstruksi berat",
          "Tipe konstruksi super",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Dari tiga penggolongan perkerasan area halaman, yang dinilai paling sederhana materialnya hanyalah tatanan bongkahan paving atau sekadar tanah pemadatan yang ketebalannya tidak melampaui 6 sentimeter. Hal ini mutlak diklasifikasikan ke dalam tipe konstruksi ringan."
      },
      {
        topic: "PBB-P2",
        question: "Bangunan berbentuk naungan raksasa (kanopi) penutup area Stasiun Pengisian Bahan Bakar Umum (SPBU) dikategorikan dalam struktur bangunan tersendiri yang berbeda dengan perumahan biasa. Pompa bensin (kanopi) ini akan digolongkan ke dalam...",
        options: [
          "JPB 3",
          "JPB 9",
          "JPB 11",
          "JPB 14",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Konstruksi fasilitas pompa bensin atau kanopi peneduh pengisian bahan bakar telah secara rigid memiliki kelompok perhitungan tipe konstruksinya tersendiri di dalam sistem tabel DBKB. Area struktur spesifik ini wajib dimasukkan ke dalam pendaftaran dan penilaian klasifikasi JPB 14."
      },
    ]
  },
  {
    id: "pbb-p2-paket-d",
    name: "Paket D",
    label: "D",
    questions: [
      {
        topic: "PBB-P2",
        question: "Berdasarkan definisi objek PBB Perdesaan dan Perkotaan, yang dimaksud dengan \"Bumi\" meliputi permukaan dan tubuh bumi yang ada di bawahnya. Berikut ini yang secara sah tergolong ke dalam cakupan permukaan bumi untuk pemajakan adalah...",
        options: [
          "Hanya kawasan tanah untuk kegiatan pertanian dan perkebunan",
          "Tanah, perairan pedalaman termasuk rawa-rawa, tambak, pengairan, serta laut wilayah Republik Indonesia",
          "Area permukaan daratan yang secara administrasi telah diterbitkan sertifikat hak miliknya",
          "Kawasan ruang udara dan perairan pedalaman yang persis berada di perbatasan wilayah provinsi",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Konsep permukaan bumi dalam sistem pemajakan PBB memiliki cakupan ruang yang luas. Definisi permukaan bumi tidak terbatas pada hamparan tanah atau daratan saja, melainkan mencakup area perairan pedalaman yang di dalamnya meliputi rawa-rawa, lahan tambak, jalur pengairan, hingga laut teritorial yang masuk dalam wilayah hukum Republik Indonesia."
      },
      {
        topic: "PBB-P2",
        question: "Dalam tahapan tata kelola basis data SISMIOP PBB yang telah terkomputerisasi, terdapat standar kegiatan pemulihan (recovery). Tindakan teknis utama dalam pelaksanaan kegiatan ini adalah...",
        options: [
          "Menyesuaikan kembali data letak objek di lapangan yang sebelumnya belum terdaftar di formulir SPOP",
          "Mencetak ulang Surat Pemberitahuan Pajak Terutang (SPPT) secara massal menjelang tahun pajak baru",
          "Memulihkan kembali data atau program yang rusak di dalam basis data dengan jalan memasukkan (restore) data atau program cadangan",
          "Menggabungkan dua atau lebih basis data wilayah (Geographic Information System) menjadi sebuah sistem tunggal",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Kegiatan pemulihan (recovery) adalah mekanisme perlindungan sistem teknologi informasi. Langkah yang diambil apabila terjadi kerusakan pangkalan data maupun error pada program berjalan adalah dengan menyuntikkan atau merestorasi data salinan cadangan (back-up) agar sistem dapat pulih dan berjalan seperti sedia kala."
      },
      {
        topic: "PBB-P2",
        question: "Pengelompokkan bangunan di dalam basis data perpajakan direpresentasikan dengan nomor kode Jenis Penggunaan Bangunan (JPB) yang membedakan satu tipe konstruksi dengan tipe lainnya. Untuk bangunan vertikal berupa apartemen atau kondominium, JPB yang digunakan adalah...",
        options: [
          "JPB 1",
          "JPB 6",
          "JPB 10",
          "JPB 13",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Struktur fungsional dan penggolongan penilaian mengklasifikasikan apartemen serta kondominium sebagai tipe ruang hunian tingkat tinggi yang spesifikasinya kompleks. Kelompok perumahan vertikal ini diikat dalam administrasi di bawah klasifikasi tunggal, yakni JPB 13."
      },
      {
        topic: "PBB-P2",
        question: "Pada penentuan estimasi besaran Nilai Bangunan, komponen perhitungan tidak semata-mata bergantung pada biaya langsung seperti biaya material dan upah pekerja, melainkan juga biaya tidak langsung. Berikut ini yang BUKAN merupakan elemen biaya tidak langsung dalam pembuatan suatu bangunan adalah...",
        options: [
          "Pajak Pertambahan Nilai (PPN)",
          "Harga pengadaan satuan besi beton bertulang dan pasir",
          "Biaya pengurusan Izin Mendirikan Bangunan (IMB) dan administrasi hukum",
          "Profit yang diterima oleh kontraktor dan biaya jasa perencanaan arsitektur",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Biaya yang diserap murni untuk pengadaan wujud benda keras, seperti pembelian batako, besi beton, material semen, atau upah tukang pembangunannya adalah tergolong biaya langsung. Di sisi lain, biaya tak langsung mencakup beban-beban tak kasat mata namun fundamental, misalnya pajak (PPN), asuransi, keuntungan pemborong (profit), ongkos konsultan arsitek, dan pengurusan perizinan (IMB)."
      },
      {
        topic: "PBB-P2",
        question: "Kualitas pengenaan pajak yang adil di suatu daerah dievaluasi melalui besaran nilai Assessment Sales Ratio (ASR). Secara matematis, rumusan persentase untuk mencari indeks ASR didapatkan melalui...",
        options: [
          "Rasio dari selisih antara NJOP Bumi dan NJOP Bangunan yang dihitung dalam satu zona",
          "Perbandingan antara Nilai Jual Objek Pajak (NJOP) dibagi dengan Harga Pasar Rata-rata, dikalikan 100%",
          "Rasio perbandingan terbalik antara Nilai Indikasi Rata-rata (NIR) dikurangi Rencana Anggaran Biaya (RAB)",
          "Penjumlahan rata-rata nilai penawaran properti dengan nilai transaksi bersih, kemudian dikalikan 10%",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Pengukuran Assessment Sales Ratio (ASR) yang berfungsi merepresentasikan akurasi nilai taksiran pajak diderivasi dari rumus baku. Formula ini menempatkan NJOP atau Nilai Indikasi Rata-rata (NIR) sebagai penyebut atas/pembilang yang kemudian dibagi oleh rata-rata angka Harga Pasar, dan dikalikan rasio status 100 persen."
      },
      {
        topic: "PBB-P2",
        question: "Pelaksanaan kajian berkala mengenai Assessment Sales Ratio (ASR) di suatu wilayah selalu dilatarbelakangi oleh serangkaian kebutuhan operasional dan manajerial. Manakah dari hal berikut ini yang merupakan salah satu sasaran langsung dari dilakukannya ASR?",
        options: [
          "Menyusun dan menetapkan skala prioritas wilayah mana saja yang paling mendesak untuk dilakukan penilaian ulang (revaluasi)",
          "Menghitung batas persentase Rencana Anggaran Biaya (RAB) pembuatan bangunan pada tahun pajak mendatang",
          "Mempercepat pengubahan status hukum suatu bangunan standar menjadi bangunan non-standar",
          "Mempersiapkan bahan pengajuan keberatan pajak secara independen untuk dilimpahkan ke Pengadilan Pajak",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Kajian ASR tidak sekadar melihat rasio angka, tetapi bertujuan strategis untuk mengidentifikasi tingkat urgensi administratif. Dengan membandingkan hasil pengujian ASR antar daerah, pihak instansi pajak dapat secara efektif menyusun skala pemeringkatan/prioritas, lalu memutuskan zona geografis mana saja yang telah tertinggal nilai estimasinya dan wajib segera dilakukan proses revaluasi (penilaian ulang)."
      },
      {
        topic: "PBB-P2",
        question: "Dalam statistik keadilan perpajakan, ketimpangan atau tingkat keseragaman (variability) rasio penetapan di suatu daerah lazimnya dianalisis lewat rumus Coefficient of Variation (COV). Indikator penyeimbang utama yang dijadikan pijakan penyebut pada rumusan COV tersebut adalah...",
        options: [
          "Nilai median (nilai tengah) dari sebaran data rasio",
          "Frekuensi modus dari populasi harga transaksi tertinggi",
          "Rata-rata populasi (mean) dari penyebaran assessment ratio tersebut",
          "Selisih baku deviasi antara NJOP tertinggi terhadap NJOP terendah",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Dalam komputasi statistik untuk mencari tingkat keseragaman pemajakan, formulasi Coefficient of Variation (COV) mengevaluasi deviasi pada jarak proporsinya yang menyebar berdasarkan titik mean. Hal ini membedakan COV dengan statistik Coefficient of Dispersion (COD), di mana letak penyebut yang digunakan pada COD memakai patokan median (titik tengah), sedangkan COV diukur murni terhadap nilai rata-rata (mean)."
      },
      {
        topic: "PBB-P2",
        question: "Daftar Biaya Komponen Bangunan (DBKB) tahun 2000 membangun skema perhitungan (Computer Assisted Valuation) dengan cara memisahkan elemen fisik konstruksi ke dalam tiga gerbong perhitungan pokok. Tiga komponen pembentuk estimasi biaya dalam rumusan model DBKB adalah...",
        options: [
          "Komponen interior khusus, komponen struktural atap, dan utilitas dasar",
          "Komponen utama, komponen material pendukung, dan komponen fasilitas",
          "Komponen utilitas listrik mekanikal, arsitektur dasar, dan lahan terpasang",
          "Komponen fondasi bawah tanah, lapisan instalasi pelindung, dan penyusutan fisik",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Pendekatan sistematis penyusunan harga untuk taksiran wujud bangunan utuh di dalam sistem DBKB mengklasifikasikan kalkulasi anggaran pada tiga buah lapisan komponen nilai yang wajib dijumlahkan. Ketiga komponen dasar tersebut adalah komponen utama bangunan, elemen variasi berupa komponen material, serta kelengkapan penyokong fungsional atau komponen fasilitas."
      },
      {
        topic: "PBB-P2",
        question: "Saat mengevaluasi komponen struktur utama penyusun rangka sebuah bangunan menggunakan sistem aplikasi nilai, terdapat ketentuan perlakuan kalkulasi terkait wujud fisik tertentu. Manakah pernyataan di bawah ini yang memuat prosedur sistematis mengenai penilaian struktur basement (ruang bawah tanah)?",
        options: [
          "Nilai volume basemen wajib diagregasikan bersamaan dalam proses kalkulasi pelat lantai dasar (lantai 1)",
          "Rincian beban komponen ruang basemen menaikkan indeks penyusutan ekonomis dua kali lipat akibat posisinya",
          "Struktur basemen diwajibkan untuk dihitung nilainya menggunakan Rencana Anggaran Biaya (RAB) independen",
          "Di dalam prosedur penghitungan, seluruh rincian struktur komponen basemen tersebut dikeluarkan dari struktur utama",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Secara prosedural dan arsitektur pengolahan aplikasi data, komponen struktural yang menjadi rangka penopang utama bangunan diletakkan pada kelasnya tersendiri (meliputi atap, dinding, tangga, fondasi). Adapun wujud basemen yang dikonstruksikan di bawah level jalan memiliki spesifikasi unik sehingga dalam kalkulasi algoritmenya, seluruh perhitungan volumenya harus dieksklusi atau dikeluarkan dari blok perhitungan struktur rangka utama tersebut."
      },
      {
        topic: "PBB-P2",
        question: "Objek yang direkomendasikan untuk dapat dinilai dengan cara terstruktur secara massal (Computer Assisted Valuation) menggunakan aplikasi tabel DBKB Standar harus patuh pada prasyarat batas dimensi. Aplikasi DBKB Standar ini mutlak dialokasikan bagi...",
        options: [
          "Properti seperti rumah atau area unit toko yang total lantainya kurang dari 4 lantai serta luas fisik bangunannya kurang dari 1.000 meter persegi",
          "Bangunan pencakar langit dengan investasi bernilai tinggi yang jumlah dimensinya bersifat tidak tak terbatas di perkotaan",
          "Area konstruksi yang didesain secara khusus untuk kelancaran arus transportasi makro seperti bandara serta jalan bebas hambatan",
          "Lahan luas kawasan perindustrian yang batas sekat area fisiknya merentang memanjang di atas luasan 50.000 meter persegi",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Metode taksiran sistem yang seragam dari tabel DBKB Standar memiliki limitasi peruntukan. Tabel perhitungan tersebut hanya sanggup menaksir akurasi pada bentuk objek bertaraf kasual, yang batasan mutlaknya berupa: lahan tidak tembus lebih dari 10.000 meter persegi, volume dimensi bangunan berada di bawah 1.000 meter persegi, dan yang secara sumbu vertikalnya, jumlah ketersediaan unit lantainya berada di bawah 4 tingkat. Properti di luar prasyarat tersebut dialihkan sebagai non-standar."
      },
    ]
  },
  {
    id: "pbb-p2-paket-e",
    name: "Paket E",
    label: "E",
    questions: [
      {
        topic: "PBB-P2",
        question: "Kegiatan pemeliharaan administrasi perpajakan yang secara spesifik bertujuan menyesuaikan data yang disimpan di dalam basis data dengan fakta atau keadaan yang sebenarnya di lapangan diistilahkan sebagai...",
        options: [
          "Pendaftaran Objek Pajak",
          "Pemutakhiran Basis Data (Up Dating)",
          "Pemulihan Sistem (Recovery)",
          "Penilaian Massal Terkomputerisasi",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Tindakan administratif yang secara khusus dikerjakan untuk menyesuaikan kembali rincian atribut data yang tersimpan di server dengan kondisi nyata dan keadaan riil di lapangan didefinisikan sebagai pemutakhiran basis data atau up dating."
      },
      {
        topic: "PBB-P2",
        question: "Dalam melakukan penyesuaian data harga jual guna mencari Nilai Indikasi Rata-rata (NIR) pada Zona Nilai Tanah, langkah penyesuaian wajib dieksekusi secara terpisah. Aturan urutan pelaksanaannya yang tepat adalah...",
        options: [
          "Penyesuaian waktu dilakukan lebih dulu, disusul oleh penyesuaian jenis data",
          "Penyesuaian jenis data dan waktu wajib dilakukan bersamaan dengan persentase setara",
          "Penyesuaian terhadap jenis data dieksekusi lebih dulu, kemudian dilanjutkan dengan penyesuaian waktu",
          "Cukup melakukan penyesuaian batas imajiner tanpa mengubah taksiran jenis data maupun waktu",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Aturan penyesuaian data harga penawaran/transaksi ke dalam basis analisis mengharuskan prosedur pemisahan komponen penyesuaian. Penganalisis harus mendahulukan penyesuaian terhadap faktor jenis data terlebih dahulu, barulah setelah itu menerapkan penyesuaian faktor waktu terhadap hasil evaluasi tersebut."
      },
      {
        topic: "PBB-P2",
        question: "Bangunan yang terdaftar secara legal untuk menunjang kegiatan operasional manufaktur secara utuh dikategorikan ke dalam Jenis Penggunaan Bangunan (JPB)...",
        options: [
          "JPB 5",
          "JPB 8",
          "JPB 10",
          "JPB 3",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Pengelompokkan JPB memecah tipe konstruksi berdasar fungsi asalnya. Fasilitas yang berwujud serta dikelola sebagai tempat operasi pabrik secara definitif diklasifikasikan ke dalam tipe JPB 3."
      },
      {
        topic: "PBB-P2",
        question: "Pada prosedur taksiran Daftar Biaya Komponen Bangunan (DBKB), struktur penyimpan air berkapasitas besar yang dikonstruksikan menggunakan beton bertulang dan tertanam pada salah satu lantainya digolongkan sebagai fasilitas...",
        options: [
          "Reservoir",
          "Sistem sanitasi terpadu",
          "Sumur pantek",
          "Utilitas perpipaan pabrik",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Dalam penentuan harga dari berbagai rincian fasilitas gedung, fasilitas reservoir secara teknis dijabarkan sebagai sebuah fasilitas wadah atau penampungan ketersediaan air yang diwujudkan melalui material beton bertulang dan posisinya berada pada salah satu tingkat lantai bangunan."
      },
      {
        topic: "PBB-P2",
        question: "Sebuah properti komersial yang bernilai amat tinggi memiliki karakteristik struktural rumit sehingga mesin algoritma Computer Assisted Valuation (CAV) tidak mampu menaksir nilainya secara akurat. Langkah yang dianjurkan untuk memecahkan dilema tersebut adalah dengan memakai skema...",
        options: [
          "Penilaian menggunakan metode batas imajiner ZNT",
          "Ekstrapolasi rata-rata nilai tiga tanah kosong terdekat",
          "Penilaian Individu",
          "Pendataan massal tanpa mencantumkan nilai struktur",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Pendekatan sistematis via Penilaian Individu sengaja disediakan dan dieksekusi tatkala menghadapi objek pajak non-standar, objek-objek bernilai terlalu tinggi, maupun properti yang apabila ditaksir menggunakan otomatisasi CAV justru memunculkan deviasi atau kegagalan dalam merepresentasikan nilai ekonomi riilnya."
      },
      {
        topic: "PBB-P2",
        question: "Sebagai panduan tata laksana sistem informasi spasial perpajakan, terdapat sebuah restriksi geografis. Pembentukan basis data SISMIOP secara absolut TIDAK BOLEH dilaksanakan di...",
        options: [
          "Wilayah perdesaan yang potensi pemajakannya bersifat marjinal dan minim transaksi",
          "Daerah atau area administratif yang secara sistem basis datanya telah memiliki struktur SISMIOP",
          "Area yang luas total lahannya melampaui ukuran 10.000 meter persegi dengan jumlah subjek beragam",
          "Zona Nilai Tanah (ZNT) yang sama sekali nihil perekaman data historis penawaran properti",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Ketentuan prosedural pembentukan basis data SISMIOP mencantumkan klausul restriksi yang menyatakan bahwa mekanisme kegiatan penyusunan dasar atau pembentukan basis data SIsmiop secara mutlak tidak boleh lagi dilaksanakan menimpa daerah-daerah yang kerangka basis datanya memang sudah telanjur berstruktur SIsmiop sedari awal."
      },
      {
        topic: "PBB-P2",
        question: "Pendataan menggunakan mekanisme penyampaian dan pemantauan pengembalian Surat Pemberitahuan Objek Pajak (SPOP) secara kolektif merupakan alternatif teknis yang sangat disarankan untuk diaplikasikan pada karakteristik wilayah dengan...",
        options: [
          "Sektor komersial murni yang memiliki kelengkapan data hasil inspeksi dan Assessment Sales Ratio yang mapan",
          "Zona pusat bisnis yang kepadatan bangunannya membutuhkan taksiran Penilaian Individu secara mendalam",
          "Bangunan superblok serta pelabuhan udara komersial berskala masif",
          "Potensi pungutan pajak berskala relatif kecil, namun memiliki rentang hamparan cakupan wilayah dan objek fisik yang amat luas",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Metode penyebaran serta pengembalian rekapitulasi pelaporan SPOP secara kolektif—yang umumnya meminta bantuan aparatur kelurahan untuk distribusinya—amat bermanfaat guna mengelola administrasi wilayah yang secara spesifik memiliki area persebaran sangat luas namun besaran potensi penarikan pajaknya (PBB) dinilai kecil atau kurang strategis."
      },
      {
        topic: "PBB-P2",
        question: "Apabila sebuah kajian keadilan sistem perpajakan menemukan indikator rasio yang rata-rata tendensi sentralnya (mean/weighted mean) selalu menetap di bawah ukuran ambang batas 0,95, maka area penilaian pajak tersebut dinyatakan sedang mengidap gejala ketimpangan...",
        options: [
          "Progresifitas",
          "Variabilitas eksponensial",
          "Regresifitas",
          "Over assessment",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Dalam literatur statistika ukuran pemajakan, saat besaran ukuran indeks tendensi tengah (baik pada ukuran rata-rata maupun weighted mean) menjatuhkan angkanya lebih rendah daripada standar batas bawah rasio 0,95, maka fenomena asimetris tersebut dikategorikan sebagai jenis ketimpangan progresifitas."
      },
      {
        topic: "PBB-P2",
        question: "Guna menentukan batas depresiasi pada \"bangunan bertingkat tinggi\" yang tergolong masih teramat baru (umur tahun pajak dikurangi tahun dibangun kurang dari 10 tahun), dan kebetulan pula bangunan tersebut pernah mengalami tahapan perombakan (renovasi), maka kalkulasi penurunan nilai (umur efektif) wajib memakai komponen hitung...",
        options: [
          "Rumus rata-rata median dari Assessment Ratio kawasan",
          "Menggunakan komponen hitung Rumus II",
          "Menggunakan koefisien Tabel DBKB Komponen Utama",
          "Menggunakan formulasi Rumus I",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Khusus untuk menilai besaran susut pada bentuk konstruksi gedung eksklusif atau bertingkat tinggi dengan umur selisih pembangunan terhadap masa penetapan pajak kurang dari batas usia sepuluh tahun, serta memuat riwayat kegiatan renovasi, penaksir diwajibkan memanfaatkan kaidah hitung Rumus I. Rumus I memasukkan elemen pemotongan selisih tahun pajaknya secara proporsional."
      },
      {
        topic: "PBB-P2",
        question: "Pengukuran keseragaman pemajakan antara perhitungan varians Coefficient of Dispersion (COD) terhadap Coefficient of Variation (COV) dipisahkan oleh letak acuan perbandingannya. Apabila COV bersandar pada pemakaian titik mean, maka elemen penyeimbang untuk menghitung porsi COD wajib bersandar pada besaran dari...",
        options: [
          "Batas rentang data kuartil bawah harga pasar",
          "Indikator letak median dari rasio populasi",
          "Standar variabilitas toleransi IAAO",
          "Jumlah total dari frekuensi rasio minus satu",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Model persentase untuk mendapatkan rasio indeks keadilan Coefficient of Dispersion (COD) mutlak dilandaskan dari sumbu median. Letak nilai ukuran tengah dari bentangan deret populasi atau median tersebut bertugas menjadi patokan pengurang sekaligus divisor utama saat melacak variasi jarak rasio penilaian."
      },
    ]
  },
  {
    id: "pbb-p2-paket-f",
    name: "Paket F",
    label: "F",
    questions: [
      {
        topic: "PBB-P2",
        question: "Selain untuk mengevaluasi keadilan pemajakan, pelaksanaan pengukuran Assessment Sales Ratio (ASR) juga memiliki fungsi strategis manajerial lainnya bagi instansi pajak, yaitu...",
        options: [
          "Menentukan batas wajar tarif pemotongan PPN untuk bangunan baru",
          "Mengukur serta meningkatkan potensi penerimaan PBB di suatu wilayah",
          "Menetapkan besaran denda administratif bagi wajib pajak yang menunggak",
          "Mengurangi secara langsung beban operasional pada saat pengisian SPOP",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Kajian ASR memiliki fungsi analitis yang sangat fundamental di luar pengujian rasa keadilan semata. Berdasarkan standar penilaian, analisis rasio ini dapat difungsikan untuk meningkatkan akurasi pemungutan, memperbaiki performa kinerja penetapan, serta secara langsung digunakan untuk mengukur dan memetakan potensi penerimaan PBB."
      },
      {
        topic: "PBB-P2",
        question: "Dalam sistem klasifikasi Jenis Penggunaan Bangunan (JPB) yang didasarkan pada tipe konstruksinya, terdapat satu kode spesifik yang disediakan untuk bangunan atau fasilitas yang dibebaskan dari pungutan pajak. Kode identitas untuk bangunan tidak kena pajak tersebut adalah...",
        options: [
          "JPB 9",
          "JPB 12",
          "JPB 15",
          "JPB 11",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Struktur pengelompokkan jenis penggunaan merinci berbagai tipe wujud konstruksi dengan kodenya masing-masing. Bangunan peribadatan, fasilitas umum milik pemerintah, atau fasilitas lain yang secara regulasi dikecualikan sebagai subjek pungutan (bangunan tidak kena pajak), akan dicatat dalam administrasi penilaian menggunakan klasifikasi kode JPB 11."
      },
      {
        topic: "PBB-P2",
        question: "Pada rumusan nilai komponen material sebuah bangunan, penilai akan membedakan jenis material dinding berdasarkan letak fungsi strukturalnya. Material seperti gypsum board atau tripleks yang difungsikan murni untuk membentuk serta memisah ruangan di dalam bangunan akan diklasifikasikan sebagai...",
        options: [
          "Material Pelapis Struktural",
          "Material Dinding Luar (MDL)",
          "Material Dinding Dalam (MDD)",
          "Material Penutup Rangka",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Material penyusun bangunan dibagi penggolongannya berdasarkan letak dan sifat aplikasinya. Komponen pembentuk yang ditugaskan semata-mata sebagai sekat pemisah ruang operasional di bagian interior (indoor) sebuah struktur bangunan, secara spesifik diidentifikasi dan ditaksir harganya sebagai kelompok Material Dinding Dalam (MDD)."
      },
      {
        topic: "PBB-P2",
        question: "Saat mengkalkulasi total Nilai Bangunan menggunakan metode penyusunan anggaran, pihak penilai harus menghitung porsi biaya tidak langsung (indirect cost). Dari opsi berikut, unsur yang mutlak tergolong ke dalam komponen biaya tidak langsung adalah...",
        options: [
          "Biaya pengurusan administrasi hukum (IMB) dan pembayaran premi asuransi",
          "Upah harian yang wajib dibayarkan kepada pekerja konstruksi kasar",
          "Biaya sewa alat berat untuk penggalian dan pemadatan tanah fondasi",
          "Biaya murni untuk belanja kebutuhan material batu, beton, dan pasir",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Penentuan nilai total dari suatu bangunan memisahkan antara biaya belanja bahan keras (langsung) dan biaya operasional birokrasi (tidak langsung). Unsur tak langsung tersebut mengakomodasi pengeluaran wajib, namun non-fisik, yang menunjang proses legal pembangunan. Contoh kompenen ini antara lain pungutan PPN, laba kontraktor, ongkos cetak cetak biru arsitektur, premi asuransi perlindungan, serta biaya izin mendirikan bangunan (IMB)."
      },
      {
        topic: "PBB-P2",
        question: "Ketentuan penyusutan nilai bangunan menggunakan \"Rumus II\" menetapkan prosedur hitung bagi bangunan bertingkat tinggi yang umurnya masih di bawah 10 tahun dan yang BUKAN merupakan bangunan hasil renovasi. Rumus yang sah untuk mendapatkan nilai \"umur efektif\" pada kondisi bangunan tersebut adalah...",
        options: [
          "(Tahun Pajak dikurangi Tahun Dibangun) dan hasilnya dibagi dua",
          "Tahun Pajak dikurangi Tahun Dibangun",
          "(Tahun Pajak dikurangi Tahun Direnovasi) kemudian ditambah dua",
          "Rata-rata pembagian dari variabel Tahun Pajak terhadap Tahun Dibangun",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Ketentuan kaidah yang diatur dalam Rumus II mengatur secara khusus bahwa apabila sebuah properti eksklusif atau bertingkat tinggi masih berusia sangat muda (berusia kurang dari sepuluh tahun) dan memiliki riwayat tahun renovasi yang kosong alias nihil/tidak pernah direnovasi, maka penaksiran umur efektifnya cukup dihitung secara lugas lewat pengurangan antara masa tahun pajak yang berjalan dengan tahun awal mula properti tersebut dibangun."
      },
      {
        topic: "PBB-P2",
        question: "Pedoman baku pemajakan proporsional yang dirilis secara global oleh The International Association of Assessing Officers (IAAO) menggariskan sebuah rekomendasi persentase toleransi pada ukuran Assessment Sales Ratio. Batas simpangan rasio yang dianggap wajar dan adil dari tingkat indeks harapan pemajakannya adalah sebesar...",
        options: [
          "5 persen",
          "15 persen",
          "25 persen",
          "10 persen",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Aturan standar pengukuran keadilan penilaian (ratio studies) yang dikukuhkan oleh asosiasi internasional (IAAO) menetapkan batasan yang rigorus. Rekomendasi mereka mengharuskan bahwa seluruh hasil estimasi nilai objek pajak idealnya tidak boleh menyimpang terlalu jauh, yakni terbatas selisih sebesar 10 persen dari indeks tengah yang diinginkan (rentang antara rasio 90 persen hingga 110 persen)."
      },
      {
        topic: "PBB-P2",
        question: "Secara definisi hukum PBB Perdesaan dan Perkotaan (PBB-P2), kawasan tubuh bumi dan perairan pedalaman terikat ke dalam definisi pemajakan. Akan tetapi, ada sektor pemanfaatan lahan yang secara hukum DIKECUALIKAN dari jangkauan penarikan PBB-P2. Kawasan bentang lahan yang dikecualikan tersebut adalah...",
        options: [
          "Rawa-rawa yang dijadikan tambak serta jalur perairan pedalaman",
          "Lahan perumahan komersial kelas atas dan area terpadu pabrik industri",
          "Kawasan bumi yang difungsikan murni untuk kegiatan usaha perkebunan, perhutanan, serta pertambangan",
          "Area luas pelabuhan udara dan fasilitas zona pelabuhan laut komersial",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Definisi objek lahan dan bangunan yang dikenai jenis pungutan PBB wilayah perdesaan dan perkotaan memiliki batas kriteria pengecualian. Lahan yang penguasaannya atau utilitas pemanfaatannya berorientasi murni untuk aktivitas eksploitasi kekayaan alam berskala besar (meliputi tata niaga usaha perkebunan agrobisnis, lahan perhutanan, maupun konsesi tambang) dilepaskan atau dikecualikan dari status objek pungut PBB-P2."
      },
      {
        topic: "PBB-P2",
        question: "Dalam penyusunan taksiran Daftar Biaya Komponen Bangunan (DBKB), segala rincian anggaran untuk pekerjaan persiapan semacam pembersihan lahan basah (direksi keet), penggalian serta pengurukan fondasi, sampai ke pengecoran struktur pelat lantai beton akan digolongkan seluruhnya ke dalam klaster...",
        options: [
          "Komponen Struktur Utama",
          "Komponen Fasilitas Pelengkap",
          "Komponen Material Dinding Dalam",
          "Komponen Eksterior Bangunan Tambahan",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Sistem perhitungan komputerisasi kalkulasi biaya bangunan (Computer Assisted Valuation) membelah klasifikasi biayanya pada tiga kelompok. Pekerjaan merintis konstruksi mulai dari nol, rekayasa pembentukan dasar lahan (bouwplank/direksi keet), penanaman konstruksi fondasi, dinding geser penahan beban, hingga berdirinya wujud kerangka beton pengikat dan pelat lantainya, mutlak direkapitulasi secara spesifik ke dalam hitungan klaster Komponen Struktur Utama bangunan."
      },
      {
        topic: "PBB-P2",
        question: "Sebuah instansi properti membangun konstruksi masif tanpa dinding pembatas masif yang murni dialokasikan sebagai layanan garasi publik berbayar. Model bangunan yang berwujud sebagai gedung khusus atau bangunan lahan parkir tersebut akan diregistrasikan ke sistem nilai melalui kode klasifikasi...",
        options: [
          "JPB 6",
          "JPB 12",
          "JPB 10",
          "JPB 9",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Tatanan kodeklasifikasi Jenis Penggunaan Bangunan (JPB) mengelompokkan ragam konstruksi arsitektur spesifik demi mengejar ketepatan taksiran biaya penyusunan. Suatu wujud struktur atau kompleks ruang yang dibangun hanya demi memfasilitasi penempatan terpusat armada transportasi publik maupun niaga komersial (gedung parkir) memiliki pos registrasi tunggal, yakni klasifikasi nomor JPB 12."
      },
      {
        topic: "PBB-P2",
        question: "Ketajaman hitung pengujian keadilan perpajakan (variability) yang dijalankan lewat rumus Coefficient of Variation (COV) dipisahkan secara teknis dari pendekatan pengujian lainnya (seperti metode COD) pada masalah penetapan letak ukuran pembaginya. Sumbu pembagi (denominator) utama dalam algoritma rumus COV wajib menempatkan ukuran besaran...",
        options: [
          "Simpangan baku batas bawah pada populasi data penawaran",
          "Titik Median (nilai tengah mutlak) dari sebaran kelompok rasio penilaian",
          "Akumulasi jumlah kuadrat di antara dua unit sub-zonasi nilai tanah",
          "Titik Mean (indeks rata-rata berbobot) dari serangkaian sebaran rasio penilaian",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Parameter pembeda mutlak antara rumus Coefficient of Dispersion (COD) terhadap instrumen penghitungan statistik Coefficient of Variation (COV) senantiasa dititikberatkan pada pemilihan angka sentralnya. Algoritma matematika dalam COV diwajibkan secara mutlak memakai besaran angka Mean (nilai rata-rata) sebagai angka penyebut dasar (denominator) atas kalkulasi proporsi serangakaian rasio deviasi perpajakan yang tengah diteliti."
      },
    ]
  },
  {
    id: "pbb-p2-paket-g",
    name: "Paket G",
    label: "G",
    questions: [
      {
        topic: "PBB-P2",
        question: "Penentuan pendekatan penilaian dipengaruhi oleh dimensi fisik properti. Sebuah objek properti akan langsung diklasifikasikan sebagai Bangunan Non-Standar apabila memiliki kriteria luas tanah sebesar...",
        options: [
          "Kurang dari 1.000 meter persegi",
          "Lebih dari 5.000 meter persegi",
          "Lebih dari 10.000 meter persegi",
          "Kurang dari 10.000 meter persegi",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Kriteria fisik yang menjadikan sebuah objek pajak wajib dinilai secara individu sebagai bangunan non standar salah satunya ditentukan dari batasan luas lahan. Apabila properti tersebut berdiri di atas luas tanah yang melampaui 10.000 meter persegi, objek tersebut otomatis digolongkan sebagai bangunan non-standar."
      },
      {
        topic: "PBB-P2",
        question: "Pada pelaksanaan pendataan di lapangan, petugas dapat menggunakan mekanisme Identifikasi Objek Pajak. Pendekatan alternatif ini paling tepat diaplikasikan pada daerah yang kondisinya...",
        options: [
          "Sama sekali tidak memiliki peta desa maupun peta garis",
          "Sudah mempunyai peta garis namun belum mempunyai data administrasi pembukuan",
          "Sudah mempunyai kelengkapan peta garis sekaligus data administrasi pembukuan historis",
          "Hanya memiliki wilayah administrasi berupa perairan lepas dan pulau karang",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Alternatif pendataan dengan cara Identifikasi Objek Pajak dirancang khusus untuk wilayah yang secara infrastruktur geografis telah siap, yakni sudah memiliki peta garis atau peta foto untuk menentukan letak relatif. Akan tetapi, daerah tersebut menghadapi kendala karena tidak memiliki arsip data administrasi pembukuan pajak dari tiga tahun terakhir."
      },
      {
        topic: "PBB-P2",
        question: "Pengukuran akurasi dan keadilan taksiran pajak melalui Assessment Sales Ratio (ASR) memetakan beberapa fenomena ketimpangan. Kondisi yang disebut sebagai Over assessment terjadi apabila...",
        options: [
          "Nilai rata-rata berbobot (weighted mean) berada di bawah 0,95",
          "Angka indeks variabilitas (variability) menyentuh rasio 1,00",
          "Ukuran titik tengah (median) populasi berada persis di ambang 1,00",
          "Ukuran tendensi sentral (mean atau median) menunjukkan rasio lebih dari 1,10",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Dalam komputasi statistik untuk pengujian mutu penilaian pajak (ASR), beban penetapan nilai yang dianggap terlampau tinggi dari harga pasar disebut dengan fenomena over assessment. Indikasi gejala ini dipastikan apabila ukuran tendensi sentral perhitungan rasio di daerah tersebut, baik dilihat dari sisi nilai rata-rata (mean) maupun sisi nilai tengahnya (median), melampaui batas ambang angka 1,10."
      },
      {
        topic: "PBB-P2",
        question: "Sistem administrasi pemajakan mengelompokkan bangunan berdasarkan fungsi fungsionalnya (JPB). Kode identitas JPB 8 secara spesifik digunakan untuk mendaftarkan konstruksi yang berfungsi sebagai...",
        options: [
          "Perkantoran dan gedung dinas swasta",
          "Rumah sakit, fasilitas klinik, dan puskesmas",
          "Area perbengkelan, gudang penyimpanan, serta fasilitas pertanian",
          "Unit sentra perdagangan, ruko ritel, dan apotek",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Tabel pengelompokkan jenis penggunaan bangunan (JPB) memisahkan struktur fisik sesuai dengan utilisasi operasionalnya. Bangunan utilitas khusus non-publik seperti deretan bengkel komersial, unit gudang penyimpanan barang, maupun struktur penunjang area pertanian secara rigid diadministrasikan ke dalam klaster JPB 8."
      },
      {
        topic: "PBB-P2",
        question: "Pendaftaran objek Pajak Bumi dan Bangunan merupakan tahapan awal di mana subjek pajak berkewajiban mengambil dan mengisi formulir Surat Pemberitahuan Objek Pajak (SPOP). Selain data isian formulir, dokumen vital apa yang wajib dilampirkan oleh wajib pajak dalam proses ini?",
        options: [
          "Denah letak objek pajak",
          "Rincian Rencana Anggaran Biaya (RAB) tahun berjalan",
          "Daftar rasio Assessment Sales Ratio di zona tersebut",
          "Fotokopi peta garis dengan kontur geografi tiga dimensi",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Prosedur pelayanan pendaftaran pajak mandiri mengamanatkan subjek pajak untuk mengisi rincian formulir identifikasi secara jelas, benar, dan lengkap. Untuk memvalidasi letak geografis aslinya, pengisian data dalam SPOP tersebut secara mutlak harus selalu diiringi atau dilengkapi dengan gambar denah objek pajak yang bersangkutan."
      },
      {
        topic: "PBB-P2",
        question: "Sistem estimasi massal lewat model DBKB 2000 merancang taksiran konstruksi bangunan dengan membelah wujudnya ke dalam tiga komponen dasar. Sifat fisik utama dari \"Komponen Material\" bangunan tersebut adalah...",
        options: [
          "Rangka dasar penahan beban seperti fondasi beton",
          "Elemen pelapis (kulit) dari struktur rangka bangunan",
          "Instalasi perpipaan mekanikal bawah tanah",
          "Aksesoris penunjang kenyamanan ruang publik",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Mekanisme pemisahan algoritma biaya di sistem DBKB mendetailkan anatomi properti. Di dalam hierarki penilaian tersebut, yang tergolong ke dalam elemen komponen struktur material didefinisikan secara khusus sebagai sekumpulan material bahan yang digunakan sekadar menjadi pelapis luar atau kulit bagi selubung rangka bangunan."
      },
      {
        topic: "PBB-P2",
        question: "Dalam perhitungan fasilitas tambahan pada suatu properti mewah, instansi pajak akan memasukkan \"Sistem Sanitasi\" sebagai penambah beban taksiran nilai bangunan. Sistem sanitasi ini secara teknis didefinisikan sebagai...",
        options: [
          "Fasilitas pembuangan air kotor di dalam bangunan",
          "Saluran komunikasi PABX antar-ruangan",
          "Wadah tampungan (reservoir) yang dibangun dari cor beton",
          "Tangki penyimpan cairan sisa operasional bengkel mesin",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Seluruh kelengkapan penunjang gedung diklasifikasikan spesifikasinya di dalam taksiran komponen fasilitas DBKB. Struktur instalasi sistem sanitasi dihitung secara terpisah dengan definisi baku sebagai suatu fasilitas kelengkapan sanitasi dan sistem jaringan buangan air kotor yang memang terpasang serta difungsikan secara terintegrasi di dalam sebuah unit bangunan."
      },
      {
        topic: "PBB-P2",
        question: "Sebuah bangunan tipe eksklusif (bertingkat tinggi) tercatat baru saja dibangun enam tahun yang lalu. Petugas penilai menemukan bahwa properti tersebut belum pernah sekalipun mengalami proses renovasi. Rumusan mencari \"umur efektif\" bangunan tersebut wajib menggunakan kaidah...",
        options: [
          "Mengalikan tarif susut dengan selisih tahun pajaknya",
          "Menyuntikkan perhitungan persentase biaya tak langsung pada tahun direnovasi",
          "Menambahkan indeks angka 2 ke dalam selisih usianya",
          "Menghitung murni lewat pengurangan tahun pajak terhadap tahun bangunan didirikan",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Penaksiran faktor pengurangan nilai pada bangunan-bangunan mewah dan bertingkat tinggi yang usianya di bawah sepuluh tahun memiliki ketetapan khusus. Sesuai kaidah yang diatur pada \"Rumus II\", bila riwayat kegiatan renovasinya kosong, maka umur efektif bangunan tersebut didapatkan dengan perhitungan murni, yakni dengan memotong tahun masa pajak berjalan terhadap tahun historis properti tersebut selesai dibangun."
      },
      {
        topic: "PBB-P2",
        question: "Saat mesin Computer Assisted Valuation (CAV) mengakumulasi Rencana Anggaran Biaya standar, penaksiran untuk beban pembiayaan instalasi kolom beton serta struktur beton bertulang wajib digabungkan perhitungannya ke dalam...",
        options: [
          "Tabel Komponen Struktur Utama",
          "Tabel Komponen Material Bangunan Dalam",
          "Tabel Komponen Fasilitas Mekanikal Dasar",
          "Tabel Daftar Biaya Pekerjaan Persiapan (Direksi Keet)",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Segala wujud infrastruktur berat penopang beban diletakkan pada kelas perhitungannya tersendiri. Pekerjaan pembentukan beton maupun beton bertulang (yang di dalamnya mencakup tiang kolom, pelat lantai, fondasi, serta dinding penyangga gaya geser) mutlak dijumlahkan rincian harganya di bawah kelompok klaster perhitungan Komponen Struktur Utama."
      },
      {
        topic: "PBB-P2",
        question: "Dalam alur pembentukan basis peta kawasan pajaknya, para analis dituntut untuk menarik batas imajiner Zona Nilai Tanah (ZNT). Aktivitas analitis paling krusial dalam menciptakan batas imajiner zona wilayah tersebut adalah melakukan...",
        options: [
          "Eliminasi manual terhadap indeks harga jual ekstrem",
          "Normalisasi batas depresiasi komponen non-standar",
          "Pengelompokkan (clustering) bidang-bidang tanah dalam satu ZNT",
          "Integrasi seluruh nilai fasilitas pabrikan berskala masif",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Penyusunan kerangka geografis untuk area nilai taksiran seragam membutuhkan batasan administrasi yang presisi. Untuk merumuskan dan menggambar batas imajiner sebuah unit ZNT di peta kerja, proses analitis yang ditempuh tim penilai adalah dengan mempertimbangkan sebaran letak data harga jual, kemudian mengeksekusi metode pengelompokkan (clustering) atas segenap luasan bidang tanah tersebut ke dalam satu kesatuan zona homogen."
      },
    ]
  },
  {
    id: "pbb-p2-paket-h",
    name: "Paket H",
    label: "H",
    questions: [
      {
        topic: "PBB-P2",
        question: "Konstruksi yang secara fungsional dibangun secara khusus untuk mendukung kegiatan pendidikan, seperti area gedung sekolah, dikelompokkan ke dalam Jenis Penggunaan Bangunan (JPB) nomor...",
        options: [
          "JPB 16",
          "JPB 15",
          "JPB 13",
          "JPB 10",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Pengelompokan struktur properti memisahkan ranah fungsional pendidikan ke dalam kelasnya tersendiri. Fasilitas pendidikan maupun gedung sekolah didaftarkan pengelolaannya secara spesifik di bawah kode identifikasi klasifikasi JPB 16."
      },
      {
        topic: "PBB-P2",
        question: "Dalam kerangka sistem aplikasi Computer Assisted Valuation (CAV), arsitektur estimasi biayanya dibagi ke dalam modul-modul. Bagian di dalam aplikasi yang memproses analisis BOW (Burgerlijke Openbare Werken) dari harga material dan upah pekerja untuk menghasilkan perhitungan Biaya Pembuatan Bangunan Baru disebut sebagai...",
        options: [
          "Modul Penilaian Terpadu",
          "Modul Analisis Individual",
          "Modul 1",
          "Modul 2",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Dalam kerangka komputasi nilai bangunan (CAV), arsitektur perangkat lunak disusun dan dipecah pada modul-modul pengerjaan. Modul 1 bertugas sebagai inti pengolahan analisis harga mentah, yang memadukan input beban harga material dengan besaran upah pekerja di suatu daerah agar dapat merumuskan estimasi taksiran Biaya Pembuatan Bangunan Baru."
      },
      {
        topic: "PBB-P2",
        question: "Pada skema penganalisisan nilai properti, langkah yang harus ditempuh untuk menentukan Nilai Indikasi Rata-rata (NIR) pada kawasan yang dikategorikan dalam \"Alternatif 3A\" adalah dengan mengeksekusi perhitungan menggunakan...",
        options: [
          "Angka baku harga pasar rata-rata dari tahun lalu yang dinaikkan persentase 5%",
          "Substitusi langsung terhadap nilai tertinggi dari zona pembanding terdekat",
          "Pematokan angka NJOP murni berdasarkan survei material tanpa analisis zona lain",
          "Rata-rata dari data hasil analisis (objek acuan) yang diciptakan khusus dari data pasar di area pembanding",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Pendekatan Alternatif 3A diimplementasikan ketika sebuah kawasan (ZNT) benar-benar berada dalam kondisi kekosongan data transaksi harga jual pasar. Solusi taksiran analitisnya dipecahkan dengan cara merekayasa atau \"menciptakan\" data objek acuan hasil turunan dari zona penolong, yang pada akhirnya nilai rata-rata dari data acuan itulah yang diadopsi sebagai hasil."
      },
      {
        topic: "PBB-P2",
        question: "Pada tahap penyelesaian pemetaan dan valuasi, sebuah buku laporan \"Analisis ZNT/NIR per kelurahan/desa\" wajib disusun secara runut menggunakan sistematika baku. Halaman yang harus diletakkan langsung SETELAH \"Halaman Judul\" adalah lembar...",
        options: [
          "Lampiran Tabel Pembanding",
          "Transmital",
          "Sertifikasi Nilai",
          "Pengesahan Pejabat",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Pedoman pelaporan dokumen analisis nilai spasial menetapkan sistematika pemberkasan yang kaku. Persis sesudah menyusun sampul atau Halaman Judul utama, dokumen wajib langsung disambung dengan melampirkan lembar \"Transmital\" (surat pengantar penyampaian dokumen secara resmi), baru setelahnya diikuti oleh bagian Sertifikasi Nilai dan Lembar Pengesahan."
      },
      {
        topic: "PBB-P2",
        question: "Sebuah gedung bisnis tiga lantai berdiri di atas tanah seluas 2.000 meter persegi. Kondisi fisik apa dari opsi di bawah ini yang mutlak akan menggeser properti ini dari bangunan standar menjadi \"Bangunan Non-Standar\"?",
        options: [
          "Total luas dimensi fisik bangunannya melampaui 1.000 meter persegi",
          "Struktur atapnya dibuat tidak menggunakan material beton",
          "Gedung tersebut dibangun di kawasan sentra niaga padat modal",
          "Total luas fisik bangunannya kurang dari 500 meter persegi",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Sebuah entitas wujud bangunan akan serta-merta dikeluarkan dari perhitungan sistem standar menuju skema Penilaian Individu apabila menyentuh salah satu ambang ekstrem kriteria fisik luasan. Jika perhitungan volume bentang bangunannya melampaui ukuran absolut 1.000 meter persegi, objek tersebut otomatis digolongkan sebagai bangunan non-standar, terlepas dari gedung itu hanya berjumlah tiga lantai (batas lantai non-standar adalah jika lebih dari empat lantai)."
      },
      {
        topic: "PBB-P2",
        question: "Infrastruktur masif untuk keperluan penyimpanan sumber daya energi cair, seperti tangki minyak berkapasitas besar di dalam area depot, akan diklasifikasikan ke dalam basis data perhitungan menggunakan kode...",
        options: [
          "JPB 3",
          "JPB 8",
          "JPB 12",
          "JPB 15",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Spesifikasi konstruksi wadah energi untuk keperluan industri atau cadangan logistik seperti struktur tangki penampungan minyak tidak disamakan penilaiannya dengan bangunan fisik konvensional. Infrastruktur ini diregistrasikan nilai struktur dan harganya ke dalam kelompok khusus, yakni klasifikasi JPB 15."
      },
      {
        topic: "PBB-P2",
        question: "Formulasi Coefficient of Dispersion (COD) berfungsi mengukur batas kewajaran persentase jarak deviasi pada pemajakan. Guna mengunci indeks keluaran di tahap akhir persamaan tersebut, angka pembagi (denominator) utama yang menjadi landasan hitungnya melibatkan operasi terhadap angka...",
        options: [
          "Mean terhadap simpangan baku rasio rata-ratanya",
          "Ukuran letak Median yang dikalikan jumlah frekuensi sampel dikurangi satu (n - 1)",
          "Pembagian antara rasio Mean mutlak dibagi luasan populasi objek pajak baru",
          "Rata-rata dari nilai ekstrim tertinggi ditambah sampel terendah",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Persamaan matematis untuk merumuskan angka deviasi dari Coefficient of Dispersion (COD) menetapkan elemen pembaginya secara presisi. Keseluruhan nilai selisih penyimpangan di bagian atas rumus (nominator) mutlak harus selalu dibagikan dengan ukuran letak tengahnya (Median) yang telah dioperasikan/dikalikan dengan total jumlah populasinya setelah dikurangi satu, disimbolkan dalam formula sebagai `Smd x (n - 1)`."
      },
      {
        topic: "PBB-P2",
        question: "Fasilitas Pembangkit Listrik Tenaga Air (PLTA), Pembangkit Listrik Tenaga Diesel (PLTD), maupun Pembangkit Listrik Tenaga Uap (PLTU) tidak dapat begitu saja dimasukkan ke dalam basis perkiraan DBKB konvensional, hal ini terjadi karena objek tersebut secara prosedur perpajakan tergolong ke dalam...",
        options: [
          "Bangunan Industri Terpadu",
          "Bangunan Fasilitas Penunjang Lahan",
          "Bangunan Khusus",
          "Komponen Material Berat",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Infrastruktur energi berskala makro layaknya kawasan stasiun Pembangkit Listrik memiliki kompleksitas perakitan, turbin, mekanikal kelistrikan, dan konstruksi perpipaan masif yang nilai intrinsiknya amat spesifik. Mengingat kriteria arsitekturnya yang ekstrem, regulasi memisahkan utilitas instalasi perlistrikan ini murni ke dalam kelompok \"Bangunan Khusus\". Bangunan di kelompok ini ditaksir eksklusif menggunakan manual evaluasi survei kuantitas atas Rencana Anggaran Biaya proyek."
      },
      {
        topic: "PBB-P2",
        question: "Jika pada sistem otomasi penilaian aplikasi (CAV) \"Modul 1\" diprogram khusus untuk mencerna kombinasi anggaran material bahan dan beban bayaran tukang, maka \"Modul 2\" pada arsitektur sistem ini difungsikan murni untuk merekam...",
        options: [
          "Input data wujud dan spesifikasi properti berdasarkan formulir Lembar Surat Pemberitahuan Objek Pajak (LSPOP)",
          "Integrasi gambar visual peta digital resolusi tinggi per kawasan zona pajak",
          "Simulasi penurunan batas ambang nilai penyusutan ekonomis secara triwulanan",
          "Distribusi besaran kuota penerimaan denda dan tunggakan secara proporsional per wilayah kelurahan",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Algoritma internal sistem komputerisasi penilaian CAV memang memecah kerjanya ke dalam blok-blok fungsional. Modul 2 dialokasikan secara independen sebagai antarmuka masuknya berkas rekapan (input data bangunan). Di dalam Modul 2 inilah rincian variabel fisik properti—yang dikutip secara mendetail lewat formulir isian subjek pajak LSPOP—dijaring dan disuntikkan ke dalam sistem agar bisa dipertemukan dengan tabel harga di Modul 1."
      },
      {
        topic: "PBB-P2",
        question: "Untuk gedung vertikal bertingkat yang fungsional utamanya memang dirancang dan digunakan sebagai area komersial perkantoran bisnis atau ruang operasional entitas swasta, peruntukan spesifik bangunannya tersebut akan diadministrasikan di bawah klasifikasi nomor...",
        options: [
          "JPB 4",
          "JPB 7",
          "JPB 2",
          "JPB 1",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Kategorisasi JPB berdasarkan tipe pengelolaannya menempatkan area spesifik kegiatan birokrasi komersial bisnis ke dalam identitas tersendiri. Gedung atau struktur yang digunakan guna merumahkan aktivitas layanan administrasi serta perkantoran secara umum, seluruhnya diikat dalam struktur data klasifikasi JPB 2."
      },
    ]
  },
  {
    id: "pbb-p2-paket-i",
    name: "Paket I",
    label: "I",
    questions: [
      {
        topic: "PBB-P2",
        question: "Tujuan utama dari diimplementasikannya program aplikasi penilaian berbasis komputer (Computer Assisted Valuation/CAV) di dalam tata kelola Pajak Bumi dan Bangunan adalah untuk...",
        options: [
          "Menghilangkan seluruh elemen penyusutan pada struktur gedung bertingkat",
          "Menentukan NJOP bangunan secara cepat dan optimal sesuai dengan kondisi pasar",
          "Mencetak SPPT wajib pajak secara massal di awal tahun anggaran",
          "Memisahkan laporan administrasi antara PBB Perdesaan dan PBB Perkotaan",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Penggunaan instrumen aplikasi terkomputerisasi berupa CAV ditujukan untuk mengotomatisasi proses perhitungan matematis sehingga instansi pajak dapat merumuskan besaran Nilai Jual Objek Pajak (NJOP) bangunan dengan jauh lebih cepat, akurat, dan memastikan angka akhirnya senantiasa optimal selaras dengan dinamika kondisi pasar properti yang sedang berlangsung."
      },
      {
        topic: "PBB-P2",
        question: "Besaran Pajak Bumi dan Bangunan (PBB) terutang yang wajib dilunasi oleh subjek pajak tercantum secara resmi di dalam dokumen ketetapan SPPT atau SKPD. Proses pelunasan pembayaran tersebut wajib disetorkan melalui...",
        options: [
          "Kantor Pelayanan Pajak Pratama setempat melalui mekanisme pemotongan pendapatan bulanan",
          "Petugas juru sita pajak yang terjun langsung untuk melakukan survei pemutakhiran basis data di lokasi",
          "Rekening kas daerah secara terpusat dengan melampirkan salinan formulir identifikasi SPOP",
          "Tempat pembayaran yang telah ditentukan oleh pemerintah daerah dengan menggunakan Surat Setoran Pajak Daerah (SSPD)",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Nilai ketetapan pajak yang tertulis di dalam SPPT atau SKPD menjadi instrumen penagihan yang absolut. Pelaksanaan penyetoran kewajiban pajaknya sendiri diwajibkan menggunakan dokumen pendamping berupa Surat Setoran Pajak Daerah (SSPD), dan harus diserahkan secara langsung melalui loket atau tempat pembayaran resmi yang sudah ditunjuk oleh masing-masing otoritas pemerintah daerah terkait."
      },
      {
        topic: "PBB-P2",
        question: "Pengelompokan Jenis Penggunaan Bangunan (JPB) mengklasifikasikan struktur berdasarkan fungsi kesehariannya. Konstruksi fisik yang secara operasional didirikan sebagai fasilitas pelayanan kesehatan seperti rumah sakit, puskesmas, maupun klinik medis akan diregistrasikan ke dalam klasifikasi kode...",
        options: [
          "JPB 1",
          "JPB 3",
          "JPB 5",
          "JPB 9",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Sistem administrasi klasifikasi memiliki pembelahan tipe konstruksi untuk mempermudah ketepatan penilaian tabel DBKB. Bangunan yang wujud utilitasnya diselenggarakan secara murni guna memberikan pelayanan medis kepada publik (mencakup rumah sakit, apotek terpadu, dan klinik), seluruhnya diikat di bawah klasifikasi operasional kode JPB 5."
      },
      {
        topic: "PBB-P2",
        question: "Saat menaksir nilai elemen kelengkapan dalam suatu properti bertingkat, penilai akan mendata berbagai fasilitas pengamanan. Fasilitas berupa alat penyiram air otomatis yang bereaksi terhadap pemicu suhu panas (sprinkler) akan dikalkulasikan nilainya ke dalam kategori fasilitas...",
        options: [
          "Sistem Perpipaan (Plumbing)",
          "Alat Pemadam Kebakaran",
          "Sistem Sanitasi Terpadu",
          "Kelengkapan Utilitas Sentral",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Di dalam rincian kalkulasi daftar fasilitas gedung, peralatan teknis yang bertugas meredam atau memberikan peringatan dini terhadap bencana api (yang mana mencakup komponen seperti instalasi hidran gedung, jaringan alarm kebakaran, serta alat penyiram air mekanis atau sprinkler penyensor panas) secara spesifik harus dirangkum ke dalam satu kategori hitungan, yaitu fasilitas Alat Pemadam Kebakaran."
      },
      {
        topic: "PBB-P2",
        question: "Pengolahan variabel harga material keras beserta upah pekerja harian (analisis BOW) di dalam mesin Computer Assisted Valuation (CAV) didesain untuk mencetak berbagai produk data operasional. Berikut ini yang merupakan wujud luaran atau hasil akhir (output) aplikasi tersebut adalah...",
        options: [
          "Tabel Daftar Biaya Komponen Bangunan (DBKB) beserta Tabel BOW",
          "Lembaran Surat Setoran Pajak Daerah (SSPD) yang dikhususkan untuk objek pajak non-standar",
          "Peta garis visual dengan resolusi tinggi pembatas unit batas letak Zona Nilai Tanah",
          "Kumpulan formulir Surat Pemberitahuan Objek Pajak (SPOP) yang datanya belum terisi",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Sistem otomasi nilai bangunan tidak sekadar menghasilkan sebuah angka akhir. Puncak dari proses pengolahan modul pada sistem ini memproduksi dokumen pedoman dan parameter hitung, yang utamanya mencetak Tabel DBKB (rincian utama, material, dan fasilitas), rincian Tabel BOW murni, panduan tabel model bangunan, serta deret referensi harga resources."
      },
      {
        topic: "PBB-P2",
        question: "Arsitektur tata ruang yang dirancang dan dialokasikan pengerjaannya semata-mata untuk memfasilitasi aktivitas kebugaran massa dan wisata rekreasional, layaknya kompleks gelanggang olahraga (GOR) maupun stadion terbuka, dipetakan ke dalam registrasi nilai menggunakan kode...",
        options: [
          "JPB 2",
          "JPB 4",
          "JPB 8",
          "JPB 6",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Infrastruktur bangunan dan lanskap yang mengakomodasi kerumunan masyarakat dalam hal ajang perlombaan fisik, fasilitas olahraga terpusat, gedung senam, maupun wahana rekreasi fisik diwajibkan untuk dipisahkan perhitungannya menggunakan taksiran identitas JPB 6."
      },
      {
        topic: "PBB-P2",
        question: "Sebelum tim pemetaan turun langsung ke lapangan untuk menyusun batas Zona Nilai Tanah (ZNT), tahapan krusial pertama di balik meja yang wajib diselesaikan terlebih dahulu adalah tahapan \"Persiapan\". Rangkaian tindakan pada tahapan Persiapan tersebut meliputi...",
        options: [
          "Menginventarisasi kelengkapan, menyiapkan Buku Klasifikasi nilai, serta menelaah Sket/Peta Desa",
          "Menghapus rekaman data penawaran harga yang secara statistik terlalu membebani nilai rata-rata kawasan",
          "Melakukan recovery pada server aplikasi penilaian terpadu yang ada di kantor pelayanan pajak",
          "Mencetak dan melengkapi seluruh denah properti milik badan usaha milik negara",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Mekanisme fundamental saat menyusun pemetaan tata ruang spasial dimulai dari kerja pengumpulan administrasi dasar. Tahapan awal berlabel persiapan ini mengamanatkan petugas untuk mengeksekusi inventarisasi dokumen pendukung, menyiapkan pemahaman mengenai Buku Klasifikasi zonasi, serta mengumpulkan peta-peta garis dasar (seperti sket desa) jika memang telah tersedia dari instansi statistik terkait."
      },
      {
        topic: "PBB-P2",
        question: "Wujud rekayasa sipil yang memiliki kerumitan struktur dan desain terlampau ekstrem dinilai tidak dapat ditaksir melalui tabel DBKB standar. Objek ini dilimpahkan taksirannya menjadi \"Bangunan Khusus\" melalui manual Rencana Anggaran Biaya. Manakah dari opsi berikut yang merupakan contoh murni dari Bangunan Khusus?",
        options: [
          "Rumah sakit rujukan bertipe A yang mengoperasikan kamar rawat inap masif",
          "Bangunan sentra ritel (mall) yang dirancang mandiri menggunakan jumlah enam lantai",
          "Infrastruktur bendungan raksasa yang di dalamnya mencakup konstruksi main dam dan coffer dam",
          "Apartemen eksklusif di pusat kota yang memperlengkapi unitnya dengan fasilitas perkerasan super berat",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Objek yang diklasifikasikan sebagai bangunan khusus merujuk pada elemen infrastruktur penyokong hajat hidup berskala makro. Properti seperti bendungan air fungsional (dengan elemen arsitektur penahan arus air seperti main dam dan coffer dam), lintasan jalan tol komersial, instalasi pembangkit tenaga listrik raksasa, hingga landasan pacu bandara masuk seutuhnya ke dalam kategori eksklusif Bangunan Khusus."
      },
      {
        topic: "PBB-P2",
        question: "Prosedur penaksiran nilai susut ekonomis suatu properti dipengaruhi secara langsung oleh riwayat kegiatannya. Untuk kelompok kategori \"Bangunan secara Umum\" yang secara fakta fisik TIDAK PERNAH sekalipun mengalami proses renovasi sedari awal berdiri, formulasi baku yang dipakai untuk menemukan umur efektif bangunan tersebut adalah...",
        options: [
          "(Tahun Pajak dikurangi Tahun Dibangun) lalu dikonversikan dengan persentase tiga persen",
          "Mencari nilai sentral letak (median) dari umur deretan bangunan pembanding di satu rukun tetangga yang sama",
          "Selisih Tahun Pajak dikurangkan langsung terhadap ambang batas peremajaan sepuluh tahun",
          "Tahun Pajak dikurangi Tahun Dibangun",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Taksiran beban umur efektif sebagai alat pemotong penyusutan bangunan umum diatur sangat lurus di dalam kaidah matematika pemajakan. Bilamana sebuah bangunan konvensional tersebut tidak memuat riwayat kegiatan perombakan/renovasi, maka umur efektif pajaknya ditarik langsung dengan cara mengurangi angka tahun pajak operasional terhadap masa awal wujud bangunan tersebut diciptakan atau dibangun."
      },
      {
        topic: "PBB-P2",
        question: "Sebuah struktur arsitektur yang dioperasikan sepenuhnya untuk menyokong kegiatan pelayanan tata usaha pemerintahan, aktivitas dinas birokrasi, atau balai operasional kenegaraan, memiliki perlakuan identitas penilaian yang diikat ke dalam kelompok kode...",
        options: [
          "JPB 9",
          "JPB 10",
          "JPB 12",
          "JPB 16",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Pengklasifikasian untuk entitas struktur fisik yang difungsikan murni, didanai, serta dikendalikan sebagai wadah instansi pemerintah dalam mengatur rutinitas perkantoran aparatur sipil dilepaskan dari bangunan komersial konvensional, dan mutlak diadministrasikan di bawah klasifikasi spesifik JPB 9."
      },
    ]
  },
  {
    id: "pbb-p2-paket-j",
    name: "Paket J",
    label: "J",
    questions: [
      {
        topic: "PBB-P2",
        question: "Bangunan fisik yang secara murni didirikan dan difungsikan sebagai tempat tinggal warga atau kawasan perumahan biasa secara administratif akan diregistrasikan ke dalam sistem pengelompokkan nilai dengan kode...",
        options: [
          "JPB 1",
          "JPB 3",
          "JPB 10",
          "JPB 15",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Sistem administrasi klasifikasi tipe konstruksi memisahkan struktur fisik sesuai fungsi kesehariannya. Bangunan yang wujud utilitasnya digunakan sebagai kawasan hunian atau perumahan secara spesifik diklasifikasikan ke dalam tipe JPB 1."
      },
      {
        topic: "PBB-P2",
        question: "Saat mengevaluasi taksiran nilai pada komponen material bangunan, elemen yang didefinisikan sebagai \"Langit-langit\" (LL) atau penutup rangka atap bagian bawah terdiri dari jenis material tertentu. Manakah dari bahan berikut yang BUKAN merupakan contoh material standar untuk langit-langit?",
        options: [
          "Gypsum board",
          "Akustik",
          "Vinil",
          "Eternite",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Material penyusun langit-langit umumnya memanfaatkan material seperti papan gypsum (gypsum board), panel akustik, tripleks, maupun eternit. Vinil merupakan material pelapis yang difungsikan spesifik sebagai penutup lantai (PL), bukan untuk area plafon atau langit-langit."
      },
      {
        topic: "PBB-P2",
        question: "Dalam arsitektur perhitungan wujud fisik properti, tata letak penilaian \"tangga\" dibedakan ketat berdasarkan spesifikasi penggeraknya. Struktur eskalator dimasukkan sebagai komponen fasilitas penunjang, sedangkan tangga biasa yang tidak bergerak dikalkulasikan nilainya ke dalam kelompok...",
        options: [
          "Komponen Tambahan Eksterior",
          "Komponen Struktur Utama",
          "Komponen Material Dalam",
          "Komponen Utilitas Kelistrikan",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Di dalam formulasi perhitungan bagian rangka penyusun bangunan, tangga konvensional digabungkan perhitungannya berdampingan dengan fondasi, pelat lantai, kolom, dinding geser, serta balok ke dalam satu kesatuan klaster Komponen Struktur Utama. Hal ini terpisah dari eskalator (tangga berjalan) yang ditaksir murni sebagai beban kelengkapan fasilitas tambahan."
      },
      {
        topic: "PBB-P2",
        question: "Perhitungan rancangan anggaran untuk pelaksanaan teknis \"pemeliharaan\" basis data SISMIOP PBB memiliki perbedaan mendasar apabila dikomparasikan dengan \"pembentukan\" awal basis data. Anggaran untuk prosedur pemeliharaan ini dialokasikan dengan patokan khusus berdasarkan...",
        options: [
          "Seluruh jumlah total objek pajak yang menempati luasan area pemetaan",
          "Rata-rata transaksi agregat nilai jual properti dalam tiga tahun terakhir",
          "Persentase hamparan luas wilayah yang belum dipetakan memakai foto udara",
          "Hanya pada jumlah objek pajak yang datanya mengalami perubahan saja",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Penentuan pembiayaan dalam pelaksanaan kegiatan pemeliharaan basis data SISMIOP dihitung secara selektif dan efisien. Kalkulasi biayanya hanya didasarkan mutlak pada akumulasi jumlah objek pajak yang rincian datanya terbukti mengalami perubahan di lapangan, tidak mengacu pada keseluruhan objek terdaftar layaknya saat kegiatan pembentukan awal basis data."
      },
      {
        topic: "PBB-P2",
        question: "Pada prosedur pendataan elemen kelengkapan gedung, alat penyejuk ruangan atau Air Conditioner (AC) dipetakan harganya ke dalam beberapa sub-klasifikasi fasilitas. Berikut ini yang merupakan variasi tipe fasilitas AC yang diakui dan dihitung presisi dalam instrumen pendataan adalah...",
        options: [
          "AC sentral, AC split, dan AC window",
          "AC portable, AC standing, dan AC split",
          "AC sentral, AC inverter, dan AC cassette",
          "AC window, AC standing, dan AC komersial",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Saat merekapitulasi kelengkapan kenyamanan di dalam gedung, beban biaya sistem pendingin dipecah menjadi tiga jenis spesifikasi alat yang masing-masing harus didata ulang kuantitasnya, meliputi: kelengkapan fasilitas AC sentral, jumlah perangkat AC bertipe split, serta ketersediaan perangkat AC bertipe window."
      },
      {
        topic: "PBB-P2",
        question: "Mekanisme penilaian bangunan berskala kompleks atau Bangunan Non-Standar memang terintegrasi secara pelaporan di dalam piranti lunak SISMIOP. Namun demikian, terdapat sebuah keterbatasan fatal dari piranti lunak tersebut dalam memproses objek non-standar, yaitu...",
        options: [
          "Data luasan bidang properti selalu tertukar apabila luas tanah melebihi 10.000 meter persegi",
          "Aplikasi tidak sanggup memproses beban pemotongan asuransi pada gedung lebih dari lima lantai",
          "Format keluaran aplikasinya tidak mampu mencetak peta garis visual bagi struktur bangunan khusus",
          "Sama sekali tidak terdapat proses perhitungan serta pembentukan nilainya di dalam aplikasi tersebut",
        ] as [string, string, string, string],
        correctOptionIndex: 3,
        explanation: "Keberadaan daftar tarif nilai dari Daftar Biaya Komponen Bangunan (DBKB) Non Standar secara antarmuka telah terintegrasi di aplikasi SISMIOP, namun secara algoritma, proses perumusan matematis hingga pembentukan nilai murninya sama sekali tidak dapat dikerjakan secara otomatis lewat piranti lunak tersebut."
      },
      {
        topic: "PBB-P2",
        question: "Pada siklus perhitungan matematis \"Nilai Bangunan\", para penilai wajib memasukkan sejumlah lapisan komponen mulai dari kelas gedung hingga angka penyusutan. Khusus untuk struktur fungsional berskala raksasa berupa \"tangki\", elemen perhitungan unik yang harus selalu ditambahkan di urutan akhir proses penilaiannya adalah indikator...",
        options: [
          "Jumlah besaran instalasi persentase alat penangkal petir terpadu",
          "Informasi mengenai detail kapasitas serta posisi letak objek tersebut",
          "Perhitungan akurasi jarak sumur pantek terhadap pondasi beton terbawah",
          "Ambang batas biaya pemeliharaan utilitas perpipaan yang terpasang di bawah tanah",
        ] as [string, string, string, string],
        correctOptionIndex: 1,
        explanation: "Struktur perumusan besaran angka wujud bangunan secara hierarkis mengakumulasi perhitungan material dasar hingga komponen penyusutan. Teruntuk konstruksi yang bentuk utilitas asalnya berwujud tangki (misal tangki penampungan minyak atau energi), terdapat kewajiban penambahan parameter perhitungan eksklusif di jenjang paling akhir, yakni merinci detail beban kapasitas tampungan beserta elevasi letaknya."
      },
      {
        topic: "PBB-P2",
        question: "Proses manajerial makro di bidang tata kelola geografis pajak yang melibatkan mekanisme \"Pembentukan/Pemeliharaan Basis Data Sismiop\", \"Pembentukan Bank Data Nilai Pasar\", hingga \"Pembentukan Basis Data Peta Digital (SIG PBB)\" diharuskan tunduk pada parameter pelaksanaan di bawah ini, yaitu...",
        options: [
          "Wajib dikerjakan secara kronologis terpisah menuruti urutan ketersediaan tahun anggaran",
          "Dikerjakan terlebih dahulu pada kawasan sentra bisnis sebelum beralih ke area perkampungan",
          "Dilaksanakan secara simultan pada wilayah yang sama dan wajib disusun dalam satu Rencana Kerja",
          "Pelaksanaannya dikembalikan seluruhnya kepada kemauan subjek pajak lewat format SPOP terpadu",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Seluruh aktivitas mendasar terkait dengan tata kelola digitalisasi data perpajakan (meliputi konstruksi peta spasial, inventarisasi data riwayat pasar penawaran, serta sinkronisasi basis data SISMIOP) dikondisikan agar pergerakannya berjalan selaras. Kegiatan-kegiatan masif ini wajib digelar bersamaan (simultan) di kawasan administrasi geografis yang sama serta dirangkai ke dalam susunan satu kesatuan Rencana Kerja."
      },
      {
        topic: "PBB-P2",
        question: "Ketika petugas menaksir biaya elemen perwujudan alas ruangan atau \"Penutup Lantai\" (PL), perhitungan nilainya dicocokkan dengan deretan material yang berlaku di pasar. Dari kelompok bahan bangunan di bawah ini, material manakah yang keseluruhannya sah difungsikan ke dalam klasifikasi komponen penutup lantai?",
        options: [
          "Granit, keramik, karpet, vinil, dan kayu (parquet)",
          "Asbes gelombang, seng bergelombang, vinil, dan lapisan semen",
          "Genteng sirap, potongan marmer, keramik bermotif, dan ubin teraso",
          "Papan gypsum (gypsum board), permadani karpet, granit murni, dan eternit tebal",
        ] as [string, string, string, string],
        correctOptionIndex: 0,
        explanation: "Jenis-jenis material fisik penyusun bangunan yang secara teknis ditempatkan dan berfungsi sebagai pelapis dasar lantai (Penutup Lantai/PL) di dalam daftar inventaris meliputi material granit, susunan ubin marmer, pelat keramik, kain karpet, lapisan vinil sintetik, deretan kayu (parquet), lempeng ubin PC abu-abu, susunan ubin teraso, hingga adukan semen."
      },
      {
        topic: "PBB-P2",
        question: "Ketika analis lapangan mendapati sebuah properti komersial maupun operasional yang secara utilitas fungsionalnya sama sekali tidak dapat dimasukkan ke dalam daftar bangunan perumahan, perkantoran, area industri pabrik, atau gedung kenegaraan di dalam sistem JPB, maka objek sisa yang membingungkan tersebut harus diregistrasikan nilainya memakai identitas klasifikasi...",
        options: [
          "JPB 4",
          "JPB 7",
          "JPB 10",
          "JPB 12",
        ] as [string, string, string, string],
        correctOptionIndex: 2,
        explanation: "Struktur daftar Jenis Penggunaan Bangunan (JPB) mengantisipasi wujud properti beraliran fungsi hybrid atau arsitektur properti di luar kebiasaan konvensional dengan menyiapkan pos keranjang penampungan terakhir. Bentuk operasional wujud yang ragamnya bersifat campur-aduk (Lain-lain) di luar seluruh klasifikasi utama yang telah tersedia, pada akhirnya akan dilebur pemajakannya di bawah identitas registrasi bernomor JPB 10."
      },
    ]
  },
];

function buildAnswerText(answer: string): string {
  const trimmed = answer.trim();
  const punctuated = /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
  return `Jawaban yang benar adalah ${punctuated} Pilihan ini sesuai dengan kunci jawaban dan rujukan materi PBB-P2.`;
}

export const studyPackages: StudyPackage[] = packageSeeds.map((seed) => {
  return {
    id: seed.id,
    name: seed.name,
    label: seed.label,
    questions: seed.questions.map((question, index) => ({
      ...question,
      id: `${seed.id}-${String(index + 1).padStart(3, "0")}`,
      answer: question.options[question.correctOptionIndex],
      source: sourceRef,
      explanation: question.explanation || buildAnswerText(question.options[question.correctOptionIndex])
    }))
  };
});