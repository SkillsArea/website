// toggle language

const joinHeaderButton = {
  arabic: "انضم الينا",
  english: "Join Us",
};

const NavBarLinks = [
  {
    arabic: "ورشنا",
    english: "WorkShops",
    link: "/",
  },
  {
    arabic: "من نحن",
    english: "Us",
    link: "/",
  },
  {
    arabic: "برامح الموسم",
    english: "Programs",
    link: "/",
  },
  {
    arabic: "المدربين",
    english: "Trainers",
    link: "/",
  },
];

const heroText = {
  main: {
    arabic: "بنتعلم_بطريقة_أفضل",
    english: "We_learn_in_better_way",
  },
  feature1: {
    arabic: "أول منظمة تساعد على توفير منتجات تعليمية مجانية ممتعة✅",
    english:
      "✅ The first organization to help provide fun, free educational products",
  },
  feature2: {
    arabic:
      "للشباب من سن 11 سنة لفوق 25 سنة في مجالات التكنولوجيا و تطوير الذات ✅",
    english:
      "✅ For young people from the age of 11 to over 25 years in the fields of technology and self-development",
  },
  button: {
    arabic: "سجل في الورش",
    english: "Register",
  },
};

const trainersText = {
  arabic: "المدربين",
  english: "Trainers",
};

function updateContent(language) {
  const hero = document.getElementById("hero");
  const description = document.getElementById("hero-description")
  if (language === "english") {
    if (window.innerWidth > 1120) {
      hero.style.flexDirection = "row-reverse";
    }
    description.style.textAlign = "left";
    document.getElementById("join-button").textContent =
      joinHeaderButton.english;
    document.getElementById("navbar-link4").textContent =
      NavBarLinks[3].english;
    document.getElementById("navbar-link3").textContent =
      NavBarLinks[2].english;
    document.getElementById("navbar-link2").textContent =
      NavBarLinks[1].english;
    document.getElementById("navbar-link1").textContent =
      NavBarLinks[0].english;
    document.getElementById("hero-main-text").textContent =
      heroText.main.english;
    document.getElementById("hero-feature1-text").textContent =
      heroText.feature1.english;
    document.getElementById("hero-feature2-text").textContent =
      heroText.feature2.english;
    document.getElementById("hero-button-text").textContent =
      heroText.button.english;
    document.getElementById("trainers-text").textContent = trainersText.english;
  } else if (language === "arabic") {
    if (window.innerWidth > 1120) {
      hero.style.flexDirection = "row";
    }
    description.style.textAlign = "end";
    document.getElementById("join-button").textContent =
      joinHeaderButton.arabic;
    document.getElementById("navbar-link4").textContent = NavBarLinks[3].arabic;
    document.getElementById("navbar-link3").textContent = NavBarLinks[2].arabic;
    document.getElementById("navbar-link2").textContent = NavBarLinks[1].arabic;
    document.getElementById("navbar-link1").textContent = NavBarLinks[0].arabic;
    document.getElementById("hero-main-text").textContent =
      heroText.main.arabic;
    document.getElementById("hero-feature1-text").textContent =
      heroText.feature1.arabic;
    document.getElementById("hero-feature2-text").textContent =
      heroText.feature2.arabic;
    document.getElementById("hero-button-text").textContent =
      heroText.button.arabic;
    document.getElementById("trainers-text").textContent = trainersText.arabic;
  }
}

function toggleLanguage() {
  const arabicIcon = document.getElementById("lang-icon-arabic");
  const englishIcon = document.getElementById("lang-icon-english");

  if (arabicIcon.style.display === "inline") {
    arabicIcon.style.display = "none";
    englishIcon.style.display = "inline";
    updateContent("english");
  } else {
    arabicIcon.style.display = "inline";
    englishIcon.style.display = "none";
    updateContent("arabic");
  }
}
