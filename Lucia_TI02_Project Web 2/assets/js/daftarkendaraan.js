function jalankanAlert3() {
  let nim = document.getElementById("text").value
  let nama = document.getElementById("text1").value
  let nopol = document.getElementById("text2").value
  let merek = document.getElementById("text3").value


   if (nim == "" && nama == "" && nopol == "" && merek == "") {
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