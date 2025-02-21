import Header from "./Header"

const AboutMe = () => {
  return (
    <div className="mt-24">
      <section id="about">
        <Header title="About Me" />
        <p className="text-center font-sora text-olive dark:text-linen text-lg min-[560px]:px-6 lg:px-36 leading-8">
          I’m a software engineer who thrives at the intersection of code and design, 
          building dynamic web applications. My career began in electrical engineering, 
          where I gained experience designing and integrating electrical systems for various buildings. 
          I was first introduced to programming in college through an Intro to Programming course, 
          which sparked my interest in software development. Over time, that curiosity grew, leading 
          me to transition into software engineering by teaching myself JavaScript and developing the skills needed to build impactful solutions.
          Beyond coding, I love baking, playing soccer and tennis, and killing it on the karaoke mic. Whether it’s developing a web application
         or perfecting a recipe, I enjoy turning ideas into reality.
        </p>
      </section>
    </div>
  );
}

export default AboutMe
