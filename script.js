document.querySelector(".globe").addEventListener("click", function () {
  let currentLang = sessionStorage.getItem("Lang") || "english";
  let newLang = currentLang === "english" ? "arabic" : "english";
  sessionStorage.setItem("Lang", newLang);
  window.location.reload();
});

function toggleLanguage() {
  const arabicIcon = document.getElementById("lang-icon-arabic");
  const englishIcon = document.getElementById("lang-icon-english");

  if (arabicIcon.style.display === "inline") {
    arabicIcon.style.display = "none";
    englishIcon.style.display = "inline";
  } else {
    arabicIcon.style.display = "inline";
    englishIcon.style.display = "none";
  }
}
