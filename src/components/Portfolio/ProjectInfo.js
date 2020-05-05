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
      main_image: "TravelMatch-home.JPG",
      images: [
        ["TravelMatch-home.JPG", "Home Page"],
        ["TravelMatch-bars.JPG", "Show Places"],
        ["TravelMatch-login1.JPG", "Login"],
        ["TravelMatch-find-match.JPG", "Find Match"],
        ["TravelMatch-chat.JPG", "Chat"],
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
      main_image: "blogs.JPG",
      images: [
        ["blog-home.JPG", "Home Page"],
        ["blog-show-post.JPG", "Show Post"],
        ["blog-login.JPG", "Login"],
        ["blog-new-post.JPG", "New Post"],
      ],
    },

    {
      name: "Vehicle Agecy",
      description:
        "System development for a vehicle management agency - Using JAVA language, using different DP's, which supports multi-threading and a GUI interface. Perform 4 operations on many vehicles: Add new Vehices, buy vehicle, test drive, change flag and 4 System operations:Reset mileage, Show vehicles inventory, Save current state, Back to previous state",
      techs: ["Java", "Multi-Threding", "Swing", "Design Patterns", "OOP"],
      site: "https://github.com/benel2606/VehiclesManagmentAgency",
      main_image: "vehicle-add.JPG",
      images: [
        ["vehicle-home.JPG", "Home Page"],
        ["vehicle-add.JPG", "Add a new vehicle"],
        ["vehicle-fill.JPG", "Fill out vehicle information"],
        ["vehicle-test.JPG", "Test drive"],
        ["vehicle-inventory.JPG", "vehicles inventory"],
      ],
    },

    // {
    //   name: "Video Viewer",
    //   description: "React web application that shows videos using YouTube API.",
    //   techs: ["Javascript", "ReactJS", "HTML", "CSS", "API"],
    //   site: "https://github.com/benel2606/VehiclesManagmentAgency",
    //   main_image: "video-viewer.JPG",
    //   images: [["video-viewer.JPG", "Home Page"]],
    // },
  ];
};

export { getProject };
