var nilaiKuliah = prompt("Masukkan nilai kuliah Anda: ");

if (isNaN(nilaiKuliah)) {
  alert("Harus Berupa Angka");
} else {
  var nilaiKuliahInt = parseInt(nilaiKuliah);

  if (nilaiKuliahInt < 40) {
    grade = "E";
  } else if (nilaiKuliahInt < 65) {
    grade = "D";
  } else if (nilaiKuliahInt < 75) {
    grade = "C";
  } else if (nilaiKuliahInt < 85) {
    grade = "B";
  } else {
    grade = "A";
  }

  alert("nilai : " + nilaiKuliah + " Grade Anda Adalah: " + grade);
}
