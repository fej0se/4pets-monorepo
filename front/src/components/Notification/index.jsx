import { ToastContainer, Toast, Form } from "react-bootstrap";
import { useState } from "react";

export const Notify = () => {
  return (
    <div>
      <ToastContainer position="top-end">
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};
