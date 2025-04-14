"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";

const CLI = ({ secrets}) => {
  const { secretOne, secretTwo } = secrets;
  var [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme , setTheme] = useState("dark");



  const [output, setOutput] = useState([
    "Hii There!",
    "Type 'help' to get a list of available commands.",
    "Use ↑ and ↓ to navigate command history.",
  ]);

  //useRef to create a new reference
  const outputEndRef = useRef(null);

  //useEffect to use scrollToBottom feature
  useEffect(() => {
    // Scroll to the bottom whenever the output changes
    outputEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [output]);

  const commands = {
    help: (
      <div>
        <div className="text-blue-600 font-semibold">Available commands:</div>
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <Link href="https://facebook.com" target="_blank">
              <p className="text-orange-500"> about</p>
            </Link>{" "}
            <p className="font-thin">- Learn more about me</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> socials </p>{" "}
            <p className="font-thin">- Find me on the web</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> skills </p>{" "}
            <p className="font-thin">- Check out my technical skills</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> projects </p>{" "}
            <p className="font-thin">- View some of my cool projects</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> resume </p>{" "}
            <p className="font-thin">- Show my resume</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> clear </p>{" "}
            <p className="font-thin">- Clear the terminal</p>
          </div>
        </div>
      </div>
    ),
    about: (
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;I’m a{" "}
        <span className="text-orange-500">developer</span> from Nepal with a
        focus on learning across a wide tech landscape—from <br></br>
        backend services in{" "}
        <span className="text-lime-500">.NET & Nodejs </span> to frontend
        finesse with{" "}
        <span className="text-lime-500">React, Next.js, and Tailwind CSS</span>.{" "}
        <br></br>
        Always a learner, I believe in approaching challenges with{" "}
        <span className="text-red-500">curiosity</span> and an eagerness to
        expand my toolkit. <br></br>
        If there’s one thing I’d say defines me, it’s my drive to understand how
        each line of code connects to the bigger picture.<br></br>
        I’m building cool things—
        <span className="text-amber-500">one</span> project,{" "}
        <span className="text-amber-500"> one </span>command,
        <span className="text-amber-500"> one </span>insight at a time.,
      </pre>
    ),
    socials: (
      <div>
        <span>Find me on:</span>
        <div className="flex gap-2">
          <Link
            href="https://github.com/surajpathakcs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-500">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/surajintheframe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-500">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com/surajintheframe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-500">Twitter</span>
          </Link>
        </div>
      </div>
    ),

    skills: (
      <pre>
        <span className="text-orange-500">Technical Skills:</span>
        <ul className="pl-9">
          <li>
            <span className="text-orange-500">Backend:</span> Node.js, Express,
            .NET
          </li>
          <li>
            <span className="text-orange-500">Frontend:</span> React, Next.js,
            Tailwind
          </li>
          <li>
            <span className="text-orange-500">Databases:</span> MongoDB, MySQL
          </li>
          <li>
            <span className="text-orange-500">Version Control:</span> Git,
            GitHub
          </li>
          <li>
            <span className="text-orange-500">Miscellaneous:</span> Docker, Bash , C, C ++ , Python 
          </li>
        </ul>
      </pre>
    ),

    projects: (
      <pre className="whitespace-pre-wrap break-words">
        <span className="text-orange-500">Projects</span>
        <br />
        <span className="text-green-500"><a href="https://github.com/surajpathakcs/portfolio" 
        target="_blank" 
        rel="noopener noreferrer">CLI Portfolio</a></span> - This CLI
        Portfolio that you are on right now , you can view the source code in my
        github using &apos;socials&apos; command <br />
        <br />
        <span className="text-green-500"><a href="https://github.com/surajpathakcs/urlShortener" 
        target="_blank" 
        rel="noopener noreferrer">URL Shortner</a></span> -  A simple URL shortener built with Node.js and the shortid package.
         It generates unique, short URLs for long links and runs locally on localhost.<br />
        <br />
         <span className="text-green-500"><a href="https://github.com/surajpathakcs/ecommerce" 
        target="_blank" 
        rel="noopener noreferrer">E-commerce Platform</a></span> -  A complete ASP.NET Core MVC-based e-commerce site with Khalti 
        payment integration, admin login  client-side cart using localStorage, and SQL Server backend. Supports product listing, 
        checkout, order saving, and basic admin management.<br />
        <br />
        <span className="text-green-500"><a href="#" 
        target="_blank" 
        rel="noopener noreferrer">Ward Alert</a></span> -  A training management system where admins post trainings and users
         register for upcoming sessions. Built with ASP.NET Core MVC, it handles registration workflows, training status 
         (ongoing/upcoming/expired), and admin verification by looking at the citizenship photos uploaded by registrant.<br />
      </pre>
    ),

    resume:(
      <pre>
      <span className="text-orange-500">Resume: </span> 
      <span className="text-green-500">
        <a 
          href="resume.pdf" // Change this to your actual resume path
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          View Resume (PDF)
        </a>
      </span>
    </pre>
    ),
    
    clear: "clear",
  };


  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.style.setProperty('--bg-color', '#010101');
      // document.documentElement.style.setProperty('--text-color', '#f1f1f1');
    }
    if(theme==="light"){
      document.documentElement.style.setProperty('--bg-color', '#940044'); //940064
      // document.documentElement.style.setProperty('--text-color', '#f1faf1');
    }    
  },[theme])

  //handle every new keypress
  const handleKeyPress = (event) => {
    if(event.key == "Enter"){
      if (command === secretOne || command === "light") {
        setTheme("light");
      } else if (command === secretTwo || command === "dark") {
        setTheme("dark");
      }
    }

    if (event.key == "Tab") {
      event.preventDefault();

      const matchingCommands = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(command.toLowerCase())
      ); //finds the number of matching commands

      if (matchingCommands.length >= 1) {
        setCommand(matchingCommands[0]); //sets first suggestion to command
      } //checks for number of matching commands available
    }
    //Arrow key navigation
    if (event.key == "ArrowUp" || event.key == "ArrowDown") {
      event.preventDefault();

      setHistoryIndex((historyIndex) => {
        if (event.key == "ArrowUp") {
          const newIndex = Math.max(historyIndex - 1, 0);
          setCommand(history[newIndex] || "");
          return newIndex;
        } else if (event.key == "ArrowDown") {
          const newIndex = Math.min(history.length - 1, historyIndex + 1);
          setCommand(history[newIndex] || "");
          return newIndex;
        }
        return historyIndex;
      });
    }

    
  };

  //handle every new key change/updation
  const handleChange = (event) => {
    setCommand(event.target.value); //updates command state as user types
  };

  const handleCommand = (e) => {
    e.preventDefault();

    //handle whitespaces--------------------------------------------------//
    command = command.trim();

    let newOutput = [...output];

    setHistory([...history, command]);
    setHistoryIndex(history.length);


    

    if (commands[command]) {
      if (command === "clear") {
        newOutput = [
          "Welcome to my portfolio!",
          "Type 'help' to get a list of available commands.",
          "Use ↑ and ↓ to navigate command history.",
        ];
      } else {
        newOutput.push(
          <div>
            <span className="text-cyan-400">visitor@suraj~$</span>&nbsp;
            <span className="text-purple-600">{command}</span>
          </div>,
          commands[command],
          <br />
        );
      }
    } else {
      if(command == secretOne || command == secretTwo || command === "light" || command === "dark"){
        newOutput.push(
          <div>
            <span className="text-cyan-400">visitor@suraj~$</span>&nbsp;
            <span className="text-yellow-200">{command}</span>
          </div>
      )}
      else{    
        newOutput.push(
          <div>
          <span className="text-cyan-400">visitor@suraj~$</span>&nbsp;
          {command}
        </div>,
        <div>
          <span className="text-red-700">command not found</span>&nbsp;
          {command}
        </div>,
        <br />
      );
    }
    }
    

    setOutput(newOutput);
    setCommand("");
  };
  

  return (
    <div className="text-white  font-mono flex flex-col justify-start items-start h-screen ">
      {output.map((line, index) => (
        <p
          key={index}
          className={`whitespace-pre-wrap
           ${
             typeof line == "string" &&
             (line.includes("help") || line.includes("commands"))
               ? "text-orange-400"
               : "text-white"
           }`}
        >
          {line}
        </p>
      ))}
      {/* ################################   Use Reference    #####################################*/}
      <div ref={outputEndRef} />
      {/* ################################   Use Reference    #####################################*/}{" "}
      {/* keeps the view scrolled to the bottom  */}
      <form onSubmit={handleCommand} className="flex">
        <span className="text-cyan-400">visitor@suraj~$</span>&nbsp;
        <input
          type="text"
          value={command}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="bg-transparent outline-none text-purple-600 flex-1"
          autoFocus
        />
      </form>
    </div>
  );
};

export default CLI;
