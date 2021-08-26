import fairycastle_thumb from "../imgs/fairycastle/fairycastle_thumb.jpg";
import fairycastle_top from "../imgs/fairycastle/fairycastle_top.jpg";
import fairycastle_ss_1 from "../imgs/fairycastle/fairycastle_ss_1.jpg";
import fairycastle_ss_2 from "../imgs/fairycastle/fairycastle_ss_2.jpg";
import fairycastle_ss_3 from "../imgs/fairycastle/fairycastle_ss_3.jpg";
import fairycastle_ss_4 from "../imgs/fairycastle/fairycastle_ss_4.jpg";
import ayusveda_thumb from "../imgs/ayusveda/ayusveda_thumb.jpg";
import ayusveda_top from "../imgs/ayusveda/ayusveda_top.jpg";
import ayusveda_ss_1 from "../imgs/ayusveda/ayusveda_ss_1.jpg";
import ayusveda_ss_2 from "../imgs/ayusveda/ayusveda_ss_2.jpg";
import ayusveda_brand_1 from "../imgs/ayusveda/ayusveda_brand_1.jpg";
import ayusveda_brand_2 from "../imgs/ayusveda/ayusveda_brand_2.jpg";
import ayusveda_brand_3 from "../imgs/ayusveda/ayusveda_brand_3.jpg";
import rds_thumb from "../imgs/rds/rds_thumb.jpg";
import rds_top from "../imgs/rds/rds_top.jpg";
import rds_ss_1 from "../imgs/rds/rds_ss_1.jpg";
import rds_ss_2 from "../imgs/rds/rds_ss_2.jpg";
import rds_brand_1 from "../imgs/rds/rds_brand_1.jpg";
import rds_brand_2 from "../imgs/rds/rds_brand_2.jpg";
import rds_brand_3 from "../imgs/rds/rds_brand_3.jpg";
import rds_brand_4 from "../imgs/rds/rds_brand_4.jpg";
import fallingFruits_thumb from "../imgs/fallingFruits/fallingFruits_thumb.jpg";
import fallingFruits_top from "../imgs/fallingFruits/fallingFruits_top.jpg";
import fallingFruits_ss_1 from "../imgs/fallingFruits/fallingFruits_ss_1.jpg";
import fallingFruits_ss_2 from "../imgs/fallingFruits/fallingFruits_ss_2.jpg";
import instagramish_thumb from "../imgs/instagramish/instagramish_thumb.jpg";
import instagramish_top from "../imgs/instagramish/instagramish_top.jpg";
import instagramish_ss_1 from "../imgs/instagramish/instagramish_ss_1.jpg";
import instagramish_ss_2 from "../imgs/instagramish/instagramish_ss_2.jpg";
import instagramish_ss_3 from "../imgs/instagramish/instagramish_ss_3.jpg";
import instagramish_ss_4 from "../imgs/instagramish/instagramish_ss_4.jpg";
import sarahTaylor_thumb from "../imgs/sarahTaylor/sarahTaylor_thumb.jpg";
import sarahTaylor_top from "../imgs/sarahTaylor/sarahTaylor_top.jpg";
import sarahTaylor_ss_1 from "../imgs/sarahTaylor/sarahTaylor_ss_1.jpg";
import sarahTaylor_ss_2 from "../imgs/sarahTaylor/sarahTaylor_ss_2.jpg";
import sarahTaylor_brand_1 from "../imgs/sarahTaylor/sarahTaylor_brand_1.jpg";
import sarahTaylor_brand_2 from "../imgs/sarahTaylor/sarahTaylor_brand_2.jpg";
import sarahTaylor_brand_3 from "../imgs/sarahTaylor/sarahTaylor_brand_3.jpg";

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
    background: "This was a school project to create an e-commerce website in PHP. The fictional client is an online tourism company specializing in unique accommodation rentals around the world.",
    challenges: "Initially, I analyzed the features of the three major existing hotel booking sites (Airbnb, Booking.com, Expedia) and set them as benchmarks. I designed the UI/UX and information architecture by comparing sites that people are already familiar with. The most difficult part was figuring out the SQL statement to search for properties with location, property type, number of guests and dates. Since there were only simple examples on the Internet, I combined a number of them and through many trials and errors, I succeeded in completing the SQL statement.",
    siteLink: "https://azusak.com/projects/fairycastle/",
    githubLink: "https://github.com/azusazusak/fairycastle",
    screenshots_1: {
      title: "Main Site",
      images: [
        { name: "Home", img: fairycastle_ss_1},
        { name: "Property Details", img: fairycastle_ss_2 },
      ],
      border: true,
    },
    screenshots_2: {
      title: "Admin Site",
      images: [
        { name: "Property List", img: fairycastle_ss_3 },
        { name: "Add a Property", img: fairycastle_ss_4 },
      ],
      border: true,
    },
    pass: {
      username: "bob", 
      password: "123",
    }
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
    goal: "In Term 3 of school, we had to create a website for a real client. I had to figure out the client’s manifest and potential needs and create everything from branding to coding, including logo design.",
    background: "I created a website for one of my friends from scratch. She offers workshops on Ayurvedic cooking and natural skincare products as a side business. She had been getting students through Instagram and word of mouth, but desired a website that would allow her to express her philosophy on lifestyle, as well as attract students.",
    challenges: "The client had a solid concept in mind, so I spent a lot of time capturing that idea and embodying the brand. As a result, she was very pleased with the web design and especially the logo. I also used WordPress to set up a contact form and to embed her existing Instagram account. The site is set up in a way that she can change the images via the CMS.",
    siteLink: "https://ayusveda.ca/",
    githubLink: null,
    screenshots_1: {
      title: "Website Design",
      images: [
        { name: "Home", img: ayusveda_ss_1 },
        { name: "Natural Skin Care", img: ayusveda_ss_2 },
      ],
      border: true,
    },
    screenshots_2: {
      title: "Branding",
      images: [
        { name: "Logo", img: ayusveda_brand_1 },
        { name: "Colour Palette", img: ayusveda_brand_2 },
        { name: "Typography", img: ayusveda_brand_3 },
      ],
      border: false,
    },
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
    screenshots_1: {
      title: "Website Design",
      images: [
        { name: "Home", img: rds_ss_1 },
        { name: "Service Details", img: rds_ss_2 },
      ],
      border: true,
    },
    screenshots_2: {
      title: "Branding",
      images: [
        { name: "Logo", img: rds_brand_1 },
        { name: "Iconic Animal", img: rds_brand_2 },
        { name: "Colour Palette", img: rds_brand_3 },
        { name: "Typography", img: rds_brand_4 },
      ],
      border: false,
    },
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
    screenshots_1: {
      title: "Screens",
      images: [
        { name: "Start", img: fallingFruits_ss_1 },
        { name: "In Game", img: fallingFruits_ss_2 },
      ],
      border: true,
    },
    screenshots_2: null,
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
    goal: "The task was to create a social media-like feature using PHP and MySQL. Functions such as posting, mutual following, and messaging were implemented.",
    background: null,
    challenges: "In addition to writing the various SQL statements, designing the overall UI/UX was also a key part of this project. I benchmarked Instagram, studied the user flow, and then developed a database structure. For posts, profiles, etc., I used if statements to separate the buttons that would be displayed depending on whether they belonged to me or someone else.",
    siteLink: null,
    githubLink: null,
    screenshots_1: {
      title: "Screens",
      images: [
        { name: "Home", img: instagramish_ss_1 },
        { name: "Profile", img: instagramish_ss_2 },
        { name: "Messages", img: instagramish_ss_3 },
        { name: "Edit Profile", img: instagramish_ss_4 },
      ],
      border: true,
    },
    screenshots_2: null,
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
    goal: "The project was to create a website for a fictional freelance photographer to showcase her portfolios and receive inquiries from clients. Brand design was also part of the scope.",
    background: "Sarah Taylor is a professional freelance photographer specializing in “real-life” photography. Her product includes a day or multi-day photoshoot where the photographer will follow you and your partner or your family and will photograph you in natural day-to-day settings. She wanted a website that promotes her as a photographer with this unique service offering. Pages showing a gallery of sample photos and package pricing were required. ",
    challenges: "Since the client is an artist, I decided to make the layout slightly more playful. I created a design that was optimized for both desktop and mobile while maintaining a sense of unity. The fading slideshow on the top page and the modal window on the portfolio page is created from scratch in JavaScript without using any plugins. ",
    siteLink: "https://azusak.com/projects/sarahtaylorp/",
    githubLink: null,
    screenshots_1: {
      title: "Website Design",
      images: [
        { name: "Home", img: sarahTaylor_ss_1 },
        { name: "Portfolio", img: sarahTaylor_ss_2 },
      ],
      border: true,
    },
    screenshots_2: {
      title: "Branding",
      images: [
        { name: "Logo", img: sarahTaylor_brand_1 },
        { name: "Colour Palette", img: sarahTaylor_brand_2 },
        { name: "Typography", img: sarahTaylor_brand_3 },
      ],
      border: false,
    },
  },
}

export default projectData;


