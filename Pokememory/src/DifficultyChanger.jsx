export function DifficultyChanger({
  onChangeDifficulty,
  selectedDifficulty,
  handleSidebarOpen,
}) {
  return (
    <div>
      <h2 className="aside-title">Seleziona la difficoltà</h2>
      <select
        value={selectedDifficulty}
        onChange={(e) => {
          onChangeDifficulty(e);
          handleSidebarOpen(false);
        }}
      >
        <option value={"1"}>Facile</option>
        <option value={"2"}>Medio</option>
        <option value={"3"}>Difficile</option>
      </select>
    </div>
  );
}
