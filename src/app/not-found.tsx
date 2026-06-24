import Link from "next/link";
import { Home } from "lucide-react";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Halaman Tidak Ditemukan — Latihan Soal PBB-P2"
};

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Halaman tidak ditemukan</h1>
        <p className={styles.description}>
          Sepertinya tautan yang Anda kunjungi salah atau halaman sudah dipindahkan. Kembali ke Beranda untuk melanjutkan latihan soal PBB-P2.
        </p>
        <Link className={styles.homeLink} href="/">
          <Home aria-hidden="true" size={18} />
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
