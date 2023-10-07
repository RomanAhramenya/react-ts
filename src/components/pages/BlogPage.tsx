import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import style from './blog.module.css'
import { IPosts } from "../../types/data"


const BlogPage = () => {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    return (
        <div className={style.wrapper}>
            {posts.map(post => {
                return <Link className={style.link} key={post.id} to={`/blog/${post.id}`}>
                    {post.id} {post.title}
                </Link>
            })}
        </div>
    )
}

export default BlogPage