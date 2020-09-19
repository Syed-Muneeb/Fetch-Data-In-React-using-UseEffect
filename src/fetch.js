import React,{useEffect,useState}from 'react';


function Fetch({reddit}){

    let [posts,setPost] = useState([]);

    useEffect(()=>{

        async function Fetch(){

            let response = await fetch(`https://www.reddit.com/r/${reddit}.json`);
            console.log("response =" , response);

            let json = await response.json();
            console.log("json =", json);

            setPost(json.data.children.map((c)=> c.data));
        }

            Fetch();

    },[reddit]);


    return (

        <div>
                <ul>
                    {posts.map( (post) =>
                         <li key={post.id}> {post.title}</li>)}
                </ul>
        </div>
    )
}

export default Fetch;