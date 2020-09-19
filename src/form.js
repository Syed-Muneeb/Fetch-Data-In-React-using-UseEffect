import React,{useState} from 'react';
import Fetch from './fetch';

function Form (){

let [state,setState] = useState("reactjs");
let [pass,passValue] = useState("reactjs");


    function submitHandler(e){

        e.preventDefault();
        console.log(state);
        passValue(state);
    }

    return (
        
        <div> 
            <form onSubmit={submitHandler}>
                <input type="text" value={state} 
                        onChange={(e)=> setState(e.target.value)}/> 
                <input type="submit" value="submit"/>
            </form>
            
             < Fetch reddit={pass}/> 
        </div>
    )
}

export default Form 