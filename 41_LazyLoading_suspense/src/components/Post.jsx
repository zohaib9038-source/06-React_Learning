import React, { useEffect, useState } from 'react'

export default function Post() {
    const[post,setPost]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
           const response=await fetch('https://dummyjson.com/posts');
            const actualData=await response.json();
            setPost(actualData.posts);
        }
        fetchData();

    },[]);
  return (
        <ul>
            {
                post.map((post)=>{
                    return(
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>

                    </li>
                         

                    )
                   

                })
            }
        </ul>
    
  )
}
