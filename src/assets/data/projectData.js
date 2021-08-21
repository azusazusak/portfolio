import fairycastle_thumb from "../imgs/fairycastle/fairycastle_thumb.jpg";
import fairycastle_top from "../imgs/fairycastle/fairycastle_top.jpg";
import ayusveda_thumb from "../imgs/ayusveda/ayusveda_thumb.jpg";
import ayusveda_top from "../imgs/ayusveda/ayusveda_top.jpg";
import rds_thumb from "../imgs/rds/rds_thumb.jpg";
import rds_top from "../imgs/rds/rds_top.jpg";
import fallingFruits_thumb from "../imgs/fallingFruits/fallingFruits_thumb.jpg";
import fallingFruits_top from "../imgs/fallingFruits/fallingFruits_top.jpg";
import instagramish_thumb from "../imgs/instagramish/instagramish_thumb.jpg";
import instagramish_top from "../imgs/instagramish/instagramish_top.jpg";
import sarahTaylor_thumb from "../imgs/sarahTaylor/sarahTaylor_thumb.jpg";
import sarahTaylor_top from "../imgs/sarahTaylor/sarahTaylor_top.jpg";

const projectData = {
  fairycastle: {
    id: 0,
    title: "Fairy Castle",
    subTitle: "E-Commerce Booking Site ",
    work: "Website/Logo/UI/UX Design, Branding, Coding",
    techs_min: ["PHP", "JavaScript", "MySQL", "MVC"],
    techs_all: ["HTML5", "CSS3", "Sass", "JavaScript", "jQuery", "PHP", "MySQL", "MVC"],
    thumbnail: fairycastle_thumb,
    topImage: fairycastle_top,
    goal: "Fairy Castle is an online booking site built in PHP. The main requirement was to create a system that allows users to search for properties and make reservations based on criteria such as dates and number of people. In addition, the administrator needed to be able to add properties and check the reservation status in the CMS. I did all the coding as well as the design and branding by myself.",
    background: "This was a school project to create an e-commerce website in PHP. The fictional client is an online tourism company specializing in unique accommodation rentals around the world",
    challenges: "Initially, I analyzed the features of the three major existing hotel booking sites (Airbnb, Booking.com, Expedia) and set them as benchmarks. I designed the UI/UX and information architecture by comparing sites that people are already familiar with. The most difficult part was figuring out the SQL statement to search for properties with location, property type, number of guests and dates. Since there were only simple examples on the Internet, I combined a number of them and through many trials and errors, I succeeded in completing the SQL statement.",
    siteLink: "https://azusak.com/projects/fairycastle/",
    githubLink: "https://github.com/azusazusak/fairycastle",  
  },
  ayusveda: {
    id: 1,
    title: "AyusVeda",
    subTitle: "Ayurvedic Life Style Website",
    work: "Website/Logo/UI/UX Design, Branding, Coding",
    techs_min: ["WordPress", "PHP", "JavaScript"],
    techs_all: ["HTML5", "CSS3", "Sass", "JavaScript", "jQuery", "PHP", "WordPress"],
    thumbnail: ayusveda_thumb,
    topImage: ayusveda_top,
    goal: "Lorem ipsum.",
    background: "Lorem ipsum.",
    challenges: "Lorem ipsum.",
    siteLink: "https://ayusveda.ca/",
    githubLink: null,
  },
  rds: {
    id: 2,
    title: "Rapid Delivery Service",
    subTitle: "Commercial Website",
    work: "Website/Logo/UI/UX Design, Branding, Coding",
    techs_min: ["PHP", "JavaScript"],
    techs_all: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"],
    thumbnail: rds_thumb,
    topImage: rds_top,
    goal: "The goal of this project was to create a strategic website that promotes the client's business. I worked on branding to distinguish the identity of the client, the UI/UX design to properly guide users, and the coding to achieve attractive design and animation.",
    background: "This was a school project to create a commercial website for a fictional client. The client is a Vancouver-based courier and local delivery service that was established three years ago. They needed a website that would allow customers to understand their services and request delivery immediately.  The client requested independent pages describing each of their main industries; B2B, healthcare, legal filings and medical cannabis. In addition, a design that represents quickness and the nature of British Columbia was required.",
    challenges: "When designing the UI/UX across the site, I took careful considerations since the primary goal was to lead users to a CTA. Therefore, the hero image is not too large the user can easily see the details of the service, and the noticeable coloured CTA buttons are placed in each section. In addition, I implemented animations in JavaScript to leverage these design elements. The logo and the colour palette are inspired by the provincial bird of British Columbia which represents the vision of flying around quickly by bicycle or compact vehicle.",
    siteLink: "https://azusak.com/projects/rds/",
    githubLink: null,
  },
  fallingfruits: {
    id: 3,
    title: "Falling Fruits",
    subTitle: "JavaScript Mini Game",
    work: "Coding",
    techs_min: ["JavaScript"],
    techs_all: ["HTML5", "CSS3", "JavaScript"],
    thumbnail: fallingFruits_thumb,
    topImage: fallingFruits_top,
    goal: "Creating a mini-game using the only JavaScript to deepen understanding of object-oriented programming and basic coding.",
    background: null,
    challenges: "First, I identified the features required for the complete game to get an overall picture, and then I started coding the simple parts in order. The function that detects collisions between the basket and fruits was the most challenging part. I solved it by creating a code that gets the X and Y coordinates, width and height of the element and detects the overlap between them.",
    siteLink: "https://azusak.com/projects/falling_fruits/",
    githubLink: "https://github.com/azusazusak/JS_game",
  },
  instagramish: {
    id: 4,
    title: "Instagramish",
    subTitle: "Photo Sharing App",
    work: "UI/UX Design, Coding",
    techs_min: ["PHP", "JavaScript", "MySQL"],
    techs_all: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    thumbnail: instagramish_thumb,
    topImage: instagramish_top,
    goal: "Lorem ipsum.",
    background: null,
    challenges: "Lorem ipsum.",
    siteLink: null,
    githubLink: null,
  },
  sarahtaylorp: {
    id: 5,
    title: "Sarah Taylor Photography",
    subTitle: "Freelance Photographer",
    work: "Website/Logo/UI/UX Design, Branding, Coding",
    techs_min: ["PHP", "JavaScript", "MySQL"],
    techs_all: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    thumbnail: sarahTaylor_thumb,
    topImage: sarahTaylor_top,
    goal: "Lorem ipsum.",
    background: "Lorem ipsum.",
    challenges: "Lorem ipsum.",
    siteLink: "https://azusak.com/projects/sarahtaylorp/",
    githubLink: null,
  },
}

export default projectData;


