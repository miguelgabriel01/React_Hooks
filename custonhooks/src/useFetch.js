import React from 'react'

export default function useFetch() {
   const [data,setData] = React.useState(null);
   const [error,setError] = React.useState(null);
   const [loading,setLoading] = React.useState(null);
  
   const request = React.useCallback(async (url,options) => {
     let response;
     let json;
     try {
       setError(null);
      setLoading(true);
      response = await fetch(url,options);
      json = await response.json();
     } catch (error) {
      setData = null;//caso aconteca algum erro o setData vai ser null
      setError('Deu ruim a requisição') 
     }finally{
      setData(json);
      setLoading(false);  
      return{response,json}
     }
   },[]);
  return {data,error,loading,request}
}
