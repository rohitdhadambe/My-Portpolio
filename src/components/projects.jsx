import greencredit from "../asssets/portfolio/greencredit.png";
import Amazonclone from "../asssets/portfolio/Amazon clone.png"
import login from "../asssets/portfolio/login.png"
import shopwell from "../asssets/portfolio/shopwell.png"



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: greencredit,
      name: "Green Credit Management",
      demoLink: "https://greencreditmanagement102.netlify.app/",
      codeLink: "https://github.com/rohitdhadambe/GREEN_CREDIT_MANAGEMENT__7",
    },
    {
      id: 2,
      src: Amazonclone,
      name: "Amazon clone - INTERFACE",
      demoLink: "https://amazonclone101.netlify.app/",
      codeLink: "https://github.com/rohitdhadambe/Amazonclone",
    },{
      id: 3,
      src: login,
      name: "Authentication System",
      demoLink: "https://react-login-project-89za.vercel.app/",
      codeLink: "https://github.com/rohitdhadambe/React_LoginProject",
    },
    {
      id: 4,
      src: shopwell,
      name: "E-commerce website (AI Based website)",
      demoLink: "",
      codeLink: "https://github.com/rohitdhadambe/Shopwell",
    },
  ];
  return (
    <div className="text-lg md:text-xl lg:text-2xl">
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
          {portfolios.map(({ id, src, name, demoLink, codeLink }) => (
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
              <p className="text-center text-lg font-semibold py-2 text-">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
