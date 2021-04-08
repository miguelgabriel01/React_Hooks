import React from 'react'
import { GlobalContext} from './GlobalContext';

export const Limpar = () => {
  const {limparDados} = React.useContext(GlobalContext);

  return (
    <div>
    <button onClick={limparDados}>limpar</button>    
    </div>
  )
}

export default Limpar;
