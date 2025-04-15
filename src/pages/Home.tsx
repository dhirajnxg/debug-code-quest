
import React from "react";
import { Button } from "@/components/ui/button";
import { Bug, Code, Trophy, Zap, LineChart, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-debug-purple/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center mb-6 bg-debug-purple/10 text-debug-purple px-4 py-2 rounded-full">
            <Bug className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium">The ultimate debugging platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Level Up Your <span className="text-debug-purple">Debugging</span> Skills
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Debug, learn, and earn experience points through interactive challenges.
            Master the art of finding and fixing bugs in real code snippets.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-debug-purple hover:bg-debug-purple/90 text-white"
              onClick={() => navigate("/dashboard")}
            >
              Start Debugging
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/challenges")}
            >
              Browse Challenges
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-debug-purple/10 rounded-full p-3 mb-3">
                <Code className="h-6 w-6 text-debug-purple" />
              </div>
              <p className="text-lg font-semibold">300+ Challenges</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-debug-purple/10 rounded-full p-3 mb-3">
                <LineChart className="h-6 w-6 text-debug-purple" />
              </div>
              <p className="text-lg font-semibold">Progress Tracking</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-debug-purple/10 rounded-full p-3 mb-3">
                <Trophy className="h-6 w-6 text-debug-purple" />
              </div>
              <p className="text-lg font-semibold">Earn Badges</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-debug-purple/10 rounded-full p-3 mb-3">
                <BookOpen className="h-6 w-6 text-debug-purple" />
              </div>
              <p className="text-lg font-semibold">Learn Concepts</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How DebugMe Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our interactive platform helps you improve your debugging skills through practice and repetition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-debug-purple/10 text-debug-purple flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose a Challenge</h3>
              <p className="text-muted-foreground">
                Select from our library of 300+ debugging challenges across various difficulty levels.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-debug-purple/10 text-debug-purple flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Find & Fix Bugs</h3>
              <p className="text-muted-foreground">
                Identify errors in the code snippets and correct them using our interactive editor.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-debug-purple/10 text-debug-purple flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn & Progress</h3>
              <p className="text-muted-foreground">
                Gain experience points based on challenge difficulty and completion time. Level up and unlock new challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-debug-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to debug like a pro?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Sign up for free and start your debugging journey today.
            Track your progress and compete with others on the leaderboard.
          </p>
          <Button 
            size="lg"
            className="bg-debug-purple hover:bg-debug-purple/90"
            onClick={() => navigate("/dashboard")}
          >
            <Zap className="mr-2 h-5 w-5" />
            Start for Free
          </Button>
        </div>
      </section>
      
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bug className="h-6 w-6 text-debug-purple" />
              <span className="text-xl font-bold">DebugMe</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DebugMe. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
