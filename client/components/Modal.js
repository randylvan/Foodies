import React from 'react';


const Modal = (props) => {
  return(
    <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>{props.restaurant}</h4>
      <p>A bunch of text</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
  )
}

export default Modal;