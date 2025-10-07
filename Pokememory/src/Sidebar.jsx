import { PokeDex } from "./PokeDex";
import { DifficultyChanger } from "./DifficultyChanger";
import "./Sidebar.css";


export function Sidebar({ onChangeDex, onChangeDifficulty, selectedDifficulty }) {
  return (
    <aside>
      <PokeDex onChangeDex={onChangeDex}  />
      <DifficultyChanger onChangeDifficulty={onChangeDifficulty} selectedDifficulty={selectedDifficulty}/>
    </aside>
  );
}
