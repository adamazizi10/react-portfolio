import facedetector from "./assets/portfolioImages/face-detector.png"
import facedetector2 from "./assets/portfolioImages/face-detector2.png"
import Book1 from "./assets/portfolioImages/Book1.png"
import Book2 from "./assets/portfolioImages/Book2.png"
import PortfolioPic from "./assets/portfolioImages/PortfolioPic.png"
import PortfolioPic2 from "./assets/portfolioImages/PortfolioPic2.png"
const ProjectsData = [
   
  {
    id: "Face-Detector",
    img: facedetector2,
    img2: facedetector,
    name: "Face Detector | Image Detection API",
    Tech: "Reactjs | Node.js | Express.js | PostgreSQL",
    date: "Aug 2022 - Sep 2022",
    live: "https://adamazizi10.github.io/face-detector/",
    source: "https://github.com/adamazizi10/face-detector-frontend",
    description1:
    "-Developed a fully functional Web app that uses a Face Recognition API to Detect the face on any image",
    description2:  
    "-Implemented a login and register system with both Front-End and Back-End Validations",
    description3: 
    "-Users are able to keep track of their face detection entries, change password and profile info",
    description4:  
    "-Fully Tested all API calls for any security issues and bugs",
    description5:  
    "",
    description6:  
    "",
  },
  {
    id: "E-Portfolio",
    img: PortfolioPic,
    img2: PortfolioPic2,
    name: "E-Portfolio",
    Tech: "Reactjs",
    date: "Sep 2022 - Oct 2022",
    live: "http://localhost:3000/react-portfolio",
    source: "https://github.com/adamazizi10/react-portfolio",
    description1:
    "-Worked with reactjs to develop a fully functional and responsive E-Portfolio website",
    description2: 
    "-Developed and tested on all devices to check for responsivity",
    description3:  
    "-Overall, a very fun project to express my front-end skills as well as improving them",
    description4:  
    "",
    description5:  
    "",
    description6:  
    "",
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