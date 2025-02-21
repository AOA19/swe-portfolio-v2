import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="md:flex md:justify-around md:items-center xl:justify-center mt-12">
      <div className="mt-5">
        <img src="./images/profile-pic.jpg" alt="Alexandra's profile picture" className="rounded-full w-72 h-72 lg:w-80 lg:h-80 md:m-w-60 mx-auto border-8 border-irish dark:border-mustard " />
      </div>
      <div className="md:w-2/5 lg:w-3/5 xl:w-2/4">
      <div className="mt-8 xl:px-9">
        <p className="text-olive dark:text-linen font-sora text-center text-xl lg:text-2xl">
          I’m
          <span className="text-irish dark:text-mustard "> Alexandra</span>, a<span className="text-irish dark:text-mustard underline italic font-sora"> Software Engineer  </span>
           who uses code as my tool and creativity as my guide to transform complex problems into innovative, efficient solutions.
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <CustomButton 
          text="Linkedin" 
          link="https://www.linkedin.com/in/alexandraak" 
          color="bg-irish dark:bg-mustard text-linen dark:text-olive" 
          hoverColor="hover:border-solid hover:border-2 hover:border-irish hover:bg-linen hover:text-olive dark:hover:bg-olive dark:hover:border-mustard dark:hover:text-linen" />
        <CustomButton 
          text="Github" 
          link="https://github.com/AOA19" 
          color="bg-periwinkle-100 dark:bg-sage text-linen dark:text-olive" 
          hoverColor="hover:border-solid hover:border-2 hover:border-periwinkle-100 hover:bg-linen hover:text-olive dark:hover:text-linen dark:hover:bg-olive dark:hover:border-sage" />
      </div>
      </div>
    </div>
  );
}

export default Hero

