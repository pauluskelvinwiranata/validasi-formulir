const form=document.getElementById("validationForm"),nameInput=document.getElementById("name"),emailInput=document.getElementById("email"),passwordInput=document.getElementById("password");function showError(e){Swal.fire({icon:"error",title:"Gagal",text:e})}function showSuccessPopup(){Swal.fire({icon:"success",title:"Sukses",text:"Form berhasil disubmit!"})}form.addEventListener("submit",function(e){let t=!0;""===nameInput.value&&(showError("Nama harus diisi!"),t=!1),""===emailInput.value&&(showError("Email harus diisi!"),t=!1),passwordInput.value.length<8&&(showError("Kata sandi harus minimal 8 karakter!"),t=!1),t&&showSuccessPopup(),e.preventDefault()});