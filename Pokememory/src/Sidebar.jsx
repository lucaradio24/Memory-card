import { PokeDex } from "./PokeDex";
import { DifficultyChanger } from "./DifficultyChanger";
import "./Sidebar.css";
import { ImagesToggle } from "./ImagesToggle";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export function Sidebar({
  onChangeDex,
  onChangeDifficulty,
  selectedDifficulty,
  onChangeImages,
  toggleImages,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleSidebarOpenAfterClick(){
    setTimeout(() => {
      setIsSidebarOpen(false)
    }, 450);
  }

  return (
    <>
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <PokeDex
          onChangeDex={onChangeDex}
          handleSidebarOpen={handleSidebarOpenAfterClick}
        />
        <DifficultyChanger
          onChangeDifficulty={onChangeDifficulty}
          selectedDifficulty={selectedDifficulty}
          handleSidebarOpen={handleSidebarOpenAfterClick}
        />
        <ImagesToggle
          onToggle={onChangeImages}
          toggleImages={toggleImages}
          handleSidebarOpen={handleSidebarOpenAfterClick}
        />
      </aside>
      <button
        style={!isSidebarOpen ? {} : {}}
        className="chevron"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </>
  );
}
