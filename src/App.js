import React, { useState } from 'react';
import {useEffect} from 'react'

function App() {

  let [data,setData] = useState({title : "waiting for response"})
  let [isFetching,setFetching] = useState(false);

  useEffect(()=>{

    async function fetchData(){

        setFetching(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response);

        const json = await response.json();
        setFetching(false);
        console.log(json);
        setData(json)
  }

      fetchData();

  },[data.title])

  if(isFetching){

      return <div> Data is Loading .....</div>
            
  }

  return (
    <div>
          fetch Title : {data.title}  
    </div>
  );
}

export default App;
