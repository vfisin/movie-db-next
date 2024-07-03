import React, { useContext, useCallback } from "react";
import MovieDBContext from "../../../context/moviedb-context/context";
import "./ErrorModal.css";
import { closeErrorModal } from "../../../context/actions/actions";
import { DefaultContent } from "../../../utils/constants/text-consts";
import Button from "../../button/Button";
import { IoWarningOutline } from "react-icons/io5";

const ErrorModal: React.FC = () => {
  const { dispatch } = useContext(MovieDBContext);

  const handleClick = useCallback(() => dispatch(closeErrorModal()), [dispatch]);

  return (
      <div data-testid="error-modal" className="modal-background" aria-label="Error Modal">
        <div className="modal-content">
          <header className="modal-header">
            <IoWarningOutline size={24} style={{ marginRight: 10 }} aria-hidden="true" /> {/* Warning icon */}
            <h1>Error Occurred</h1>
          </header>
          <section className="modal-body">
            <p>{DefaultContent.errorMessageLine1}</p>
            <p>{DefaultContent.errorMessageLine2}</p>
          </section>
          <footer className="modal-footer">
            <Button name="Close" clickHandler={handleClick} aria-label="Close Error Modal" />
          </footer>
        </div>
      </div>
  );
};

export default ErrorModal;
