import React from "react";
import "./Modal.css";

function Modal({ children, showModal, setShowModal }) {
  return (
    <div
      className={`modal ${showModal ? "" : "hidden"}`}
      onClick={() => setShowModal(false)}
    >
      <div className="modal-content">
        {children}
        <span
          className="close-modal noselect"
          onClick={() => setShowModal(false)}
        >
          X
        </span>
      </div>
    </div>
  );
}

export default Modal;
