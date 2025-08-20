import { FaLinkedin } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { LuMail } from "react-icons/lu"
const Home = () => {
  return (
    <div className='flex justify-between items-center px-50 bg-zinc-50 dark:bg-zinc-800 min-h-[calc(100vh-64px)] font-nata-sans'>
        <div className='hero-left text-zinc-950 dark:text-white flex flex-col items-start gap-4'>
            <h1 className="text-xl">Hey! I am</h1>
            <span className="text-yellow-500 text-6xl">Divya</span>
            <p className='text'>A full stack developer and an Engineering Student</p>
            <div className='home-links flex justify-between items-center gap-8'>
                <a href='' className="bg-purple-500 rounded-md py-2 px-4 text-white">Contact Me</a>
                <a href='' className="bg-purple-500 rounded-md py-2 px-4 text-white">View Projects</a>
                <a href=""><FiGithub size={25}/></a>
                <a href=""><FaLinkedin size={25}/></a>
                <a href=""><LuMail size={25}/></a>
            </div>
        </div>
        <div className='hero-right'>
            <img src='https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="h-100 w-150"/>
        </div>
    </div>
  )
}

export default Home