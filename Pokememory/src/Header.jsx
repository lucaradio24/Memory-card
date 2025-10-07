import './Header.css'

export function Header({ score }) {
  return (
    <header>
      <h1>Pokememory</h1>
      <div className="score-board">
        Pokemon catturati: {score.length}/12
      </div>
    </header>
  );
}
