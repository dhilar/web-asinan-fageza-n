// Daftar wilayah yang memenuhi syarat ongkir Rp 16,000
const validAddresses = [
    // "Jl. Anggur No. 5",
    "Puri Bukit Depok Blok",
    // "Komplek Asri Depok",
    // "Jl. Melati No. 12"
];

function updateQuantity(type, value) {
    const input = document.getElementById(`qty${type.charAt(0).toUpperCase() + type.slice(1)}`);
    let qty = parseInt(input.value) || 0;
    qty = Math.max(0, qty + value); // Tidak boleh negatif
    if (qty > 50) {
        alert('Maksimal pesanan adalah 50 porsi.');
        qty = 50; // Batasi maksimum kuantitas
    }
    input.value = qty;
}

document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah refresh halaman

    // Ambil data dari form
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const distanceOption = document.getElementById('distance').value; // Nilai dropdown
    const qtySayur = parseInt(document.getElementById('qtySayur').value) || 0;
    const qtyBuah = parseInt(document.getElementById('qtyBuah').value) || 0;
    const note = document.getElementById('note').value.trim() || '-';

    // Validasi input
    if (!name || !address) {
        alert('Nama dan alamat pengiriman wajib diisi.');
        return;
    }
    if (qtySayur === 0 && qtyBuah === 0) {
        alert('Minimal 1 porsi harus dipesan.');
        return;
    }

    // Validasi untuk ongkir Rp 16,000
    if (distanceOption === '16_fixed') {
        const isValidAddress = validAddresses.some(validAddress => address.includes(validAddress));
        if (!isValidAddress) {
            alert('Ongkir Rp 16,000 hanya berlaku untuk wilayah tertentu. Silakan pilih jarak yang sesuai.');
            return; // Gagal validasi, hentikan proses
        }
    }

    // Tentukan ongkir berdasarkan opsi yang dipilih
    let distance = parseInt(distanceOption); // Default nilai sebagai integer
    if (distanceOption === '16_fixed') {
        distance = 16; // Tetapkan ongkir tetap Rp 16,000
    }

    // Hitung total biaya
    const total = (qtySayur + qtyBuah) * distance * 1000; // Konversi ongkir ke rupiah

    // Format pesan WhatsApp
    const message = `
Halo, saya ingin memesan:
- Nama: ${name}
- Alamat: ${address}
- Asinan Sayur: ${qtySayur} porsi
- Asinan Buah: ${qtyBuah} porsi
- Ongkir/porsi: Rp ${distance},000
- Catatan: ${note}
- Total Bayar: Rp ${total.toLocaleString('id-ID')}
    `;

    // Arahkan ke WhatsApp
    const waNumber = "6281513840767"; // Ganti dengan nomor WhatsApp tujuan
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank'); // Buka di tab baru
});
