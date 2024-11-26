import forsaProgram from "../../public/img/forsaPrgram.jpg";
import forsa from "../../public/img/forsa.png";
import fda from "../../public/img/fdaa.png";
import fdaProgram from "../../public/img/fdaaProgram.jpg";
import podcast from "../../public/img/podcast.jpg";
import roaa from "../../public/img/roaa.png";
import frontEnd from "../../public/img/frontendcourse.jpg";
import flutter from "../../public/img/flutterProgram.jpg";
import { website } from "./constants";

export const joinHeaderButton = {
  arabic: "انضم الينا",
  english: "Join Us",
};

export const NavBarLinks = [
  {
    arabic: "ورشنا",
    english: "WorkShops",
    link: `${website}/workshops`,
  },
  {
    arabic: "من نحن",
    english: "Us",
    link: `${website}/us`,
  },
  {
    arabic: "برامح الموسم",
    english: "Programs",
    link: `${website}#Programs`,
  },
  {
    arabic: "المدربين",
    english: "Trainers",
    link: `${website}#trainers`,
  },
];

export const heroText = {
  main: {
    arabic: "بنتعلم_بطريقة_أفضل",
    english: "We_learn_by_greater_way",
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

export const trainersText = {
  heading: {
    arabic: "المدربين",
    english: "Trainers",
  },
  trainers: [
    { id: 1, title: "Web", name: "م/ الاسم المهندس", description: "نبذة عنه" },
    { id: 2, title: "Web", name: "م/ الاسم المهندس", description: "نبذة عنه" },
    { id: 3, title: "Web", name: "م/ الاسم المهندس", description: "نبذة عنه" },
    { id: 4, title: "Web", name: "م/ الاسم المهندس", description: "نبذة عنه" },
    { id: 5, title: "Web", name: "م/ الاسم المهندس", description: "نبذة عنه" },
    { id: 6, title: "Web", name: "م/ الاسم المهندس", description: "نبذة عنه" },
    { id: 7, title: "Web", name: "م/ الاسم المهندس", description: "نبذة عنه" },
  ],
};

export const companiesText = {
  heading: {
    arabic: "شركائنا",
    english: "Partners",
  },
};

export const Rd3SeasonProgram = [
  {
    texts: {
      heading: {
        arabic: "برنامج فداء",
        english: "Fdaa Program",
      },
      legend: {
        arabic: ". أول برامج الموسم الثالث في Skills Area 🤩",
        english: "The first program of the third season in Skills Area. 🤩",
      },
      descreption: {
        arabic:
          "برنامج فداء هو اول برنامج تسويقي لمنتجات منطقة المهارات سواء كان كورسات او ورش عمل او ايفنتات علي برامج الريلز.",
        english:
          "The Fidaa program is the first marketing program for Skills Area products, whether they are courses, workshops, or events on Reels programs.",
      },
    },
    images: {
      banner: fdaProgram,
      trainer: fda,
    },
  },
  {
    texts: {
      heading: {
        arabic: "برنامج بودكاست مع رؤى",
        english: "Podcast Program with Roaa",
      },
      legend: {
        arabic: "ثاني برامج من برامج الموسم الثالث في Skills Area. 🤩",
        english: "The second program of the third season in Skills Area. 🤩",
      },
      descreption: {
        arabic:
          " برنامج بودكاست مع رؤى هو اول برنامج يقدم بودكاستات تعليمية مع اشخاص مهمين و مؤثرين في المجتمع لعرض افادة الشباب.",
        english:
          "The Podcast Program with Roaa is the first program to offer educational podcasts with important and influential people in the community to benefit the youth.",
      },
    },
    images: {
      banner: podcast,
      trainer: roaa,
    },
  },
  {
    texts: {
      heading: {
        arabic: "برنامج فرصة",
        english: "Forsa Program",
      },
      legend: {
        arabic: "ثالث برنامج من برامج الموسم الثالث في Skills Area. 🤩",
        english: "The third program of the third season in Skills Area 🤩",
      },
      descreption: {
        arabic:
          "ث. برنامج فرصة معظم الشباب يكون عندهم الشغف انهم يتعلموا مهنة جديدة بس يكونوا محتاجين حد يساعدهم و يوجههم و برنامج فرصة هيساعد في نشر الوعي لكل شاب و شابة و كمان هيساعدهم انهم يتعرفوا علي المناسب ليهم.",
        english:
          "The Forsa Program is for most young people who have the passion to learn a new profession but need someone to help and guide them. The Forsa Program will help raise awareness for every young man and woman and also help them find what suits them.",
      },
    },
    images: {
      banner: forsaProgram,
      trainer: forsa,
    },
  },
];

export const testimonialsSection = {
  heading: {
    arabic: "أراء المستخدمين",
    english: "Testimonials",
  },
  testimonials: [
    {
      arabic:
        "مهارات المنطقة كانت بداية جديدة لتطوير مهاراتي في التسويق الرقمي.",
      english:
        "Skills Area was a new beginning to enhance my digital marketing skills.",
    },
    {
      arabic: "برامج مهارات المنطقة تساعد في بناء الثقة بالنفس لدى الشباب.",
      english: "Skills Area programs help build self-confidence among youth.",
    },
    {
      arabic: "لقد اكتسبت معرفة قيمة في وقت قصير من خلال الدورات المقدمة.",
      english:
        "I gained valuable knowledge in a short time through the offered courses.",
    },
    {
      arabic: "بودكاست رؤى يفتح آفاقاً جديدة ويوفر تجربة تعليمية ممتعة.",
      english:
        "The Roaa Podcast opens new horizons and provides an enjoyable learning experience.",
    },
    {
      arabic:
        "التجربة مع مهارات المنطقة كانت استثنائية، أنصح الجميع بالانضمام.",
      english:
        "My experience with Skills Area was exceptional; I highly recommend joining.",
    },
    {
      arabic: "تعلمت مهارات جديدة وساهمت في مشاريع ناجحة بفضل مهارات المنطقة.",
      english:
        "I learned new skills and contributed to successful projects thanks to Skills Area.",
    },
    {
      arabic: "برامج مهارات المنطقة هي الطريق المثالي للتطوير الشخصي والمهني.",
      english:
        "Skills Area programs are the perfect path for personal and professional growth.",
    },
    {
      arabic: "مهارات المنطقة ألهمتني لأخذ خطوات جدية نحو تحقيق أهدافي.",
      english:
        "Skills Area inspired me to take serious steps toward achieving my goals.",
    },
    {
      arabic: "المحتوى التعليمي المتنوع ساعدني على اكتساب معرفة شاملة.",
      english:
        "The diverse educational content helped me acquire comprehensive knowledge.",
    },
    {
      arabic: "بفضل مهارات المنطقة، استطعت تحقيق إنجازات في مجالي المهني.",
      english:
        "Thanks to Skills Area, I was able to achieve milestones in my professional field.",
    },
  ],
};

export const links = {
  contact: {
    arabic: "تواصل معنا عبر",
    english: "Contact us in",
  },
};

export const workshopsPgae = {
  button: {
    arabic: "سجل في الورشة",
    english: "Register for the workshop",
  },
  deadline: {
    arabic: "معاد التسجيل",
    english: "Deadline",
  },
  cost: {
    arabic: "الرسوم",
    english: "Costs",
  },
  features: {
    arabic: "المميزات",
    english: "Features",
  },
  location: {
    arabic: "المكان",
    english: "Location",
  },
  workshops: [
    {
      banner: flutter,
      name: "Flutter",
      deadline: {
        arabic: "الاثنين الساعة 10 مساءا 🚨",
        english: "Monday 10pm 🚨",
      },
      cost: {
        arabic: "مجانيا 100%",
        english: "free 100%",
      },
      features: {
        arabic: "بعد الورشة في شهادة + جوائز و فعاليات مقدمة من skill Area 🚨",
        english:
          "Certificate after the workshop + prizes and event from Skill Area 🚨",
      },
      location: {
        arabic: "أونلاين على جوجل ميت",
        english: "Online on Google Meet",
      },
    },
    {
      banner: frontEnd,
      name: "frontEnd",
      deadline: {
        arabic: "الأربعاء القادم الساعة 9:30 مساءا",
        english: "Next Wednesday at 9:30 pm",
      },
      cost: {
        arabic: "مجانيا 100%",
        english: "free 100%",
      },
      features: {
        arabic: "بعد الورشة في شهادة + جوائز و فعاليات مقدمة من skill Area 🚨",
        english:
          "Certificate after the workshop + prizes and event from Skill Area 🚨",
      },
      location: {
        arabic: "أونلاين على جوجل ميت",
        english: "Online on Google Meet",
      },
    },
  ],
};

export const us = {
  heading: {
    arabic: "من نحن",
    english: "Who Us",
  },
  description: {
    arabic:
      "أول منظمة تعليمية تساعد على توفير منتجات تعليمية ممتعة للشباب من سن 11 سنة لفوق 25 سنة في مجالات التكنولوجيا و تطوير الذات",
    english:
      "First Educational Company help offering enjoyable educational product for people from 11 yo even upper 25 yo in technologies feilds and self improvment",
  },
};

export const form = {
  title: {
    arabic: "أدخل بياناتك الصحيحة",
    english: "Enter Your Informations",
  },
  description: {
    arabic: "و سوف نتواصل معك في أقرب وقت ممكن",
    english: "and we will contact you soon",
  },
  formDetails: {
    Name: {
      arabic: "الاسم",
      english: "Name",
    },
    placeholderName: {
      arabic: "أدخل اسمك بالكامل",
      english: "Enter your full name",
    },
    pN: {
      arabic: "رقم الهاتف",
      english: "Phone Number",
    },
    email: {
      arabic: "الايمايل",
      english: "Email",
    },
    age: {
      arabic: "العمر",
      english: "Age",
    },
  },
};
