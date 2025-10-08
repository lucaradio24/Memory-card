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
  toggleImages
}) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <PokeDex onChangeDex={onChangeDex} />
      <DifficultyChanger
        onChangeDifficulty={onChangeDifficulty}
        selectedDifficulty={selectedDifficulty}
      />
      <ImagesToggle onToggle={onChangeImages} toggleImages={toggleImages}/>
    </aside>
     <button
      style={!isSidebarOpen ? {} : {}}
      className="hamburger"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
    </button>
    </>
  );
}
