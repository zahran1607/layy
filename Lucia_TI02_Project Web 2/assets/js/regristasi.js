function jalankanAlert2() {
  let sivitas = document.getElementById("text").value
  let nama = document.getElementById("text1").value
  let prodi = document.getElementById("text2").value
  let username = document.getElementById("text3").value
  let password = document.getElementById("text4").value
  let cekpassword = document.getElementById("text5").value


   if (sivitas == "" && nama == "" && prodi == "" && username == "" && password == "" && cekpassword == "") {
       Swal.fire(
           'Daftar Berhasil!',
           'Terimakasih sudah mendaftar!',
           'success'
       )
   }

   else{
       Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Username atau password salah!',
       })
   }
}