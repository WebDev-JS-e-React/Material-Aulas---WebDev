import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function PostUsuario(){

    const parametros = useParams()

    const [posts, setPosts] = useState([]);
    
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userID=${parametros.id}`)
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }, []);
    return (
        <>
            {posts.map((post) =>(
                <div className="bg-purple-600 gap-2.5 mb-4 text-white">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-black">{post.body}</p>
                </div>
            ))}
        </>
    )
}