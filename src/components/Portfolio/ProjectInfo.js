const getProject = (project) => {
  return [
    {
      name: "Travel Match",
      description:
        "My Final Project. This application idea is to match people abroad with similar interests. The app connects people with similar interests such as: restaurants, nightlife, attractions, tourist sites and more. Also, the app will allow you to search for people who want to take a taxi together. After 2 users have chosen the same place or selected a common source and destination, you will be able to see the profile and start a chat. The app is built as a website with ReactJs and by the PWA2APK tool will become an app.",
      techs: [
        "Javascript",
        "HTML",
        "CSS",
        "ReactJS",
        "NodeJS",
        "Express",
        "MongoDB",
        "Restful",
        "SocketIO",
        "Redux",
        "Hooks",
      ],
      site: "https://guy490.github.io/TravelMatch/",
      main_image: "TravelMatch-home.jpg",
      images: [
        ["TravelMatch-home.jpg", "Home Page"],
        ["TravelMatch-login1.jpg", "Login"],
        ["TravelMatch-find-match.jpg", "Find Match"],
        ["TravelMatch-chat.jpg", "Chat"],
      ],
    },
    {
      name: "Blog",
      description:
        "A blog site that contains blogs on various topics. The blog supports user management and allows you to register and login to the site. Without a login you can only view the various blogs but after logging in you can add a new blog,edit your previous blogs and leave comments on other users blogs.",
      techs: [
        "Javascript",
        "HTML",
        "CSS",
        "NodeJS",
        "Express",
        "Restful",
        "MongoDB",
        "Passport",
      ],
      site: "https://blog-app-benel.herokuapp.com/blogs",
      main_image: "blogs.jpg",
      images: [
        ["blog-home.jpg", "Home Page"],
        ["blog-show-post.jpg", "Show Post"],
        ["blog-login.jpg", "Login"],
        ["blog-new-post.jpg", "New Post"],
      ],
    },
    {
      name: "Vehicle Agecy",
      description:
        "System development for a vehicle management agency - Using JAVA language, using different DP's, which supports multi-threading and a GUI interface. Perform 4 operations on many vehicles: Add new Vehices, buy vehicle, test drive, change flag and 4 System operations:Reset mileage, Show vehicles inventory, Save current state, Back to previous state",
      techs: ["Java", "Multi-Threding", "Swing", "Design Patterns", "OOP"],
      site: "https://github.com/benel2606/VehiclesManagmentAgency",
      main_image: "vehicle-add.jpg",
      images: [
        ["vehicle-home.jpg", "Home Page"],
        ["vehicle-add.jpg", "Add a new vehicle"],
        ["vehicle-fill.jpg", "Fill out vehicle information"],
        ["vehicle-test.jpg", "Test drive"],
        ["vehicle-inventory.jpg", "vehicles inventory"],
      ],
    },
  ];
};

export { getProject };
