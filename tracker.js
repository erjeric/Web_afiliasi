const proxy = "https://corsproxy.io/?";
const apiUrl = "https://script.google.com/macros/s/AKfycbw5K2IQDLdIsc0598ccX_5H5AwavzhTy-imbajTqWs/exec";

// Tracking kunjungan halaman
fetch(proxy + apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    aksi: "kunjungan",
    halaman: "index.html",
    waktu: new Date().toISOString()
  })
});

// Tracking klik produk afiliasi
function laporKlik(namaProduk) {
  fetch(proxy + apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      aksi: "klik_produk",
      nama: namaProduk,
      waktu: new Date().toISOString()
    })
  })
    .then(() => console.log("Klik dicatat:", namaProduk))
    .catch(err => console.error("Gagal catat klik", err));
}
