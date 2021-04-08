import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  const [dados,setDados] =  React.useState(null);//estado reativo que vai ser atualizado(neste caso, inicia com null já que n tem nenhum dado)

  React.useEffect(() =>{
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then((response) => response.json())
    .then((json) => setDados(json));
  },[]);

  function limparDados(){
    setDados(null);
  }

  return <GlobalContext.Provider value={{dados,limparDados}}>{children}</GlobalContext.Provider>
};