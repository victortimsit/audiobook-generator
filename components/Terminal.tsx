import { ReactElement, useEffect, useState } from "react";

interface TerminalProps {
  className?: string;
}

const DemoTerminal = (props: TerminalProps) => {
  const [termOutputs, setTermOutputs] = useState<ReactElement[]>([]);
  const commands = [
    {
      command: "flutter run",
      error_output: `[31m  compileSdkVersion 33[39m
        [31m  ...[39m
        [31m}[39m
        
        
        [31mFAILURE: Build failed with an exception.[39m
        
        [31m* What went wrong:[39m
        [31mExecution failed for task ':app:checkDebugAarMetadata'.[39m
        [31m> A failure occurred while executing com.android.build.gradle.internal.tasks.CheckAarMetadataWorkAction[39m
        [...]`,
      suggestion: JSON.parse(
        '{"explanation":"The error is caused by the fact that the compileSdkVersion is set to 33, but the targetSdkVersion is set to 31. To fix this, you need to either set the targetSdkVersion to 33, or set the compileSdkVersion to 31.","commands":[],"instructions":"In the build.gradle file for your app, set the targetSdkVersion to 33 or the compileSdkVersion to 31."}'
      ),
    },
    {
      command: "python3 pegasus.py",
      error_output: `Traceback (most recent call last):
      File "pegasus.py", line 1, in <module>
        from transformers import PegasusForConditionalGeneration, PegasusTokenizer
    ModuleNotFoundError: No module named 'transformers'
    `,
      suggestion: JSON.parse(
        '{"explanation":"The error is caused by the \'transformers\' module not being found. This is likely due to it not being installed. To install it, run the command \'pip install transformers\'.","commands":["pip install transformers"],"instructions":"After running the command to install the \'transformers\' module, try running the \'pegasus.py\' file again."}'
      ),
    },
  ];
  const userLine = "zero-team@Zero-MacBook-Air ~ %";
  const play = async () => {
    console.log("PLAY");
    for (const command of commands) {
      await new Promise((r) => setTimeout(r, 1000));
      setTermOutputs((t: any) => [
        ...t,
        <div key="l1">
          {userLine} {command.command}
        </div>,
      ]);
      await new Promise((r) => setTimeout(r, 1000));
      setTermOutputs((t: any) => [
        ...t,
        <div key="l2">
          {userLine}{" "}
          <span className="text-red-500">{command.error_output}</span>
        </div>,
      ]);
      setTermOutputs((t: any) => [
        ...t,
        <div key="l3">
          <span className="text-blue-500">zero</span> - Searching suggestion ⠸
        </div>,
      ]);
      await new Promise((r) => setTimeout(r, 1000));
      setTermOutputs((t: any) => [
        ...t,
        ...[
          <div key="l4" className="text-blue-500">
            <pre>{` _______ _ __ ___  
|_  / _ | '__/ _ \\ 
 / |  __| | | (_) |
/___\\___|_|  \\___/ 
`}</pre>
          </div>,
          <div key="l5" className="h-4"></div>,
          <div key="l6" className="text-blue-500">
            {command.suggestion.explanation}
          </div>,
          <div key="l7" className="h-4"></div>,
          <div key="l8" className="text-green-500">
            {" "}
            {command.suggestion.commands[0] ? (
              <>
                <span className="text-blue-500">Try running:</span>{" "}
                {command.suggestion.commands[0]}
              </>
            ) : (
              <span>{command.suggestion.instructions}</span>
            )}
          </div>,
        ],
      ]);
      await new Promise((r) => setTimeout(r, 4000));
      setTermOutputs([]);
      if (command == commands[commands.length - 1]) play();
    }
  };

  useEffect(() => {
    if (termOutputs.length == 0) play();
  }, []);
  return (
    <div
      className={`${props.className} border border-white/30 bg-white/5 rounded-xl overflow-hidden md:aspect-video font-display bg-white/05`}
    >
      <div className="px-2 py-0.5 bg-white/90 text-black text-center flex justify-center items-center">
        <div className="flex gap-2 flex-1">
          <div className="h-3 w-3 bg-red-500 rounded-full" />
          <div className="h-3 w-3 bg-yellow-500 rounded-full" />
          <div className="h-3 w-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1">zsh</div>
        <div className="flex-1" />
      </div>
      <div className="px-2 py-0.5">
        <div>
          Last login:{" "}
          {new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          on ttys016
        </div>
        {termOutputs}
      </div>
    </div>
  );
};

export default DemoTerminal;
