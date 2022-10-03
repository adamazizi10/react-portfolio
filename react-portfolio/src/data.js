import facedetector from "./assets/portfolioImages/face-detector.png"
import facedetector2 from "./assets/portfolioImages/face-detector2.png"
import Book1 from "./assets/portfolioImages/Book1.png"
import Book2 from "./assets/portfolioImages/Book2.png"
const ProjectsData = [
   
  {
    id: "Face-Detector",
    img: facedetector2,
    img2: facedetector,
    name: "Face Detector | Image Detection API",
    Tech: "Reactjs | Node.js | Express.js | PostgreSQL",
    date: "Aug 2022 - Sep 2022",
    live: "https://free-face-detector.herokuapp.com/",
    source: "https://github.com/adamazizi10/face-detector-frontend",
    description1: 
    `Note: The application is hosted on heroku and since the free version is being used, the app goes to "sleep" after 30 mins so when you load the app, it might take around 30 seconds to load for the first time as it is "waking up". Please don't hesitate to contact me if you need any help.`,
    description2:
    "-Developed a fully functional Web app that uses a Face Recognition API to Detect the face on any image",
    description3: 
    "-Users are able to keep track of their face detection entries, change password and profile info",
    description4:  
    "-Fully Tested all API calls for any security issues and bugs",
  },
  {
    id: "Bookstore",
    img: Book1,
    img2: Book2,
    name: "Bookstore Management App",
    Tech: "Java, JavaFX",
    date: "Mar 2022 - Apr 2022",
    live: "",
    source: "https://github.com/adamazizi10/Bookstore-Management-System",
    description1: 
    `-Analyzed, designed and implemented a Bookstore Management System`,
    description2:
    "-The UI for this application was done using JavaFX",
    description3: 
    "-The purpose of this application is to have the functionalities that is needed for:",
    description4:  
    " a) Administrators to add books, remove books, add users, and delete users",
    description5:  
    " b) Customers to purchase books, earn rewards, and have a silver/gold rank based on their purchases",
    description6:  
    " c) All roles to be able to login and logout smoothly",
  },
];

export default {ProjectsData}