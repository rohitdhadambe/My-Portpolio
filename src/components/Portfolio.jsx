import React from "react";
import ecom_dash from "../asssets/portfolio/ecom_dash.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
import Usability from "../asssets/portfolio/Usability.jpg";
import EDA from "../asssets/portfolio/EDA.jpg";
import anime from "../asssets/portfolio/anime.jpg";
import pass from "../asssets/portfolio/pass.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecom_dash,
      demoLink: "https://github.com/Abir-0007/Power_BI_project1/blob/main/ECOMMERCE_SALES_DASHBOARD1.pdf",
      codeLink: "https://github.com/Abir-0007/Power_BI_project1",
    },
    {
      id: 2,
      src: EDA,
      demoLink: "https://github.com/Abir-0007/Exploratory-Data-Analysis/blob/main/EDA%20of%20Titanic%20Dataset%20(Detailed%20explanation).ipynb",
      codeLink: "https://github.com/Abir-0007/Exploratory-Data-Analysis",
    },
    {
      id: 3,
      src: Usability,
      demoLink: "https://abir-0007.github.io/Usability-clone-website/",
      codeLink: "https://github.com/Abir-0007/Usability-clone-website",
    },
    {
      id: 4,
      src: anime,
      demoLink: "https://abir-0007.github.io/funky-anime-content/",
      codeLink: "https://github.com/Abir-0007/funky-anime-content",
    },
    {
      id: 5,
      src: pass,
      demoLink: "https://react-password-generator-mauve-eight.vercel.app/",
      codeLink: "https://github.com/Abir-0007/React_password_generator",
    },
   
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
