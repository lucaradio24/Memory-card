import './Modal.css'

export function WinModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="header-title">HAI VINTO!</h2>
        <p className="header-title">Hai catturato tutti i Pokemon.</p>
        <button onClick={onClose}>Gioca ancora</button>
      </div>
    </div>
  );
}
