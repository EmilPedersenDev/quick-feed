import React from "react";
import Modal from "./Modal";

function LogoutModal({ isShowing, onClose, onSubmit }) {
  return (
    <React.Fragment>
      {isShowing ? (
        <Modal onClose={onClose}>
          <Modal.Header>
            <h1>Logout</h1>
          </Modal.Header>

          <Modal.Body>
            <p>Are you sure you want to logout?</p>
          </Modal.Body>

          <Modal.Footer>
            <button onClick={onSubmit}>Yes</button>
            <button onClick={onClose}>No</button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </React.Fragment>
  );
}

export default LogoutModal;
