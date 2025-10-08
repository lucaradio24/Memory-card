import './Modal.css' 


export function LoseModal({ show, onClose, score }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="header-title">HAI PERSO</h2>
        <p className="header-title">Hai catturato {score} Pokemon.</p>
        <button onClick={onClose}>Gioca ancora</button>
      </div>
    </div>
  );
}
