/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adam's Portfolio",
  description:
    "A cloud DevOps engineering student with a passion for automation and designing both on-premise and cloud architectures.",
  og: {
    title: "Adam Bouhrara Portfolio",
    type: "website",
    url: "http://adambouhrara.com/",
  },
};

//Home Page
const greeting = {
  title: "Adam Bouhrara",
  logo_name: "AdamBouhrara",
  // nickname: "Adamou02",
  subTitle:
    "A cloud DevOps engineering student with a passion for automation and designing both on-premise and cloud architectures.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/Adamou02/myPortfolio",
  githubProfile: "https://github.com/Adamou02",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Adamou02",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Adamou02",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bouhrara-adam/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:adam.bouhrara@gmail.com",
    fontAwesomeIcon: "fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms, certified on Google Cloud and Azure.",
        "⚡ Hosting and maintaining websites on virtual machine instances and containers",
        "⚡ Monitoring and logging with Google Cloud tools.",
        "⚡ Configuring and managing virtual private cloud networks.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Storage & Database",
          fontAwesomeClassname: "humbleicons:database",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Networking",
          fontAwesomeClassname: "carbon:ibm-cloud-virtual-server-vpc",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Monitoring",
          fontAwesomeClassname: "eos-icons:monitoring",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },

    {
      title: "DevOps",
      fileName: "DesignImg",
      skills: [
        "⚡ Implementing continuous integration and continuous deployment (CI/CD) pipelines",
        "⚡ Managing and automating infrastructure with tools like Terraform",
        "⚡ Container orchestration with Kubernetes and Docker",
        "⚡ Automating routine tasks and managing configurations",
      ],
      softwareSkills: [
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "Scripting",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular",
        "⚡ Developing application backends using C# and the .NET framework.",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "teenyicons:angular-solid",
          style: {
            color: "#c2012f",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#0db5d6",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon-plain:csharp",
          style: {
            color: "#7f3188",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Azure",
      iconifyClassname: "simple-icons:microsoftazure",
      style: {
        color: "#0089D6",
      },
      profileLink:
        "https://learn.microsoft.com/api/credentials/share/fr-fr/Adamou-5899/3FD8B02941B6DA8C?sharingId=B1ECD57A6348A128",
    },
    {
      siteName: "Google cloud",
      iconifyClassname: "logos:google-cloud",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.credly.com/users/adam-bouhrara",
    },
    {
      siteName: "Linkedin Learn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#006798",
      },
      profileLink:
        "https://www.linkedin.com/in/bouhrara-adam/details/certifications/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CY-Tech (French engineering school)",
      subtitle: "Master's degree in computer science",
      logo_path: "cy-tech.png",
      alt_name: "CY-Tech",
      duration: "2020 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Algorithms, OS, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://cytech.cyu.fr/", //Mettre la page ingenieur IT
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure",
      subtitle: "Azure Fundamentals",
      logo_path: "azure.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/fr-fr/Adamou-5899/3FD8B02941B6DA8C?sharingId=B1ECD57A6348A128",
      alt_name: "Azure",
      color_code: "#8C151599",
    },
    {
      title: "Google Cloud Platform",
      subtitle: "Associate Cloud Engineer",
      logo_path: "gcp_logo.png",
      certificate_link: "https://www.credly.com/users/adam-bouhrara",
      alt_name: "Google Cloud Platform",
      color_code: "#00000099",
    },
    {
      title: "Linkedin learn",
      subtitle: "DevOps & Cloud skills",
      logo_path: "linkedin-learn.png",
      certificate_link:
        "https://www.linkedin.com/in/bouhrara-adam/details/certifications/",
      alt_name: "Linkedin learn",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked in a nuclear compagny (+10k employees) as software engineering. Actually working in a french PME named Avisto as a DevOps engineer to improve internal processes and automations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "DevOps engineer",
          company: "Avisto",
          company_url: "https://www.avisto.com/fr/",
          logo_path: "avisto.png",
          duration: "September 2024 - September 2025",
          location: "Grenoble, France",
          description: "",
          color: "#000000",
        },
        {
          title: "Software engineer",
          company:
            "CEA (Commissariat à l'énergie atomique et aux énergies renouvelables)",
          company_url: "https://www.cea.fr/",
          logo_path: "cea.png",
          duration: "September 2022 - September 2024",
          location: "Grenoble, France",
          description:
            "Building an API to allow engineers in my laboratory to get data",
          // "Refactoring code for generation of battery model to use data from this database"
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Apprenticeship",
    //   experiences: [
    //     {
    //       title: "Software engineer",
    //       company: "CEA (Commissariat à l'énergie atomique et aux énergies renouvelables",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "cy-tech.png",
    //       duration: "September 2022 - September 2024",
    //       location: "Grenoble, France",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "cy-tech.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
