import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
const [modal,setModal] = React.useState(false);
  return (
    <>
<h1>UseState 1</h1>
<Modal modal={modal} setModal={setModal}/>
<ButtonModal setModal={setModal}/>
  </>
  );

}

export default App;
