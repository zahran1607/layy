function jalankanAlert() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

     if (username == "" && password == "") {
         Swal.fire(
             'Login Berhasil!',
             'Terimakasih sudah login!',
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