const Header = ({title}) => {

  return (
    <div>
      <h2 className="font-ahsing text-center text-5xl mb-6 py-6">
        {title.split(" ").map((word, index) =>
          ["Me", "My"].includes(word) ? (
            <span key={index} className="text-periwinkle-100 dark:text-sage">
              {word}{" "}
            </span>
          ) : (
            <span key={index} className=" text-irish dark:text-mustard">
              {word}{" "}
            </span>
          )
        )}
      </h2>
    </div>
  );
}

export default Header