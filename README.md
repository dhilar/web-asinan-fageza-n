# Web Asinan Fageza

Landing page sederhana untuk promosi dan pemesanan **Asinan Buah dan Sayur Fageza**.  
Project ini dibuat dengan HTML, CSS, dan JavaScript tanpa framework.

## Fitur
- Halaman Home dengan hero section dan informasi singkat tentang Asinan Fageza
- Halaman Galeri berisi foto-foto asinan
- Halaman Order dengan form pemesanan:
  - Input nama, alamat, jarak pengiriman, dan catatan
  - Pilih jumlah porsi Asinan Buah dan Asinan Sayur
  - Perhitungan ongkir per porsi berdasarkan jarak
  - Validasi wilayah khusus untuk promo ongkir tertentu
  - Redirect ke WhatsApp dengan pesan pesanan yang sudah terformat
- Tampilan responsif untuk desktop dan mobile

## Teknologi
- HTML5
- CSS3 (custom, tanpa framework)
- JavaScript murni (vanilla JS) untuk logika form dan WhatsApp

## Cara Menjalankan Secara Lokal
1. Pastikan sudah berada di folder project:
   ```bash
   cd web-asinan-fageza-n
   ```
2. Jalankan server statis sederhana (contoh dengan Python 3):
   ```bash
   python -m http.server 8000
   ```
3. Buka browser dan akses:
   - `http://localhost:8000/` untuk halaman utama
   - `http://localhost:8000/order.html` untuk form pemesanan
   - `http://localhost:8000/gallery.html` untuk galeri

Atau, jika tidak ingin menjalankan server, bisa langsung buka `index.html` dengan double-click, namun beberapa fitur mungkin lebih stabil jika dijalankan lewat server lokal.

## Catatan
Project ini ditujukan sebagai landing page sederhana untuk keperluan belajar dan promosi.  
Untuk penggunaan production yang serius, sebaiknya ditambah lapisan keamanan, optimasi performa, dan setup hosting yang sesuai.
