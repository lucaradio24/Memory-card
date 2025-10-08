import { PokeDex } from "./PokeDex";
import { DifficultyChanger } from "./DifficultyChanger";
import "./Sidebar.css";
import { ImagesToggle } from "./ImagesToggle";

export function Sidebar({
  onChangeDex,
  onChangeDifficulty,
  selectedDifficulty,
  onChangeImages,
  toggleImages
}) {
  return (
    <aside>
      <PokeDex onChangeDex={onChangeDex} />
      <DifficultyChanger
        onChangeDifficulty={onChangeDifficulty}
        selectedDifficulty={selectedDifficulty}
      />
      <ImagesToggle onToggle={onChangeImages} toggleImages={toggleImages}/>
    </aside>
  );
}
