import "./Pokedex.css";


export function PokeDex({ onChangeDex }) {
  return (
    <>
      <h2 className="aside-title">Select Pokédex</h2>
      <select onChange={onChangeDex}>
        <option value={1}>Kanto</option>
        <option value={2}>Johto</option>
        <option value={3}>Hoenn</option>
      </select>
    </>
  );
}
