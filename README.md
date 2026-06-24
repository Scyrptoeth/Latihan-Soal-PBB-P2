# Latihan Soal PBB-P2

Aplikasi web latihan soal **Pajak Bumi dan Bangunan Perdesaan dan Perkotaan (PBB-P2)** untuk peserta diklat, pegawai pemerintah, dan calon peserta ujian kompetensi. Dibangun dengan Next.js 16, React 19, dan TypeScript.

**Live:** [https://latihan-soal-pbb-p2.vercel.app](https://latihan-soal-pbb-p2.vercel.app)

---

## Fitur Utama

- **10 Paket Latihan Soal** (Paket A–J), 10 soal per paket.
- **Mode Flipcard**: tanya-jawab interaktif dengan pembahasan.
- **Mode Tes**: pengerjaan soal berurutan, dashboard nomor soal, submit, skor, dan review pembahasan.
- **Sistem Skoring**: persentase, riwayat attempt, dan best score per paket.
- **Tema Terang/Gelap**: deteksi preferensi sistem dan toggle manual.
- **Feedback Anonymous**: kolom saran di bagian bawah halaman latihan.
- **Developer Rating Dashboard**: analitik rating tersembunyi di balik query parameter khusus.

---

## Teknologi

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React](https://lucide.dev/) (ikon)
- [Upstash Redis](https://upstash.com/) (opsional, untuk feedback & rating terpusat)
- [Vercel](https://vercel.com/) (deployment)

---

## Menjalankan Secara Lokal

```bash
# 1. Clone repositori
git clone https://github.com/Scyrptoeth/Latihan-Soal-PBB-P2.git
cd Latihan-Soal-PBB-P2

# 2. Install dependensi
npm install

# 3. Jalankan server development
npm run dev

# 4. Buka http://localhost:3000
```

### Perintah Lain

```bash
npm run typecheck   # Cek tipe TypeScript
npm run lint        # Jalankan ESLint
npm run build       # Build production
npm start           # Jalankan build production (setelah npm run build)
```

---

## Struktur Proyek

```
Latihan-Soal-PBB-P2/
├── public/                         # Aset statis (banner, favicon, PDF sumber)
├── src/
│   ├── app/                        # Route & layout Next.js App Router
│   │   ├── api/                    # API routes (feedback, ratings)
│   │   ├── globals.css             # Variabel tema & styling global
│   │   ├── layout.tsx              # Root layout & font
│   │   ├── not-found.tsx           # Halaman 404 kustom
│   │   └── page.tsx                # Entry aplikasi
│   ├── components/                 # Komponen React
│   ├── data/
│   │   └── questionBank.ts         # Bank soal PBB-P2 (10 paket)
│   ├── lib/                        # Logika progress, rating, feedback, dsb.
│   └── types/                      # Tipe TypeScript
├── next.config.ts
├── package.json
└── README.md
```

---

## Memperbarui Bank Soal

Data soal disimpan di `src/data/questionBank.ts`. Setiap paket mengikuti tipe `StudyPackage`:

```ts
{
  id: "paket-a",
  name: "Paket A",
  questions: [
    {
      id: "paket-a-1",
      text: "...",
      options: ["...", "...", "...", "..."],
      correctOptionIndex: 0,
      explanation: "..."
    }
  ]
}
```

Untuk memperbarui:

1. Edit `src/data/questionBank.ts`.
2. Pastikan `id` unik dan `correctOptionIndex` sesuai.
3. Jalankan `npm run typecheck` dan `npm run build`.
4. Commit, push, dan verifikasi deployment Vercel.

---

## Deployment

Proyek ini dideploy otomatis ke Vercel melalui integrasi GitHub setiap kali ada push ke branch `main`.

Repositori: [https://github.com/Scyrptoeth/Latihan-Soal-PBB-P2](https://github.com/Scyrptoeth/Latihan-Soal-PBB-P2)

### Variabel Lingkungan Opsional

Untuk mengaktifkan feedback dan rating terpusat, tambahkan variabel berikut di dashboard Vercel:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `RATING_ADMIN_TOKEN`

---

## Sumber Materi

Soal diambil dari dokumen diklat PBB-P2:

- `PBB-P-2.pdf`
- `PBB P-2.docx`

Dokumen asli disimpan di folder dokumentasi proyek.

---

## Lisensi & Kredit

Dibuat untuk keperluan pembelajaran PBB-P2. Font menggunakan [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) dan [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) dari Google Fonts.
