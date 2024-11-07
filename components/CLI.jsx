"use client";
import Link from "next/link";
import { useState } from "react";

const CLI = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    "Welcome to my portfolio!",
    "Type 'help' to get a list of available commands.",
    "Use ↑ and ↓ to navigate command history.",
  ]);

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
            <p className="font-thin">- Take a look at my resume</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> experience </p>{" "}
            <p className="font-thin">- Explore my professional journey</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> goals </p>{" "}
            <p className="font-thin">- Discover my aspirations</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-orange-500"> clear </p>{" "}
            <p className="font-thin">- Clear the terminal</p>
          </div>
        </div>
      </div>
    ),
    about:
      "I’m a developer from Nepal with a focus on learning across a wide tech landscape—from backend services in .NET & Nodejs to frontend finesse with React, Next.js, and Tailwind CSS. Always a learner, I believe in approaching challenges with curiosity and an eagerness to expand my toolkit. If there’s one thing I’d say defines me, it’s my drive to understand how each line of code connects to the bigger picture. I’m building cool things—one project, one command, one insight at a time.",
      socials: (
        <div>
          <span>Find me on:</span>
          <div className="flex gap-2">
            <Link href="https://github.com/surajpathakcs" target="_blank" rel="noopener noreferrer">
              <span className="text-blue-500">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/surajintheframe" target="_blank" rel="noopener noreferrer">
              <span className="text-blue-500">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/surajintheframe" target="_blank" rel="noopener noreferrer">
              <span className="text-blue-500">Twitter</span>
            </Link>
          </div>
        </div>
      ),
      
    skills:
      "Technical Skills:\n- MERN , Next.js ,mySQL, C++ and many more ",
    projects:
      "Projects:\n1. CLI Portfolio - This CLI Portfolio that you are on right now , you can view the source code in my github in 'socials' command\n",
    resume: "You can view my resume at: [linkedin.com/surajintheframe]",
    experience:
      "Experience:\n- Multiple Full Stack Projects ",
    goals: "My goals include expanding my knowledge in AI and cloud computing.",
    clear: "clear",
  };

  const handleCommand = (e) => {
    e.preventDefault();
    let newOutput = [...output];

    if (commands[command]) {
      if (command === "clear") {
        newOutput = [
          "Welcome to my portfolio!",
          "Type 'help' to get a list of available commands.",
          "Use ↑ and ↓ to navigate command history.",
        ];
      } else {
        newOutput.push(`visitor@suraj~$ ${command}`, commands[command]);
      }
    } else {
      newOutput.push(
        `visitor@suraj~$ ${command}`,
        `Command not found: ${command}`
      );
    }

    setOutput(newOutput);
    setCommand("");
  };

  return (
    <div>
      <div className="text-white  font-mono flex flex-col justify-start items-start h-screen">
        {output.map((line, index) => (
          <p
            key={index}
            className={`whitespace-pre-wrap

         ${
           typeof line == "string" &&
           (line.includes("help") || line.includes("commands")
             ? "text-orange-500"
             : "text-white")
         }
          
          `}
          >
            {line}
          </p>
        ))}
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
    </div>
  );
};

export default CLI;
