
const CustomButton = ({text, link, color, hoverColor}) => {
  return (
    <>
      <a href={link} target="_blank" className={`font-semibold font-sora px-4 py-3 rounded-lg drop-shadow-lg md:text-center ${color} ${hoverColor}`}>
        {text}
      </a>
    </>
  );
};

export default CustomButton;
