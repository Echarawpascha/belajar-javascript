
var menuMakanan = {
  "Nasi Goreng": 25000,
  "Mie Goreng": 20000,
  "Ayam Goreng": 30000,
  "Sate Ayam": 15000,
  "Soto Ayam": 22000
};


var menuText = "Daftar Menu Makanan:\n";
for (var menu in menuMakanan) {
  menuText += menu + " - Rp" + menuMakanan[menu] + "\n";
}
alert(menuText);
  

var pilihanMenu = prompt("Masukkan menu yang ingin dipesan:");
var jumlahMakanan = parseInt(prompt("Masukkan jumlah " + pilihanMenu + " yang ingin dipesan:"));


if (menuMakanan.hasOwnProperty(pilihanMenu) && jumlahMakanan > 0) {

  var totalBiaya = menuMakanan[pilihanMenu] * jumlahMakanan;


  alert(
    "Pesanan Anda " + jumlahMakanan + " " + pilihanMenu +
    " Total Yang Harus di Bayar Rp" + totalBiaya
  );
} else {

  alert("Pilihan Tidak ada di Menu");
}


alert("Terima kasih");
