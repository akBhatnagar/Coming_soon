import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white px-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">🚧 Coming Soon</h1>

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
        </div>

        <p className="text-lg text-gray-300 mb-2 animate-pulse">
          We’re building something awesome...
        </p>
        <p className="text-sm text-gray-500">Please check back later!</p>
      </div>
    </div>
  );
}

export default App;
