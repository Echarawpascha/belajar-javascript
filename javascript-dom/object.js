//object
var siswa = new Object();
siswa.namaDepan = "Echara";
siswa.namaBelakang = "Pascha";
siswa.alamat = "Bandung";
siswa.namaLengkap = function () {
  return this.namaDepan + " " + this.namaBelakang;
};

//object JSON
var siswa2 = {
  namaDepan: "Celine",
  namaBelakang: "Gracia",
  alamat: "Bandung",
  namaLengkap: function () {
    return this.namaDepan + " " + this.namaBelakang;
  },
};

alert("Name :" + siswa.namaLengkap());
alert("Name : " + siswa2.namaLengkap());

// function namaLengkap() {

// // }