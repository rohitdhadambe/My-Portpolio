import greencredit from "../asssets/portfolio/greencredit.jpg";
import opensource from "../asssets/portfolio/Amazon clone.png"



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
      src: opensource,
      name: " Open source contribution platform",
      demoLink: "https://inovate-togother.web.app",
      codeLink: "https://github.com/rohitdhadambe/INNOVATE_TOGOTHER__7",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
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
  );
};

export default Portfolio;