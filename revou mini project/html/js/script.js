/* Dapatkan elemen input nama pada Section 1 */
const welcomeText = document.querySelector("section:nth-of-type(1) .container1 h1");

/* Dapatkan elemen input nama pada Section Message Us */
const nameInput = document.getElementById("name");

/* Fungsi untuk mengganti teks pada Section 1 dengan nama yang disubmit */
function updateWelcomeText(event) {
  event.preventDefault(); // Menghindari refresh halaman saat submit
  const name = nameInput.value.trim();
  welcomeText.textContent = `Hi, ${name}! Welcome to your website`;
}

/* Tambahkan event listener untuk mengupdate teks saat form disubmit */
const form = document.getElementById("messageForm");
form.addEventListener("submit", updateWelcomeText);

document.getElementById("messageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Mengambil nilai dari input field
  const name = document.getElementById("name").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const birthdate = document.getElementById("birthdate").value;
  const message = document.getElementById("message").value;

  // Menampilkan output di dalam output box
  const outputBox = document.getElementById("outputBox");
  outputBox.innerHTML = `
      <h2>Form Submission Result:</h2>
      <p>Nama: ${name}</p>
      <p>Jenis Kelamin: ${gender}</p>
      <p>Tanggal Lahir: ${birthdate}</p>
      <p>Pesan: ${message}</p>
    `;
});
