const getExp = (exp) => {
  switch (exp) {
    case "education":
      return [
        {
          key: "1",
          type: "edu",
          image: "sce.png",
          title: "Software Engineering",
          degree: "Bachelor of Science",
          institution: "SCE",
          years: "2016 – 2020",
          description: "GPA 89",
        },
        {
          key: "2",
          type: "edu",
          image: "idf.png",
          title: "Electronics and Computer",
          degree: "Practical Engineer",
          institution: "Technological College of the Air Force",
          years: "2010-2012",
          description: "",
        },
        {
          key: "3",
          type: "edu",
          image: "mekif_a.png",
          title: "Electronics and computers",
          degree: "Full matriculation ",
          institution: "Mekif A",
          description:
            "5 units of study in Mathematics, Physics, Electronics and Computers.",
        },
      ];
    case "work":
      return [
        {
          key: "1",
          type: "work",
          image: "appen.png",
          position: "Freelance Web Evaluator",
          workPlace: "Appen inc",
          years: "2019-2020",
          description:
            "Characterization, classification and ranking of web searches and advertisement to later be processed for SEO",
        },
        {
          key: "2",
          type: "work",
          image: "malam.png",
          position: "IT Help Desk Technician",
          workPlace: "Malam Team",
          years: "2015-2016",
          description:
            "Technical support for the Tel Aviv Municipality in an IT company that provides a variety of IT solutions for a wide range of systems and software in various areas.",
        },
      ];
    default:
      return null;
  }
};

export { getExp };
