export function PokeDex({ onChangeDex }) {
  return (
    <>
      <select onChange={onChangeDex}>
        <option value={1}>Kanto</option>
        <option value={2}>Johto</option>
        <option value={3}>Hoenn</option>
      </select>
    </>
  );
}
