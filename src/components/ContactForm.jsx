import Header from "./Header";
import {Button} from "flowbite-react"

const ContactForm = () => {
  return (
    <div>
      <section id="contact" className="mt-12">
        <Header title="Contact Me" />
        <form action="" className="md:px-20">
          {/* Name input */}
          <div className="relative z-0 w-full mb-5 group">
            <input 
              type="text" 
              name="name" 
              id="name" 
              className=" font-sora block py-2.5 px-0 w-full text-sm text-olive bg-transparent border-0 border-b-2 border-olive appearance-none dark:text-linen dark:border-linen dark:focus:border-mustard focus:outline-none focus:ring-0 focus:border-irish peer"  
              placeholder=" " 
              required />
            <label  
              htmlFor="name"   
              className="font-sora peer-focus:font-medium absolute text-sm text-olive dark:text-linen duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-irish peer-focus:dark:text-mustard peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Full Name
            </label>
          </div>
          {/* Email Input */}
          <div className="relative z-0 w-full mb-5 group">
             <input 
              type="email" 
              name="email" 
              id="email" 
              className=" font-sora block py-2.5 px-0 w-full text-sm text-olive bg-transparent border-0 border-b-2 border-olive appearance-none dark:text-linen dark:border-linen dark:focus:border-mustard focus:outline-none focus:ring-0 focus:border-irish peer"  
              placeholder=" " 
              required />
            <label  
              htmlFor="email"   
              className="font-sora peer-focus:font-medium absolute text-sm text-olive dark:text-linen duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-irish peer-focus:dark:text-mustard peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          {/* Subject Input */}
          <div className="relative z-0 w-full mb-5 group">
               <input 
              type="text" 
              name="subject" 
              id="subject" 
              className=" font-sora block py-2.5 px-0 w-full text-sm text-olive bg-transparent border-0 border-b-2 border-olive appearance-none dark:text-linen dark:border-linen dark:focus:border-mustard focus:outline-none focus:ring-0 focus:border-irish peer"  
              placeholder=" " 
              required />
            <label  
              htmlFor="subject"   
              className="font-sora peer-focus:font-medium absolute text-sm text-olive dark:text-linen duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-irish peer-focus:dark:text-mustard peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Subject
            </label>
          </div>
          {/* Message Input */}
          <div>
            <label 
              htmlFor="message" 
              className="block mb-2 text-sm font-medium text-olive dark:text-white">
                Message
                </label>
            <textarea   
              id="message"  
              rows="4"   
              className="block p-2.5 w-full text-sm text-olive bg-linen border border-olive focus:ring-irish focus:border-irish dark:bg-olive dark:border-linen dark:placeholder-gray-400 dark:text-linen dark:focus:ring-mustard dark:focus:border-mustard" 
              placeholder="Write your message...">
            </textarea>
          </div>
        
          <Button 
            type="submit" 
            className="mt-8 px-6 bg-irish text-linen hover:bg-linen hover:text-olive hover:border-2 hover:border-irish dark:bg-mustard dark:text-olive dark:hover:bg-olive dark:hover:border-2 dark:hover:border-mustard dark:hover:text-linen">Send</Button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
