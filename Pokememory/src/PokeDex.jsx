import "./Pokedex.css";


export function PokeDex({ onChangeDex, handleSidebarOpen}) {
  return (
    <div>
      <h2 className="aside-title">Seleziona il Pokédex</h2>
      <select onChange={ (e) => {onChangeDex(e); handleSidebarOpen(false)}}>
        <option value={1}>Kanto</option>
        <option value={2}>Johto</option>
        <option value={3}>Hoenn</option>
        <option value={4}>Sinnoh</option>
        <option value={5}>Unova</option>
        <option value={6}>Kalos</option>
        <option value={7}>Alola</option>
        <option value={8}>Galar/Hisui</option>
        <option value={9}>Paldea</option>
      </select>
    </div>
  );
}
