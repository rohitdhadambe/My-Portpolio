
const About = () => {
  return (
    <div className="text-lg md:text-xl lg:text-2xl">
    <div 
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a dedicated 3rd-year Computer Engineering student at G.H. Raisoni College of Engineering and Management, Pune (Autonomous Institute) 🎓, with a strong foundation in computer science concepts and practical experience in both front-end and back-end development. 💻 I’ve worked extensively with technologies like HTML, CSS, JavaScript, React 🌐 on the front-end, and Node.js, Express, MySQL, and MongoDB on the back-end 🔧, giving me a well-rounded understanding of full-stack development. Currently, I’m working on a project that integrates both aspects, allowing me to build responsive interfaces while managing server-side logic and databases seamlessly.
        </p>
        <br />
        <p className="text-xl">
        My passion for technology fuels my desire to innovate and stay updated with the latest advancements 📱🚀. I am particularly interested in exploring cloud computing, machine learning, and web development 💡, and I continuously strive to deepen my knowledge in these fields. I enjoy taking on challenges that push my problem-solving abilities and creativity, whether through team collaboration or individual efforts. I am driven by the opportunity to develop solutions that can have a meaningful impact on the world 🌍✨.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;