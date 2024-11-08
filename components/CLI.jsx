"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CLI = () => {
  var [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    "Welcome to my portfolio!",
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
            <p className="text-orange-500"> clear </p>{" "}
            <p className="font-thin">- Clear the terminal</p>
          </div>
        </div>
      </div>
    ),
    about: (
      <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;I’m a <span className="text-orange-500">developer</span> from Nepal with a focus on
        learning across a wide tech landscape—from <br></br>
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
        <span className="text-amber-500"> one </span>insight at a time.",
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
        <span className="text-orange-500">
          Technical Skills: 
        </span> 
        <ul className="pl-9">
        <li><span className="text-orange-500">Backend:</span> Node.js, Express, .NET</li>
        <li><span className="text-orange-500">Frontend:</span> React, Next.js, Tailwind</li>
        <li><span className="text-orange-500">Databases:</span> MongoDB, MySQL,</li>
        <li><span className="text-orange-500">Version </span>Control: Git, GitHub</li>
        <li><span className="text-orange-500">Other:</span> Docker, Bash</li>
      </ul>
      </pre>
    ),

    projects:
    <pre className="whitespace-pre-wrap break-words">
      <span className="text-orange-500">Projects:
        </span><br />1. <span className="text-green-500">CLI Portfolio</span> - This CLI Portfolio that you are on right now ,  you can view the source code in my github using 'socials' command <br />
    </pre>,
    clear: "clear",
  };

  const handleCommand = (e) => {
    e.preventDefault();

    //handle whitespaces--------------------------------------------------//
    command = command.trim();

    let newOutput = [...output];

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
            <span className="text-purple-600">
              {command}
              </span>
          </div>,
          commands[command],
          <br/>
        );
      }
    } else {
      newOutput.push(
        <div>
          <span className="text-cyan-400">visitor@suraj~$</span>&nbsp;
          {command}
        </div>,
        <div>
          <span className="text-red-700">command not found</span>&nbsp;
          {command}
        </div>,
        <br/>
      );
    }

    setOutput(newOutput);
    setCommand("");
  };

  return (
    <div className="text-white  font-mono flex flex-col justify-start items-start h-screen">
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
          onChange={(e) => setCommand(e.target.value)}
          className="bg-transparent outline-none text-purple-600 flex-1"
          autoFocus
        />
      </form>
    </div>
  );
};

export default CLI;
