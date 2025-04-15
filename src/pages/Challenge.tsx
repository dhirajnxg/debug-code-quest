
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CodeEditor from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import AdBanner from "@/components/AdBanner";

// Mock challenge data
const challengesData: Record<string, {
  title: string;
  description: string;
  difficulty: string;
  initialCode: string;
  solution: string;
  hints: string[];
  level: number;
}> = {
  "1": {
    title: "Missing Semicolon",
    description: "This function should return the sum of two numbers, but it's missing a critical semicolon.",
    difficulty: "Easy",
    initialCode: `function addNumbers(a, b) {
  const sum = a + b
  return sum
}`,
    solution: `function addNumbers(a, b) {
  const sum = a + b;
  return sum;
}`,
    hints: [
      "JavaScript statements should end with a semicolon.",
      "Look carefully at the line where the sum variable is defined.",
      "The missing semicolon should be at the end of the 'const sum = a + b' line."
    ],
    level: 1
  },
  "2": {
    title: "Variable Scope",
    description: "This function tries to access a variable outside its scope. Fix the scope issue.",
    difficulty: "Easy",
    initialCode: `function printMessage() {
  if (true) {
    let message = "Hello World";
  }
  console.log(message);  // This will cause an error
}`,
    solution: `function printMessage() {
  let message;
  if (true) {
    message = "Hello World";
  }
  console.log(message);
}`,
    hints: [
      "Variables declared with 'let' are only accessible within the block they're defined in.",
      "You need to declare the variable in a scope that's accessible by the console.log() statement.",
      "Try moving the variable declaration outside the if block."
    ],
    level: 2
  },
  "3": {
    title: "Loop Logic",
    description: "This loop is supposed to run 5 times, but it's currently running indefinitely. Fix the loop condition.",
    difficulty: "Medium",
    initialCode: `function countToFive() {
  let i = 0;
  while (i < 5) {
    console.log(i);
    // Missing something here
  }
  return "Counted to five!";
}`,
    solution: `function countToFive() {
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  return "Counted to five!";
}`,
    hints: [
      "The loop is missing an increment statement.",
      "Without incrementing the counter variable, the loop condition will always be true.",
      "You need to add 'i++' inside the loop to increment the counter."
    ],
    level: 3
  }
};

const Challenge = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Use a default ID if none is provided
  const challengeId = id || "1";
  
  // Get challenge data or use a fallback
  const challenge = challengesData[challengeId] || challengesData["1"];
  
  const handleSolve = () => {
    setShowSuccess(true);
  };
  
  const handleContinue = () => {
    const nextId = String(parseInt(challengeId) + 1);
    if (challengesData[nextId]) {
      navigate(`/challenge/${nextId}`);
      setShowSuccess(false);
    } else {
      navigate("/dashboard");
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Challenge Header */}
      <div className="flex items-center mb-2">
        <Button 
          variant="ghost" 
          className="mr-2" 
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <span className="bg-debug-purple/10 text-debug-purple px-3 py-1 rounded text-sm font-medium">
            Level {challenge.level} • {challenge.difficulty}
          </span>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
      <p className="text-muted-foreground mb-6">{challenge.description}</p>
      
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <CodeEditor 
            initialCode={challenge.initialCode}
            solution={challenge.solution}
            hints={challenge.hints}
            onSolve={handleSolve}
            challengeLevel={challenge.level}
          />
        </div>
        
        <div>
          <AdBanner position="sidebar" />
        </div>
      </div>
      
      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-debug-purple" />
              Challenge Solved!
            </DialogTitle>
            <DialogDescription>
              Great job! You've successfully fixed all the bugs.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted p-4 rounded-md my-4">
            <div className="flex justify-between mb-3">
              <span>Base XP:</span>
              <span>{challenge.level * 10} XP</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Time Bonus:</span>
              <span>+25 XP</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-medium">
              <span>Total:</span>
              <span className="text-debug-purple">{challenge.level * 10 + 25} XP</span>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </Button>
            <Button 
              className="bg-debug-purple hover:bg-debug-purple/90"
              onClick={handleContinue}
            >
              Next Challenge
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Challenge;
