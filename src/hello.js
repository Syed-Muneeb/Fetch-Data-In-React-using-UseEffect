import React, { useState } from 'react';
import { useEffect} from 'react';


function Reddit({subReddit}){

    const [posts, setposts] = useState([])


    useEffect(()=>{

       async function Fetchdata (){

            let response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
            console.log("response = " , response);

            let json = await response.json();
            console.log("json", json);

            setposts(json.data.children.map((c) => c.data ));
        }

        Fetchdata();

    },[setposts,subReddit]);

    console.log(posts);


    return (

        <div>
            
            <ul>
                { posts.map((post) => 
                     <li key={post.id}>{post.title}</li> ) }
            </ul>
        </div>
    )
}

export default Reddit