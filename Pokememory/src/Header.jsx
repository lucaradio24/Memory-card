import './Header.css'

export function Header({ score, highScore }) {
  return (
    <header>
      <h1>Pokememory</h1>
      <div className="score-board">
        <p>Pokemon catturati: {score.length}/12</p>
        <p>Record di pokemon catturati: {highScore}/12</p>  
      </div>
    </header>
  );
}
