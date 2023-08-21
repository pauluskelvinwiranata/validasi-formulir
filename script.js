const form = document.getElementById("validationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  let isValid = true;

  if (nameInput.value === "") {
    showError("Nama harus diisi!");
    isValid = false;
  }

  if (emailInput.value === "") {
    showError("Email harus diisi!");
    isValid = false;
  }

  if (passwordInput.value.length < 8) {
    showError("Kata sandi harus minimal 8 karakter!");
    isValid = false;
  }

  if (isValid) {
    showSuccessPopup();
  }

  event.preventDefault();
});

function showError(message) {
  Swal.fire({
    icon: "error",
    title: "Gagal",
    text: message,
  });
}

function showSuccessPopup() {
  Swal.fire({
    icon: "success",
    title: "Sukses",
    text: "Form berhasil disubmit!",
  });
}
