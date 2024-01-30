var siswa = new Object();
siswa.namaDepan = "Echara";
siswa.namaBelakang= "Pascha";
siswa.alamat = "Bandung";
siswa.namaLengkap = function(){
 return this.namaDepan + "" + this.namaBelakang
 }

 alert("Name :" + siswa.namaLengkap());

// function namaLengkap(){
   
// } 