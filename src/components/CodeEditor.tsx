
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, HelpCircle, Check, X } from "lucide-react";
import { toast } from "sonner";

interface CodeEditorProps {
  initialCode: string;
  solution: string;
  hints: string[];
  onSolve: () => void;
  challengeLevel: number;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  initialCode, 
  solution,
  hints,
  onSolve,
  challengeLevel
}) => {
  const [code, setCode] = useState(initialCode);
  const [showHint, setShowHint] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    setStartTime(new Date());
  }, []);

  const handleRun = () => {
    try {
      // This is a simplified verification.
      // In a real app, we would need more sophisticated checking
      const cleanUserCode = code.replace(/\s+/g, '').trim();
      const cleanSolutionCode = solution.replace(/\s+/g, '').trim();
      
      if (cleanUserCode === cleanSolutionCode) {
        const endTime = new Date();
        const timeTaken = startTime ? (endTime.getTime() - startTime.getTime()) / 1000 : 0;
        const baseXP = challengeLevel * 10;
        const timeBonus = Math.max(0, 100 - Math.floor(timeTaken));
        const totalXP = baseXP + timeBonus;
        
        showConfetti();
        toast.success(`Challenge solved! +${totalXP} XP`);
        onSolve();
      } else {
        toast.error("Hmm, that doesn't look right. Try again!");
      }
    } catch (error) {
      toast.error("There's an error in your code!");
    }
  };
  
  const showNextHint = () => {
    if (currentHint < hints.length - 1) {
      setCurrentHint(currentHint + 1);
    }
    setShowHint(true);
  };
  
  const showConfetti = () => {
    const colors = ["#9b87f5", "#F97316", "#10B981", "#3B82F6", "#EF4444"];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti animate-celebration';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = `${window.innerHeight * 0.7}px`;
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 1000);
    }
  };

  return (
    <div className="border rounded-md overflow-hidden bg-white shadow-sm">
      <div className="border-b bg-muted/40 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-medium">JavaScript</span>
          <div className="flex space-x-1">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={showNextHint}
          >
            <HelpCircle className="mr-1 h-4 w-4" />
            Hint
          </Button>
          <Button 
            size="sm" 
            className="bg-debug-purple hover:bg-debug-purple/90"
            onClick={handleRun}
          >
            <Zap className="mr-1 h-4 w-4" />
            Run
          </Button>
        </div>
      </div>
      
      {showHint && (
        <div className="bg-debug-purple-light border-b border-debug-purple/20 p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 mb-1">
              <HelpCircle className="h-4 w-4 text-debug-purple" />
              <span className="font-medium">Hint {currentHint + 1}/{hints.length}</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0" 
              onClick={() => setShowHint(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm">{hints[currentHint]}</p>
        </div>
      )}
      
      <div className="relative">
        <textarea
          ref={editorRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-editor w-full h-96 p-4 resize-none outline-none font-mono bg-white"
          spellCheck={false}
        />
        <div className="absolute top-0 left-0 p-4 pointer-events-none">
          {code.split('\n').map((_, index) => (
            <div key={index} className="code-line-number">{index + 1}</div>
          ))}
        </div>
      </div>
      
      <div className="bg-muted/40 border-t px-4 py-2 text-xs">
        <div className="text-muted-foreground">Find and fix the bug(s) in the code.</div>
      </div>
    </div>
  );
};

export default CodeEditor;
