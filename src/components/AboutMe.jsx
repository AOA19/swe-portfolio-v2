import Header from "./Header"

const AboutMe = () => {
  return (
    <div className="mt-12">
      <section id="about">
        <Header title="About Me" />
        <p className="text-center font-sora text-olive dark:text-linen">
          I’ve always sought challenging opportunities, starting with earning my degree in Electrical Engineering and working as an electrical design engineer. 
          In that role, I gained experience designing and integrating electrical systems like power distribution and control systems for various buildings. 
          My interest in coding began in college when I took an Intro to Programming class and learned C. After working as an electrical engineer, my curiosity 
          for coding grew, leading me to teach myself JavaScript and build a strong foundation
        </p>
        <p className="text-center font-sora text-olive dark:text-linen">When I'm not coding, you can find me testing out a new recipe to bake, staying active by playing soccer and tennis, and killing it 
          on the karaoke mic. I enjoy creating things from conception to production; whether it’s a web application or a new recipe, 
          I’m always up for the challenge! If you're interested in working together, feel free to get in contact with me below.</p>
      </section>
    </div>
  );
}

export default AboutMe