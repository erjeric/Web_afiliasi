// Tracking kunjungan halaman (index.html misalnya)
fetch("https://script.google.com/macros/s/AKfycbzruB_A6xWxAIwVgP3qmpO4DtUA6Rtv64_MmBX0MEMaOj1n43MTsgSbiqv58SrIeuW8/exec", {
  method: "POST",
  body: JSON.stringify({
    aksi: "kunjungan",
    halaman: "index.html",
    waktu: new Date().toISOString()
  }),
  headers: {
    "Content-Type": "application/json"
  }
});

// Tracking klik produk afiliasi
function laporKlik(namaProduk) {
  fetch("https://script.google.com/macros/s/AKfycbzruB_A6xWxAIwVgP3qmpO4DtUA6Rtv64_MmBX0MEMaOj1n43MTsgSbiqv58SrIeuW8/exec", {
    method: "POST",
    body: JSON.stringify({
      aksi: "klik_produk",
      nama: namaProduk,
      waktu: new Date().toISOString()
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => console.log("Klik dicatat:", namaProduk))
    .catch(err => console.error("Gagal catat klik", err));
}
