import { useState } from 'react';
import { Modal } from './Modal';
import { Overlay } from './Overlay';
export function Todo(props) {

  const [ModalOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  }
  const removeOverlayHandler = () => {
    setModalIsOpen(false);
  }
  return (
    <div className='boxContanier'>
      <h2>{props.text}</h2>
      <button className='btn' onClick={deleteHandler}> Delete</button>
      {ModalOpen && <Modal onCancel={removeOverlayHandler} onConfirm={removeOverlayHandler} />}
      {ModalOpen && <Overlay onCancel={removeOverlayHandler} />}

    </div>

  )
}


