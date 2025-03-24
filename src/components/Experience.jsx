import html from "../asssets/html.png";
import css from "../asssets/css.png";
import javascript from "../asssets/javascript.png";
import reactImage from "../asssets/react.png";
import github from "../asssets/github.png";
import tailwind from "../asssets/tailwind.png";
import mongoDB from "../asssets/mongoDB.jpeg";
import Mysql from "../asssets/mysql.png";
import node from "../asssets/node.png";
import cpp from "../asssets/cpp.png";
import python from "../asssets/python.png";
import Java from "../asssets/Java.jpg";
import Postgre from "../asssets/Postgre.jpg";
import Firebase from "../asssets/Firebase.jpg";
import leetcode from "../asssets/leetcode.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 9,
      src: Java,
      title: "Java",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: Mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: Postgre,
      title: "Postgre SQL",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: Firebase,
      title: "Firebase",
      style: "shadow-green-400",
    },
    {
      id: 14,
      src: leetcode,
      title: "leetcode",
      style: "shadow-blue-500",
    },
    {
      id: 15,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div 
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6">These are the Tools and Technologies I Have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;