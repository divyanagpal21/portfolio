import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const Navbar = () => {
    const getSystemTheme=()=>{
        return window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';
    }

    const [theme,setTheme]=useState(()=>{
        const saved=localStorage.getItem("theme");
        return saved || getSystemTheme();
    })

    useEffect(()=>{
        const saved=localStorage.getItem("theme") || getSystemTheme();
        setTheme(saved);
        document.documentElement.classList.toggle("dark",saved==="dark");
    },[]);

    useEffect(()=>{
        const mediaQuery=window.matchMedia('(prefers-color-scheme:dark)');
        const handleChange=(e)=>{
            if(!localStorage.getItem("theme")){
                const newTheme=e.matches?'dark':'light';
                setTheme(newTheme);
                document.documentElement.classList.toggle("dark",newTheme==="dark");
            }
        }
        mediaQuery.addEventListener('change',handleChange);
        return()=>mediaQuery.removeEventListener('change',handleChange);
    },[]);

    const toggleTheme=()=>{
        const newTheme=(theme==="light")?"dark":"light";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme);
        document.documentElement.classList.toggle("dark",newTheme==="dark");
    }
    return (
        <nav className="navbar bg-zinc-50 dark:bg-zinc-800 flex items-center justify-between py-6 px-20 top-0 sticky shadow-lg font-nata-sans">
            <div className="navbar-left">
                <a href="/" className="nav-logo text-purple-500 dark:text-purple-500 text-2xl">
                    Divya
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links flex gap-10 items-center justify-between text-zinc-950 dark:text-white">
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/skills">Skills</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right flex items-center justify-between gap-10 text-gray-950 dark:text-white">
                <button  onClick={toggleTheme}>{theme==="light"?<Moon size={20}/>:<Sun size={20}/>}</button>
                <a href="" className="bg-yellow-500 text-white py-2 px-4 rounded-md">Resume</a>
            </div>
        </nav>
  )
}

export default Navbar