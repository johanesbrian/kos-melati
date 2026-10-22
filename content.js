// =====================================================
//  KOS PUTRI MELATI — content.js
//  Edit file ini untuk mengubah info di website.
//
//  Teks bisa ditulis biasa:          'Rp100.000'
//  atau dua bahasa (ID & English):   { id: '± Rp100.000 / bulan', en: '± Rp100,000 / month' }
// =====================================================

var KOS_CONTENT = {

  // Nomor WhatsApp Ibu Indri (format 62..., tanpa + dan spasi)
  whatsapp: '6287739535551',

  // Perkiraan biaya token listrik per bulan, tampil di kalkulator biaya.
  // Biarkan '' jika tidak ingin ditampilkan.
  // contoh: { id: '± Rp100.000 – Rp150.000 / bulan', en: '± Rp100,000 – Rp150,000 / month' }
  listrik: '',

  // Ketersediaan kamar — UPDATE setiap ada kamar terisi / kosong.
  // status: 'tersedia' (label hijau) atau 'penuh' (label abu-abu)
  // keterangan (opsional) mengganti tulisan bawaan "Tersedia" / "Penuh".
  // Hapus satu baris kamar jika tidak ingin menampilkan labelnya.
  ketersediaan: {
    A: { status: 'tersedia', keterangan: { id: 'Sisa 1 kamar · lantai atas', en: '1 room left · upstairs' } },
    B: { status: 'penuh' },
    C: { status: 'penuh' }
  },

  // Tanggal data ketersediaan di atas. Biarkan '' untuk menyembunyikan.
  diperbarui: { id: '8 Oktober 2026', en: '8 October 2026' },

  // Link folder Google Drive berisi foto lengkap semua kamar.
  // Pastikan folder dibagikan "Siapa saja yang memiliki link" sebagai Pelihat (Viewer).
  // Biarkan '' untuk menyembunyikan tombolnya.
  fotoLengkap: 'https://drive.google.com/drive/folders/1HvKblNb0_2k60DMYfQ2qUue6sIrKj6kP'
};
