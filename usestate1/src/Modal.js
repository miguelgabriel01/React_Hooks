import React from 'react'

const  Modal = ({modal,setModal}) => {
  if(modal === true)
  return (
    <>
    <h2>Olá, como vai? bem vindo ao nosso site</h2>
    <button onClick={() => setModal(false)}>
      fechar
    </button>
    </>
  )
  return null;
}
export default Modal;
