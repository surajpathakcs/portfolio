import CLI from "@/components/CLI";

export default function Home() {
  return (
    <div className="flex flex-col items-start max-w-[1200px] mx-auto px-40 justify-start h-screen">
      <div className="text-green-500 whitespace-pre-wrap p-4 flex mx-auto">
        <pre className="text-xs sm:text-xs md:text-xs lg:text-xs leading-tight font-bold">
          {`
   _____                             _ 
  /  ___|                           (_)
  \\ '--.    _   _   _ __    __ _     _ 
   '--.  \\ | | | | | '__|  / _\` |   | |
  /\\___/ / | |_| | | |    | (_| |   | |
  \\_____/   \\__,_| |_|     \\__,_|   | |
                                  _/  |
                                |____/ 
          `}
        </pre>
      </div>
      <CLI />
    </div>
  );
}
