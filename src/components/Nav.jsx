import { Button, Navbar } from "flowbite-react";

const Nav = () => {

  return (
    <>
      <Navbar fluid className=" bg-linen dark:bg-olive">
        <Navbar.Brand href="/">
          <h1 className="text-3xl font-ahsing text-irish dark:text-mustard">
            A<span className="text-periwinkle-100 dark:text-sage">O</span>A
          </h1>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#about" className="text-irish hover:text-sage dark:text-mustard dark:hover:text-peach font-sora text-lg">
            About
          </Navbar.Link>
          <Navbar.Link href="#skills" className="text-irish hover:text-sage dark:text-mustard dark:hover:text-peach font-sora text-lg">
            Skills
          </Navbar.Link>
          <Navbar.Link href="#projects"  className="text-irish hover:text-sage dark:text-mustard dark:hover:text-peach font-sora text-lg">
            Projects
          </Navbar.Link>
          <Navbar.Link href="#contact" className="text-irish hover:text-sage dark:text-mustard dark:hover:text-peach font-sora text-lg">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;