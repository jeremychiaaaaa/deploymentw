import React from 'react'
import '../App.css'
function Modal({closeModal}) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button onClick={() => 
          closeModal(false)} className="close-button">&#215;</button>
        <div className="modal-content">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  )
}

export default Modal