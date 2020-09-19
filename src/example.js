import React, { useEffect, useState } from 'react';


function Example(){

    let YOUR_APP_ID = "e3edb0b8";
    let YOUR_APP_KEY = "e7ff3936659253dd680c8d405def47f8";
    let API_URL = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

    let [recipe,setRecipe] = useState([]);

    useEffect(()=> {

    async function FetchData(){

            let response = await fetch(API_URL);
            console.log("response =" ,response);

            let data = await response.json();
            console.log("data hits =", data.hits);

            setRecipe(data.hits);
        }
        FetchData();
    },[setRecipe,API_URL])


    return (

        <div>
            {recipe.map((r,id)=>(

                <div key={id}>

                    <h2> Recipe Name : {r.recipe.label} </h2>
                       <p> calories : {r.recipe.calories} </p>
                          <img src={r.recipe.image} alt={r.recipe.title}/>

                </div>
            ))}
        </div>
    )
}
export default Example;