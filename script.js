const form_remember = document.getElementById("form_remember");
const tombol_submit = document.getElementById("tombol_submit");

form_remember.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const haveSteamRadio = document.querySelector(
    'input[name="status_steam"]:checked',
  );

  let resultHaveSteam = "";

  if (haveSteamRadio) {
    resultHaveSteam = haveSteamRadio.value;
  }

  const komentar_user = document.getElementById("komentar").value.trim();

  const answer_user = {
    username,
    resultHaveSteam,
    komentar_user,
  };

  localStorage.setItem("profile_user", JSON.stringify(answer_user));
  tampilkanRekamJejak();
  form_remember.reset();
});

function tampilkanRekamJejak() {
  const data_user_json = localStorage.getItem("profile_user");
  const list_komentar = document.getElementById("list_answer");
  if (data_user_json) {
    data_user = JSON.parse(data_user_json);
    const data_user_html = `
<p> Username: ${data_user.username} </p>
<p> Punya Steam : ${data_user.resultHaveSteam} </p>
<p> komentar ${data_user.username} : </p>
<p class="komentar_user"> "${data_user.komentar_user}" </p>

`;
    list_komentar.innerHTML = data_user_html;
  } else {
    list_komentar.innerHTML = `<p>Data masih kosong</p>`;
  }
}
tampilkanRekamJejak();

document.getElementById("tombol_reset").addEventListener("click", function () {
  localStorage.removeItem("profile_user");
  tampilkanRekamJejak();
  form_remember.reset();
  alert("rekaman jejak terhapus");
});
