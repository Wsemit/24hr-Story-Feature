import { useEffect, useState } from "react";
import Stories from "./components/Stories";
import AddStoryButton from "./components/stories/AddStoryButton";
import type { Story } from "./types";

const App = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const savedStories = localStorage.getItem("stories");
    if (savedStories) {
      const parsedStories = JSON.parse(savedStories);
      const filteredStories = parsedStories.filter((story: Story) => {
        return Date.now() - story.timestamp < 24 * 60 * 60 * 1000;
      });
      setStories(filteredStories);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  function handleAddStory(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-4">24hr Story Feature</h1>
      <div className="max-w-screen-md mx-auto">
        <Stories stories={stories} setStories={setStories} />
        <AddStoryButton onClick={handleAddStory} />
      </div>
    </div>
  );
};

export default App;
