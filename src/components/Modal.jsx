// src/components/Modal.jsx
export default function Modal({ podcast, onClose }) {
  if (!podcast) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>

        <img src={podcast.image} alt={podcast.title} />
        <h2>{podcast.title}</h2>
        <p>{podcast.description}</p>
        <p><strong>Seasons:</strong> {podcast.seasons}</p>
      </div>
    </div>
  );
}
