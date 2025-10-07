import './Header.css'

export function Header({ score, highScore }) {
  return (
    <header>
      <h1 className='header-title'>POKÉMEMORY</h1>
      <div className="score-board">
        <p className='header-title'>Pokemon catturati: {score.length}/12</p>
        <p className='header-title'>Record di pokemon catturati: {highScore}/12</p>  
      </div>
    </header>
  );
}
