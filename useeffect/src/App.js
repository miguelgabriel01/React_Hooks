import React from 'react';

const App = () => {
  const [contar,setContar] = React.useState(0);

  React.useEffect (() =>{
    console.log('apenas quando redenriza');
  },[]);

  React.useEffect(() => {
    console.log("Apenas quando o contar for atualizado");
    document.title = 'contar' + contar;
  },[contar]);

  console.log('sempre ocorre,mas antes do useEffect');

  return (
   <>
   <h1>Useeffect1</h1>
   <small>exemplo do uso do useEffect</small>
  <button onClick={() => setContar(contar+1)}>{contar}</button>
   </>
  );
}

export default App;
