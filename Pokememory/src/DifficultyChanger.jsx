export function DifficultyChanger({ onChangeDifficulty, selectedDifficulty }) {
  return (
    <>
      <h2>Seleziona la difficoltà</h2>
      <select value={selectedDifficulty} onChange={onChangeDifficulty}>
        <option value={'1'}>Facile</option>
        <option value={'2'}>Medio</option>
        <option value={'3'}>Difficile</option>
      </select>
    </>
  );
}
