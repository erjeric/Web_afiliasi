const sheetID = '10PsDBmpwNbSTxLU2pQM9fNf9_yERsxYC8-_2Azn1p9Q'; // Ganti dengan ID kamu
const sheetName = 'Sheet1';
const url = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;

let allProducts = [];

fetch(url)
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderKategori(data);
    renderProduk(data);
  });

function renderKategori(data) {
  const container = document.getElementById('kategori-filter');
  const kategoriSet = new Set(data.map(p => p.Kategori));
  container.innerHTML = `<span class="tag active" data-kat="Semua"># Semua</span>`;
  kategoriSet.forEach(kat => {
    container.innerHTML += `<span class="tag" data-kat="${kat}"># ${kat}</span>`;
  });

  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.tag').forEach(el => el.classList.remove('active'));
      tag.classList.add('active');
      const kategori = tag.getAttribute('data-kat');
      const filtered = kategori === 'Semua' ? allProducts : allProducts.filter(p => p.Kategori === kategori);
      renderProduk(filtered);
    });
  });
}

function renderProduk(data) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  data.forEach(product => {
    const html = `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${product.Gambar}" >
          <div class="card-body d-flex flex-column">
          <p class="card-img-top"> ${product.Nama}</p>
            <p class="card-text">${product.Deskripsi}</p>
            <p class="fw-bold text-primary">${product.Harga}</p>
            <a href="${product.Link}" target="_blank" class="btn btn-primary mt-auto">Lihat Produk</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}