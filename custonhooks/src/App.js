import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage'
const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const {request,data,loading,error} = useFetch();
  
  React.useEffect(() => {
    async function fetchData(){
      const {response,json} = await request('https://ranekapi.origamid.dev/json/api/produto/');   

      console.log("Valor do response da requisição");
      console.log(response);

      console.log("Valor do Json recebido na requisição")
      console.log(json);

    }fetchData();
   
  },[request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando dados..</p>
  if(data)
  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {data.map((produto) => (
        <div key={produto.id}>
        <h1>{produto.nome}</h1>
        </div>
  ))}
    </div>
  );
  else return null;
};

export default App;