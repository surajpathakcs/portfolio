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
    about: "Hello! I'm Suraj, a passionate developer from Nepal.",
    socials: "Find me on GitHub, LinkedIn, and Twitter.",
    skills:
      "Technical Skills:\n- JavaScript, React, Next.js\n- MERN, MongoDB, mySQL\n- C++, Data Structures",
    projects:
      "Projects:\n1. Project A - A cool project\n2. Project B - Another interesting project",
    resume: "You can view my resume at: [Link to Resume]",
    experience:
      "Experience:\n- Software Developer at XYZ\n- Internship at ABC Company",
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
        <p key={index} className={`whitespace-pre-wrap

         ${ typeof line == "string" && (line.includes('help') || line.includes('commands') ? "text-orange-500" : "text-white" )}
          
          `}>
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
