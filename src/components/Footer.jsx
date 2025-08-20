import { FaLinkedin } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { LuMail } from "react-icons/lu"

const Footer = () => {
  return (
    <footer className="py-8 px-20 bg-zinc-50 dark:bg-zinc-800 flex items-center justify-between font-nata-sans inset-shadow-sm ">
        <div className="footer-left">
            <a href="" className="text-purple-500 dark:text-purple-500 text-2xl">Divya</a>
            <p className="text-zinc-950 dark:text-white">I'm Divya - a developer & problem solver. Thanks for checking out my site!</p>
        </div>
        <div className="footer-right flex justify-between items-center gap-8 text-zinc-950 dark:text-white">
            <a href=""><FiGithub size={25}/></a>
            <a href=""><FaLinkedin size={25}/></a>
            <a href=""><LuMail size={25}/></a>
        </div>
    </footer>
  )
}

export default Footer