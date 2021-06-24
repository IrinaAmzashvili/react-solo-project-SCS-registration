import { useState } from "react";
import { useSelector } from 'react-redux';
import Register from "./Register";
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from "../../context/Modal";
import styles from "./Register.module.css";

const RegisterModal = () => {
  // need isLoaded?
  const sessionUser = useSelector((store) => store.session.user);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  let sessionLinks;
  if (sessionUser) {
      sessionLinks = <Register closeModal={closeModal}/>
  } else {
      sessionLinks = <LoginForm />
  }

  return (
    <>
      <button
        className='ctaButton'
        onClick={() => setShowModal(true)}
      >
        Register
      </button>
      {showModal && (
        <Modal onClose={closeModal}>
          {sessionLinks}
        </Modal>
      )}
    </>
  );
};

export default RegisterModal;