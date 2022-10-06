 
import Salumatics from "./assets/portfolioImages/Salumatics.png";
import erindale from "./assets/portfolioImages/erindale.jpg"
import tetra from "./assets/portfolioImages/tetra.jpg"
 
const ExperiencesData = [
  {
    id: "tetra-ryerson",
    job: "Software Engineer",
    img: tetra,
    Type: "",
    date: "May 2022 - Oct 2022",
    stack: [" Kotlin "],
    name: "Tetra Ryerson",
    location: "Toronto, Ontario, Canada",
    live: "https://tetraryerson.ca/",
    source: "https://www.linkedin.com/company/tetraryerson/mycompany/",
    description1: 
    "-Using Kotlin to design and build a mobile application as the primary solution for the hospital bed project",
    description2:
    "-Testing the software, finding faults, and fixing any issues in the code that may arise.",
    description3: 
    "-Creating the user interface (UI) using iOS/android that determines what each part of the application does and how it will look",

  },
   
  {
    id: "salumatics",
    job: "Software Engineer",
    img: Salumatics,
    Type: "Internship",
    date: "May 2022 - Oct 2022",
    name: "Salumatics",
    location: "Mississauga, Ontario, Canada",
    stack: ["  C#  |  ",".NET  |  ",  "  MS SQL Server"],
    live: "https://salumatics.com/",
    source: "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A1491242&keywords=salumatics%20inc.&origin=RICH_QUERY_SUGGESTION&position=0&searchId=76567613-5308-416e-ac49-9fb559fd26c6&sid=JGJ",
    description1: 
    "-Used the Model-View-Controller pattern to develop and improve app-solutions",
    description2:
    "-Developed efficient and maintainable software according to business objectives and needs of clients resulting in a 60% increase in sales",
    description3: 
    "-Ensured applications' security and ability to interact with multiple APIs and databases",
    description4:  
    "-Contributed ideas and suggestions in team meetings and delivered updates on deadlines",
    description5:
    "-Analyzed and tested different builds to identify, trace and help resolve bugs" 
  },
  {
    id: "Erindale",
    job: "Teaching Assistant",
    img: erindale,
    Type: "",
    date: "May 2022 - Oct 2022",
    name: "Erindale",
    location: "Mississauga, Ontario, Canada",
    stack: ["  Calculus  |  ","Algebra"],
    live: "https://www2.peelschools.org/schools/erindale/Pages/default.aspx",
    source: "https://www.linkedin.com/company/erindale-secondary-school/?originalSubdomain=ca",
    description1: 
    "-Instructed approximately 10 students weekly each semester",
    description2:
    "-Taught concepts from all levels of mathematics, including Pre-Algebra, Geometry, Calculus and Trigonometry",
    description3: 
    "-Collaborated with faculty in order to set goals and assess progress",
    description4:  
    "-Kept detailed progress notes and time sheets for each session on a weekly basis",
  },
  
   
];

export default {ExperiencesData}