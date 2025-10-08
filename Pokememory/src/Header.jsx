import './Header.css'

export function Header({ score, highScore, cardNumber }) {
  return (
    <header>
      <h1 className='header-title'>POKÉMEMORY</h1>
      <div className="score-board">
        <p className='header-title'>Pokemon catturati: {score.length}/{cardNumber}</p>
        <p className='header-title'>Record di pokemon catturati: {highScore}/{cardNumber}</p>  
      </div>
    </header>
  );
}
