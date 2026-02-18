const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm " onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}; 

export default Modal;