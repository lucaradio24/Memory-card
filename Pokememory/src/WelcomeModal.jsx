import './Modal.css'

export function WelcomeModal({ show, start }) {
  if (!show) return;

  return (
    <div className="modal-overlay">
      <div className="modal-content-welcome">
        <h2 className="header-title-welcome">Benvenuto, allenatore</h2>
        <p className="header-title-welcome">
          Sei pronto per iniziare la tua avventura?
        </p>
        <h2 className="rules-title">REGOLE DEL GIOCO:</h2>
        <ul className="rules-text">
          <li>
            Ogni carta è un{" "}
            <span style={{ color: "#ffcb05" }}>Pokémon selvatico</span>
          </li>
          <li>
            Clicca per <span style={{ color: "#ffcb05" }}>catturarlo</span>: una
            volta preso entra a far parte della tua squadra
          </li>
          <li>
            <span style={{ color: "#ffcb05" }}>Attenzione!</span> Ogni Pokémon
            può essere catturato una sola volta.
          </li>
          <li>
            Dopo ogni cattura, i Pokémon cambiano{" "}
            <span style={{ color: "#ffcb05" }}>posizione</span> (si spaventano e
            si rimescolano!).
          </li>
          <li>
            Se tocchi un Pokémon che hai{" "}
            <span style={{ color: "#ffcb05" }}>già catturato</span>, fugge e la
            partita finisce.
          </li>
          <li>
            Catturali tutti per completare la spedizione{" "}
            <span style={{ color: "#ffcb05" }}>perfetta!</span>
          </li>
        </ul>
        <button onClick={start} className="start-button">
          Inizia l'avventura
        </button>
      </div>
    </div>
  );
}
