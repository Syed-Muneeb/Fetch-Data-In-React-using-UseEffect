import React, { useState } from 'react';
import {useEffect} from 'react'
import Reddit from './hello';

import Example from './example';
import './App.css'
import Form from './form';


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
    <div className="App">
          fetch Title : {data.title}  

          <Reddit subReddit="reactjs"/>

        Example with form input
          <Form/>
          <h2> another example</h2>
          <Example/>

    </div>
  );
}

export default App;
